import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, desc, imgUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ height: "70vh" }}>
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ zIndex: "1", left: "90%" }}
          >
            {source}
          </span>
          <img src={imgUrl} alt="..." style={{ height: "35vh" }} />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text" style={{ height: "10vh" }}>
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
  }
}

export default NewsItem;
