'use client';

import React from 'react';
import Produtos from '../produtos/page';

const LojaPage: React.FC = () => {
    return (
        <>
            <nav>
                <ul>
                    <li style={{display: 'flex', justifyContent: 'right'}}>
                        <strong>Pesquisa:</strong>
                        <input
                            type="text"
                            placeholder="Buscar produtos..." 
                        />
                        
                    </li>
                </ul>
            </nav>
            <Produtos />
        </>
    );
};

export default LojaPage;