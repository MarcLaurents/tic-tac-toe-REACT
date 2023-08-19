// ? Creates a component.
// ? In REACT, a component is a piece of reusable code that represents a part of a user interface.
// ? Components are used to render, manage, and update the UI elements in your application.
import { useState } from 'react'

function Square({ value, onSquareClick }) {
  return (
    // ? onClick is a prop.
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  )
}

// ? Board is a component
export default function Board() {
  // ? squares is a variable that stores useState value.
  // ? setSquares is a function.
  // ? Array(9): Creates an array with length 9.
  // ? .fill(null): Fill the array elements with value null.
  // ? useState(): Declares a squares state variable that’s initially set to that array.
  // ? Each entry in the array corresponds to the value of a square.
  const [xIsNext, setXIsNext] = useState(true)
  const [squares, setSquares] = useState(Array(9).fill(null))

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return
    }
    const nextSquares = squares.slice()
    xIsNext ? (nextSquares[i] = 'X') : (nextSquares[i] = 'O')
    setSquares(nextSquares)
    setXIsNext(!xIsNext)
  }

  const winner = calculateWinner(squares)
  let status
  winner
    ? (status = `Winner: ${winner}`)
    : (status = `Next player: ${xIsNext ? 'X' : 'O'}`)

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        // ? onSquareClick is a prop function from the Board.
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}
