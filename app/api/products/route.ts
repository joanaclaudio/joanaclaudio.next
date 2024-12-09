// app/api/products/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://deisishop.pythonanywhere.com/products/');
    const produtos = await res.json();
    return NextResponse.json(produtos);
  } catch {
    return NextResponse.json('Erro ao carregar produtos');
  }
}