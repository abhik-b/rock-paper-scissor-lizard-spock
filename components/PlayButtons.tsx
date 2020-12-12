import { AnimateSharedLayout, motion } from "framer-motion";
import React, { FunctionComponent } from "react";
import styles from "../styles/Play.module.css";
import Button from "./Button";

type PlayButtonProps = {
  advanced: boolean;
  onCLick: any;
};

const PlayButtons: FunctionComponent<PlayButtonProps> = ({
  advanced,
  onCLick,
}) => {
  return (
    <AnimateSharedLayout>
      <motion.div className={styles.playbuttons}>
        {advanced ? (
          <div className={styles.threegrid}>
            <Button
              onClicK={() => onCLick(0)}
              classN={styles.scissor}
              lid="scissor"
            >
              <img src="/icon-scissor.svg" alt="" />
            </Button>
            <Button onClicK={() => onCLick(3)} classN={styles.spock}>
              {" "}
              <img src="/icon-spock.svg" alt="" />
            </Button>
            <Button
              onClicK={() => onCLick(1)}
              classN={styles.paper}
              lid="paper"
            >
              <img src="/icon-paper.svg" alt="" />
            </Button>
            <Button onClicK={() => onCLick(4)} classN={styles.lizard}>
              <img src="/icon-lizard.svg" alt="" />
            </Button>
            <Button onClicK={() => onCLick(2)} classN={styles.rock} lid="rock">
              <img src="/icon-rock.svg" alt="" />
            </Button>
          </div>
        ) : (
          <div className={styles.twogrid}>
            <Button onClicK={() => onCLick(0)} classN={styles.sci2} lid="sci">
              <img src="/icon-scissor.svg" alt="" />
            </Button>
            <Button
              onClicK={() => onCLick(1)}
              classN={styles.paper2}
              lid="paper"
            >
              <img src="/icon-paper.svg" alt="" />
            </Button>
            <Button onClicK={() => onCLick(2)} classN={styles.rock2} lid="rock">
              <img src="/icon-rock.svg" alt="" />
            </Button>
          </div>
        )}
      </motion.div>
    </AnimateSharedLayout>
  );
};

export default PlayButtons;
