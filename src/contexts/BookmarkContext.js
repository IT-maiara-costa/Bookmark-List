import React, { createContext, useReducer, useEffect } from 'react';
import {bookmarkReducer} from '../components/reducers/bookmarkReducer';

export const BookmarkContext = createContext();

const BookmarkContextProvider = (props) => {
    const [bookmarks, dispatch] = useReducer(bookmarkReducer,[], ()=>{
        const localData =localStorage.getItem('bookmarks');
        return localData ? JSON.parse(localData) : []
    });

    useEffect(() =>{
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
    }, [bookmarks])

    return (
        <BookmarkContext.Provider value={{bookmarks, dispatch}}>
            {props.children}
        </BookmarkContext.Provider>
    )
}

export default BookmarkContextProvider;

