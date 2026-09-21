import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mt-40 px-4 flex flex-col items-center gap-6">
      <h1 className="text-4xl font-bold">404</h1>
      <h2 className="text-xl font-bold text-center">
        we couldn't find the page you're looking for
      </h2>
      <Link
        className="py-2 px-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-black"
        href="/"
      >
        Home
      </Link>
    </div>
  );
}
