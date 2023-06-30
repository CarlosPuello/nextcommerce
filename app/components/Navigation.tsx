import Link from "next/link";
import SearchBar from "./SearchBar";

export default function Navigation() {
  return (
    <nav className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center font-semibold p-4 bg-primary">
      <Link href="/">
        <h1 className="font-bold text-xl p-4 font-mono md:border-r md:border-black">
          NextCommerce
        </h1>
      </Link>
      <div className="flex flex-col gap-4">
        <div>
          <SearchBar />
        </div>
        <div className="flex gap-8 justify-center items-center">
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
        </div>
      </div>
    </nav>
  );
}
