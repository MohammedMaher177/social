import React, { createContext, useState } from 'react';

export const PostsContext = createContext();

function MyContextProvider(props) {
  const [name, setName] = useState('');

  const getPosts = (newName) => {
    setName(newName);
  };

  return (
    <PostsContext.Provider value={{ name, getPosts }}>
      {props.children}
    </PostsContext.Provider>
  );
}

export default MyContextProvider;