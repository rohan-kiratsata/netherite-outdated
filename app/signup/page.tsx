"use client";

import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import SignupForm from "@/components/signup/signup-form";

type Props = {};

export default function page({}: Props) {
  return (
    <>
      <section className="w-full h-screen bg-gray-100 flex items-center justify-center">
        <SignupForm />
      </section>
    </>
  );
}
