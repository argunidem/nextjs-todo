import { prisma } from '@/utils/prisma';

export async function createTodo(data: { todo: string; isComplete: boolean }) {
  try {
    const todo = await prisma.todo.create({
      data: {
        todo: data.todo,
        isComplete: data.isComplete,
      },
    });

    return todo;
  } catch (error) {
    console.log(error);
  }
}
