import { Container } from "@mui/system";
import { useState } from "react";
import axios from "axios";

function AddNews(){
    const [newsName, setNewsName] = useState("");
    const [content, setContent] = useState("");
    const handleSubmit = (e) => {

        e.preventDefault();
    
        let newsData={newsName,content}
    
        console.log("news data: ",newsData);
    
        axios.post("http://localhost:8003/add-news", newsData).then((response) => {
    
            console.log(response.data);
    
                alert("News Added");
                window.location.assign("/news-feed");
            })}
    return(
        <div><br/>
            <Container>
                <h1>Add News</h1><hr/>
                <div class="shadow p-3 mb-5 bg-white rounded">
                <form 
                onSubmit={handleSubmit}
                 class="row g-3" >
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">
                Title
              </label>
              <input
                type="textarea"
                class="form-control"
                id="inputEmail4"
                // placeholder="enter name"
                value={newsName} onChange={(e)=>setNewsName(e.target.value)}
              ></input>
            </div>
            <div class="col-md-12">
              <label for="inputPassword4" class="form-label">
                Content
              </label>
              <input
                type="text"
                class="form-control"
                id="inputPassword4"
                // placeholder="stakeholder123@gmail.com"
                value={content} onChange={(e)=>setContent(e.target.value)}
              ></input>
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-danger bg-gradient">
                Add news
              </button>
            </div>
            
                     
            
          </form>
                </div>
            </Container>
        </div>
    );
}
export default AddNews;