'use client';

import React from 'react';
import useSWR from 'swr';
import { Produto } from '@/app/models/interfaces';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ProductsPage: React.FC = () => {
  // Usa useSWR para consumir a API local
  const { data, error, isLoading } = useSWR<Produto[], Error>(
    '/api/products',
    fetcher
  );

  // Validação dos estados
  if (error) return <div>Erro ao carregar os produtos.</div>;
  if (isLoading) return <div>Carregando produtos...</div>;
  if (!data || data.length === 0) return <div>Sem produtos disponíveis.</div>;

  // Renderização dos produtos
  return (
    <div>
      <ul>
        {data.map((produto) => (
          
          <li key={produto.id} style={{ margin: '1rem 0', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2 style={{marginLeft:40, marginRight: 30}}><strong>{produto.title}</strong></h2>
            <img
              src={produto.image}
              alt={produto.title}
              style={{ width: '150px', height: '150px', borderRadius: '4px', marginLeft:40}}
            />
            
            <p>Descrição: {produto.description}</p>
            <p><strong>Custo:</strong> {produto.price.toFixed(2)}€</p>
            <p><strong>Avaliação: </strong>{produto.rating.rate} (Baseado em {produto.rating.count} avaliações)</p>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default function Produtos() {
  return (
    <div>
      <h2 style={{fontSize: 20
      }}><strong>Produtos Disponíveis:</strong></h2>
      
      <ProductsPage />
    </div>
  );
}