import React from 'react';
import BookmarkContextProvider from './contexts/BookmarkContext';
import Navbar from './components/Navbar';
import BookmarkList from './components/BookmarkList';
import BookmarkForm from './components/BookmarkForm';

function App() {
  return (
    <div className="App">
      <BookmarkContextProvider>
        <Navbar />
        <BookmarkList />
        <BookmarkForm />
      </BookmarkContextProvider>
    </div>
  );
}

export default App;
