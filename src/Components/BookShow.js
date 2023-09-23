import { useState } from "react";
import BookEdit from "./BookEdit";
// import "../index.css";

function BookShow({book, onDelete, onEdit}){
    const [showEdit, setShowEdit] = useState(false);
    const deleteBook =()=> {
         onDelete(book.id);
    }
    const editBook = () =>{
        setShowEdit(!showEdit)
    }
    let content = <h3>{book.title}</h3>
    if (showEdit){
        content = <BookEdit book={book} editBook={editBook} onEdit={onEdit} />
    }

    return <div style={{margin: "1%", padding: '1.5%', paddingTop: '2%',border: "1px solid red", borderRadius: "5px", display: "flex", flexDirection: "column", justifyContent: "space-between", position:"relative", Width: "250px", height: "350px"}}>
                <div className="card" style={{margin: "2%", Width: "250px", height: "300px"}}>
                    <img src={`https://picsum.photos/seed/${book.id}/250/200`} style={{}} alt="books"/>
                    <div style={{paddingLeft: "10px"}}>{content}</div>
                </div>
                <div className="block" style={{justifyContent: "space-around",position: 'absolute', top: '0', right: '0', gap: "5px"}}>
                    <button className="edit" onClick={editBook}>Eidt</button>
                    <button className="delete" onClick={deleteBook}></button>
                </div>
                
        </div>
}

export default BookShow;