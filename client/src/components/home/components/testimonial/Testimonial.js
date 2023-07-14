import React, { useState } from "react";
import "./Testimonial.css";
import { AiFillStar } from "react-icons/ai";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const arr = [
  {
    title: "Title1",
    stars: 7,
    para: "description 1.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy",
    name: "Name1",
  },
  {
    title: "Title2",
    stars: 3,
    para: "description 2 .There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures,",
    name: "Name2",
  },
  {
    title: "Title3",
    stars: 5,
    para: "description 3.r since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    name: "Name3",
  },
];

const Testimonial = () => {
  // prev and next card content
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevCard = () => {
    setCurrentIndex(currentIndex === 0 ? arr.length - 1 : currentIndex - 1);
  };
  const nextCard = () => {
    setCurrentIndex(currentIndex === arr.length - 1 ? 0 : currentIndex + 1);
  };

  const currentCard = arr[currentIndex];
  console.log(currentCard);

  return (
    <div className="testimonial-wrapper">
      <div className="col1 ">
        <h1>
          Don’t just take our
          <br />
          word for it, <br />
          see what our <br />
          investors have to say
        </h1>
      </div>
      <div className="col2">
        <div className="content"></div>
      </div>

      {/* dummy div to cover bottom right corner of parent after skew of element */}
      <div className="col3 dummy-div">
        <div className="content"></div>
      </div>

      {/* card slider */}
      <div className="col4">
        <div className="card-wrap">
          {arr.map((card, index) => {
            return (
              <div className="card">
                <div className="row1">
                  <h5>{currentCard.title}</h5>
                  <div className="star-wrap">
                    {[...Array(currentCard.stars)].map((_, i) => {
                      return <AiFillStar style={{ color: "#41CE8E" }} />;
                    })}
                  </div>
                </div>
                <div className="row2">
                  <p>{currentCard.para}</p>
                </div>
                <div className="row3">{currentCard.name}</div>
              </div>
            );
          })}
        </div>
      </div>
      {/* card slider ends*/}

      {/* arrow for slider */}
      <div className="col5 arrow-wrap" onClick={prevCard}>
        <section className="icon1">
          <BsArrowLeft />
        </section>
        <section className="icon2" onClick={nextCard}>
          <BsArrowRight />
        </section>
      </div>
      {/* arrows for slider ends */}
    </div>
  );
};

export default Testimonial;
