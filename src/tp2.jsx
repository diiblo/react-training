import {useState} from "react";

function App() {
//let count = 0;
    const title = "Mon Formulaire";
    const [name, setName] = useState("toto");
    const handleChange = (e) => {
        setName(e.target.value);
    }

    return (
        <>
            <h1>{title}</h1>
            <form>
                <input type="text" onChange={handleChange} value={name}/>
                {name}
            </form>
        </>
    )
}
export default App
