import React from "react";
import "./Calculator.css";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";

export default function Calculator() {
  return (
    <div>
      <h1>Calculadora</h1>
      <Box m={3} />
      <Container maxWidth="xs">
        <div className="wrapper">
          <Box m={12} />
          <h1 className="result">123</h1>
          <button >AC</button>
          <button >+/-</button>
          <button >%</button>
          <button className="orange" value="/">
            /
          </button>
          <button className="gray" value={7}>
            7
          </button>
          <button className="gray" value={8}>
            8
          </button>
          <button className="gray" value={9}>
            9
          </button>
          <button className="orange" value="X">
            X
          </button>
          <button className="gray" value={4}>
            4
          </button>
          <button className="gray" value={5}>
            5
          </button>
          <button className="gray" value={6}>
            6
          </button>
          <button className="orange" value="-">
            -
          </button>
          <button className="gray" value={1}>
            1
          </button>
          <button className="gray" value={2}>
            2
          </button>
          <button className="gray" value={3}>
            3
          </button>
          <button className="orange" value="+">
            +
          </button>
          <button className="gray" value={0}>
            0
          </button>
          <button className="gray" value={"."}>
            ,
          </button>
          <button className="gray" style={{ visibility: "hidden" }}>
            ,
          </button>
          <button className="orange">
            =
          </button>
        </div>
      </Container>
    </div>
  );
}