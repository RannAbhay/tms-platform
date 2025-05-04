"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TabsContent } from "@/components/ui/tabs";

const initialStateLogin = {
  email: "",
  password: "",
};

const LoginComponoent = () => {
  const [login, setLogin] = useState(initialStateLogin);
  const [canLogin, setCanLogin] = useState(false);

  const handleChange = (e) => {
    setLogin((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    const isEmailValid = /\S+@\S+\.\S+/.test(login.email);
    const isPasswordValid = login.password.length > 7;
    setCanLogin(isEmailValid && isPasswordValid);
  }, [login]);

  return (
    <TabsContent value="login" className="flex flex-col text-center gap-5">
      <form>
        <h1>Login</h1>
        <div className="flex flex-col peer text-left gap-2 mb-4">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Email
          </label>
          <Input
            name="email"
            value={login.email}
            onChange={handleChange}
            className="min-w-[270px] sm:w-[450px]"
            placeholder="Enter your Email..."
          />
        </div>
        <div className="flex flex-col peer text-left gap-2 mb-4">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Password
          </label>
          <Input
            name="password"
            value={login.password}
            onChange={handleChange}
            className="min-w-[270px] sm:w-[450px]"
            placeholder="Enter your Password..."
          ></Input>
        </div>
        <Button
          className="w-full"
          variant={canLogin ? "default" : "ghost"}
          size="sm"
          disabled={!canLogin}
        >
          <Link href="/dashboard">Login</Link>
        </Button>
      </form>
    </TabsContent>
  );
};

export default LoginComponoent;
