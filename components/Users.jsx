import React from "react";

const tasks = [
  { name: "Take out trash", isComplete: true },
  { name: "Deliver food", isComplete: false },
  { name: "Deposit money", isComplete: true },
  { name: "Do homework", isComplete: false },
  { name: "Work on project", isComplete: true },
  { name: "Date on Friday", isComplete: false },
  { name: "Buy groceries", isComplete: false },
  { name: "Walk dog", isComplete: false },
];

const Users = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="flex flex-col items-center justify-center bg-white p-8 shadow-lg rounded-lg">
        <p className="h2 mb-4">Tasks</p>
        <table className="border-collapse border-2 border-gray-500 w-64">
          <thead>
            <tr>
              <th className="border-2 border-gray-500 px-4 py-2">Task</th>
              <th className="border-2 border-gray-500 px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td className="border-2 border-gray-500 px-4 py-2">
                  {task.name}
                </td>
                <td className="border-2 border-gray-500 px-4 py-2">
                  <input type="checkbox" disabled checked={task.isComplete} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
