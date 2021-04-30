import React from 'react';
import './MySkilz.css';
const MySkilz = () => {
    const [text, setText] = React.useState(['Кликни по Канье Уэсту, чтобы узнать его случайную цитату']);
    const [currentCard, setCurrentCard] = React.useState([null]);
    const [cardList, setCardList] = React.useState([
        {
            text: "1", id: 1, order: 1
        },
        {
            text: "2", id: 2, order: 2
        },
        {
            text: "3", id: 3, order: 3
        }])
    function updateQuote() {
        fetch('https://api.kanye.rest')
            .then(res => res.json())
            .then((data) => {
                setText(data.quote);
            });
    }

    function dragStartHandler(e, card) {
        setCurrentCard(card)
        e.target.style.cssText = "color: blue; border: 1px solid black";
    }

    function dragEndHandler(e) {
        e.target.style.background = 'white'
    }
    function dragOverHandler(e) {
        e.preventDefault()
        e.target.style.background = 'grey'
    }
    function onDropHandler(e, card) {
        e.preventDefault()
        setCardList(cardList.map(c => {
            if (c.id === card.id) {
                return { ...c, order: currentCard.order }
            }
            if (c.id === currentCard.id) {
                return { ...c, order: card.order }
            }
            return c
        }))
        e.target.style.background = 'white'
    }

    const sortCards = (a, b) => {
        if (a.order > b.order) {
            return 1
        } else {
            return -1
        }
    }

    return (
        <div className="skilz" id="skilz" >
            <div className="skilz__api">
                <p className="skilz__text">REST API</p>
                <div className="skilz__api-container">
                    <button className="skilz__api-button" onClick={updateQuote}></button>
                    <p className="skilz__quote">{text}</p>
                </div>
            </div>
            <div className="skilz__api">
                <p className="skilz__text">DRAG AND DROP</p>
                <div className="skilz__api-container">
                    {cardList.sort(sortCards).map((card) =>
                        <div
                            onDragStart={(e) => dragStartHandler(e, card)}
                            onDragEnd={(e) => dragEndHandler(e)}
                            onDragLeave={(e) => dragEndHandler(e)}
                            onDragOver={(e) => dragOverHandler(e)}
                            onDrop={(e) => onDropHandler(e, card)}
                            draggable={true}
                            className="skilz__card">
                            {card.text}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
export default MySkilz;