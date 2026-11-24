import Navbar from "./navbar.jsx";
function App() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-10 flex flex-col gap-10">
      <Navbar />
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      <div className="flex flex-col gap-2 p-4 rounded-xl shadow-md bg-white">
        <img src="https://images.unsplash.com/photo-1794131830984-c2a33edb8576?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D??w=400&h=300&fit=crop" className="rounded-lg hover:scale-101"/>
        <h3 className="font-bold text-lg"> Mouse Inalambirco </h3>
        <p className="text-texto-dim text-sm"> Mouse ergonomico, conexion Bluetooth</p>
        <p className="text-verde font-extrabold">$ 89.900</p>
      </div>

      <div className="flex flex-col gap-2 p-4 rounded-xl shadow-md bg-white">
      <img src="https://images.unsplash.com/photo-1771521971801-b24e291166d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D??w=400&h=300&fit=crop" className="rounded-lg hover:scale-101"/>
        <h3 className="font-bold text-lg"> Teclado Mecanico </h3>
        <p className="text-texto-dim text-sm"> Switches azules, retroiluminacion RGB</p>
        <p className="text-verde font-extrabold">$ 149.900</p>
      </div>

      <div className="flex flex-col gap-2 p-4 rounded-xl shadow-md bg-white">
        <img src="https://images.unsplash.com/photo-1527800792452-506aacb2101f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D??w=400&h=300&fit=crop" className="rounded-lg hover:scale-101"/>
        <h3 className="font-bold text-lg"> Monitor 24" </h3>
        <p className="text-texto-dim text-sm"> Full HD, 75Hz, Panel IPS</p>
        <p className="text-verde font-extrabold">$ 899.900</p>
      </div>
    </section>

    <footer className="flex justify-between items-center p-6 bg-texto text-white hover:scale-101   bg-verde">
      <p>© 2026 TechStore Pro</p>
      <p className="text-sm">Hecho con Tailwind CSS</p>
    </footer>

    </main>
  );
}

export default App