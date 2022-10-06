import React from "react";
import { AdvancedVideo } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import styles from "./videoCloudinary.module.css";
import { useState } from "react";

export function VideoCloudinary(props) {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "muse-platform",
    },
  });

  const idVideo = props.idVideo;
  const myVideo = cld.video("samples/" + idVideo);
  const title = props.title;
  // Optimizar calidad de video y obtener thumbnail
  const link = myVideo.toURL();
  const aux = "upload/q_auto:good";
  const thumbnail = "upload/f_jpg";
  const array = link.split("upload");
  const urlVideo = array[0].concat(aux).concat(array[1]);
  const urlPoster = array[0].concat(thumbnail).concat(array[1]);

  // States
  const [toggleState, setToggleState] = useState(0);

  function playVideo() {
    setToggleState(1);
    console.log(urlVideo);
  }

  return (
    <div className={styles.container}>
      <div className={toggleState === 0 ? styles.beforePlay : styles.none}>
        <div className={styles.playIcon} onClick={playVideo} />
        <div className={styles.title}>{title}</div>
      </div>
      <AdvancedVideo
        cldVid={myVideo}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        preload="auto"
        poster={urlPoster}
        controls={toggleState === 0 ? false : true}
        autoPlay={toggleState === 0 ? false : true}
      />
    </div>
  );
}
