import { useEffect, useState } from "react";

const DisplayScreen = () => {
  const [count, setCount] = useState<number>(5);
  const [canPick, setCanPick] = useState<boolean>(false);

  const [pickValue, setPickValue] = useState<number>(0);

  useEffect(() => {
    if (count <= 0) {
      setCanPick(true);
    } else {
      let x = setTimeout(() => {
        setCount((el) => el - 1);

        clearTimeout(x);
      }, 1000);
    }
  }, [canPick, count]);

  console.log("clean");

  return (
    <div>
      <div className="w-full h-[400px] bg-slate-50 border overflow-hidden">
        {/* <SliderScreen /> */}
      </div>

      <div className="m-10 font-semibold"> Count: {count}</div>

      <div className="m-10 font-semibold"> Number: {pickValue}</div>

      <div>
        <button
          onClick={() => {
            setPickValue(Math.floor(Math.random() * 1000));
          }}
          disabled={canPick}
          className={`px-10 py-2 m-4 ${
            pickValue ? "bg-green-500 text-white" : "bg-slate-100"
          } border rounded-md`}
        >
          Pick
        </button>
      </div>
    </div>
  );
};

export default DisplayScreen;
