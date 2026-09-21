import Logo from "@/components/Logo";
import Link from "next/link";
function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className=" bg-gray-100 border-t mt-10">
      <div className="flex px-12 py-6 flex-col">
        <Logo />
        <div className="flex gap-2 flex-col mt-8">
          <Link href="/contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900 ">
            About
          </Link>
        </div>
      </div>
      <p className="flex justify-center text-sm text-gray-600 mt-12">
        &copy; {year} Next.Aisle web shop. All rights reserved
      </p>
    </div>
  );
}

export default Footer;
