import Image from "next/image";
import { Product } from "@/types/product";
import Link from "next/link";
import { Tag } from "lucide-react";
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
  const discountPercentage = Math.round(
    ((price - discountedPrice) / price) * 100,
  );

  return (
    <li>
      <Card className="max-w-62.5 h-full hover:scale-101 hover:shadow-xl">
        <Link href={`/product/${id}`} className="flex flex-col h-full">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            {discountedPrice < price ? (
              <span className="flex items-center gap-1 text-end text-green-600">
                <Tag className="size-4" /> - {discountPercentage}%
              </span>
            ) : null}
          </CardHeader>
          <CardContent className="flex flex-col flex-1">
            <Image
              src={url}
              alt={alt}
              width={200}
              height={200}
              style={{ width: "100%", height: "auto" }}
            />
            <div className="my-2 flex justify-end">
              {price > discountedPrice ? (
                <p>
                  <span className="line-through text-gray-500 mr-2">
                    {price}
                  </span>
                  <span className="text-green-600 font-bold">
                    {discountedPrice}
                  </span>
                </p>
              ) : (
                <p className="text-gray-800">{price}</p>
              )}
            </div>
            <CardDescription className="mt-auto">{description}</CardDescription>
          </CardContent>
        </Link>
      </Card>
    </li>
  );
}

export default ProductCard;
