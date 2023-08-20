import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
    document.title = `NewsTime - ${capitalize(props.category)}`;
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  return (
    <>
      <h1
        className="text-center"
        style={{ marginTop: "70px", marginBottom: "20px" }}
      >
        NewsTime - Top <strong>{capitalize(props.category)}</strong> Headlines
      </h1>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={loading && <Spinner />}
      >
        <div className="container" style={{ marginTop: "10px" }}>
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-6 col-lg-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 60) : ""}
                    desc={
                      element.description
                        ? element.description.slice(0, 130)
                        : element.title
                    }
                    imgUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://i.pinimg.com/originals/83/51/3f/83513fb46add281860f64754cf7bc823.jpg"
                    }
                    newsUrl={element.url}
                    author={
                      element.author
                        ? element.author.slice(0, 20)
                        : element.source.name
                    }
                    date={element.publishedAt}
                    source={element.source.name.slice(0, 18)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
