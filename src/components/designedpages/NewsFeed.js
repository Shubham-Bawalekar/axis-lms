import { Container } from "@mui/system";
import { useState, useEffect } from "react";
import axios from "axios";

function NewsFeed() {
  const [newsData, setNewsData] = useState([]);
  //    let myData = {};
  useEffect(() => {
    axios.get("http://localhost:8003/allnews").then((response) => {
      // console.log(response);
      setNewsData(response.data);

      console.log("data", newsData);
      for (var i = 0; i < response.data.length; i++) {}
    });
  }, []);
  return (
    <div>
      <Container>
        <center>
          <h1>News Feed</h1>
        </center>
        <hr />
        <br />
        <Container>
          {newsData.map((ele) => {
            console.log("ele:", ele.title);

            return (
              <div>
                <Container>
                  <div class="card shadow-lg bg-body">
                    <h5 class="card-header bg-dark text-light">
                      {ele.newsName}
                    </h5>

                    <div class="card-body bg-danger text-light bg-gradient">
                      <h5 class="card-title">{ele.content}</h5>

                      <p class="card-text">Date: {ele.dateTime}</p>
                    </div>
                  </div>
                  <br />
                </Container>
              </div>
            );
          })}
        </Container>
      </Container>
    </div>
  );
}
export default NewsFeed;
