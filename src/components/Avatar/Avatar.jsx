import React from "react";
import "./avatar.scss";
export default function Avatar({ src, alt }) {
  return <img className='pb_avatar-image' src={src} alt={alt} />;
}
