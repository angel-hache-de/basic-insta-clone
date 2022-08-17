import React from "react";
import Comment from "./Comment";

const Comments = ({ comments }) => {
  return comments.map((comment) => (
    <Comment comment={comment} />
  ));
};

export default Comments;
