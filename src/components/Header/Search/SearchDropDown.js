import React from "react";

export default function SearchDropDown(props) {
  const style = { display: props.active ? "block" : "none" };
  console.log(props);
  return <div style={style} className="search-drop-down"></div>;
}
