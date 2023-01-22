import { Container } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import WebsiteNavigation from "../layout/WebsiteNavigation";


function AddComment() {
    const [message, setMessage] = useState("");
    // const [newsId, setNewsId] = useState();
    const empId = sessionStorage.getItem('empId');
    const newsId = sessionStorage.getItem('newsId');
    const empName = sessionStorage.getItem('empName');
    let newsName = sessionStorage.getItem('newsName');
    let newsData = {message,empId,empName};
    console.log("newsData",newsData);
    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post(`http://localhost:8003/add-comment/${newsId}`, newsData).then((response) => {
    
        console.log(response);

            alert("Comment Added");
            window.location.assign("/news-feed");
        })}
    
  return (
    <div>
      <WebsiteNavigation></WebsiteNavigation>
      <br />
      <Container>
        {/* <center>
          <h1>Add Comment</h1>
        </center>
        <hr /> */}
      </Container>
      <br />
      <Container>
        <div class="row">
          <div class="col-3"></div>
          <div class="col-6">
            <div class="card shadow-lg p-3 mb-5 bg-body rounded">
              <h5 class="card-header text-danger list-group-item-danger">Comment</h5>
              <div class="card-body">
                <h5 class="card-title">{newsName}</h5>
                <br />
                <form onSubmit={handleSubmit}>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter comment"
                      value={message} onChange={(e)=>setMessage(e.target.value)}
                    />
                    <br />
                  </div>
                  <button type="submit" class="btn bg-danger text-light shadow ">Submit</button>
                  {/* <Button class="btn btn-success">
                    save comment
                  </Button> */}
                </form>
              </div>
            </div>
          </div>
          <div class="col-3"></div>
        </div>
      </Container>
    </div>
  );
}
export default AddComment;
