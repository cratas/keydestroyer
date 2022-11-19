import React, { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./cursor.module.css";

type Props = {};

const Char = ({ active, text, correct, handleCurrentRow }) => {
  const activeRef = useRef(null);

  useEffect(() => {
    if (active) {
      handleCurrentRow(activeRef?.current?.offsetTop);
      // handleRowHeight(activeRef?.current?.offsetHeight);
    }
  }, [active]);

  if (correct === true) {
    return <span style={{ color: "green" }}>{text}</span>;
  }

  if (correct === false) {
    return (
      <span
        style={{
          color: "red",
          marginTop: 0,
          marginBottom: 0,
        }}
      >
        {text}
      </span>
    );
  }

  if (active) {
    return (
      <span className={styles.activeChar} ref={activeRef} style={{ color: "black" }}>
        {text}
      </span>
    );
  }

  return <span style={{ color: "grey" }}>{text}</span>;
};

const MemoizedChar = React.memo(Char);

const text =
  "hello kamil if know may affect after because it help more hello kamil if know may affect after because it help morehello kamil if know may affect after because it help morehello kamil if know may affect after because it help morehello kamil if know may affect after because it help morehello kamil if know may affect after because it help morehello kamil if know may affect after because it help more";

const getCloud = () => {
  return text.split("");
};

const TestSection = () => {
  const [currentRow, setCurrentRow] = useState<number>(0);
  const [currentRowIndex, setCurrentRowIndex] = useState<number>(-1);
  const [userInput, setUserInput] = useState<string>("");
  const [rowHeight, setRowHeight] = useState(41); // it should be set as static property

  const [activeCharIndex, setActiveCharIndex] = useState<number>(-1);
  const [correctCharArray, setCorrectCharArray] = useState([]);

  const text = getCloud();

  const processInput = (value) => {
    // the user has finsihed this word
    setActiveCharIndex((index) => index + 1);
    setUserInput("");

    // correct word
    setCorrectCharArray((data) => {
      const word = value.trim();
      const newResult = [...data];
      newResult[activeCharIndex] = word === text[activeCharIndex];

      return newResult;
    });
    setUserInput(value);
  };

  const testRef = useRef(null);

  useEffect(() => {
    if (currentRowIndex > 0) {
      testRef.current.scroll(0, rowHeight * currentRowIndex);
    }
  }, [currentRowIndex]);

  return (
    <Box>
      <Typography
        variant={"h4"}
        ref={testRef}
        sx={{
          // lineHeight: "100%",
          height: `${rowHeight * 3}px`,
          overflowY: "hidden",
        }}
      >
        {text.map((character, index) => (
          <MemoizedChar
            key={index}
            text={character}
            active={index === activeCharIndex}
            correct={correctCharArray[index]}
            handleCurrentRow={(value: number) => {
              if (value > currentRow) {
                setCurrentRow(value);
                setCurrentRowIndex(currentRowIndex + 1);
              }
            }}
          />
        ))}
      </Typography>

      <input
        type="text"
        value={userInput}
        onChange={(e) => processInput(e.target.value)}
      />
    </Box>
  );
};

export default TestSection;
