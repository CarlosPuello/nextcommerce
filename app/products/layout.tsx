import ProductsNav from "../components/ProductsNav";

export const metadata = {
  title: "Products",
  description: "All products",
};

const ProductsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ProductsNav />
      {children}
    </div>
  );
};

export default ProductsLayout;
