import React, { useEffect, useState } from "react";
import { CgChevronDoubleLeftR } from "react-icons/cg";
import { CgChevronDoubleRightR } from "react-icons/cg";
import { BsChatQuoteFill } from "react-icons/bs";

const sliderData = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
    name: "maria ferguson",
    title: "office manager",
    quote:
      "Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    name: "john doe",
    title: "regular guy",
    quote:
      "Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg",
    name: "peter smith",
    title: "product designer",
    quote:
      "Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    name: "susan andersen",
    title: "the boss",
    quote:
      "Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. ",
  },
];

function App() {
  const [dataSlider, setDataSlider] = useState(sliderData);
  const [dataIndex, setDataIndex] = useState(0);

  useEffect(() => {
    const lastDataIndex = dataSlider.length - 1;
    if (dataIndex < 0) {
      setDataIndex(lastDataIndex);
    }

    if (dataIndex > lastDataIndex) {
      setDataIndex(0);
    }
  }, [dataSlider, dataIndex]);

  useEffect(() => {
    let slider = setInterval(() => {
      setDataIndex(dataIndex + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [dataIndex]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {dataSlider.map((item, index) => {
          const { id, image, name, title, quote } = item;
          let position = "nextSlide";

          if (dataIndex === index) {
            position = "activeSlide";
          }

          if (
            dataIndex === index - 1 ||
            (index === 0 && dataIndex === item.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <BsChatQuoteFill className="icon" />
            </article>
          );
        })}
        <button className="prev" onClick={() => setDataIndex(dataIndex - 1)}>
          <CgChevronDoubleLeftR />
        </button>
        <button className="next" onClick={() => setDataIndex(dataIndex + 1)}>
          <CgChevronDoubleRightR />
        </button>
      </div>
    </section>
  );
}

export default App;