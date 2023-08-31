import React, { useState } from "react";

const reviewsData = [
  {
    id: 1,
    name: "Marie-Esther Rouffet-Degbelo",
    position: "CEO & Co-founder @Koalou",
    review:
      "It was a pleasure working with Lucile. She is listening, and applying accurately our will with lots of motivation. She is doing the extra mile on each of her task. It was a great pleasure working with her! Welcome any time!",
  },
  {
    id: 2,
    name: "Amélie Chabrand",
    position: "Project Manager at @Numberly",
    review:
      "Lucile is passionate, she likes to dive 100% into her projects and is curious in all her approaches. She will always look for solutions and doesn’t get demotivated at the slightest bug: she won’t give up until she has debugged it, she is not a fullstack developer for nothing. Lucile has many assets for teamwork: she has a very good ability to lead and frame a project but she is also very good at collaborating and communicating during critical moments.",
  },
  {
    id: 3,
    name: "Ines Zallouz",
    position: "Ines Zallouz, Full Stack Developer at @Capgemini",
    review:
      "Lucile is a pleasure to work with! She's a web developer with great communication and learning skills, and is very organized. Lucile truly is an asset in a team, as she is always friendly and a real problem solver. I had the chance to work with her on a few projects, and I cannot recommend her enough!Lucile is passionate, she likes to dive 100% into her projects and is curious in all her approaches. She will always look for solutions and doesn’t get demotivated at the slightest bug: she won’t give up until she has debugged it, she is not a fullstack developer for nothing. Lucile has many assets for teamwork: she has a very good ability to lead and frame a project but she is also very good at collaborating and communicating during critical moments.",
  },
  // Add more review objects here
];

const Reviews = ({ theme }: { theme: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviewsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="App-section" id="reviewsSection">
      <h2 className="Section-title">REVIEWS</h2>
      <div className="reviews-carousel">
        <div className="review-card">
          <h2>{reviewsData[currentIndex].name}</h2>
          <p className="position">{reviewsData[currentIndex].position}</p>
          <p className="review">{reviewsData[currentIndex].review}</p>
        </div>
        <div className="carousel-controls">
          <button onClick={handlePrev} className="button-55">
            Previous
          </button>
          <button onClick={handleNext} className="button-55">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
