import React, { useRef, useCallback, useEffect, useState } from "react";
import { Box } from "@mui/material";
import tmp from "./tmp.module.css";

type Props = {};

const text =
  "hello kamil if know may affect after because it help more hello kamil if know may affect after because it help morehello kamil if know may affect after because it help morehello kamil if know may affect after because it help morehello kamil if know may affect after because it help morehello kamil if know may affect after because it help morehello kamil if know may affect after because it help more";

const TestSection = (props: Props) => {
  const inputRef = useRef(null);
  const [currentPosition, setCurrentPosition] = useState<number>(0);

  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    // Setting focus here
    inputRef.current.setSelectionRange(currentPosition, currentPosition);
    inputRef.current.focus();
  }, [currentPosition]);

  const myStyle = {
    fontSize: "30px",
    border: "none",
    left: `${currentPosition *10 * -1}px`,
  };

  const handleChange = (event) => {
    console.log(event.nativeEvent.data);

    if (event.nativeEvent.data === Array.from(text)[currentPosition]) {
      setMessage(event.target.value);
      setCurrentPosition(currentPosition + 1);
    } else {
      return;
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        width: "auto",
        height: "40rem",
      }}
    >
      <input
        ref={inputRef}
        id="w3review"
        style={{ position: "absolute", width: "100%", ...myStyle }}
        placeholder={text}
      />
      <input
        ref={inputRef}
        id="w3review"
        style={{
          position: "absolute",
          width: "100%",
          zIndex: 1,
          background: "transparent",
          ...myStyle,
        }}
        value={message}
        onChange={handleChange}
      />
    </Box>
  );
};

export default TestSection;
