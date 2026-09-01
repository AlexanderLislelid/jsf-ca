function Footer() {
  const year = new Date().getFullYear();

  return (
    <div>
      <p className="flex justify-center">
        &copy; {year} ??? web shop. All rights reserved
      </p>
    </div>
  );
}

export default Footer;
