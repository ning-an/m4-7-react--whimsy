import React from "react";
// import styled, { keyframes } from "styled-components";
import { useSpring, animated } from "react-spring";

// const Wrapper = styled.div`
//   z-index: 5;
//   position: absolute;
//   border-radius: 50%;
//   width: 100%;
//   height: 100%;
//   animation: ${turnBlue} 1s forwards;
// `;

export const PoppingCircle = () => {
  const turnBlue = useSpring({
    from: {
      backgroundColor: "pink",
      opacity: 1,
    },
    to: {
      backgroundColor: "blue",
      opacity: 0,
    },
    config: {
      duration: 200,
      tension: 400,
      friction: 50,
    },
  });
  return (
    <>
      <animated.div
        style={{
          zIndex: 5,
          position: "absolute",
          borderRadius: "50%",
          width: "100%",
          height: "100%",
          ...turnBlue,
        }}
      />
    </>
  );
};
