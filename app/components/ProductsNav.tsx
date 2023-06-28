import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex gap-8 justify-center items-center font-semibold p-4 bg-secondary">
      <Link className="hover:invert" href="/products">
        All Products
      </Link>
      <Link className="hover:invert" href="/products/featured">
        Featured Products
      </Link>
    </nav>
  );
}
