import Image from "next/image";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

function ProductCard({
  product: {
    title,
    image: { url, alt },
    rating,
    price,
    discountedPrice,
    description,
  },
}: ProductCardProps) {
  return (
    <li>
      <h2>{title}</h2>
      <Image src={url} alt={alt} width={300} height={300} />
      <p>{rating}</p>
      <p>{price}</p>
      <p>{discountedPrice}</p>
      <p>{description}</p>
    </li>
  );
}

export default ProductCard;
