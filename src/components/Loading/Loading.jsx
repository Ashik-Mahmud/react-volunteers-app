import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <Loader>
      <img
        src="https://flevix.com/wp-content/uploads/2020/01/Bounce-Bar-Preloader-1.gif"
        alt="loader"
      />
    </Loader>
  );
};
const Loader = styled.div`
  text-align: center;
`;
export default Loading;
