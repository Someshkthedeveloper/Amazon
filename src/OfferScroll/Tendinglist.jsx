import React from 'react';
import { trending } from './treindingprodect';
import Trendingcord from './Trendingcord';

function Tendinglist() {
  return (
    <div className='trendingcard' >
      <div className="head">
      <div className="tre_heading">
        <h1 className='bikehead'>Starting ₹70,348 | Set off on your next great ride</h1>
        </div>
        <div className="tre_map">
      {trending.map((dada, index)  => 
        <Trendingcord key={index}img={dada.imgprodect} />
      )}
      </div>
      </div>
    </div>
  );
}

export default Tendinglist;
