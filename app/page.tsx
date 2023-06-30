import Image from "next/image";

export default function Home() {
  return (
    <div className="p-4 md:py-4 min-h-screen max-w-7xl m-auto flex grow flex-col justify-between">
      <div>
        <h2 className="font-bold text-3xl font-mono">SUMMER SALE</h2>
        <div className="bg-secondary min-h-[200px]">
          Featured products go here
        </div>
      </div>
      <div>
        <h2 className="font-bold text-3xl font-mono">NEW ARRIVALS</h2>
        <div className="bg-secondary min-h-[200px]">New arrivals go here</div>
      </div>
      <div>
        <h2 className="font-bold text-3xl font-mono">TOP SELLERS</h2>
        <div className="bg-secondary min-h-[200px]">Top sellers go here</div>
      </div>
    </div>
  );
}
