import React from "react";
import "./styles/Output.css"

function Output() {
    return(
        <div className = "output">
            <p>Текст документа</p>
            <textarea readOnly></textarea>
            <div className = "numbers">
                <input type = "text" size = "20" placeholder = "Число документов"></input>
                <input type = "text" size = "20" placeholder = "Число релевантных"></input>
            </div>
            <div className = "message">
                <input type = "text" size = "50" placeholder = "Сообщение"></input>
                <input type = "text" size = "20" placeholder = "Длинна документа"></input>
            </div>
            <button type = "button">Генерировать</button>
        </div>
    );
}

export default Output;