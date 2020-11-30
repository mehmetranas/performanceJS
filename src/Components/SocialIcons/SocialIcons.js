import React from "react";
import { Button } from "antd";
import Icon from "@ant-design/icons";

const FacebookSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="19.281"
    height="36"
    viewBox="0 0 19.281 36"
  >
    <path
      id="Icon_awesome-facebook-f"
      data-name="Icon awesome-facebook-f"
      d="M19.627,20.25l1-6.515H14.375V9.507c0-1.782.873-3.52,3.673-3.52h2.842V.44A34.658,34.658,0,0,0,15.846,0C10.7,0,7.332,3.12,7.332,8.769v4.965H1.609V20.25H7.332V36h7.043V20.25Z"
      transform="translate(-1.609)"
      fill="#36a0fc"
    />
  </svg>
);

const InstagramSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="31.518"
    height="31.511"
    viewBox="0 0 31.518 31.511"
  >
    <path
      id="Icon_awesome-instagram"
      data-name="Icon awesome-instagram"
      d="M15.757,9.914a8.079,8.079,0,1,0,8.079,8.079A8.066,8.066,0,0,0,15.757,9.914Zm0,13.331a5.252,5.252,0,1,1,5.252-5.252,5.262,5.262,0,0,1-5.252,5.252ZM26.051,9.584A1.884,1.884,0,1,1,24.166,7.7,1.88,1.88,0,0,1,26.051,9.584ZM31.4,11.5a9.325,9.325,0,0,0-2.545-6.6,9.387,9.387,0,0,0-6.6-2.545c-2.6-.148-10.4-.148-13,0a9.373,9.373,0,0,0-6.6,2.538,9.356,9.356,0,0,0-2.545,6.6c-.148,2.6-.148,10.4,0,13a9.325,9.325,0,0,0,2.545,6.6,9.4,9.4,0,0,0,6.6,2.545c2.6.148,10.4.148,13,0a9.325,9.325,0,0,0,6.6-2.545,9.387,9.387,0,0,0,2.545-6.6c.148-2.6.148-10.392,0-12.994ZM28.041,27.281a5.318,5.318,0,0,1-3,3c-2.074.823-7,.633-9.288.633s-7.221.183-9.288-.633a5.318,5.318,0,0,1-3-3c-.823-2.074-.633-7-.633-9.288s-.183-7.221.633-9.288a5.318,5.318,0,0,1,3-3c2.074-.823,7-.633,9.288-.633s7.221-.183,9.288.633a5.318,5.318,0,0,1,3,3c.823,2.074.633,7,.633,9.288S28.863,25.214,28.041,27.281Z"
      transform="translate(0.005 -2.238)"
      fill="#36a0fc"
    />
  </svg>
);

const YouTubeSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="38.4"
    height="27"
    viewBox="0 0 38.4 27"
  >
    <path
      id="Icon_awesome-youtube"
      data-name="Icon awesome-youtube"
      d="M38.648,8.725a4.825,4.825,0,0,0-3.395-3.417c-2.995-.808-15-.808-15-.808s-12.008,0-15,.808A4.825,4.825,0,0,0,1.852,8.725c-.8,3.014-.8,9.3-.8,9.3s0,6.289.8,9.3a4.753,4.753,0,0,0,3.395,3.362c2.995.808,15,.808,15,.808s12.008,0,15-.808a4.753,4.753,0,0,0,3.395-3.362c.8-3.014.8-9.3.8-9.3s0-6.289-.8-9.3ZM16.323,23.737V12.318l10.036,5.71L16.323,23.737Z"
      transform="translate(-1.05 -4.5)"
      fill="#36a0fc"
    />
  </svg>
);

const TweeterSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="29.239"
    viewBox="0 0 36 29.239"
  >
    <path
      id="Icon_awesome-twitter"
      data-name="Icon awesome-twitter"
      d="M32.3,10.668c.023.32.023.64.023.959,0,9.754-7.424,20.992-20.992,20.992A20.85,20.85,0,0,1,0,29.307a15.263,15.263,0,0,0,1.782.091,14.776,14.776,0,0,0,9.16-3.152,7.391,7.391,0,0,1-6.9-5.117,9.3,9.3,0,0,0,1.393.114,7.8,7.8,0,0,0,1.942-.251,7.379,7.379,0,0,1-5.916-7.241V13.66A7.431,7.431,0,0,0,4.8,14.6,7.389,7.389,0,0,1,2.513,4.728a20.972,20.972,0,0,0,15.213,7.721,8.329,8.329,0,0,1-.183-1.69A7.385,7.385,0,0,1,30.312,5.711a14.526,14.526,0,0,0,4.683-1.782,7.358,7.358,0,0,1-3.244,4.066A14.791,14.791,0,0,0,36,6.853a15.86,15.86,0,0,1-3.7,3.815Z"
      transform="translate(0 -3.381)"
      fill="#36a0fc"
    />
  </svg>
);

const FacebookIcon = (props) => <Icon component={FacebookSvg} />;
const InstagramIcon = (props) => <Icon component={InstagramSvg} />;
const YouTubeIcon = (props) => <Icon component={YouTubeSvg} />;
const TweeterIcon = (props) => <Icon component={TweeterSvg} />;

function SocialIcons() {
  return (
    <div className="flex gap-5 py-5 items-center">
      <a>
        <FacebookIcon />
      </a>
      <a>
        <InstagramIcon />
      </a>
      <a>
        <YouTubeIcon />
      </a>
      <a>
        <TweeterIcon />
      </a>
    </div>
  );
}

export default SocialIcons;
