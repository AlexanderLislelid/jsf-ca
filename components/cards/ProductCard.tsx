import Image from "next/image";
import { Product } from "@/types/product";
import Link from "next/link";
import { Star, Tag } from "lucide-react";
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
  const hasDiscount = discountedPrice < price;
  const discountPercentage = Math.round(
    ((price - discountedPrice) / price) * 100,
  );

  return (
    <li>
      <Card className="max-w-62.5 h-full gap-3 py-0 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
        <Link href={`/product/${id}`} className="flex flex-col h-full">
          <div className="relative aspect-square w-full overflow-hidden bg-muted">
            <Image
              src={url}
              alt={alt}
              fill
              sizes="250px"
              className="object-cover"
            />
            {hasDiscount ? (
              <span className="absolute top-2 left-2 flex items-center gap-1 rounded-full bg-green-600 px-2 py-0.5 text-xs font-semibold text-white shadow">
                <Tag className="size-3" /> -{discountPercentage}%
              </span>
            ) : null}
          </div>
          <CardHeader className="gap-1 px-3">
            <CardTitle className="line-clamp-1 mt-2">{title}</CardTitle>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Star className="size-3.5 fill-yellow-400 text-yellow-400" />
              {rating.toFixed(1)}
            </span>
          </CardHeader>
          <CardContent className="flex flex-col flex-1 px-3 pb-3">
            <CardDescription className="line-clamp-2 my-1">
              {description}
            </CardDescription>
            <div className="mt-auto pt-2 flex items-baseline justify-end gap-2">
              {hasDiscount ? (
                <>
                  <span className="text-sm text-gray-500 line-through">
                    {price}
                  </span>
                  <span className="text-lg font-bold text-green-600">
                    {discountedPrice}
                  </span>
                </>
              ) : (
                <span className="text-lg font-bold text-gray-800">{price}</span>
              )}
            </div>
          </CardContent>
        </Link>
      </Card>
    </li>
  );
}

export default ProductCard;
