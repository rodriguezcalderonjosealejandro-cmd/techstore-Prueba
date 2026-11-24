function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-slate-200">
      <div className="text-xl font-extrabold text-primario">
        TechStore Pro
      </div>
      <ul className="hidden md:flex gap-6 text-sm font-semibold text-texto-dim">
        <li className= "cursor-pointer hover:text-black hover:scale-105"> Inicio</li>
        <li className= "cursor-pointer hover:text-black hover:scale-105"> Productos</li>
        <li className= "cursor-pointer hover:text-black hover:scale-105"> Nosotros</li>
        <li className= "cursor-pointer hover:text-black hover:scale-105"> Contacto</li>
      </ul>
      <button className="bg-primario text-white py-2 px-5 rounded-lg font-bold text-sm">
        Login
      </button>
    </nav>
  );
}

export default Navbar;