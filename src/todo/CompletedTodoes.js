import React, { } from 'react'

const CompletedTodoes = ({ data }) => {

  const { allTodoes, setAllTodoes, completedTodoes, setCompletedTodoes } = data
  const handleCompletedData = (todoItem) => {
    const newList = completedTodoes.filter((item) => todoItem.id !== item.id);
    setCompletedTodoes(newList);

    console.log("task filter or removed")
    setAllTodoes([...allTodoes, todoItem]);

    console.log("task added to all todoestodos")
  };

  const handleRemoveData = (todoItem) => {
    const newList = completedTodoes.filter((item) => todoItem.id !== item.id);
    setCompletedTodoes(newList);

    console.log("task filter or removed")
    // setAllTodoes([...allTodoes, todoItem]);

    // console.log("task added to completed todos")
  };
 

  return (
    <>

      <div className=' ' >
        <div className="w-[600px]  bg-gradient-to-r from-yellow-200 to-indigo-100 rounded-lg p-5 ">
          <div className=" h-[400px] overflow-auto   ">
            {completedTodoes.map((item, index) => {
              return (
                <div className=" flex ">
                  <div key={index} className="w-full bg-white mt-3  py-1  rounded-md cursor-pointer font-semibold" onClick={() => handleCompletedData(item)} >
                    {item.todo}
                  </div>
                  <i class="fa-solid fa-trash-can p-2 bg-white rounded-lg text-red-500 m-1 mt-5 ml-2 cursor-pointer" onClick={()=> handleRemoveData(item) } ></i>
                </div>
              );
            })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default CompletedTodoes