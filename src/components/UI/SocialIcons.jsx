import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faBandcamp,
  faApple,
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export const MusicMediaIcons = () => {
  return (
    <div className="text-[22px] flex gap-5">
      <FontAwesomeIcon icon={faSpotify} />
      <FontAwesomeIcon icon={faBandcamp} />
      <FontAwesomeIcon icon={faApple} />
    </div>
  );
};

export const SocialMediaIcons = ({ isWhite }) => {
  return (
    <div
      className={`text-2xl flex gap-10 xl:gap-5 ${
        isWhite ? "text-white" : "text-black"
      }`}
    >
      <FontAwesomeIcon icon={faInstagram} />
      <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={faTwitter} />
    </div>
  );
};
