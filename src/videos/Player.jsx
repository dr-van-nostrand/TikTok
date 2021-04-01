import React, { useEffect, useRef } from "react";
import { PlayerSdk } from "@api.video/player-sdk";
import styled from "styled-components";

let Iframe = styled.iframe`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
`;

let Player = ({ video }) => {
  let player = useRef(null);

  useEffect(() => {
    if (!player.current) {
      player.current = new PlayerSdk(`#appPLayer-${video.id}`);
      player.current.mute();
      player.current.play();
      player.current.setLoop(true)

    }
  }, [video.id]);
  return (
    <Iframe
      title={video.title}
      src={`https://embed.api.video/vod/${video.remoteVideoId}#hide-controls`}
      width="100%"
      height="100%"
      id={`appPLayer-${video.id}`}
      scrolling="no"
      allowFullScreen={true}
      frameBorder="0"
    ></Iframe>
  );
};

export default Player;
