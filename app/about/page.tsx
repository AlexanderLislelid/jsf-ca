import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-4 mt-20 items-center max-w-2xl mx-auto px-4 text-center">
      <h1 className="text-2xl font-bold px-4">About Us</h1>
      <p>
        Next-Aisle is an online store built for people who want a simple,
        no-fuss shopping experience. We bring together a wide range of products
        in one place, making it easy to browse, compare, and find exactly what
        you're looking for.
      </p>
      <p>
        Our goal is to make online shopping fast and reliable, from searching
        for products to checking out. We are always working to improve our
        selection and service, and we'd love to hear from you if you have any
        <Link href="/contact" className="text-green-700 underline">
          {" "}
          questions or feedback
        </Link>
        .
      </p>
    </div>
  );
}
