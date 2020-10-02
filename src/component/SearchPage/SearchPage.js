import { TuneOutlined } from "@material-ui/icons";
import React from "react";
import ChannelRow from "../ChannelRow/ChannelRow";
import VideoRow from "../VideoRow/VideoRow";
import "./SearchPage.css";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlined />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://i.ytimg.com/vi/LGR77Sqqejk/hqdefault.jpg?sqp=-oaymwEZCOADEI4CSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDTob4cYV7sknAgnPeq0LkSF-YghQ"
        channel="Timmy Dev"
        verified
        subs="500m"
        noOfVideos={382}
        description="Learn how to be a developer by learning  what it takes to be one."
      />

      <hr />

      <VideoRow
        description="Learn how to be a developer by learning  what it takes to be one."
        title="Calling Clarifai face-detection API using Node js with React | 2019/2020"
        views="2.3M Views"
        subs="500m"
        timestamp="3 days ago"
        channel="Timmy Bello"
        image="https://i.ytimg.com/vi/LGR77Sqqejk/hqdefault.jpg?sqp=-oaymwEZCOADEI4CSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDTob4cYV7sknAgnPeq0LkSF-YghQ"
      />
      <VideoRow
        description="Learn how to be a developer by learning  what it takes to be one."
        title="Calling Clarifai face-detection API using Node js with React | 2019/2020"
        views="2.3M Views"
        subs="500m"
        timestamp="3 days ago"
        channel="Timmy Bello"
        image="https://i.ytimg.com/vi/LGR77Sqqejk/hqdefault.jpg?sqp=-oaymwEZCOADEI4CSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDTob4cYV7sknAgnPeq0LkSF-YghQ"
      />
      <VideoRow
        description="Learn how to be a developer by learning  what it takes to be one."
        title="Calling Clarifai face-detection API using Node js with React | 2019/2020"
        views="2.3M Views"
        subs="500m"
        timestamp="3 days ago"
        channel="Timmy Bello"
        image="https://i.ytimg.com/vi/LGR77Sqqejk/hqdefault.jpg?sqp=-oaymwEZCOADEI4CSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDTob4cYV7sknAgnPeq0LkSF-YghQ"
      />
      <VideoRow
        description="Learn how to be a developer by learning  what it takes to be one."
        title="Calling Clarifai face-detection API using Node js with React | 2019/2020"
        views="2.3M Views"
        subs="500m"
        timestamp="3 days ago"
        channel="Timmy Bello"
        image="https://i.ytimg.com/vi/LGR77Sqqejk/hqdefault.jpg?sqp=-oaymwEZCOADEI4CSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDTob4cYV7sknAgnPeq0LkSF-YghQ"
      />
      <VideoRow
        description="Learn how to be a developer by learning  what it takes to be one."
        title="Calling Clarifai face-detection API using Node js with React | 2019/2020"
        views="2.3M Views"
        subs="500m"
        timestamp="3 days ago"
        channel="Timmy Bello"
        image="https://i.ytimg.com/vi/LGR77Sqqejk/hqdefault.jpg?sqp=-oaymwEZCOADEI4CSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDTob4cYV7sknAgnPeq0LkSF-YghQ"
      />
      <VideoRow
        description="Learn how to be a developer by learning  what it takes to be one."
        title="Calling Clarifai face-detection API using Node js with React | 2019/2020"
        views="2.3M Views"
        subs="500m"
        timestamp="3 days ago"
        channel="Timmy Bello"
        image="https://i.ytimg.com/vi/LGR77Sqqejk/hqdefault.jpg?sqp=-oaymwEZCOADEI4CSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDTob4cYV7sknAgnPeq0LkSF-YghQ"
      />
    </div>
  );
}

export default SearchPage;
