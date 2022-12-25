import React from "react";
import styled from "styled-components";

const Countdown = styled.div`
  line-height: 2.75rem;
  padding: 0 0.75rem 0 0.75rem;
  align-items: center;
  display: flex;
  flex-direction: column;

  & > p {
    margin: 0;
    font-size: 2.5rem;
  }

  & > span {
    text-transform: uppercase;
    font-size: 0.75rem;
    line-height: 1rem;
  }
`;

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <>
      <Countdown>
        <p className={isDanger ? "danger" : ""}>{value}</p>
        <span>{type}</span>
      </Countdown>
    </>
  );
};

export default DateTimeDisplay;
