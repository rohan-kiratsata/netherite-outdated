"use client";

import React, { useState } from "react";

import { Button, Link, Input } from "@nextui-org/react";
import { FiEye, FiEyeOff, GoogleLogo } from "@/utils/supabase";
import { signupSchema } from "../../utils/validationSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

type Props = {};

export default function SignupForm({}: Props) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  // Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(signupSchema) as any,
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <>
      {/* <MultiStepFormWrapper> */}
      <div className="flex flex-col gap-4 py-5 justify-center">
        <div className="text-2xl font-medium text-center flex flex-col items-center my-5">
          <Link href="/">
            <div className="mb-2 w-9 h-9 rounded-full bg-gray-800"></div>
          </Link>
          Sign up to Netherite
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          {/* <div className="flex flex-col gap-2"> */}
          <Button className="w-full py-5 font-medium" variant="bordered">
            Continue with Google <GoogleLogo size={28} />
          </Button>
          <p className="text-center text-gray-400">OR</p>
          <Input
            type="text"
            className="w-full"
            size="lg"
            variant="bordered"
            placeholder="Email"
          />
          <Input
            variant="bordered"
            placeholder="Password"
            size="lg"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <FiEyeOff className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <FiEye className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
          />
          <Button
            className="w-full text-lg"
            variant="solid"
            color="primary"
            type="submit"
          >
            Sign up
          </Button>
          <p className="text-center my-5">
            Already have an account? <Link href="/login">Log in</Link>
          </p>
          {/* </div> */}
        </form>
      </div>
      {/* </MultiStepFormWrapper> */}
    </>
  );
}
