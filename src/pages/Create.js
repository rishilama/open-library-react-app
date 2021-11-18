import React from "react";

function Create() {
    const [bookTitle, setBookTitle] = React.useState('');
    const [favSubject, setFavSubject] = React.useState('');
    const [err, setError] = React.useState('');

    async function submitHandle(e) {
        e.preventDefault();

        if (!bookTitle) {
            setError('Book title is required')
            return;
        }

        if (!favSubject) {
            setError('Favorite Subject is required')
            return;
        }

        try {
            const response = await fetch('https://iifsd.herokuapp.com/students', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: bookTitle,
                    favSubject: favSubject,
                })
            })
            if (!response.ok) {
                throw new Error("Server responds with error!")
            }
            const data = await response.json();
            console.log(data);
        } 
        
        catch (error) {
            console.log(error);
            setError(error);
        }
    }


    return (
        <div className="page__create">

            {err && <p className="msg msg--error">{err.toString()}</p>}

            
            <h1>Create a Book</h1>
            <form onSubmit={submitHandle}>
                <input placeholder="Book title" value={bookTitle} onChange={(e) => { setError(''); setBookTitle(e.target.value)}} />
                <input placeholder="Favorite Subject" value={favSubject} onChange={(e) => { setError(''); setFavSubject(e.target.value)}} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Create;