import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseAmount,
  increaseAmount,
} from "../Features/Counter/counterSlice";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CounterContainer = styled.div`
  padding: 20px;
  display: flex;
`;

const CounterValue = styled.span`
  font-size: 25px;
`;

const CounterButton = styled.button`
  border: none;
  outline: none;
  color: white;
  padding: 10px;
  cursor: pointer;
  margin: 0px 30px;
  background-color: ${(props) => (props.background === "red" ? "red" : "blue")};
  border-radius: 10px;
`;

const CompleteName = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 35px;
`;

function Practice() {
  const { value } = useSelector((store) => store.counter);
  const refValue = useRef(0);
  const dispatch = useDispatch();

  console.log("Component rendering!");

  return (
    <Container>
      <CompleteName>Sergio Quijano</CompleteName>
      <CounterContainer>
        <CounterButton
          background={"red"}
          // onClick={() => setValue((prevValue) => prevValue - 1)}
          //   onClick={() => (refValue.current -= 1)}
          onClick={() => dispatch(decreaseAmount())}
        >
          Decrease
        </CounterButton>
        <CounterValue>{value}</CounterValue>
        <CounterButton
          background={"blue"}
          // onClick={() => setValue((prevValue) => prevValue + 1)}
          //   onClick={() => (refValue.current += 1)}
          onClick={() => dispatch(increaseAmount())}
        >
          Increase
        </CounterButton>
      </CounterContainer>
    </Container>
  );
}

export default Practice;
