import Link from "next/link";

const Header = () => {
  return (
    <header className="py-4 xl:py-8 text-primary-foreground">
      <div className="container mx-auto px-5 flex justify-between items-center">
        {/* lgoo */}

        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Rohan Rai<span className="text-accent">.</span>
          </h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
