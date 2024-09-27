import { useContext, useEffect, useState } from "react";
import useSocket from "../hooks/useSocket";
import data from "../data.json";
import { ContextProvider } from "../global/GlobalProvider";

import readData from "../data/data.json";
import moment from "moment";

const QuestionScreen = () => {
  const { user }: any = useContext(ContextProvider);
  const socket = useSocket();
  const [value, setValue] = useState<number>(0);
  const [pick, setPick] = useState<any | null>(null);

  const [result, setResult] = useState<Array<{}>>([]);

  const [timing, setTiming] = useState<number>(20);

  const [stage, setStage] = useState<string>("");
  useEffect(() => {
    socket?.on("question", (res) => {
      setValue(res);
    });
    socket?.on("stage", (res) => {
      setStage(res);
    });
    socket?.on("nullValue", (res) => {
      setPick(res);
    });

    socket?.emit("question", value);
    socket?.emit("stage", stage);

    socket?.emit("picked");
  }, [socket, value, stage]);

  const changeValueNumber = () => {
    setValue((el) => el + 1);
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setTiming((el) => el - 1);

  //     clearTimeout(timer);
  //   }, 1000);
  // }, [timing]);

  let myData: any = { ...readData };

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <div className="text-[12px] flex gap-4 my-10 ">
        {Object.keys(readData).map((el: string, i: number) => (
          <div
            className={`px-10 py-3 rounded-md border  ${
              stage === el
                ? "bg-blue-950 text-white "
                : "bg-slate-50 text-black"
            }  `}
            onClick={() => setStage(el)}
          >
            {el}
          </div>
        ))}
      </div>
      <div className="text-[20px]">{user?.name}</div>
      {user?.status === "admin" && (
        <div
          onClick={changeValueNumber}
          className="mb-5 bg-blue-950 rounded-md px-8 py-3 text-white cursor-pointer"
        >
          Next Question
        </div>
      )}
      <div className="w-[600px] h-[400px] border rounded-md p-2">
        <h1 className="text-center text-[20px] font-semibold mb-20">
          Question {value + 1} / {stage}
        </h1>
        <p>{myData[stage]?.data[value]?.title}</p>
        <p>{myData[stage]?.data[value]?.question}</p>
        <div className="my-10">
          <hr />
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {data[value].options.map((el: any, i: number) => (
            <button
              // disabled={user ? false : true}
              key={i}
              className={`px-10 py-4 rounded-md ${
                el.id === pick?.id
                  ? "bg-green-500 text-white font-semibold"
                  : "bg-slate-50"
              } 
              ${!user && "cursor-not-allowed"}
              border`}
              onClick={() => {
                setPick({
                  ...el,
                  createdAt: moment(new Date().getTime()).format("LTS"),
                });
                result.push({
                  ...el,
                  createdAt: moment(new Date().getTime()).format("LTS"),
                });
              }}
            >
              {el.option}
            </button>
          ))}
        </div>
        {pick && <div className="mt-5">Your choice is: {pick?.option} </div>}
        {pick && <div className="mt-5">Your choice is: {pick?.createdAt} </div>}

        <div>{}</div>
      </div>
    </div>
  );
};

export default QuestionScreen;
