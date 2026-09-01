import Image from "next/image";
import { Product } from "@/types/product";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
      <Card>
        <Link href={`/product/${id}`}>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src={url}
              alt={alt}
              width={300}
              height={300}
              style={{ width: "100%", height: "auto" }}
            />
            <p>{rating}</p>
            <p>{price}</p>
            <p>{discountedPrice}</p>
            <CardDescription>{description}</CardDescription>
          </CardContent>
        </Link>
      </Card>
    </li>
  );
}

export default ProductCard;
