import ProblemCard from "../extras/ProblemCard";

export const SumPrices = () => {
  const products = [
    { id: 1, name: "Mouse", price: 25 },
    { id: 2, name: "Keyboard", price: 55 },
    { id: 2, name: "Monitor", price: 82 },
    { id: 2, name: "Chocolate", price: 29 },
  ];

  const productSum = products.reduce((acc, product) => acc + product.price, 0);

  return (
    <ProblemCard
      title="Reduce 03 — Sum object values"
      method="reduce"
      question="Use reduce() to sum all product prices."
      dataPreview={products}
    >
      <div>{productSum}</div>
    </ProblemCard>
  );
};
