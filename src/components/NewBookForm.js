import React from 'react';

const BookForm = (props) => {

    const [title, setTitle] = React.useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event)
        props.addBook(title)
        setTitle("")
    }

    return ( 
        <form onSubmit={handleSubmit}>
        <label>Book Name:</label>
        <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}></input>
        <input type="submit" value="Add Book"></input>
        </form>

     );
}
 
export default BookForm;