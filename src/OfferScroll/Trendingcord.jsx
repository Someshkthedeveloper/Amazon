import React from "react";

const Trendingcord = (props) => {
  return (
    <div>
      <div className="trending" >
        <img
          src={props.img}
          alt=""
          style={{ width: "220px", height: "200px" }}
        />
      </div>
    </div>
  );
};

export default Trendingcord;
