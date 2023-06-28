import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex gap-8 justify-center items-center font-semibold p-4 bg-primary">
      <div className="font-bold p-4 font-mono border-r border-black">
        NextCommerce
      </div>
      <Link className="hover:invert" href="/">
        Home
      </Link>
      <Link className="hover:invert" href="/products">
        Products
      </Link>
      <Link className="hover:invert" href="/cart">
        Shopping cart
      </Link>
      <Link className="hover:invert" href="/account">
        My account
      </Link>
    </nav>
  );
}
