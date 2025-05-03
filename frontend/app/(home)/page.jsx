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
            <h1>Login</h1>
            <Input
              name="email"
              className="min-w-[270px] sm:w-[450px]"
              placeholder="Enter your Email..."
            />
          </TabsContent>
          <TabsContent value="signup" className="text-center">
            <h1>Signup</h1>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default HomeLayout;
