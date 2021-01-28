import React, { useContext } from 'react';
import { BookmarkContext } from '../contexts/BookmarkContext';
import trash from '../assets/trash.svg';

const Bookmark = ({ bookmark }) => {
    const { dispatch } = useContext(BookmarkContext);
    return (
        <li tabIndex="0" >
            <div tabIndex="0" className="url-name"> {bookmark.url_name} </div>
            <a target="_blank" rel="noopener noreferrer" href={bookmark.url} className="url" aria-label="Acessar link"> {bookmark.url} </a>
            <button className="trash-icon" aria-label="remover link" onClick={() => dispatch({ type: 'REMOVE_BOOKMARK', id: bookmark.id })}>
                <img aria-hidden="true" src={trash} alt="Remover Link" />
            </button>
        </li>
    );
}

export default Bookmark;