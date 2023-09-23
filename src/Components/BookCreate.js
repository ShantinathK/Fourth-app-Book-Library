import { useState } from "react";
import './../../node_modules/bulma/css/bulma.css'

function BookCreate({onCreate}){
    const [term, setTerm] = useState('');
    const handleSubmit = (event) =>{
        event.preventDefault();
        onCreate(term);
        setTerm('');
    }
    const handleInput = (event)=>{
            setTerm(event.target.value);
    }

    return (
    <div className="box" style={{backgroundColor: 'lightblue'}}>
        <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'row', gap: '5px', padding: '10px'}}>
            <label className="label" style={{padding: '5px'}}>Add a Book </label>
            <input className="input is-rounded input is-primary" placeholder="Title" value={term} onChange={handleInput} style={{width: '30%'}} />
            <button className="button is-dark button is-normal" onSubmit={handleSubmit}>Submit</button>
        </form>
    </div>
    );
}

export default BookCreate;