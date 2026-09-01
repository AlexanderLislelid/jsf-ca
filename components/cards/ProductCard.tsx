import Image from "next/image";

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  image: {
    url: string;
    alt: string;
  };
  rating: number;
  tags: string[];
  reviews: {
    id: string;
    username: string;
    rating: number;
    description: string;
  }[];
}

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <li>
      <h2>{product.title}</h2>
      <Image
        src={product.image.url}
        alt={product.image.alt}
        width={300}
        height={300}
      />
      <p>{product.rating}</p>
    </li>
  );
}

export default ProductCard;
