import React from "react";
function Images({ data }) {
  return (
    <div className="row">
      {data.map((image) => (
        <div key={image.id}>
          <div className="col-md-4">
        <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`} 
       height="200" width="250" alt={image.title} style={{
           margin: '15px'
       }}/>
        </div>
        </div>
      ))}
    </div>
  );
}

export default Images;
