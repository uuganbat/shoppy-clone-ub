import React, { useState } from "react";

const datas = [
  {
    id: 1,
    name: "Аялал",
    src: "https://cdn5.shoppy.mn/img/47726/original/Travel.jpg",
  },
  {
    id: 2,
    name: "Эвент",
    src: "https://cdn5.shoppy.mn/img/47727/original/Event.jpg",
  },
  {
    id: 3,
    name: "Music",
    src: "https://cdn5.shoppy.mn/img/47728/original/Music.jpg",
  },
  {
    id: 4,
    name: "Хүнс",
    src: "https://cdn5.shoppy.mn/img/47729/original/huns.jpg",
  },
  {
    id: 5,
    name: "Хандив",
    src: "https://cdn5.shoppy.mn/img/47730/original/handiv.jpg",
  },
  {
    id: 6,
    name: "Купон",
    src: "https://cdn5.shoppy.mn/img/47731/original/coupon.jpg",
  },
  {
    id: 7,
    name: "Авто",
    src: "https://d1f6qhhrbg3j8a.cloudfront.net/img/66832/original/auto-cat.jpg",
  },
  {
    id: 8,
    name: "Шинэ",
    src: "https://cdn5.shoppy.mn/img/47733/original/NEW-Arrival.jpg",
  },
];

export default function SectionSuggest() {
  const [items] = useState(datas);
  return (
    <section className="section-suggest">
      <div className="container">
        {items.map((item) => (
          <div key={item.id} className="section-suggest-item">
            <img src={item.src} />
          </div>
        ))}
      </div>
    </section>
  );
}
