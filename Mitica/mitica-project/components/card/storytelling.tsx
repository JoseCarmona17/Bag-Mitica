"use client";

import { useState } from "react";
import ModelViewer from "./ModelViewer";

const tabs = [
  "Front 1",
  "Front 2",
  "Flap",
  "Closure",
  "Band",
  "Edge",
  "Straps",
  "Back",
  "Loops",
  "Bottom",
  "Metals",
  "Customization",
];

const colorPalette = [
  { name: "Negro", hex: "#000000" },
  { name: "Marrón Oscuro", hex: "#4b2e1e" },
  { name: "Marrón Claro", hex: "#8b5a2b" },
  { name: "Dorado", hex: "#d4a017" },
  { name: "Azul", hex: "#2f3e75" },
  { name: "Rojo", hex: "#8b1e1e" },
  { name: "Verde", hex: "#1f5e2c" },
  { name: "Naranja", hex: "#b85c1c" },
];

export default function Storytelling() {
  // Estado para la parte seleccionada
  const [selectedPart, setSelectedPart] = useState<string | null>(null);
  
  // Estado para los colores de cada parte (inicialmente vacío = colores originales)
  const [partColors, setPartColors] = useState<{ [key: string]: string }>({});

  // Función para cambiar el color de la parte seleccionada
  const handleColorChange = (color: string) => {
    if (selectedPart) {
      setPartColors((prev) => ({
        ...prev,
        [selectedPart]: color,
      }));
    }
  };

  return (
    <section className="bg-[#6a1743] py-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* Título */}
        <h2 className="mb-6 text-2xl text-white">Storytelling</h2>

        {/* Card blanca */}
        <div className="rounded-xl bg-white p-6 shadow-lg">
          {/* Modelo 3D */}
          <ModelViewer selectedPart={selectedPart} colors={partColors} />

          {/* Indicador de parte seleccionada */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              {selectedPart ? (
                <>
                  Editando: <span className="font-bold">{selectedPart}</span>
                  {partColors[selectedPart] ? (
                    <span
                      className="ml-2 inline-block h-4 w-4 rounded-full border border-gray-300"
                      style={{ backgroundColor: partColors[selectedPart] }}
                    />
                  ) : (
                    <span className="ml-2 text-xs italic">(color original)</span>
                  )}
                </>
              ) : (
                "Selecciona una parte del bolso para personalizar"
              )}
            </p>
          </div>

          {/* Tabs */}
          <div className="mt-6 flex flex-wrap gap-6 text-sm font-medium text-gray-700">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedPart(tab)}
                className={`border-b-2 transition-colors ${
                  selectedPart === tab
                    ? "border-[#6a1743] text-[#6a1743]"
                    : "border-transparent hover:border-gray-400"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Colores */}
          <div className="mt-6">
            <p className="mb-3 text-sm font-medium text-gray-700">
              Selecciona un color:
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {colorPalette.map((color) => (
                <button
                  key={color.hex}
                  onClick={() => handleColorChange(color.hex)}
                  style={{ backgroundColor: color.hex }}
                  className={`h-8 w-8 rounded-full border-2 transition-transform hover:scale-110 ${
                    selectedPart && partColors[selectedPart] === color.hex
                      ? "border-[#6a1743] ring-2 ring-[#6a1743] ring-offset-2"
                      : "border-gray-300"
                  }`}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Resumen de personalización */}
          {Object.keys(partColors).length > 0 && (
            <div className="mt-6 rounded-lg bg-gray-50 p-4">
              <p className="mb-2 text-sm font-medium text-gray-700">
                Partes personalizadas:
              </p>
              <div className="flex flex-wrap gap-2">
                {Object.entries(partColors).map(([part, color]) => (
                  <div
                    key={part}
                    className="flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs shadow-sm"
                  >
                    <span>{part}</span>
                    <span
                      className="h-3 w-3 rounded-full border border-gray-300"
                      style={{ backgroundColor: color }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Botón */}
        <div className="mt-12 flex justify-center">
          <button className="rounded-full bg-gradient-to-r from-[#8b3a5d] to-[#6a1743] px-10 py-4 text-lg text-[#f5d58a] shadow-lg transition hover:scale-105">
            Solicitar al taller
          </button>
        </div>
      </div>
    </section>
  );
}