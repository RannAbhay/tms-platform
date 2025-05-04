import LoginComponoent from "@/components/home/Login";
import SignupComponent from "@/components/home/Signup";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const HomeLayout = () => {
  return (
    <div className="flex justify-center h-[85vh] items-center">
      <div className="flex justify-center border border-mute p-4 rounded-xl">
        <Tabs defaultValue="login" className="flex flex-col">
          <TabsList className="flex flex-row w-full gap-1 justify-center">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Signup</TabsTrigger>
          </TabsList>

          {/* Login */}
          <LoginComponoent />

          {/* Signup */}
          <SignupComponent />
        </Tabs>
      </div>
    </div>
  );
};

export default HomeLayout;
