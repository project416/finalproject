import React, { useEffect, useState } from "react";
import "../styles/travelimages.css";

const TravelImages = () => {
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          data.map((element) => {
            drawImg(element.img);
          });
        }
      });
  }, []);
  return (
    <main>
      <h1 className="fc br mar">Travel Images of Dubai</h1>
      <div id="image-div">
        <h1 id="no-imgs">No Images present</h1>
      </div>

      <div className="form">
        <h1>Select the file to upload</h1>
        <input
          type="file"
          name="image"
          id="image"
          accept="image/*"
          onChange={handleImageUpload}
        />
	<p style={{color: "orange"}}>Resolution of the image should be less than or equal to 1920*1080</p>
      </div>
    </main>
  );
};

const drawImg = (data) => {
  document.querySelector("#no-imgs").style.display = "none";
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  var displayImage = new Image();
  canvas.height = 300;
  canvas.width = 450;
  displayImage.onload = function () {
    context.drawImage(displayImage, 0, 0, 450, 300);
  };
  displayImage.src = data;
  document.querySelector("#image-div").appendChild(canvas);
};

const handleImageUpload = (event) => {
  const files = event.target.files;
  const formData = new FormData();
  formData.append("myFile", files[0]);

  const img = new Image();
  img.src = window.URL.createObjectURL(files[0]);
  //only upload image if image is 1080p or less
  img.onload = () => {
    if (img.naturalHeight <= 1080 && img.naturalWidth <= 1920) {
      fetch("http://localhost:5000/", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          drawImg(data.src);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
};

export default TravelImages;

