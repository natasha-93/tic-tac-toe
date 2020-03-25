import React from 'react';

function Box({ value = " ", onSelect, index }) {
  return (
    <div style={{ width: "3rem", height: "3rem", border: "1px solid black", display: "inline-block", position: "relative" }} onClick={e => {
      onSelect(index)
    }}>
      <span style={{ position: "absolute", top: 0, left: 0 }}>{value}</span>
    </div>
  );
}

export default Box;