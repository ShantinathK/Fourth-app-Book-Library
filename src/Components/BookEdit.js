import { useState } from "react";

function BookEdit({book, onEdit, editBook}){
    const [title, setTitle] = useState(book.title);
    const handleChange = (event)=>{
        setTitle(event.target.value);
    }
    const handleSave = (event)=>{
        event.preventDefault();
        console.log(title);
        onEdit(book.id, title);
        editBook(!editBook);


    }
    return(
        <div>
            <form onSubmit={handleSave}>
                <input value={title} onChange={handleChange}/>
                <button onClick={handleSave}>Save</button>
            </form>
        </div>
    )
}

export default BookEdit;