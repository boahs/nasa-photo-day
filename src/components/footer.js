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
      <StyledP>
        If you're seeing no data being returned above then API is down{data}
      </StyledP>
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
