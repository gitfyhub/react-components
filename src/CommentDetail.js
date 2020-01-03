import React from "react";
import faker from "faker";

const CommentDetail = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.src} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">Today at {faker.random.number()} PM</span>
        </div>
        <div className="text">{props.cmt}</div>
      </div>
    </div>
  );
};


export default CommentDetail;