"use client";

import { useState, useEffect } from "react";

const List = ({ list, updateList, deleteList, moveListUp, moveListDown }) => {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    updateList({
      ...list,
      items: [...list.items, { text: input, checked: false }],
    });
    setInput("");
  };

  const handleCheck = (index) => {
    const newList = [...list.items];
    newList[index].checked = !newList[index].checked;
    updateList({ ...list, items: newList });
  };

  const handleDelete = (index) => {
    const newList = [...list.items];
    newList.splice(index, 1);
    updateList({ ...list, items: newList });
  };

  const handleMoveUp = (index) => {
    if (index === 0) return;
    const newList = [...list.items];
    [newList[index - 1], newList[index]] = [newList[index], newList[index - 1]];
    updateList({ ...list, items: newList });
  };

  const handleMoveDown = (index) => {
    if (index === list.items.length - 1) return;
    const newList = [...list.items];
    [newList[index], newList[index + 1]] = [newList[index + 1], newList[index]];
    updateList({ ...list, items: newList });
  };

  return (
    <div className="p-8 m-4 bg-gray-100 rounded shadow-md">
      <h2 className="mb-4 text-2xl">{list.title}</h2>
      <button
        onClick={moveListUp}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Move List Up
      </button>
      <button
        onClick={moveListDown}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Move List Down
      </button>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter item..."
        className="border-2 border-gray-300 rounded-md p-2 mb-4"
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Add
      </button>
      <ul>
        {list.items &&
          list.items.map((item, index) => (
            <li
              key={index}
              className="border-2 border-gray-300 rounded-md p-2 mb-2 flex justify-between items-center"
            >
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheck(index)}
              />
              <span>{item.text}</span>
              <div>
                <button onClick={() => handleMoveUp(index)} className="h2">
                  ↑
                </button>
                <button onClick={() => handleMoveDown(index)} className="h2">
                  ↓
                </button>
              </div>
              <button
                onClick={() => handleDelete(index)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
      <button
        onClick={deleteList}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Delete List
      </button>
    </div>
  );
};

const Profile = () => {
  const [lists, setLists] = useState([]);
  const [listTitle, setListTitle] = useState("");

  useEffect(() => {
    const savedLists = JSON.parse(localStorage.getItem("lists"));
    if (savedLists) {
      setLists(savedLists);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);

  const handleNewList = () => {
    setLists([...lists, { title: listTitle, items: [] }]);
    setListTitle("");
  };

  const updateList = (index, newList) => {
    const newLists = [...lists];
    newLists[index] = newList;
    setLists(newLists);
  };

  const deleteList = (index) => {
    const newLists = [...lists];
    newLists.splice(index, 1);
    setLists(newLists);
  };

  const moveListUp = (index) => {
    if (index === 0) return;
    const newLists = [...lists];
    [newLists[index - 1], newLists[index]] = [
      newLists[index],
      newLists[index - 1],
    ];
    setLists(newLists);
  };

  const moveListDown = (index) => {
    if (index === lists.length - 1) return;
    const newLists = [...lists];
    [newLists[index], newLists[index + 1]] = [
      newLists[index + 1],
      newLists[index],
    ];
    setLists(newLists);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="h2">Add items to your To Do lists!</p>
      <br></br>
      <div className="flex mb-8">
        <input
          type="text"
          value={listTitle}
          onChange={(e) => setListTitle(e.target.value)}
          placeholder="Enter list title..."
          className="border-2 border-gray-300 rounded-md p-2 mr-2"
        />
        <button
          onClick={handleNewList}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          New List
        </button>
      </div>
      {lists.map((list, index) => (
        <List
          key={index}
          list={list}
          updateList={(newList) => updateList(index, newList)}
          deleteList={() => deleteList(index)}
          moveListUp={() => moveListUp(index)}
          moveListDown={() => moveListDown(index)}
        />
      ))}
    </div>
  );
};

export default Profile;
