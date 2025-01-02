'use client';

import React from 'react';
import useSWR from 'swr';
import { Produto } from '@/app/models/interfaces';
import "./produtos.css";

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
    <div >
      
      <ul>
        {data.map((produto) => (
          
          <li
            key={produto.id} className='produto'
          >
            <h2 className='title'><strong>{produto.title}</strong></h2>
            <img
              src={produto.image}
              alt={produto.title}
              className='image'
            />
            <p>{produto.description}</p>
            <p><strong>Custo:</strong> {produto.price.toFixed(2)}€</p>
            <p><strong>Avaliação: </strong>{produto.rating.rate} (Baseado em {produto.rating.count} avaliações)</p>
            <button style={{ background: '#FFFFFF', borderRadius: 20, width: 300, padding: '0.5rem' }}>
              <strong>Adicionar ao carrinho</strong>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default function Produtos() {
  return (
    <div style={{display:'grid', justifyContent: 'center', alignContent:'center'}}>
      <h2 style={{fontSize: 20
      }}><strong>Produtos Disponíveis:</strong></h2>
      
      <ProductsPage />
    </div>
  );
}