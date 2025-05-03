import Link from "next/link";

const LoginHeader = () => {
  return (
    <header className="py-4 xl:py-8 text-primary-foreground">
      <div className="container mx-auto px-5 flex justify-center items-center">
        {/* lgoo */}

        <Link href="/">
          <h1 className="text-4xl font-semibold">TMS</h1>
        </Link>
      </div>
    </header>
  );
};

export default LoginHeader;
