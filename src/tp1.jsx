import {useState} from "react";

function App() {
//let count = 0;
    const [count, setCount] = useState(0);
    const [person, setPerson] = useState({
        name: "John",
        age: 30
    })

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        (count >= 1) ? setCount(count - 1) : null;
    }

    const incrementAge = () => {
        setPerson({...person, age: person.age + 1});
    }

    return (
        <>
            <h1>Mon Compteur</h1>
            <p>{count}</p>
            <button onClick={increment}>Incrémenter</button>
            <button onClick={decrement}>Décrémenter</button>
            <br/>
            <p>Age de {person.name} : {person.age}</p>
            <button onClick={incrementAge}>Incrémenter</button>

        </>
    )
}
export default App