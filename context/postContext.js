import { createContext, useReducer } from "react";

export const PostContext = createContext();

const postReducer = (state, action) => {
  switch (action.type) {
    case "GET_BLOG_DATA":
      return { ...state, blogData: action.payload };
    default:
      return state;
  }
};

export const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, {
    blogData: {},
  });

  const getBlogData = blogData => {
    dispatch({ type: "GET_BLOG_DATA", payload: blogData });
  };

  return (
    <PostContext.Provider value={{ ...state, getBlogData }}>
      {children}
    </PostContext.Provider>
  );
};
