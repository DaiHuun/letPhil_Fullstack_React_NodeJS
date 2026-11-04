/**
 * Create reusable component for FILTER 10 - Pre-filtered rendering
 */

type ProductItemTypes = {
  name: string;
  inStock: boolean;
};

export const ProductItem = (props: ProductItemTypes) => {
  return (
    <div>
      <li>{props.name}</li>
      <li>{props.inStock ? "In stock" : "Out of stock"}</li>
    </div>
  );
};
