import React, { useState } from 'react'; 
function Counter() { 
    // Inicjalizujemy stan \'count\' wartością początkową 0 
    const [count, setCount] = useState(0); 
    // Funkcja obsługująca kliknięcie przycisku 
    const increment = () => { 
        // Aktualizujemy stan, wywołując funkcję \'setCount\' 
        setCount(count + 1); 
    }; 

    const decrement = () => { 
        // Aktualizujemy stan, wywołując funkcję \'setCount\' 
        setCount(count - 1); 
    }; 
    const incrementTwice = () => { 
        setCount(count + 1); // count tutaj wciąż może być starą wartością 
        setCount(count + 1); // obie aktualizacje mogą użyć tej samej starej 
        // wartości 'count' 
        // Efekt: licznik zwiększy się tylko o 1! 
    }; 
    const incrementTwiceSafely = () => { 
        setCount(prevCount => prevCount + 1); 
        setCount(prevCount => prevCount + 1); 
        // Efekt: licznik zwiększy się o 2 
    }; 

    return ( 
        <div> 
            <p>Aktualna wartość licznika Funkcyjnego Komponentu: {count}</p> 
            <div className="d-flex justify-content-center gap-2">
                <button onClick={increment} className="btn btn-success">Zwiększ licznik</button> 
                <button onClick={decrement} className="btn btn-danger">Zmniejsz licznik</button> 
                <button onClick={incrementTwice} className="btn btn-warning">Zwiększ licznik "dwa razy"</button> 
                <button onClick={incrementTwiceSafely} className="btn btn-info">Zwiększ licznik "dwa razy" bezpiecznie</button> 
            </div>
        </div> 
    ); 
} 
export default Counter;