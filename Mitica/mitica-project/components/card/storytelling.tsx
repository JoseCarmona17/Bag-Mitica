"use client";

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

const colors = [
  "#000000",
  "#4b2e1e",
  "#8b5a2b",
  "#d4a017",
  "#2f3e75",
  "#8b1e1e",
  "#1f5e2c",
  "#b85c1c",
];

export default function Storytelling() {
  return (
    <section className="bg-[#6a1743] py-16">
      <div className="mx-auto max-w-6xl px-6">

        {/* Título */}
        <h2 className="mb-6 text-2xl text-white">Storytelling</h2>

        {/* Card blanca */}
        <div className="rounded-xl bg-white p-6 shadow-lg">

          {/* Modelo 3D */}
          <ModelViewer />

          {/* Tabs */}
          <div className="mt-6 flex flex-wrap gap-6 text-sm font-medium text-gray-700">
            {tabs.map((tab) => (
              <button
                key={tab}
                className="border-b-2 border-transparent hover:border-black"
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Colores */}
          <div className="mt-6 flex items-center gap-3">
            {colors.map((color) => (
              <button
                key={color}
                style={{ backgroundColor: color }}
                className="h-5 w-5 rounded-full border border-gray-300"
              />
            ))}
          </div>
        </div>

        {/* Botón */}
        <div className="mt-12 flex justify-center">
          <button className="rounded-full bg-gradient-to-r from-[#8b3a5d] to-[#6a1743] px-10 py-4 text-lg text-[#f5d58a] shadow-lg hover:scale-105 transition">
            Solicitar al taller
          </button>
        </div>
      </div>
    </section>
  );
}
