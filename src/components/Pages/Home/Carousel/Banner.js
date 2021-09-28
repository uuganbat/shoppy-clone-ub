import React from "react";

export default function Banner(props) {
  const style = {
    visibility: props.active ? "visible" : "hidden",
    opacity: props.active ? 1 : 0,
    position: props.active ? "static" : "absolute",
    top: props.active ? 0 : "0",
  };
  return (
    <div className="carousel-banner" style={style}>
      <img src={props.src} alt="Logo" />
    </div>
  );
}
