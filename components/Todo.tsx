import { format } from 'date-fns';

const Todo = ({ data }: { data: TodoType }) => {
  const { createdAt, todo, isComplete } = data;
  const date = format(new Date(createdAt), 'eeee, MMMM dd, yyyy');

  return (
    <div className='flex flex-col space-y-3 w-full max-w-xl py-5 px-7 border border-slate-600 rounded-md'>
      <div className='flex justify-between'>
        <h2 className='font-bold'>{todo}</h2>
        <span className='text-xs'>{date}</span>
      </div>
      <span
        className={`mr-auto px-4 py-1 rounded-md ${
          isComplete ? 'bg-teal-600' : 'bg-rose-600'
        }`}
      >
        {isComplete ? 'Done!' : 'In Progress'}
      </span>
    </div>
  );
};
export default Todo;
