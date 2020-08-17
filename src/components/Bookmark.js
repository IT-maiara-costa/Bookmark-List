import React, { useContext } from 'react';
import { BookmarkContext } from '../contexts/BookmarkContext';
import trash from '../assets/trash.svg';

const Bookmark = ({ bookmark }) => {
    const { dispatch } = useContext(BookmarkContext);
    return (
        <li>
            <div className="url-name">  {bookmark.url_name} </div>
            <a target="_blank" rel="noopener noreferrer" href={bookmark.url} className="url"> {bookmark.url} </a>
            <img src={trash} className="trash-icon" alt="trash icon"
                onClick={() => dispatch({ type: 'REMOVE_BOOKMARK', id: bookmark.id })}
            />
        </li>
    );
}

export default Bookmark;