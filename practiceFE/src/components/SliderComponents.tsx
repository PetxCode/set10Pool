import { FC, useEffect, useState } from "react";
import pix from "../assets/pics/mainDes.jpg";
import pix1 from "../assets/pics/part.jpg";
import pix2 from "../assets/pics/set10.jpg";
import pix3 from "../assets/pics/set102.jpg";
import pix4 from "../assets/pics/set10i.jpg";
import pix5 from "../assets/pics/setNext.jpg";

import {
  animate,
  AnimatePresence,
  motion,
  useMotionValue,
} from "framer-motion";
import useMeasure from "react-use-measure";

const image = [pix, pix1, pix2, pix3, pix4, pix5];

const SliderComponents = () => {
  const [ref, { width }] = useMeasure();
  const xMove = useMotionValue(0);

  const FAST: number = 30;
  const SLOW: number = 80;

  const [duration, setDuration] = useState<number>(FAST);

  const [finished, setFinished] = useState<boolean>(false);
  const [render, setRender] = useState<boolean>(false);

  useEffect(() => {
    let control;
    let finalPosition = -width / 2 - 8;

    if (finished) {
      control = animate(xMove, [xMove.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xMove.get() / finalPosition),
        onComplete: () => {
          setRender(!render);
          setFinished(true);
        },
      });
    } else {
      control = animate(xMove, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatDelay: 0,
        repeatType: "loop",
      });
    }

    return () => control?.stop();
  }, [xMove, width, duration, render]);

  return (
    <div className="m-4">
      <motion.div
        onHoverStart={() => {
          setDuration(SLOW);
          setFinished(true);
        }}
        onHoverEnd={() => {
          setDuration(FAST);
          setFinished(true);
        }}
        className="absolute flex gap-4"
        ref={ref}
        style={{ x: xMove }}
      >
        {[...image, ...image].map((el: string, i: number) => (
          <Slider key={i} el={el} />
        ))}
      </motion.div>
    </div>
  );
};

export default SliderComponents;

interface iProps {
  el: string;
}

const Slider: FC<iProps> = ({ el }) => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <motion.div
      onHoverStart={() => {
        setHover(true);
      }}
      onHoverEnd={() => {
        setHover(false);
      }}
      className="w-[210px] h-[300px] border rounded-md cursor-pointer relative "
    >
      <AnimatePresence>
        {hover && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 w-full h-full flex justify-center items-center "
          >
            <div className="bg-black absolute inset-0 rounded-md opacity-50 " />
            <motion.div
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}
              className="w-[80%] h-[80px] border rounded-md bg-white text-[12px p-3 z-20"
            >
              started
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <img
        src={el}
        alt="image"
        className="w-full h-full object-cover border rounded-md"
      />
    </motion.div>
  );
};
