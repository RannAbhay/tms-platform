"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TabsContent } from "@/components/ui/tabs";

const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
};

const SignupComponent = () => {
  const [signup, setSignup] = useState(initialState);
  const [canSignup, setCanSignup] = useState(false);

  const handleChange = (e) => {
    setSignup((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    const isEmailValid = /\S+@\S+\.\S+/.test(signup.email);
    const isPasswordValid = signup.password.length > 7;
    const isConfirmPassword = signup.password === signup.confirmPassword;
    setCanSignup(isEmailValid && isPasswordValid && isConfirmPassword);
  }, [signup]);

  return (
    <TabsContent value="signup" className="text-center">
      <form>
        <h1>Signup</h1>
        <div className="flex flex-col peer text-left gap-2 mb-4">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Email
          </label>
          <Input
            name="email"
            value={signup.email}
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
            value={signup.password}
            onChange={handleChange}
            className="min-w-[270px] sm:w-[450px]"
            placeholder="Enter your Password..."
          />
        </div>
        <div className="flex flex-col peer text-left gap-2 mb-4">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Confirm Password
          </label>
          <Input
            name="confirmPassword"
            value={signup.confirmPassword}
            onChange={handleChange}
            className="min-w-[270px] sm:w-[450px]"
            placeholder="Enter your Password..."
          />
        </div>
        <Button
          className="w-full"
          variant={canSignup ? "default" : "ghost"}
          size="sm"
          disabled={!canSignup}
        >
          <Link href="/dashboard">Signup</Link>
        </Button>
      </form>
    </TabsContent>
  );
};

export default SignupComponent;
