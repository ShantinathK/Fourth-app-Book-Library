import '../node_modules/bulma/css/bulma.css' 
import { useEffect, useState } from 'react';
import BookCreate from './Components/BookCreate';
import BookList from './Components/BookList';
import axios from 'axios';
// import "./index.css";

function App(){
    const [books, setBooks] = useState([]);

    // how to fetch all the books stored previously once we open a page
    const fetchBooks = async()=>{
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data);
    }

    //Do not do this - don't directly call a function leads to continous loop of request to API - causes bug
    // fetchBooks();

    //instead use useEffect()

    useEffect(()=>{
        fetchBooks()
    },[])




    async function createBook(title){

        //  Now will use API to create data from local json DB and also have data persistent menthod
        // create a API post request
            const response = await axios.post("http://localhost:3001/books",{
                title,
            });
    
            const updateBooks = [
                ...books,
                // {id: Math.floor(Math.random() * 999)
                // , title} 
                response.data
            ]
            setBooks(updateBooks)
        };



        const editBookById = async(id, newTitle)=> {

            const response = await axios.put(`http://localhost:3001/books/${id}`, {
                title: newTitle
            });

            const updateBooks = books.map((book) => {
                if(book.id === id)
                {
                    // return {...book, title: newTitle};
                    // use spread operator to replace whole value paramters of that ID ex: ...response.data
                    return {...book, ...response.data}
                }
                return book
            });
            setBooks(updateBooks);
        }
        
    


        
    const deleteBookByID = async(id)=>{

        await axios.delete(`http://localhost:3001/books/${id}`);

        const updateBooks = books.filter((book)=>{
            return book.id !== id;
        });
        setBooks(updateBooks);
    }




 
    // const rendered = books.map((book, i)=> {
    //     return <BookList key={book.i} books = {book} />
    // });
    return (
        <div className='app' style={{alignItems:"center", placeItems: "center"}}>
            <BookCreate onCreate = {createBook} />
            {/* <div>{rendered}</div> */}
            <BookList books = {books} onDelete = {deleteBookByID} onEdit = {editBookById}/>
        </div>
        );
}


export default App;