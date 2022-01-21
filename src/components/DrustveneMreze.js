import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faYoutube,
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function DrusveneMreze() {
  return (
    <div className="social-container">
      <a
        href="https://www.youtube.com"
        className="youtube social"
      >
        <FontAwesomeIcon icon={faYoutube} size="4x" />
      </a>
      <a
        href="https://www.facebook.com"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="4x" />
      </a>
      <a
        href="https://www.instagram.com"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="4x" />
      </a>
    </div>
  );
}