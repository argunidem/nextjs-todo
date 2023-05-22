'use client';

import { FormEvent, useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';

interface FormType {
  todo: string;
  isComplete: boolean;
}

export default function Form() {
  const [formData, setFormData] = useState<FormType>({
    todo: '',
    isComplete: false,
  });
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const isMutating = isPending;

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch('http://localhost:3000/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    setFormData({ todo: '', isComplete: false });

    const data = await res.json();
    console.log(data);
    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <form
      style={{ opacity: !isMutating ? 1 : 0.7 }}
      onSubmit={submitHandler}
      className={`flex flex-col items-center space-y-5 w-full max-w-xl py-14 px-7 border border-slate-600 rounded-md ${
        isMutating ? 'opacity-60' : 'opacity-100'
      }`}
    >
      <input
        className='px-4 h-12 rounded-md w-full max-w-sm text-slate-800'
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
        className='bg-slate-700 font-bold py-2 rounded-md w-full max-w-sm hover:bg-opacity-75'
      >
        Add
      </button>
    </form>
  );
}
