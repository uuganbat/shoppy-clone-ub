import React, { useState } from "react";

const HEADERMENUS = [
  {
    id: "home",
    name: "Гэрийн",
  },
  {
    id: "male",
    name: "Эрэгтэй",
  },
  {
    id: "female",
    name: "Эмэгтэй",
  },
  {
    id: "child",
    name: "Хүүхдийн",
  },
  {
    id: "sport",
    name: "Спорт",
  },
  {
    id: "food",
    name: "Хүнс",
  },
  {
    id: "technology",
    name: "Технологи",
  },
  {
    id: "beauty",
    name: "Гоо сайхан",
  },
  {
    id: "auto",
    name: "Авто",
  },
];

export default function Menu() {
  const [menus] = useState(HEADERMENUS);

  return (
    <div className="header-menu">
      <div className="container">
        <div className="header-menu-items">
          {menus.map((menu) => (
            <a key={menu.id} href="/">
              {menu.name}
            </a>
          ))}
        </div>
        <div className="header-menu-items"></div>
      </div>
    </div>
  );
}
