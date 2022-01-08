import { useContext, useState, createContext } from "react";

const PostContext = createContext();

export const usePostContext = () => useContext(PostContext);

export const PostProvider = ({ children }) => {
  const [state, setState] = useState("test context");

  const contextValues = {
    ...state,
  };
  return (
    <PostContext.Provider value={{ contextValues }}>
      {children}
    </PostContext.Provider>
  );
};
