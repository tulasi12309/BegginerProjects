import React, { useState } from "react";
import "./ImageGallery.css";
import axios from "axios";
import Images from "./Images";
const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
function ImageGallery() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const changeHandler = (e) =>{
      setSearch(e.target.value);
  }
  const submitHandler = (e) =>{
    e.preventDefault();
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`)
          .then(response => 
            setData(response.data.photos.photo)
            )
          .catch(err=> console.log(err))
    console.log(search);
  }
  return (
    <div>
      <center>
        <h3 className="h3">Gallery Snapshot</h3>
        <form className="form" onSubmit={submitHandler}>
          <input type="text" className="search" value={search} onChange={changeHandler}/>
          <input type="submit" name="search" className="submit" />
        </form>
        <br />
        {data.length>=1 ? <Images data={data}/> : <h4>Data not available</h4>}
      </center>
    </div>
  );
}

export default ImageGallery;
