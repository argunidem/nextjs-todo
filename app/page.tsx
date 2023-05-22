import Form from '@/components/Form';
import Todos from '@/components/Todos';

export default function Home() {
  return (
    <main className='flex flex-col items-center space-y-16 my-16 mx-10 text-white'>
      <Form />
      {/* @ts-expect-error Server Component */}
      <Todos />
    </main>
  );
}
