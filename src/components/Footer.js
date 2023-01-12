import React from "react";
import { Link } from "react-router-dom";
import github from "../assets/github.png";
export const Footer = () => {
  return (
    <div className="absolute bottom-0 left-0 flex justify-center items-center p-2 w-full gap-4">
      Copyright © 2023 JanusZhu
      <Link
        href="https://github.com/januszhu"
        className="w-8"
        target="_blank"
        rel="noopener"
      >
        <img src={github} alt="GithubIcon" />
      </Link>
    </div>
  );
};
