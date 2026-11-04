import ProblemCard from "../extras/ProblemCard";
import { ProductItem } from "../components/ProductItem";

export const PreFilter = () => {
  const products = [
    { id: 1, name: "Notebook", inStock: true },
    { id: 2, name: "Pen", inStock: false },
    { id: 3, name: "Backpack", inStock: true },
  ];

  const inStock = products.filter((product) => product.inStock);

  return (
    <ProblemCard
      title="Filter 10 — Pre-filtered rendering"
      method="filter"
      question="Filter to in-stock products first, then map into a reusable component."
      dataPreview={products}
    >
      {inStock.map((product) => (
        <ProductItem
          key={product.id}
          name={product.name}
          inStock={product.inStock}
        />
      ))}
    </ProblemCard>
  );
};
