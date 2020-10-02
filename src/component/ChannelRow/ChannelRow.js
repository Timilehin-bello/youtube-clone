import { Avatar } from "@material-ui/core";
import { CheckCircleOutlineOutlined } from "@material-ui/icons";
import React from "react";
import "./ChannelRow.css";

function ChannelRow(props) {
  const { image, verified, subs, noOfVideos, description, channel } = props;
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" alt={channel} src={image} />
      <div className="channelRow__text">
        <h4>
          {channel} {verified && <CheckCircleOutlineOutlined />}
        </h4>
        <p>{channel}</p>
        <p>
          {subs} subscribers • {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
