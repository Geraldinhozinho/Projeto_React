
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>

      <Link href="/index">
        <button>Ir para Sobre</button>
      </Link>
    </div>
  );
}
