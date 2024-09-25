import { useState } from "react";
import "./App.css";
import { DominoCard } from "./components/domino";
import Wrapper from "./components/wrapper";
import {
  doubles,
  flip,
  removeData,
  removeDupes,
  sortAsc,
  sortDesc,
} from "./utils";

function App() {
  const dominoes: number[][] = [
    [6, 1],
    [4, 3],
    [5, 1],
    [3, 4],
    [1, 1],
    [3, 4],
    [1, 2],
  ];

  const [data, setData] = useState([...dominoes]);
  const [number, setNumber] = useState(0);

  const doubleCount = doubles(dominoes);

  return (
    <Wrapper>
      <div>
        <h1 className="text-3xl font-semibold text-pretty mb-2">Dominoes App</h1>
      </div>
      <div className="bg-amber-200 border-solid border-2 border-slate-500 w-full  m-2 shadow-black shadow-sm">
        <h1 className="text-xl font-bold text-start p-2">Source:</h1>
        <div className="font-semibold text-start mt-10 p-2">
          {JSON.stringify(dominoes)}
        </div>
      </div>
      <div className="bg-amber-200 border-solid border-2 border-slate-500 w-full m-2 shadow-black shadow-sm">
        <h1 className="text-xl font-bold text-start p-2">Doubles</h1>
        <div className="font-semibold text-start mt-10 p-2">
          {doubleCount > 1 ? (
            <p>There are {doubleCount} doubles</p>
          ) : (
            <p>There is {doubleCount} doubles</p>
          )}
        </div>
      </div>

      <div className="flex flex-col m-4 items-center">
        <h1 className="text-xl font-bold mb-4">Preview of Domino Cards</h1>
        <div className="grid lg:grid-flow-row lg:grid-cols-3 ">
          {data.map((domino, index) => (
            <DominoCard
              key={index}
              left={domino[0]}
              right={domino[1]}
            ></DominoCard>
          ))}
        </div>
      </div>

      <div className="m-4 flex flex-col">
        <div className="flex lg:flex-row flex-col justify-evenly gap-2 items-center">
          <button
            onClick={() => setData(sortAsc(data))}
            className="bg-blue-500 hover:bg-blue-700 hover:shadow-md duration-500 text-white font-bold p-2 border-solid rounded-lg border-black w-[8rem]"
          >
            Sort(ASC)
          </button>
          <button
            onClick={() => setData(sortDesc(data))}
            className="bg-blue-500 hover:bg-blue-700 hover:shadow-md duration-500 text-white font-bold p-2 border-solid rounded-lg border-black w-[8rem]"
          >
            Sort(DESC)
          </button>
          <button
            onClick={() => setData(flip(data))}
            className="bg-blue-500 hover:bg-blue-700 hover:shadow-md duration-500 text-white font-bold p-2 border-solid rounded-lg border-black w-[8rem]"
          >
            Flip
          </button>
          <button
            onClick={() => setData(removeDupes(data))}
            className="bg-blue-500 hover:bg-blue-700 hover:shadow-md duration-500 text-white font-bold p-2 border-solid rounded-lg border-black w-[8rem]"
          >
            Remove Dupe
          </button>
          <button
            onClick={() => setData([...dominoes])}
            className="bg-blue-500 hover:bg-blue-700 hover:shadow-md duration-500 text-white font-bold p-2 border-solid rounded-lg border-black w-[8rem]"
          >
            Reset
          </button>
        </div>
        <div className="flex flex-col m-2 gap-5 items-center p-2">
          <input
            placeholder="Input number"
            className="text-black p-2 border-solid rounded-md border-black border-2 max-w-[600px]"
            onChange={(e) => setNumber(Number(e.target.value))}
          />

          <button
            onClick={() => setData(removeData(dominoes, number))}
            className="bg-blue-500 hover:bg-blue-700 hover:shadow-md duration-500 text-white font-bold p-2 border-solid rounded-lg border-black w-[8rem]"
          >
            Remove
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

export default App;
