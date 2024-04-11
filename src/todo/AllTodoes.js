import React, {  useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AllTodoes = ({ data }) => {
  const [inputTodo, setInputTodo] = useState("");
  const [priority, setPriority] = useState("medium");
  // const [color, setColor] = useState()
  const { allTodoes, setAllTodoes, completedTodoes, setCompletedTodoes } = data;
  const addToCompletedItems = (index) => {
    const clickedTodo = allTodoes[index];
    setCompletedTodoes([...completedTodoes, clickedTodo]);
    console.log(allTodoes);

    const tempTodos = allTodoes;
    tempTodos.splice(index, 1);
    setAllTodoes(tempTodos);

    console.log(allTodoes);
  };

  const addTodo = () => {
    const tempTodo = {
      id: uuidv4(),
      todo: inputTodo,
      priority: priority,
    };

    setAllTodoes([tempTodo, ...allTodoes]);
    console.log(allTodoes)

    setInputTodo("");
  };

  const deleteTodo = (index) => {
    const tempTodo = allTodoes.filter((item, i) => i !== index);
    setAllTodoes(tempTodo);
  };

  return (
    <>
      <div className=" ">
        <div className="w-[600px] bg-red-200 rounded-lg p-5 ">
          <div className="flex gap-5">
            <input
              type="text"
              value={inputTodo}
              onChange={(e) => setInputTodo(e.target.value)}
            />

            <select
              className="w-40"
              onChange={(e) => {
                setPriority(e.target.value);
              }}
            >
              <option value="medium">medium</option>
              <option value="low">low</option>
              <option value="high">high</option>
            </select>
            <div
              className="bg-blue-700 w-[100px] py-1 center text-white cursor-pointer rounded-md"
              onClick={() => addTodo()}
            >
              Add Todo
            </div>
          </div>
          <div className="overflow-auto h-[400px]  ">
            {allTodoes?.map((item, index) => {
              return (
                <>
                  <div className="flex items-center justify-around">
                    <div
                      key={index}
                      className="w-full flex justify-between bg-white items-center mt-5 py-1 px-3 rounded-md cursor-pointer"
                    >
                      <div className="font-semibold "> {item.todo}</div>
                      <div
                        className={`center ${
                          item.priority === "low"
                            ? "bg-green-500"
                            : "" || item.priority === "high"
                            ? "bg-red-500"
                            : "" || item.priority === "medium"
                            ? "bg-yellow-500"
                            : ""
                        }  w-fit px-3 py-[1px] rounded-full min-w-20 text-white`}
                      >
                   
                        {item.priority}
                      </div>
                    </div>
                    <i
                      class="fa-solid fa-trash-can p-2 bg-white rounded-lg text-red-500 m-1 mt-6 ml-2 cursor-pointer"
                      onClick={() => deleteTodo(index)}
                    ></i>
                    <i class="fa-solid fa-pen-to-square p-2 bg-white rounded-lg text-blue-500 m-1 mt-6 cursor-pointer"></i>
                    <i
                      class="fa-solid fa-circle-check p-2 bg-white rounded-lg text-green-500 m-1 mt-6 cursor-pointer"
                      onClick={() => addToCompletedItems(index)}
                    ></i>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllTodoes;
