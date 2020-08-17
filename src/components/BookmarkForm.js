import React, { useContext, useState } from 'react';
import { BookmarkContext } from '../contexts/BookmarkContext';

const BookmarkForm = () => {
    const { dispatch } = useContext(BookmarkContext);
    const [url_name, setUrlName] = useState('');
    const [url, setUrl] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch({type: "ADD_BOOKMARK", bookmark:{
            url_name, url
        }});
        setUrlName('');
        setUrl('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" required placeholder="Nome" value={url_name}
                onChange={(e) => setUrlName(e.target.value)}/>
            <input type="text" required placeholder="URL" value={url}
                onChange={(e) => setUrl(e.target.value)}/>

            <input type="submit" value="Adicionar" />
        </form>
    );
}

export default BookmarkForm;