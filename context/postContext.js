import { useContext, useState, createContext } from "react";

const PostContext = createContext();

export const usePostContext = () => useContext(PostContext);

export const PostProvider = ({ children }) => {
  const [state, setState] = useState({});

  const contextValues = {
    ...state,
    setBlogPosts: blogPosts => setState({ ...state, blogPosts }),
  };
  return (
    <PostContext.Provider value={{ contextValues }}>
      {children}
    </PostContext.Provider>
  );
};
