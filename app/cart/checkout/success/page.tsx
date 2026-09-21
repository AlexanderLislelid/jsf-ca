import { CircleCheck } from "lucide-react";
import Link from "next/link";
export default function SuccessPage() {
  return (
    <div className="mt-20 p-4 bg-white rounded-md shadow-md flex flex-col">
      <div className="flex justify-between items-center gap-4">
        <h1 className="text-2xl font-bold">Success</h1>
        <CircleCheck className="w-12 h-12 text-green-600" />
      </div>

      <p className="mt-4">Your order has been successfully placed.</p>
      <p>Thank you for shopping with us!</p>
      <Link
        href="/"
        className="mt-4 px-4 py-2 bg-gray-900 rounded-md text-white font-medium text-center hover:bg-black"
      >
        Back to Products
      </Link>
    </div>
  );
}
