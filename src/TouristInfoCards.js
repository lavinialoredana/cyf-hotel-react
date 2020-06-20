import React from "react";

import TouristInfoCard from "./TouristInfoCard";
const TouristInfoCards = () => {
  return (
    <div className="cardContainer">
      <TouristInfoCard
        linkUrl="http://peoplemakeglasgow.com"
        imgSrc=" https://media.timeout.com/images/102512163/image.jpg"
      />
      <TouristInfoCard
        linkUrl="http://visitmanchester.com"
        imgSrc="https://www.telegraph.co.uk/content/dam/news/2016/07/13/Art-on-the-undergound-trending-xlarge_trans_NvBQzQNjv4BqdODRziddS8JXpVz-XfUVR2LvJF5WfpqnBZShRL_tOZw.jpg"
      />
      <TouristInfoCard
        linkUrl="http://visitlondon.com"
        imgSrc=" https://ilovemanchester.com/wp-content/uploads/2018/08/Summer-Exhibition-Castle-Fine-Art-Manchester-23-Aug-18-Decoy-Media-19-1.jpg"
      />
    </div>
  );
};

export default TouristInfoCards;
