import LoginHeader from "@/components/header/loginHeader";

export const metadata = {
  title: "Task Management System",
  description: "Login / Signup",
};

const LoginLayout = ({ children }) => {
  return (
    <>
      <LoginHeader />
      {children}
    </>
  );
};

export default LoginLayout;
