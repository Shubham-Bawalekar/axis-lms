import { useState, useEffect } from "react";

import axios from "axios";

import { Container } from "@mui/system";
import WebsiteNavigation from "../layout/WebsiteNavigation";

function NewsFeed() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8003/allnews").then((response) => {
      console.log(response.data);

      setNewsData(response.data);

      console.log("data", newsData);

      for (var i = 0; i < response.data.length; i++) {}
    });
  }, []);

  const [message, setMessage] = useState("");

  // e.preventDefault();

//   const handleSubmit = (e) => {
//     let commentData = { message };

//     console.log("comment data: ", commentData);

//     axios
//       .post("http://localhost:8082/employee/comment/add", commentData)
//       .then((response) => {
//         console.log(response.data);

//         // alert("News Added");
//       });
//   };

  return (
    <div> <WebsiteNavigation></WebsiteNavigation>
      <Container>
        <br />
        <center>
          <h1>News Feed</h1>
        </center>
        <hr />
      </Container>
      <br />

      {newsData.map((ele) => {
        // console.log("ele:", ele.title);
        // console.log(ele);
        // console.log("comments",ele.comments);
        let comData = ele.comments;
        // console.log("ele.comments.msg:",ele.comments.message);
        
        function myFunction() {
          sessionStorage.setItem("newsId", ele.newsId);
          sessionStorage.setItem("newsName", ele.newsName);
          
          window.location.assign("/add-comment")
        }
        return (
          <div>
           
            <Container>


            <div class="row">
          <div class="col-2"></div>
          <div class="col-8">
          <div class="card mb-3">
  <img class="card-img-top" src={ele.url} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">{ele.newsName}</h5>
    <p class="card-text">{ele.content}</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    <a class="btn btn-danger btn-sm bg-gradient rounded-pill" onClick={myFunction} role="button">Comment</a>
    {
                    comData.map((j)=>{
                      console.log("j",j);
                      return(
                        <div>

                          <p><strong>{j.empName}:</strong> {j.message}</p>
                        </div>
                      );
                    }
                    
                    )
                  }
  </div>
 
</div>
            {/* ************ */}
          {/* <div class="card shadow bg-body">
                <h5 class="card-header list-group-item-danger bg-gradient  text-danger">{ele.newsName}</h5>

                <div class="card-body bg-light  Stext-light bg-gradient">
                <img src= {ele.url}/>
                  <h5 class="card-title">{ele.content}</h5>
                  
                  <p class="card-text">Date: {ele.dateTime}</p>
                  <a class="btn btn-danger btn-sm bg-gradient rounded-pill" onClick={myFunction} role="button">Comment</a>
                  {
                    comData.map((j)=>{
                      console.log("j",j);
                      return(
                        <div>

                          <p><strong>{j.empName}:</strong> {j.message}</p>
                        </div>
                      );
                    }
                    
                    )
                  }

                  
                </div>
              </div> */}
              <br />
          </div>
          <div class="col-2"></div>
        </div>
              {/* ************************** */}

              
            </Container></div>
          
        );
      })}
    </div>
  );
}

export default NewsFeed;
