import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggle = (props) => {
    return ( 
        <ThemeContext.Consumer>{(context) => {
            const { toggleTheme } = context;
            return(
                <button onClick={toggleTheme}>Toggle the Theme</button>
            )
        }}
        </ThemeContext.Consumer>
     );
}
 
export default ThemeToggle;