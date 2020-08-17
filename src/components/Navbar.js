import React, { useContext } from 'react';
import { BookmarkContext } from '../contexts/BookmarkContext';

const Navbar = () => {
   const {bookmarks} = useContext(BookmarkContext);
   console.log(bookmarks);
    return (
        <div className="navbar">
            <h1>Bookmark List </h1>
            <p> Número de links: {bookmarks.length} </p>
        </div>
    );
}
 
export default Navbar;