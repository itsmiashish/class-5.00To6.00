import React, { useState } from "react";
import AllTodoes from "./AllTodoes";
import CompletedTodoes from "./CompletedTodoes";

const TodoApp = () => {
  const [toggleTodoes, setToggleTodoes] = useState(true);
  const [allTodoes, setAllTodoes] = useState([]);
  const [completedTodoes, setCompletedTodoes] = useState([]);

  const allTodoesProps = {
    allTodoes,
    setAllTodoes,
    completedTodoes,
    setCompletedTodoes,
  };

  return (
    <>
      <div className="h-screen center flex-col ">
        {/* <div className="flex justify-around  bg-slate-400 w-full border-2 border-black rounded-lg ">
   
     
      
    </div> */}
        <div className="flex flex-col w-auto ">
          <div className="flex w-full rounded-lg   ">
            <div
              className="bg-red-700 w-[300px] py-1 center text-white cursor-pointer rounded"
              onClick={() => setToggleTodoes(true)}
            >
              All Todoes
            </div>
            <div
              className="bg-green-700 w-[300px] center py-1 text-white cursor-pointer  rounded"
              onClick={() => setToggleTodoes(false)}
            >
              Completed Todoes
            </div>
          </div>
          {toggleTodoes ? (
            <AllTodoes data={allTodoesProps} />
          ) : (
            <CompletedTodoes data={allTodoesProps} />
          )}
        </div>
      </div>

      <div></div>
    </>
  );
};

export default TodoApp;
