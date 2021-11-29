import React from "react";
import "./topbar.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Topbar = () => {
  return (
    <div className="topbar__row">
      <div className="topbar__leftRow">kstha.</div>

      <div className="topbar__middleRow">
        <h3> portfolio</h3>
        <h3> about me</h3>

        <h3> my blog</h3>
        <h3> contact me</h3>
      </div>
      <div className="topbar__rightRow">
        {" "}
        <span>
          {" "}
          <TwitterIcon />{" "}
        </span>
        <span>
          {" "}
          <FacebookIcon />
        </span>
        <span>
          {" "}
          <InstagramIcon />{" "}
        </span>
        <span>
          {" "}
          <GitHubIcon />{" "}
        </span>
        <span>
          {" "}
          <LinkedInIcon />{" "}
        </span>
      </div>
    </div>
  );
};

export default Topbar;
