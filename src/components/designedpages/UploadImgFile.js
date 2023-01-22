import React, { useState } from 'react';

function UploadImgFile() {
    const [userId, setUserId] = useState("");
    var singleFileUploadInput = document.querySelector('#file');
    var singleFileUploadStatus = document.querySelector('#status');

    function handleSubmit(event) {
        event.preventDefault();
        var files = singleFileUploadInput.files;
        if (files.length === 0) {
            singleFileUploadStatus.innerHTML = "Please select a file";
            singleFileUploadStatus.style.display = "block";
        }
        var formData = new FormData();
        formData.append("userId", userId);
        formData.append("file", files[0]);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:8500/uploaddocument");
        xhr.onload = function () {
            console.log(xhr.responseText);
            if (xhr.status === 200) {
                singleFileUploadStatus.innerHTML = `<p> asdf.</p>`;
                singleFileUploadStatus.style.display = "block";
            } else {
                singleFileUploadStatus.innerHTML = "Some Error Occurred";
                singleFileUploadStatus.style.display = "block";
            }
        }
        xhr.send(formData);
    }
    return (
        <div>
            <h4>Upload Photo</h4>
            <div>
              
                <div>
                    <form onSubmit={handleSubmit}>
                        <input id='userId' type='text' name='userId' onChange={(e) => setUserId(e.target.value)} required/>
                        <input id="file" type="file" name="file" required />
                        <br/>
                        <button type="submit">Submit</button>
                    </form>
                    <div>
                        <div id="status"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UploadImgFile;