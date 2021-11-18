import { useEffect, useState } from "react";
import Card from "../Card/Card";

function CardList() {
    const [bookList, setBookList] = useState([]);

    useEffect(()=> {
        fetch('https://iifsd.herokuapp.com/books')
            .then((response)=> {
                return response.json();
            }) 
            .then((data)=>{
                setBookList(data);
            })
    }, [])

    return ( 
        <div className="category book-list__category">
            {bookList.map((book)=> (
                <Card key={book.id}
                id={book.id} 
                title={book.book_title} 
                image={book.cover_url} 
                description = {book.book_short_description} 
                authorName={book.authors[0].author_name}
                authorURL='https://google.com' />
            ))}
        </div>
    )
}

export default CardList;