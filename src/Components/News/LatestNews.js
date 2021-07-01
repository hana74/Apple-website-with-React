import React, { useEffect, useState } from "react";
import "./news.css";
function LatestNews() {
  const [newsItems, getNewsItems] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=Apple&from=2021-04-14&sortBy=publishedAt&apiKey=2133aff1bd5442ba93c353e98dedfc2d"
    )
      .then((Response) => Response.json())
      .then((data) => {
        let articles = data.articles;
        articles = articles.slice(0, 6);
        getNewsItems(articles);
      });
  }, []);
  console.log(newsItems);
  return (
    <div className="allVideoWrapper">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12">
            <div className="title-wrapper">
              Latest Articles
              <br />
              <br />
            </div>
          </div>
          {newsItems.map((news) => {
            let url = news.url;
            let newsWrapper = (
              <div key={url} className="col-sm-12 col-md-6 col-lg-4">
                <div className="singleNewsWrapper">
                  <div className="newsThumbnail">
                    <a href={url} target="_blank">
                      <img src={news.urlToImage} />
                    </a>
                  </div>
                  <div className="newsInfoWrapper">
                    <div className="newsTitle">
                      <a href={url} target="_blank">
                        {news.title}
                      </a>
                    </div>
                    <div className="newsDesc">{news.description}</div>
                  </div>
                </div>
              </div>
            );
            return newsWrapper;
          })}
        </div>
      </div>
    </div>
  );
}

export default LatestNews;
