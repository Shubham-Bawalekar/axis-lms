import React, { useEffect, useState } from 'react';

function ImageLoader() {
    const [image, setImage] = useState(null);
    useEffect(() => {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                var dataUrl = "data:image/jpeg;base64," + xhr.response;
                setImage(dataUrl);
            }
        }
        xhr.open("GET", "http://localhost:8500/view-document/10", true);
        xhr.send(null);
    }, [image]);
    return (
        <div>
            <h1>View Photo</h1>
            <div>
                <p>{image}</p>
                <img id="ItemPreview" src={image} alt='profile' width="250px"/>
            </div>
        </div>
    );
}

export default ImageLoader;