import React, { useEffect, useState } from "react";
import { Button } from 'antd';

/* БАГ! Почему-то при первой загрузке страницы fetch срабатывает дважды, затем всё работает штатно */

export default function Fact() {
    function fetchFact() {
        setIsFetching(true);
            fetch('https://catfact.ninja/fact')
                .then(response => response.json())
                .then(data => {
                    setFact(data);
                    setIsFetching(false);
                });
    }

    const [fact, setFact] = useState([]); // непосредственно факт, длина сообщения
    const [isFetching, setIsFetching] = useState(false); // идёт ли подгрузка в данный момент, true/false

    useEffect(() => {
        fetchFact()
    }, []);

    return (
        <div>
            <Button onClick={fetchFact} style={{marginBottom: '10px'}}>Случайный факт о кошках</Button>
            {(isFetching) ? <p>Loading...</p> : <p>{fact.fact}</p>}
        </div>
    );
}