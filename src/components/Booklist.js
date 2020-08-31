import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import BookForm from './NewBookForm';

const Booklist = (props) => {
    const [books, setBooks] = React.useState([ ])

    const addBook = (title) => {
        setBooks([...books, title])
    }

    const removeBook = (e) => {
        let filteredArray = books.filter(item => item !== e.target.value);
        setBooks(filteredArray);
    }
    
    return (  
        <ThemeContext.Consumer>{(context) => {
            const { isLightTheme, light, dark } = context;
            const theme = isLightTheme ? light : dark;
            return(
                <div className="book-list" style={{background: theme.syntax, color: theme.bg}}>
                <ul >
                    {books.map(book => {
                        return ( 
                        <li style={{background: theme.ui}}>
                             {book}
                             <button value={book} onClick={removeBook}> Delete </button>
                        </li>)
                    })}
                </ul>
                <BookForm addBook={addBook}/>
                </div>
            )
        }}
        </ThemeContext.Consumer>
    );
}
 
export default Booklist;