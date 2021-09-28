import React from "react";

export default function HeaderMobile() {
  return (
    <div className="header-mobile">
      <div className="header-mobile-item">
        <div className="header-mobile-icon">
          <span className="material-icons">menu</span>
        </div>
        <div className="header-mobile-logo">
          <img
            src="https://shoppy.mn/0e5e7790e1148be18ef9443ff06877f7.svg"
            alt="Shoppy Mobile Logo"
          />
        </div>
      </div>
      <div className="header-mobile-item">
        <div className="header-mobile-icon">
          <span className="material-icons">shopping_cart</span>
        </div>
      </div>
    </div>
  );
}
