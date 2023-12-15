import React, { useState } from 'react';
import "./style.css";

export const Image = () => {
  const [imageList, setImageList] = useState([{
    src: "https://planetofhotels.com/guide/sites/default/files/styles/big_gallery_image/public/text_gallery/Chernivtsi-3.jpg",
    zoom: 1
  }
  ]);

  const handleZoomIn = () => {
    const zoomedImg = { ...imageList[imageList.length - 1], zoom: imageList[imageList.length - 1].zoom += 0.1 }
    const newImageList = [...imageList];
    newImageList.pop();
    setImageList([...newImageList, zoomedImg]);
  };

  const handleZoomOut = () => {
    const zoomedImg = { ...imageList[imageList.length - 1], zoom: imageList[imageList.length - 1].zoom -= 0.1 }
    const newImageList = [...imageList];
    newImageList.pop();
    setImageList([...newImageList, zoomedImg]);

    // setZoom(prevZoomLevel => prevZoomLevel - 0.1);
  };

  const handleDelete = () => {
    if (imageList.length > 0) {
      const newImageList = [...imageList];
      newImageList.pop();
      setImageList(newImageList);
    }
  };

  const handleAddImage = () => {
    const newImg = {
      src: "https://planetofhotels.com/guide/sites/default/files/styles/big_gallery_image/public/text_gallery/Chernivtsi-3.jpg",
      zoom: 1
    }
    setImageList(prevImageList => [...prevImageList, newImg]);
  };

  return (
    <div className='image-block'>
      <div className='buttons'>
        <button onClick={handleAddImage}>Add </button>
        <button onClick={handleZoomIn}>Zoom In</button>
        <button onClick={handleZoomOut}>Zoom Out</button>
        <button onClick={handleDelete}>Delete</button>

      </div>
      <div className='image-list'>
        {imageList.map((item, index) => (
          <div className="image-wrapper"  key={index}>
            <a href="http://chernivtsy.eu/portal/" id={`link-${index}`}>
              <img
                src={item.src}
                alt={`Chernivtsi ${index}`}
                className='cityImage'
                style={{ transform: `scale(${item.zoom})` }}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
