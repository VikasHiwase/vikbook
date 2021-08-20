import React from "react";
import Story from "./Story";
import "./StoryReel.css";
import pro1 from "./img/Aakash.PNG";
import pro2 from "./img/pank.PNG";
import pro3 from "./img/vikas.PNG";
import pro4 from "./img/kaushik.jpeg";
import pro5 from "./img/pawan.jpeg";
import img1 from "./img/AakashStatus.jpg";
import img2 from "./img/PankajStatus.jpg";
import img3 from "./img/kaushikStatus.jpeg";
import img4 from "./img/vikasStatus.jpeg";
import img5 from "./img/pawanStatus.jpeg";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story image={img1} profileSrc={pro1} title="Aakash Matade" />
      <Story image={img2} profileSrc={pro2} title="Pankaj Gotefode" />
      <Story image={img3} profileSrc={pro4} title="Kaushik Gotefode" />
      <Story image={img4} profileSrc={pro3} title="Vikas Hiwase" />
      <Story image={img5} profileSrc={pro5} title="Pawan Gotefode" />
    </div>
  );
}

export default StoryReel;
