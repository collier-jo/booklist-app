import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Booklist = (props) => {
    const [books, setBooks] = React.useState([
        'The Palm-Wine Drinkard',
        'The Left Hand of Darkness',
        'Salt Slow'
    ])

    
    return (  
        <ThemeContext.Consumer>{(context) => {
            const { isLightTheme, light, dark } = context;
            const theme = isLightTheme ? light : dark;
            return(
                <div className="book-list" style={{background: theme.syntax, color: theme.bg}}>
                <ul >
                    {books.map(book => {
                        return ( <li style={{background: theme.ui}}> {book} </li>)
                    })}
                </ul>
                </div>
            )
        }}
        </ThemeContext.Consumer>
    );
}
 
export default Booklist;