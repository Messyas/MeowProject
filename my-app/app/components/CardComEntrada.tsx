// components/CardComEntrada.tsx
"use client";

import React, { useState } from 'react';

const CardComEntrada: React.FC = () => {
  const [textoEntrada, setTextoEntrada] = useState<string>('');
  const [textoEnviado, setTextoEnviado] = useState<string>('');

  const aoMudarEntrada = (evento: React.ChangeEvent<HTMLInputElement>) => {
    setTextoEntrada(evento.target.value);
  };

  const aoClicarBotao = () => {
    if (textoEntrada.trim() !== '') {
      setTextoEnviado(textoEntrada);
      setTextoEntrada('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto mt-6 space-y-4">
      {/* Card de entrada de dados (diminuído) */}
      <div className="p-4 bg-black shadow-md rounded-lg w-full">
        <h2 className="text-lg font-medium mb-2 text-white">Digite o Texto</h2>
        <input
          type="text"
          value={textoEntrada}
          onChange={aoMudarEntrada}
          className="w-full p-1 mb-2 border border-gray-600 rounded bg-gray-800 text-white placeholder-gray-400"
          placeholder="Digite algo..."
        />
        <button
          onClick={aoClicarBotao}
          className="px-3 py-1 w-full bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
        >
          Enviar
        </button>
      </div>

      {/* Exibição do último texto enviado */}
      {textoEnviado && (
        <div className="w-full p-3 bg-gray-900 border border-gray-700 rounded shadow text-white text-sm">
          {textoEnviado}
        </div>
      )}
    </div>
  );
};

export default CardComEntrada;
