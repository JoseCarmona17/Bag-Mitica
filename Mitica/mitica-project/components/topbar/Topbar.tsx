import { ChevronLeft, ChevronRight, User } from "lucide-react";
import Link from "next/link";

export default function Topbar() {
  return (
    <header className="relative w-full bg-[#6a1743] text-[#f5d58a]">
      {/* Contenido principal */}
      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold">
          Ⓜ
        </div>

        {/* Menú centrado */}
        <nav className="absolute left-1/2 -translate-x-1/2">
          <ul className="flex gap-10 text-lg font-medium">
            <li>
              <Link href="#" className="hover:opacity-80">
                Atelier Mítico
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:opacity-80">
                Tienda
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:opacity-80">
                Empresas y butichs
              </Link>
            </li>
          </ul>
        </nav>

        {/* Icono usuario */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#f5d58a]">
          <User size={18} />
        </div>
      </div>

      {/* Línea punteada inferior */}
      <div className="absolute bottom-0 left-0 w-full border-b-2 border-dashed border-[#f5d58a]" />

      {/* Flechas inferiores */}
      <div className="absolute -bottom-13 right-30 flex gap-3 mt-6">
        <button className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#f5d58a] hover:bg-[#f5d58a] hover:text-[#6b1d3f] transition">
          <ChevronLeft size={18} />
        </button>
        <button className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#f5d58a] hover:bg-[#f5d58a] hover:text-[#6b1d3f] transition">
          <ChevronRight size={18} />
        </button>
      </div>
    </header>
  );
}
