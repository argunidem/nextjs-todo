import { createTodo } from '@/lib/prisma/todo';
import { prisma } from '@/utils/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const todos = await prisma.todo.findMany();
  return NextResponse.json(todos);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const todo = await createTodo(body);

  return NextResponse.json({ todo });
}
