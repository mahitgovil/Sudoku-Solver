import React from "react";
import { Container } from "react-bootstrap";
import SudokuSolver from "./components/SudokuSolver";

export default function App() {
  return (
    <Container className="text-center">
      <h1 className="mt-3">Sudoku Solver</h1>
      <hr />
      <SudokuSolver />
    </Container>
  );
}
