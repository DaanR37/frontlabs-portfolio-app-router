import { motion, useInView } from "framer-motion";
import { slideUp, opacity } from "./animContact";
import styles from "./style.module.scss";
import { useRef } from "react";

export default function AnimatedTextContact() {
  const container = useRef(null);
  const isInView = useInView(container);
  const phrase = "Leave me a quote & let's talk";

  return (
    <div ref={container} className={styles.description}>
      <div className={styles.body}>
        <p>
          {phrase.split(" ").map((word, index) => {
            return (
              <span key={index} className={styles.mask}>
                <motion.span
                  key={index}
                  variants={slideUp}
                  custom={index}
                  initial="initial"
                  animate={isInView ? "open" : "closed"}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
}
