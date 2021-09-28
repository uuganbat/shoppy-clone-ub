import React, { useState } from "react";
import SearchDropDown from "./SearchDropDown";

export default function Search() {
  const [activeDropDown, setActiveDropDown] = useState(false);
  const onFocus = () => {
    setActiveDropDown(true);
  };

  const onBlur = () => {
    setActiveDropDown(false);
  };

  return (
    <div className="header-main-items header-main-items-search">
      <div className="header-main-search">
        <div className="header-main-search-content">
          <span className="header-main-search-icon">
            <div className="material-icons">search</div>
          </span>
          <input
            onFocus={onFocus}
            onBlur={onBlur}
            name="search"
            placeholder="Эндээс бүхнийг хайж олох"
          />
        </div>
        <SearchDropDown active={activeDropDown} />
      </div>
    </div>
  );
}
