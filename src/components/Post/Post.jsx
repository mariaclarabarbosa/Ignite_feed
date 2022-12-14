import React from "react";

export const Post = (props) => {
  return (
    <div>
      <p>{props.author}</p>
      <p>{props.comment}</p>
    </div>
  );
};
