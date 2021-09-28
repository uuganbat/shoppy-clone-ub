import React from "react";
import HeaderMenu from "./HeaderMenu";
import HeaderMain from "./HeaderMain";
import HeaderTop from "./HeaderTop";
import HeaderMobile from "./HeaderMobile";

export default function Header() {
  return (
    <div>
      <HeaderTop />
      <HeaderMain />
      <HeaderMenu />
      <HeaderMobile />
    </div>
  );
}
