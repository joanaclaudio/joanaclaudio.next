'use client';

import React from 'react';

import { Produto } from '@/app/models/interfaces';
import useSWR from 'swr';

// Função fetcher para buscar dados
const fetcher = (url: string) => fetch(url).then((res) => res.json());

// Componente para exibir os produtos
const ProductsPage: React.FC = () => {
  const { data, error, isLoading } = useSWR<Produto[], Error>(
    '/api/products',
    fetcher
  );

  if (error) return <div>Erro ao carregar os produtos.</div>;
  if (isLoading) return <div>Carregando produtos...</div>;
  if (!data || data.length === 0) return <div>Sem produtos disponíveis.</div>;

  return (
    <div>
      <ul>
        {data.map((produto) => (
          <li key={produto.id}>{produto.title}</li>
          /*colocar o resto dos atributos*/

        ))}
      </ul>
    </div>
  );
};

// Página principal que exibe os produtos no local desejado
export default function Produtos() {
  return (
    <div>
      <h2>Produtos Disponíveis:</h2>
      {/* Renderiza o componente ProductsPage aqui */}
      <ProductsPage />
    </div>
  );
}