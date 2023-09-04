import React from "react";
import SkillBar from "../components/Skillbar";

import "../scss/profilePage.scss";

const ProfilePage = () => {
  const skills = [
    { name: "HTML", percentage: 90 },
    { name: "CSS", percentage: 90 },
    { name: "JS", percentage: 70 },
    { name: "REACT", percentage: 40 },
  ];

  return (
    <section id="profilePage">
      <div className="pageInner">
        <h1>
          <span>Profile</span>
        </h1>
        <div className="profileContent">
          <div className="profile">
            <div className="personalInfo">
              <span>Personal Infomation</span>
              <p>이름 : 박지송 朴智頌 Park Ji Song</p>
              <p>생년월일 : 1995.05.15</p>
              <p>거주지 : 광주광역시 북구 운암동</p>
              <p>메일 : jisongp515@gmail.com</p>
            </div>
            <div className="education">
              <span>Educational History</span>
              <p>2014.03 ~ 2021.01 고려대학교 세종캠퍼스 졸업</p>
              <p>국어국문학과 / 문예창작학과</p>
            </div>
            <div className="career">
              <span>Career</span>
              <div className="careerBlock">
                <p className="careerName">2020.05 ~ 2021.01 / 광주보건대학교산학헙력단 산하 원격평생교육원</p>
                <p>디자인팀 / 사원</p>
                <ul>
                  <li>원격평생교육원 설립을 위한 서무 업무</li>
                  <li>원격평생교육원 내 벽보 제작</li>
                </ul>
              </div>
              <div className="careerBlock">
                <p className="careerName">2021.01 ~ 2023.06 / (주) 여보야</p>
                <p>플랫폼사업부 개발팀 프론트엔드파트 / 주임</p>
                <ul>
                  <li>라이브 플랫폼 클럽라이브 html, css 퍼블리싱 작업</li>
                  <li>
                    라이브 플랫폼 달라 React를 이용한 전체 리뉴얼 작업 및 내부 페이지 작업
                    <ul className="careerLink">
                      <li className="list">
                        <a href="https://www.dallalive.com/starRisingBj">스타BJ 소개 페이지</a>
                      </li>
                      <li className="list">
                        <a href="https://www.dallalive.com/event/youtubeZip">유튜브 모음 페이지</a>
                      </li>
                      <li className="list">
                        <a href="https://www.dallalive.com/event/contentstar">콘텐츠 지원센터 페이지</a>
                      </li>
                      <li className="list">
                        <a href="https://www.dallalive.com/event/attendance?tab=attendance">출석 이벤트 페이지</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <aside>
            <div className="profilePic">
              <img src="./imgs/OSLO-5.png" />
            </div>
            <div className="goGit">
              <a href="https://github.com/humnyenye?tab=repositories">GITHUB</a>
            </div>
            <div className="skillBox">
              {skills.map((skill) => (
                <SkillBar key={skill.name} skillName={skill.name} skillPercentage={skill.percentage} />
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
