import { useEffect, useState } from "react";
import useSocket from "./hooks/useSocket";
import data from "./data.json";

const App = () => {
  const socket = useSocket();
  const [value, setValue] = useState<number>(0);
  const [pick, setPick] = useState<any | null>(null);

  const [result, setResult] = useState<Array<{}>>([]);

  const [timing, setTiming] = useState<number>(20);

  useEffect(() => {
    socket?.on("question", (res) => {
      setValue(res);
    });
    socket?.on("nullValue", (res) => {
      setPick(res);
    });

    socket?.emit("question", value);
  }, [socket, value]);

  const changeValueNumber = () => {
    setValue((el) => el + 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTiming((el) => el - 1);

      clearTimeout(timer);
    }, 1000);
  }, [timing]);

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <div className="text-[20px]">{timing}</div>
      <div
        onClick={changeValueNumber}
        className="mb-5 bg-blue-950 rounded-md px-8 py-3 text-white cursor-pointer"
      >
        Next Question
      </div>
      <div className="w-[600px] h-[400px] border rounded-md p-2">
        <h1 className="text-center text-[20px] font-semibold mb-20">
          Question {value + 1}
        </h1>
        <p>{data[value].title}</p>
        <div className="my-10">
          <hr />
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {data[value].options.map((el: any, i: number) => (
            <button
              key={i}
              className={`px-10 py-4 rounded-md ${
                el.id === pick?.id
                  ? "bg-green-500 text-white font-semibold"
                  : "bg-slate-50"
              } border`}
              onClick={() => {
                setPick(el);
                result.push(el);
              }}
            >
              {el.option}
            </button>
          ))}
        </div>
        {pick && <div className="mt-5">Your choice is: {pick?.option} </div>}
      </div>
    </div>
  );
};

export default App;
