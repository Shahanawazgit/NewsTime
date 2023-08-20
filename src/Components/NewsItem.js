import React from "react";

const NewsItem = (props) => {
  let { title, desc, imgUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card" style={{ height: "500px" }}>
        <div
          className="d-flex position-absolute"
          style={{
            right: "0px",
            top: "-10px",
          }}
        >
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img src={imgUrl} alt="..." style={{ height: "250px" }} />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p
            className="card-text"
            style={{ height: "70px", overflow: "hidden" }}
          >
            {desc}...
          </p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {author} on {new Date(date).toUTCString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
            rel="noreferrer"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
