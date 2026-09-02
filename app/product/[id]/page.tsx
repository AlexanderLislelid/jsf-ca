import { Product } from "@/types/product";
import Image from "next/image";

async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const response = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
  const data = await response.json();
  const product: Product = data.data;

  return (
    <div className="m-8 flex flex-col gap-6">
      <h1 className="text-2xl font-bold">{product.title}</h1>
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
      <div>
        {/* add logic for price display later */}
        <p>{product.price}</p>
        <p>{product.discountedPrice}</p>
      </div>
      <div className="flex gap-6">
        {product.tags?.map((tag) => (
          <div key={tag} className="py-1 px-3 rounded-lg bg-gray-200">
            {tag}
          </div>
        ))}
      </div>
      <div>
        <h3 className="text-lg font-semibold">Description:</h3>
        <p>{product.description}</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Overall rating:</h3>
        <p>{product.rating}/5 ☆</p>
      </div>

      {/*  note to self- create button component with add to cart functionality  */}

      <button>Add to cart</button>

      {product.reviews.length > 0 ? (
        <div>
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
