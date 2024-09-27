import pix from "../assets/pics/mainDes.jpg";
import pix1 from "../assets/pics/part.jpg";
import pix2 from "../assets/pics/set10.jpg";
import pix3 from "../assets/pics/set102.jpg";
import pix4 from "../assets/pics/set10i.jpg";
import pix5 from "../assets/pics/setNext.jpg";

const image = [pix, pix1, pix2, pix3, pix4, pix5];

const SliderComponents = () => {
  return (
    <div className="m-4">
      <div>
        <Slider />
      </div>
    </div>
  );
};

export default SliderComponents;

const Slider = () => {
  return <div className="w-[210px] h-[300px] border rounded-md">slider</div>;
};
