import Header from "@/components/header/header";

const AuthRoute = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default AuthRoute;
