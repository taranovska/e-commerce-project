import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const Stars = ({ reviews, stars }) => {
  return (
    <Wrapper>
      <div className="stars">
        <span>
          {stars >= 1 ? (
            <BsStarFill></BsStarFill>
          ) : stars >= 0.5 ? (
            <BsStarHalf></BsStarHalf>
          ) : (
            <BsStar></BsStar>
          )}
          {stars >= 2 ? (
            <BsStarFill></BsStarFill>
          ) : stars >= 1.5 ? (
            <BsStarHalf></BsStarHalf>
          ) : (
            <BsStar></BsStar>
          )}
          {stars >= 3 ? (
            <BsStarFill></BsStarFill>
          ) : stars >= 2.5 ? (
            <BsStarHalf></BsStarHalf>
          ) : (
            <BsStar></BsStar>
          )}
          {stars >= 4 ? (
            <BsStarFill></BsStarFill>
          ) : stars >= 3.5 ? (
            <BsStarHalf></BsStarHalf>
          ) : (
            <BsStar></BsStar>
          )}
          {stars === 5 ? (
            <BsStarFill></BsStarFill>
          ) : stars >= 4.5 ? (
            <BsStarHalf></BsStarHalf>
          ) : (
            <BsStar></BsStar>
          )}
        </span>
      </div>
      <div className="reviews">({reviews} customer reviews)</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`;
export default Stars;