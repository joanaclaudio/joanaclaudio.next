import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Busca os produtos da API DEISI Shop
    const response = await fetch('https://deisishop.pythonanywhere.com/products/');
    const products = await response.json();

    // Retorna os produtos em formato JSON
    return NextResponse.json(products);
  } catch (error) {
    // Trata erros e retorna mensagem apropriada
    return NextResponse.json({ error: 'Erro ao buscar os produtos.' }, { status: 500 });
  }
}