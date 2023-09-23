import BookShow from "./BookShow";


function BookList({books , onDelete, onEdit}){
    console.log(books);
    const renderedBooks = books.map((book)=>{
        return <BookShow  onDelete = {onDelete} onEdit={onEdit} key={book.id} book={book}/>

    })
    return (
    // <div style={{marginTop: "30px", gap: "10px", display: "flex", flexDirection: "rows"}}>
        <div className="book-list" style={{marginTop: "30px", gap: "10px", display: "flex", flexDirection: "rows"}}>
        {renderedBooks}
        </div>);
}

export default BookList;