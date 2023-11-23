"use client"

import { useState } from 'react';
import { useTasks, useTasksDispatch } from './task-context';

export default function TaskList() {
  const tasks = useTasks();

  return (
    <ul>
      {  // @ts-ignore
        tasks.map(task => (
        <li key={task.id} className="m-2">
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}

// @ts-ignore
function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch();
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          className="border-2 border-gray-300 bg-white h-8  ml-2 rounded-lg text-sm focus:outline-none"
          value={task.text}
          onChange={e => {
            // @ts-ignore
            dispatch({
              type: 'changed',
              task: {
                ...task,
                text: e.target.value
              }
            });
          }} />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 ml-4 rounded" onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 ml-4 rounded" onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }
  return (
    <label>
      <input
        className="mr-2 form-checkbox h-5 w-5  rounded"
        type="checkbox"
        checked={task.done}
        onChange={e => {
          // @ts-ignore
          dispatch({
            type: 'changed',
            task: {
              ...task,
              done: e.target.checked
            }
          });
        }}
      />
      {taskContent}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 ml-4 rounded" onClick={() => {
        // @ts-ignore
        dispatch({
          type: 'deleted',
          id: task.id
        });
      }}>
        Delete
      </button>
    </label>
  );
}
