import React, { useState } from "react";
import Banner from "./Banner";

const data = [
  {
    key: "banner-0",
    src: "https://cdn5.shoppy.mn/img/80421/1680x0xwebp/take_100k_1920x559.png?h=2a132492773448c86e3728217a034196aa54be0a",
    active: true,
  },
  {
    key: "banner-1",
    src: "https://cdn5.shoppy.mn/img/81987/1680x0xwebp/banner_01.png?h=2a132492773448c86e3728217a034196aa54be0a",
    active: false,
  },
  {
    key: "banner-2",
    src: "https://cdn5.shoppy.mn/img/81988/1680x0xwebp/banner_02.png?h=2a132492773448c86e3728217a034196aa54be0a",
    active: false,
  },
];

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [banners, setBanners] = useState(data);

  const getNextBanner = () => {
    let index = activeIndex + 1;
    if (index > banners.length - 1) {
      index = 0;
    }
    const newBanners = banners.map((banner) => {
      let newBanner = banner;
      if (banner.key === `banner-${index}`) {
        newBanner = { ...banner, active: true };
      } else {
        newBanner = { ...banner, active: false };
      }
      return newBanner;
    });
    setActiveIndex(index);
    setBanners(newBanners);
  };
  const getPreviousBanner = () => {
    let index = activeIndex - 1;
    if (index < 0) {
      index = banners.length - 1;
    }
    const newBanners = banners.map((banner) => {
      let newBanner = banner;
      if (banner.key === `banner-${index}`) {
        newBanner = { ...banner, active: true };
      } else {
        newBanner = { ...banner, active: false };
      }
      return newBanner;
    });
    setActiveIndex(index);
    setBanners(newBanners);
  };

  return (
    <div className="carousel">
      <div className="carousel-buttons">
        <button
          className="carousel-previous-button"
          onClick={getPreviousBanner}
        >
          <span className="material-icons">arrow_back</span>
        </button>
        <button className="carousel-next-button" onClick={getNextBanner}>
          <span className="material-icons">arrow_forward</span>
        </button>
      </div>
      <div className="carousel-items">
        {banners.map((banner) => (
          <Banner key={banner.key} src={banner.src} active={banner.active} />
        ))}
      </div>
    </div>
  );
}
