import React from "react";
import styled from "styled-components";

const StyledP = styled.p`
  font-weight: bold;
  color: red;
`;

const StyledA = styled.a`
  color: blue;
  font-weight: bold;
`;

const Footer = (props) => {
  const { data } = props;

  return (
    <div className="footer">
      <StyledP>If you're seeing this then the API is down</StyledP>
      <StyledP>
        Find the project{" "}
        <StyledA>
          <a href="https://github.com/boahs/nasa-photo-day">here</a>
        </StyledA>{" "}
      </StyledP>
    </div>
  );
};
export default Footer;
