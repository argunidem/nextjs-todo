import Todo from './Todo';

const Todos = async () => {
  const res = await fetch('http://localhost:3000/api', { cache: 'no-store' });
  const todos: TodoType[] = await res.json();

  return (
    <section className='flex flex-col items-center space-y-5 w-full max-w-xl py-14 px-7 border border-slate-600 rounded-md'>
      {todos.map((item) => (
        <Todo
          key={item.id}
          data={item}
        />
      ))}
    </section>
  );
};
export default Todos;
