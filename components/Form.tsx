'use client';

import { FormEvent, useState } from 'react';

interface FormType {
  todo: string;
  isComplete: boolean;
}

export default function Form() {
  const [formData, setFormData] = useState<FormType>({
    todo: '',
    isComplete: false,
  });

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch('http://localhost:3000/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    console.log(data);
  };

  return (
    <form
      onSubmit={submitHandler}
      className='flex flex-col justify-center items-center gap-y-5 w-full p-7 border border-slate-600 rounded-md'
    >
      <input
        className='px-4 h-12 rounded-md w-1/2 text-slate-800'
        type='text'
        id='todo'
        value={formData.todo}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }))
        }
        placeholder='Todo'
      />
      <div className='flex gap-x-4 text-xl'>
        <label htmlFor='isComplete'>Is Complete</label>
        <input
          type='checkbox'
          id='isComplete'
          checked={formData.isComplete}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              [e.target.id]: e.target.checked,
            }))
          }
        />
      </div>
      <button
        type='submit'
        className='bg-slate-700 font-bold py-2 rounded-md w-1/2 hover:bg-opacity-75'
      >
        Add
      </button>
    </form>
  );
}
