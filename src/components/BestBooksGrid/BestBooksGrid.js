import { useEffect, useState } from "react"
import BestBookGridItem from "../BestBookGridItem/BestBookGridItem"
import axios from 'axios'

function BestBooksGrid() {
    const [list, setList] = useState([])

    useEffect(() => {
        axios.get('https://iifsd.herokuapp.com/books')
            .then(resp => {
                console.log(resp.data);
                setList(resp.data);
            })
            .catch(err=> {
                console.log(err);
            })
    }, [])
    console.log(list);

    return (
        <div className="best-selling">
            <div className="best-selling__books__audio container">
                <h2 className="bestbooks__title">Bestselling Books and Audiobooks</h2>
            </div>
            <div className="best-list">
                <ul className="best-books-ul container">
                    {list ? 
                        list.map((book) => {
                            return(
                                <BestBookGridItem id={book.id} title={book.book_title} image={book.cover_url} />
                            )
                        })
                        :
                        <h1>Data Loading...</h1>
                    }
                </ul>
                <div className="text-section">
                <a href="https://google.com" className="btn best__btn container">
                    <h4>Read free for 30 days</h4>
                </a>
                <p className="best__text container">Only ₹299/month after. Cancel anytime.</p>
            </div>
        </div>
    </div>
    )
}

export default BestBooksGrid
