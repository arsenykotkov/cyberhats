import { Link } from "react-router-dom";

const items = [
    { label: (
        <a href="/">
        Главная
        </a>
    )},
    { label: (
        <a href="/about">
        О нас
        </a>
    )},
    { label: (
        <a href="/contacts">
        Контакты
        </a>
    )}
];

export default items;