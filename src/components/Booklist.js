import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Booklist = (props) => {
    return (  
        
        <ThemeContext.Consumer>{(context) => {
            const { isLightTheme, light, dark } = context;
            const theme = isLightTheme ? light : dark;
            return(
                <div className="book-list" style={{background: theme.syntax, color: theme.bg}}>
                <ul >
                    <li style={{ background: theme.ui }}>The Palm-Wine Drinkard</li>
                    <li style={{ background: theme.ui }}>The Left Hand of Darkness</li>
                    <li style={{ background: theme.ui }}>Salt Slow</li>
                </ul>
                </div>
            )
        }}
        </ThemeContext.Consumer>
    );
}
 
export default Booklist;