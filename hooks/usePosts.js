import { useContext } from "react";
import { PostContext } from "../context/postContext";

export const usePosts = () => {
  const context = useContext(PostContext);

  if (context === undefined) {
    throw new Error("usePosts() must be used inside a PostProvider");
  }

  return context;
};
