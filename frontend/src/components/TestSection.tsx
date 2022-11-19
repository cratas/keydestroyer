import React, { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";

type Props = {};

const Char = ({ active, text, correct, handleCurrentWidth }) => {
  const rerender = useRef(0);
  const activeRef = useRef(null);

  useEffect(() => {
    active && handleCurrentWidth(activeRef?.current.offsetWidth);
  }, [active]);

  useEffect(() => {
    rerender.current += 1;
  });

  if (correct === true) {
    return <span style={{ color: "green" }}>{text}</span>;
  }

  if (correct === false) {
    return <span style={{ color: "red" }}>{text}</span>;
  }

  if (active) {
    return (
      <span ref={activeRef} style={{ color: "black" }}>
        {text}
      </span>
    );
  }

  return <span style={{ color: "grey" }}>{text}</span>;
};

const MemoizedChar = React.memo(Char);

const text =
  "hello kamil if know may affect after because it help more hello kamil if know may affect after because it help morehello kamil if know may affect after because it help morehello kamil if know may affect after because it help morehello kamil if know may affect after because it help morehello kamil if know may affect after because it help morehello kamil if know may affect after because it help more";

const TestSection = (props: Props) => {
  const [userInput, setUserInput] = useState<string>("");
  const [activeRowWidth, setActiveRowWidth] = useState<number>(0);

  const getCloud = () => {
    return text.split("");
  };

  const cloud = useRef(getCloud());

  const [activeCharIndex, setActiveCharIndex] = useState<number>(-1);
  const [correctCharArray, setCorrectCharArray] = useState([]);

  const processInput = (value) => {
    // the user has finsihed this word
    setActiveCharIndex((index) => index + 1);
    setUserInput("");

    // correct word
    setCorrectCharArray((data) => {
      const word = value.trim();
      const newResult = [...data];
      newResult[activeCharIndex] = word === cloud.current[activeCharIndex];

      return newResult;
    });
    setUserInput(value);
  };

  const testRef = useRef(null);

  useEffect(() => {
    console.log("active row width", activeRowWidth);
    console.log("test width", testRef?.current?.offsetWidth);
  }, [activeRowWidth]);

  return (
    <Box>
      <Box ref={testRef}>
        <Typography variant={"h5"}>
          {cloud.current.map((character, index) => (
            <MemoizedChar
              text={character}
              active={index === activeCharIndex}
              correct={correctCharArray[index]}
              handleCurrentWidth={(value) =>
                setActiveRowWidth(activeRowWidth + value)
              }
            />
          ))}
        </Typography>
      </Box>

      <input
        type="text"
        value={userInput}
        onChange={(e) => processInput(e.target.value)}
      />
    </Box>
  );
};

export default TestSection;
