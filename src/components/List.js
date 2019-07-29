import React from "react";
import "./styles/List.css"

function List() {
    return(
        <div className = "list">
            <p>Введите запрос:</p>
            <textarea></textarea>
            <button type = "button" id = "Search">Поиск</button>
            <p>Релевантные файлы</p>
            <ul id = "Files">

            </ul>
            <button type = "button" id = "Result">Эффективность</button>
        </div>
    );
}

export default List;