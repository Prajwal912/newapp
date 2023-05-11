import React, { useEffect, useState } from "react";
import NewItem from "../NewItem";
import  Spinner  from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
 const [articles, setarticles] = useState([])
 const [loading, setloading] = useState(0)
 const [page, setpage] = useState(1)
 const [totalResults, settotalResults] = useState(0)

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }; 

 
 const  updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    props.setProgress(30);
   setloading(true)
    let parsedData = await data.json();

    props.setProgress(70);


    setarticles(parsedData.articles)
    setloading(false)
    settotalResults(parsedData.totalResults)

    props.setProgress(100);
  }

  useEffect(() => {
 document.title = `${capitalize(props.category)} - NewsMonkey`;
    updateNews()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  


  // handleprev = async () => {
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${
  //   //   props.country
  //   // }&category=${
  //   //   props.category
  //   // }&apiKey=34cee921abc74bd99ecba1c7692c4ebe&page=${
  //   //   page - 1
  //   // }&pageSize=${props.pageSize}`;
  //   // let data = await fetch(url);
  //   // this.setState({ loading: true });
  //   // let parsedData = await data.json();
  //   // this.setState({
  //   //   articles: parsedData.articles,
  //   //   page: page - 1,
  //   //   loading: false,
  //   // });
  //   this.setState({ page: page - 1 });
  //   this.updateNews();
  // };

  // handlenext = async () => {
  //   // agar extra page hai toh > mere total page se
  //   // if (
  //   //   page + 1 >
  //   //   Math.ceil(totalArticles / props.pageSize)
  //   // ) {
  //   // } else {
  //   //   let url = `https://newsapi.org/v2/top-headlines?country=${
  //   //     props.country
  //   //   }&category=${
  //   //     props.category
  //   //   }&apiKey=34cee921abc74bd99ecba1c7692c4ebe&page=${
  //   //     page + 1
  //   //   }&pageSize=${props.pageSize}`;
  //   //   let data = await fetch(url);
  //   //   this.setState({ loading: true });
  //   //   let parsedData = await data.json();
  //   //   this.setState({
  //   //     articles: parsedData.articles,
  //   //     page: page + 1,
  //   //     loading: false,
  //   //   });
  //   // }
  //   this.setState({ page: page + 1 });
  //   this.updateNews();
  // };


  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1 }&pageSize=${props.pageSize}`;
    setpage( page + 1 );

    let data = await fetch(url);
    let parsedData = await data.json();

    setarticles(articles.concat(parsedData.articles))
    settotalResults(parsedData.totalResults)
    setloading(false);
   
}



    return (
      <>
       
          <h1 className="text-center" style={{ margin: "30px 0px", marginTop:'90px' }}>
          DialyDispatch News - Top {capitalize(props.category)} Headlines.
          </h1>
          {loading && <Spinner />}
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner/>}
          >

          <div className="container">
          <div className="row">
          {articles.map((ele) => {
                // jaha return krte hai waha key prop dena padta hai for identification
                return (
                  <div className="col-md-4" key={ele.url}>
                  <NewItem
                  title={ele.title ? ele.title.slice(0, 45) : ""}
                  description={
                    ele.description ? ele.description.slice(0, 88) : ""
                  }
                      imageUrl={ele.urlToImage}
                      newsUrl={ele.url}
                      author={!ele.author ? "Unknown" : ele.author}
                      date={ele.publishedAt}
                      source={ele.source.name}
                    />
                    </div>
                    );
                  })}
                  </div>
                  </div>
          </InfiniteScroll>

          {/* <span className="d-flex justify-content-between mt-3 mb-4 text-center">
            <button
              type="button"
              disabled={page <= 1}
              className="btn btn-dark mx-3"
              onClick={this.handleprev}
            >
              &larr; Preview
            </button>
            <button
              type="button"
              disabled={
                page + 1 >
                Math.ceil(totalArticles / props.pageSize)
              }
              className="btn btn-dark"
              onClick={this.handlenext}
            >
              Next &rarr;
            </button>
          </span> */}
     
      </>
    );
  }





 News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

 News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News