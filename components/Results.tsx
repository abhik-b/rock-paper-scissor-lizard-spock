import { motion } from "framer-motion";
import React, { FunctionComponent, useEffect, useState } from "react";
import { randomInt } from "../shared/randomInt";
import { GameRules } from "../shared/rules";
import styles from "../styles/Results.module.css";
import styles2 from "../styles/Play.module.css";
import Button from "./Button";

type ResultsProps = {
  selected: number;
  advanced: boolean;
  setselected: any;
  setscore: any;
};

export const Results: FunctionComponent<ResultsProps> = ({
  selected,
  setselected,
  setscore,
  advanced,
}) => {
  const [result, setResult] = useState("");
  const [house, setHouse] = useState("");
  const [show, setShow] = useState(false);
  useEffect(() => {
    const randomNum = randomInt(advanced ? 5 : 3);
    const userSelected = GameRules[selected].value;

    setTimeout(() => {
      setShow(true);
      setHouse(GameRules[randomNum].value);
      if (GameRules[randomNum].beats.includes(userSelected)) {
        setResult("Lose");
        setscore((score) => score - 1);
      } else {
        if (GameRules[randomNum].value === userSelected) {
          setResult("Tie");
        } else {
          setResult("win");
          setscore((score) => score + 1);
        }
      }
    }, 2000);
  }, []);
  return (
    <div className={show ? styles.results : styles.pending}>
      <div className={styles.pick}>
        <h3>You Picked</h3>
        <motion.div
          className={result === "win" ? styles.win : styles.house}
          initial={{ y: 20 }}
          animate={{ y: 0, transition: { loop: 3 } }}
        >
          <Button
            classN={`${styles2[GameRules[selected].value]} ${styles.btn}`}
          >
            <img src={`/icon-${GameRules[selected].value}.svg`} alt="" />
          </Button>
        </motion.div>
      </div>

      <div className={styles.pick}>
        <h3>House Picked</h3>
        <motion.div
          className={result === "Lose" ? styles.win : styles.house}
          initial={{ y: 20 }}
          animate={{ y: 0, transition: { loop: 3 } }}
        >
          {house && (
            <Button classN={`${styles2[house]} ${styles.btn}`}>
              <img src={`/icon-${house}.svg`} alt="" />
            </Button>
          )}
        </motion.div>
      </div>
      <div className={styles.result}>
        {show && (
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}>
            <h2>You {result}</h2>
            <div
              className={styles.playBtn}
              onClick={() => {
                setselected(-1);
                setResult("");
              }}
            >
              Play again
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
