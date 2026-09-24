
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>

      <Link href="/Index">
        <button>Ir para Sobre</button>
      </Link>
    </div>
  );
}
