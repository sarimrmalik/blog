import React, { useCallback, useEffect, useRef, useState } from "react";

const BlobFollower = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const updateCursorPosition = useCallback(
    (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    },
    [setCursorPosition]
  );

  useEffect(() => {
    document.addEventListener("mousemove", updateCursorPosition);
  }, []);

  return (
    <div
      id="cursor-blob"
      style={{
        transform: `translate3d(calc(${cursorPosition.x}px - 50%), calc(${cursorPosition.y}px - 50%), 0)`,
      }}
    />
  );
};

export default BlobFollower;
