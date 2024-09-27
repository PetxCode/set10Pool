import { FC, useEffect, useState } from "react";
import pix from "../assets/pics/mainDes.jpg";
import pix1 from "../assets/pics/mainDesign.jpg";
import pix2 from "../assets/pics/part.jpg";
import pix3 from "../assets/pics/set10.jpg";
import pix4 from "../assets/pics/set102.jpg";
import pix5 from "../assets/pics/set10i.jpg";
import pix6 from "../assets/pics/setNext.jpg";

import {
  animate,
  AnimatePresence,
  motion,
  useMotionValue,
} from "framer-motion";
import useMeasure from "react-use-measure";

const images = [pix, pix2, pix3, pix4, pix5, pix6];

const SliderScreen = () => {
  const [ref, { width }] = useMeasure();
  let xTransition = useMotionValue(0);

  const SLOW: number = 80;
  const FAST: number = 30;

  const [duration, setDuration] = useState<number>(FAST);

  const [render, setRender] = useState<boolean>(false);
  const [finished, setFinished] = useState<boolean>(false);

  useEffect(() => {
    let control;
    let finalX = -width / 2 - 8;

    if (finished) {
      control = animate(xTransition, [xTransition.get(), finalX], {
        ease: "linear",
        duration: duration * (1 - xTransition.get() / finalX),
        onComplete: () => {
          setRender(!render);
          setFinished(false);
        },
      });
    } else {
      control = animate(xTransition, [0, finalX], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatDelay: 0,
        repeatType: "loop",
      });
    }
    return () => control.stop();
  }, [xTransition, width, duration, finished]);

  return (
    <div className="h-[400px] flex justify-center items-center overflow-hidden">
      <motion.div
        onHoverEnd={() => {
          setDuration(FAST);
          setFinished(true);
        }}
        onHoverStart={() => {
          setDuration(SLOW);
          setFinished(true);
        }}
        className="absolute left-2 flex gap-4  overflow-hidden"
        ref={ref}
        style={{ x: xTransition }}
      >
        {[...images, ...images].map((el: string, i: number) => (
          <Card key={i} el={el} />
        ))}
      </motion.div>
    </div>
  );
};

export default SliderScreen;
interface iProps {
  el: string;
}
const Card: FC<iProps> = ({ el }) => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <motion.div
      className="h-[300px] w-[210px] rounded-md overflow-hidden border cursor-pointer relative"
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
    >
      <AnimatePresence>
        {hover && (
          <motion.div
            className="absolute w-full h-full flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black opacity-50 z-10 w-full h-full" />
            <motion.div
              className="w-[80%] h-[70px] bg-white rounded-[3px] shadow-inner text-[12px] p-2 z-50 "
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}
            >
              Started
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <img
        className="w-full h-full object-cover shadow-inner"
        src={el}
        alt="image"
      />
    </motion.div>
  );
};
