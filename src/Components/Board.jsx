import React from 'react';
import Square from './Square';

const Board = ({ squares, handleSquareClick }) => {
  const renderSquare = (position) => {
    return <Square value={squares[position]} onClick={() => handleSquareClick(position)} />;
  };

  return (
    <>
      {/* First line row */}
      <div className='board'>
        <div className='board-row'>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>

        {/* Second line row */}
        <div className='board-row'>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>

        {/* Third line row */}
        <div className='board-row'>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    </>
  );
};

export default Board;
