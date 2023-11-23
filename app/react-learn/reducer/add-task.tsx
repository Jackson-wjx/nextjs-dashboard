"use client"

import { useState } from 'react';
import { useTasksDispatch } from './task-context';

export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch();
  return (
    <>
      <input
        className="border-2 border-gray-300 bg-white h-10  ml-2 mt-4 rounded-lg text-sm focus:outline-none"
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 ml-4 rounded" onClick={() => {
        setText('');
        // @ts-ignore
        dispatch({
          type: 'added',
          id: nextId++,
          text: text,
        }); 
      }}>Add</button>
    </>
  );
}

let nextId = 3;
