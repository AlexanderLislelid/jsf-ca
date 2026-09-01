import { Product } from "@/types/product";
import Image from "next/image";

async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const response = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
  const data = await response.json();
  const product: Product = data.data;

  console.log(product);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>

      {product.image && product.image.url ? (
        <Image
          src={product.image.url}
          alt={product.image.alt}
          width={500}
          height={500}
        />
      ) : (
        <Image
          src="/placeholderShopImage.webp"
          alt="Placeholder image"
          width={500}
          height={500}
        />
      )}

      {product.reviews.length > 0 ? (
        <div className="my-6 mx-6">
          <h2 className="text-xl font-semibold mb-2">Reviews</h2>
          <ul>
            {product.reviews.map((review) => (
              <li key={review.id} className="mb-2">
                <p className="font-semibold">{review.username}</p>
                <p>Rating: {review.rating}</p>
                <p>{review.description}</p>
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
