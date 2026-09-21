import AddToCartButton from "@/components/buttons/AddToCartButton";
import { Product } from "@/types/product";
import { Star } from "lucide-react";
import Image from "next/image";

async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const response = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
  const data = await response.json();
  const product: Product = data.data;

  return (
    <div className="m-8 flex flex-col gap-6 max-w-120">
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <div className="flex gap-4">
        {product.tags?.map((tag) => (
          <div
            key={tag}
            className="py-1 px-3 rounded-lg bg-gray-200 capitalize text-sm"
          >
            {tag}
          </div>
        ))}
      </div>
      {product.image && product.image.url ? (
        <Image
          src={product.image.url}
          alt={product.image.alt}
          width={500}
          height={500}
          loading="eager"
        />
      ) : (
        <Image
          src="/placeholderShopImage.webp"
          alt="Placeholder image"
          width={500}
          height={500}
        />
      )}
      <div>
        {product.discountedPrice < product.price ? (
          <p className="text-end font-medium">
            {product.discountedPrice} kr{" "}
            <span className="line-through text-gray-400">
              {product.price} kr
            </span>
          </p>
        ) : (
          <p className="text-end font-medium">{product.price} kr</p>
        )}
      </div>

      <div>
        <h3 className="text-lg font-semibold">Description:</h3>
        <p>{product.description}</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Overall rating:</h3>
        <p className="flex items-center">
          {product.rating}/5 <Star className="text-yellow-500 w-4 h-4 ml-1" />
        </p>
      </div>

      <AddToCartButton product={product} />

      {product.reviews.length > 0 ? (
        <div>
          <h2 className="text-xl font-semibold mb-4">Reviews</h2>
          <ul>
            {product.reviews.map((review) => (
              <li
                key={review.id}
                className="mb-6 px-4 py-2 border-2 border-gray-200 rounded-lg bg-white"
              >
                <div className="flex justify-between items-center mb-2">
                  <p className="font-bold">{review.username}</p>
                  <p className="flex items-center text-sm font-medium">
                    {review.rating}/5{" "}
                    <Star className="text-yellow-500 w-4 h-4 ml-1" />
                  </p>
                </div>
                <p className="mt-2">{review.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No reviews available for this product.</p>
      )}
    </div>
  );
}

export default ProductPage;
