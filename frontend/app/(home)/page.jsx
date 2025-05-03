import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const HomeLayout = () => {
  return (
    <div className="flex justify-center h-[70vh] items-center">
      <div className="flex justify-center border-2 border-accent/30 p-4 rounded-xl">
        <Tabs defaultValue="login" className="flex flex-col">
          <TabsList className="flex flex-row w-full gap-1 justify-center">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Signup</TabsTrigger>
          </TabsList>
          <TabsContent value="login" className="text-center">
            <h1 className="mb-4">Login</h1>
            <div className="mb-5">
              <Input
                name="email"
                className="min-w-[270px] sm:w-[450px]"
                placeholder="Enter your Email..."
              />
              <p className="text-blue-500 underline text-sm text-right w-full mt-1 cursor-pointer hover:opacity-80 transition-opacity">
                Forgot Email
              </p>
            </div>
            <div>
              <Input
                name="password"
                className="min-w-[270px] sm:w-[450px]"
                placeholder="Enter your Password"
              />
              <p className="text-blue-500 underline text-sm text-right w-full mt-1 pb-4 cursor-pointer hover:opacity-80 transition-opacity">
                Forgot Password
              </p>
            </div>
          </TabsContent>
          <TabsContent value="signup" className="text-center">
            <h1 className="mb-4">Signup</h1>
            <div className="mb-5">
              <Input
                name="username"
                className="min-w-[270px] sm:w-[450px]"
                placeholder="Enter your UserName..."
              />
              <p className="text-blue-500 underline text-sm text-right w-full mt-1 cursor-pointer hover:opacity-80 transition-opacity">
                Forgot UserName
              </p>
            </div>
            <div className="mb-5">
              <Input
                name="email"
                className="min-w-[270px] sm:w-[450px]"
                placeholder="Enter your Email..."
              />
              <p className="text-blue-500 underline text-sm text-right w-full mt-1 cursor-pointer hover:opacity-80 transition-opacity">
                Forgot Email
              </p>
            </div>
            <div>
              <Input
                name="password"
                className="min-w-[270px] sm:w-[450px]"
                placeholder="Enter your Password"
              />
              <p className="text-blue-500 underline text-sm text-right w-full mt-1 pb-4 cursor-pointer hover:opacity-80 transition-opacity">
                Forgot Password
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default HomeLayout;
