export default function Footer() {
  return (
    <footer className="relative bg-[#6a1743] text-[#f5d58a] py-8">
      {/* Línea punteada superior */}
      <div className="absolute top-0 left-0 w-full border-t-2 border-dashed border-[#f5d58a]" />

      <div className="container mx-auto px-6">
        <p className="text-center">
          © 2026 Mitica. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
