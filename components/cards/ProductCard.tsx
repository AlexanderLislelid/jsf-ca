import Image from "next/image";
import { Product } from "@/types/product";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

function ProductCard({
  product: {
    id,
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
      <Link href={`/product/${id}`}>
        <h2>{title}</h2>
        <Image src={url} alt={alt} width={300} height={300} />
        <p>{rating}</p>
        <p>{price}</p>
        <p>{discountedPrice}</p>
        <p>{description}</p>
      </Link>
    </li>
  );
}

export default ProductCard;
