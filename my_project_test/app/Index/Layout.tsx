




export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>MEU LAYOUT</h1>

      {children}

      <footer>RODAPÉ</footer>
    </div>
  );
}