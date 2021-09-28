import React from "react";
import Search from "./Search/Search";

export default function HeaderMain() {
  return (
    <div className="header-main">
      <div className="header-main-content container">
        <div className="header-main-items">
          <div className="header-main-category">
            <span className="material-icons">home</span>
          </div>
        </div>
        <div className="header-main-items">
          <div className="header-main-logo">
            <img
              src="https://shoppy.mn/7aa23ad0466ab6ce47165f36182ff2b2.svg"
              alt="shoppy logo"
            />
          </div>
        </div>
        <Search />
        <div className="header-main-items">
          <div className="header-main-icons">
            <span className="material-icons">code</span>
            <p>Платформууд</p>
          </div>
          <div className="header-main-icons">
            <span className="material-icons">favorite_border</span>
            <p>Хадгалсан</p>
          </div>
          <div className="header-main-icons">
            <span className="material-icons">payment</span>
            <p>Хэтэвч</p>
          </div>
          <div className="header-main-icons">
            <span className="material-icons">shopping_cart</span>
            <p>Сагс</p>
          </div>
          <div className="header-main-icons">
            <span className="material-icons">person</span>
            <p>Нэвтрэх</p>
          </div>
        </div>
      </div>
    </div>
  );
}
