import React, { } from "react";

const NewItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <>
        <div className="card my-3">
          <img
            src={
              !imageUrl
                ? "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg"
                : imageUrl
            }
            className="card-img-top"
            style={{ height: "250px", width: "100%", objectFit: "cover" }}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}...
              <div style={{display:'flex', justifyContent:'flex-end', position:'absolute', right:'0', top:'0'}}>
              <span className="badge rounded-pill bg-danger">
                {source}
              </span>
              </div>
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {author} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }


export default NewItem;
