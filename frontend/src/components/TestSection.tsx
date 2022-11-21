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
    return <span style={{ color: "black" }}>{text}</span>;
  }

  if (correct === false) {
    return (
      <span
        style={{
          color: "red",
          marginTop: 0,
          marginBottom: 0,
          textDecoration: 'underline'
        }}
      >
        {text}
      </span>
    );
  }

  if (active) {
    return (
      <span
        className={styles.activeChar}
        ref={activeRef}
        style={{ color: "black" }}
      >
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


// TODO: try to avoid wrapping text
const TestSection = () => {
  const [currentRow, setCurrentRow] = useState<number>(0);
  const [currentRowIndex, setCurrentRowIndex] = useState<number>(-1);
  const [userInput, setUserInput] = useState<string>("");
  const [rowHeight, setRowHeight] = useState(41); // it should be set as static property

  const [activeCharIndex, setActiveCharIndex] = useState<number>(0);
  const [correctCharArray, setCorrectCharArray] = useState([]);

  const text = getCloud();

  const processInput = (value) => {
    setActiveCharIndex((index) => index + 1);
    setUserInput("");

    setCorrectCharArray((data) => {
      const newResult = [...data];
      newResult[activeCharIndex] = value === text[activeCharIndex];
      return newResult;
    });
  };

  const testRef = useRef(null);

  useEffect(() => {
    if (currentRowIndex > 0) {
      testRef.current.scroll(0, rowHeight * currentRowIndex);
    }
  }, [currentRowIndex]);

  const inputRef = useRef(null);

  return (
    <Box sx={{ zIndex: "10000" }} onClick={() => inputRef.current.focus()}>
      <Typography
        variant={"h4"}
        ref={testRef}
        sx={{
          // lineHeight: "100%",
          height: `${rowHeight * 2}px`,
          overflow: "hidden",
          whiteSpace: 'normal'
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
        ref={inputRef}
        style={{ position: "absolute" }}
        onChange={(e) => processInput(e.target.value)}
      />
    </Box>
  );
};

export default TestSection;
