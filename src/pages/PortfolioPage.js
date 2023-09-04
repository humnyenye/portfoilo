import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-creative";

import "../scss/portfolioPage.scss";

function PortfolioPage() {
  const swiperParams = {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
    modules: [EffectCreative],
  };

  const slideDescriptions = [
    {
      pfNum: "portfolio #1",
      pfName: "MBTI 테스트 사이트",
      pfDisc: "소규모프로젝트\nhtml, css, js만을 이용해 만든 MBTI테스트 사이트",
      link: "https://humnyenye.github.io/jsmbti/",
    },
    {
      pfNum: "portfolio #2",
      pfName: "스타벅스 사이트 클론코딩",
      pfDisc: "스타벅스 사이트 클론코딩 페이지",
      link: "https://humnyenye.github.io/starbucks/",
    },
    {
      pfNum: "portfolio #3",
      pfName: "interpark 클린 코딩",
      pfDisc: "interpark 메인 클론코딩 페이지",
      link: "https://humnyenye.github.io/interpark/",
    },
    {
      pfNum: "portfolio #4",
      pfName: "직원 사진 관리 페이지",
      pfDisc: "firebase를 이용해 간단하게 직원들의 데이터와 사진을 관리할 수 있도록 CRUD 기능을 추가한 어드민 디자인의 페이지",
      link: "https://admin2-b0193.web.app/",
    },
  ];

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.activeIndex);
  };

  const activeSlideDescription = slideDescriptions[activeSlideIndex];

  return (
    <section id="portfolioPage">
      <div className="e">
        <h1>PORTFOLIO</h1>
      </div>
      <div className="swiperExplain">
        <div className="pfNum">{activeSlideDescription.pfNum}</div>
        <h2 className="pfName">{activeSlideDescription.pfName}</h2>
        <div className="pfDisc">{activeSlideDescription.pfDisc}</div>
        <div className="btn btn-4 hover-border-10">
          <a href={activeSlideDescription.link} target="_blank" rel="noopener noreferrer">
            go link
          </a>
        </div>
      </div>
      <Swiper {...swiperParams} className="mySwiper" onSlideChange={handleSlideChange}>
        <SwiperSlide>
          <div className="imgBox" style={{ backgroundImage: 'url("./imgs/example_1.png")' }}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imgBox" style={{ backgroundImage: 'url("./imgs/example_2.png")' }}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imgBox" style={{ backgroundImage: 'url("./imgs/example_3.png")' }}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imgBox" style={{ backgroundImage: 'url("./imgs/example_4.png")' }}></div>
        </SwiperSlide>
        {/* 다른 슬라이드들도 추가 */}
      </Swiper>
    </section>
  );
}

export default PortfolioPage;
