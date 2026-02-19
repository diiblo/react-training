//import {useState} from "react";

function App() {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(new FormData(e.target));
    }

    return (
        <>
            <h1>Mon Formulaire</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="firstName" defaultValue="ma valeur"/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default App
