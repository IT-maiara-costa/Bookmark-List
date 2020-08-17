import React, { useContext } from 'react';
import { BookmarkContext } from '../contexts/BookmarkContext';
import Bookmark from './Bookmark';

const BookmarkList = () => {
   const {bookmarks} = useContext(BookmarkContext);
    return bookmarks.length ?( 
        <div className="bookmark-list"> 
            <ul>
            {bookmarks.map(bookmark =>{
                return (<Bookmark bookmark={bookmark} key={bookmark.id} />)
            })}
            </ul>
        </div>
     ) : (
        <div className="empty"> Nenhum link adicionado! </div>
     )
}
 
export default BookmarkList;