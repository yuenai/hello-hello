import React from "react";
import styled from "styled-components";
import ShowCounter from "./ShowCounter";
import { useCountdown } from "./useCountdown";
import Message from "../component/Message";

const Title = styled.h1`
  font-family: "Lobster Two", cursive;
  font-weight: 700;
  font-size: 2rem;
  padding: 10px 0;
`;

const ExpiredNotice = () => {
  return (
    <div className="text-[red]">
      <p>Sorry Message Expired :{"(("} </p>
      <img src="https://c.tenor.com/8RftKRe9hOEAAAAC/milk-mocha.gif" alt="mocha" />
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return (
      <>
        <Title>Happy New Year</Title>
        <ExpiredNotice />
      </>
    );
  } else {
    return (
      <>
        <Title>New Year Countdown</Title>
        <ShowCounter days={days} hours={hours} minutes={minutes} seconds={seconds} />
        <Message />
      </>
    );
  }
};

export default CountdownTimer;
