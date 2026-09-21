function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="py-4 bg-gray-100 border-t mt-10">
      <p className="flex justify-center text-sm">
        &copy; {year} Next.Aisle web shop. All rights reserved
      </p>
    </div>
  );
}

export default Footer;
