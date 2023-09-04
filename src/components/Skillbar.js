import React from "react";

const Skillbar = ({ skillName, skillPercentage }) => {
  return (
    <div className="skill">
      <p>{skillName}</p>
      <div className="progress">
        <div
          className={`progress-bar ${skillName.toLowerCase()}`}
          role="progressbar"
          style={{ width: `${skillPercentage}%` }}
          aria-valuenow={skillPercentage}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
    </div>
  );
};

export default Skillbar;
