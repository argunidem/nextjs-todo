import { createTodo } from '@/lib/prisma/todo';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const todo = await createTodo(body);

  return NextResponse.json({ todo });
}
