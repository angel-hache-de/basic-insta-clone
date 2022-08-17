import React from "react";
import Image from "next/image";
import Moment from "react-moment";

const Comment = ({ comment }) => {
  return (
    <div className="flex items-center space-x-2 mb-3" key={comment.id}>
      <Image
        className="rounded-full"
        src={comment.data().userImage}
        alt=""
        width={28}
        height={28}
      />
      <p className="text-sm flex-1">
        <span className="font-bold">{comment.data().username}: </span>
        {comment.data().comment}
      </p>

      <Moment fromNow className="pr-5 text-sm">
        {comment.data().timestamp?.toDate()}
      </Moment>
    </div>
  );
};

export default Comment;
