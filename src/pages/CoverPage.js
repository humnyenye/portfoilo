import React, { useEffect } from "react";
import { gsap, Back } from "gsap";

import "../scss/coverPage.scss";

function CoverPage() {
  const lettering = (text) => {
    return text.split("").map((char, idx) => <span key={idx}>{char}</span>);
  };

  useEffect(() => {
    const titleElements = document.querySelectorAll(".title span"); // 각 글자를 대상으로 함
    const scrollDownElement = document.querySelector(".scrollDown");

    const animation = gsap.timeline({ delay: 1 });

    animation.fromTo(
      titleElements,
      0.9,
      { ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80 },
      { ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0, stagger: 0.05 } // stagger 옵션 추가
    );

    animation.fromTo(scrollDownElement, 2.0, { opacity: 0 }, { opacity: 1 });
  }, []);

  return (
    <div id="coverPage">
      <div className="container">
        <h1>
          <span className="title">{lettering("This is")}</span>
          <span className="title">{lettering("Park Ji Song")}</span>
          <span className="title">{lettering("Portfolio")}</span>
        </h1>
        <div className="scrollDown">
          <div className="scrollDownIcon"></div>
          <span>Scroll</span>
        </div>
      </div>
    </div>
  );
}

export default CoverPage;
