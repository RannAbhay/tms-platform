"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TabsContent } from "@/components/ui/tabs";

import { FaEye, FaEyeSlash } from "react-icons/fa6";

const initialStateLogin = {
  email: "",
  password: "",
};

const LoginComponoent = () => {
  const [login, setLogin] = useState(initialStateLogin);
  const [canLogin, setCanLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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
            type="email"
            onChange={handleChange}
            className="min-w-[270px] sm:w-[450px]"
            placeholder="Enter your Email..."
          />
        </div>
        <div className="flex flex-col peer text-left gap-2 mb-4">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Password
          </label>
          <div className="relative inline">
            <Input
              name="password"
              value={login.password}
              type={showPassword ? "text" : "password"}
              onChange={handleChange}
              className="min-w-[270px] sm:w-[450px]"
              placeholder="Enter your Password..."
            />
            <Button
              className="absolute inset-y-0 right-0 flex cursor-pointer items-center p-1 my-auto"
              variant="ghost"
              size="sm"
              type="button"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </Button>
          </div>
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
