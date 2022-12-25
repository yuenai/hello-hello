import React from "react";
import styled from "styled-components";

const ShowsMessageFooter = styled.div`
  margin: 20px 0;
  background: rgb(168, 26, 41);
  background: linear-gradient(145deg, rgba(168, 26, 41, 1) 50%, rgba(20, 153, 70, 1) 50%);
  text-align: center;
  padding: 0.5rem;
`;

const MessageFooterBox = styled.div`
  border-radius: 0.25rem;
  padding: 0.5rem;
  background-color: white;
  text-align: center;
`;

const Footer = () => {
  return (
    <ShowsMessageFooter>
      <MessageFooterBox>
        <p> Happy New Year </p>
        <p> THANKYOU FOR EVERYTHING </p>
      </MessageFooterBox>
    </ShowsMessageFooter>
  );
};

export default Footer;
