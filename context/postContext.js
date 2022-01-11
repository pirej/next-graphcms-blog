import { createContext, useReducer } from "react";

export const PostContext = createContext();

const postReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.payload };
    case "GET_BLOG_DATA":
      return { ...state, blogData: action.payload };
    default:
      return state;
  }
};

export const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, {
    color: "blue",
    blogData: {},
  });

  const changeColor = color => {
    dispatch({ type: "CHANGE_COLOR", payload: color });
  };

  const getBlogData = blogData => {
    dispatch({ type: "GET_BLOG_DATA", payload: blogData });
  };

  return (
    <PostContext.Provider value={{ ...state, changeColor, getBlogData }}>
      {children}
    </PostContext.Provider>
  );
};
