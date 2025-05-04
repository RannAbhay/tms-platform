"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TabsContent } from "@/components/ui/tabs";

import { FaEye, FaEyeSlash } from "react-icons/fa6";

const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
};

const SignupComponent = () => {
  const [signup, setSignup] = useState(initialState);
  const [canSignup, setCanSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
          <div className="relative inline">
            <Input
              name="password"
              value={signup.password}
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
        <div className="flex flex-col peer text-left gap-2 mb-4">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Confirm Password
          </label>
          <div className="relative inline">
            <Input
              name="confirmPassword"
              value={signup.confirmPassword}
              type={showConfirmPassword ? "text" : "password"}
              onChange={handleChange}
              className="min-w-[270px] sm:w-[450px]"
              placeholder="Confirm your Password..."
            />
            <Button
              className="absolute inset-y-0 right-0 flex cursor-pointer items-center p-1 my-auto"
              variant="ghost"
              size="sm"
              type="button"
              onClick={() => {
                setShowConfirmPassword(!showConfirmPassword);
              }}
            >
              {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
            </Button>
          </div>
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
