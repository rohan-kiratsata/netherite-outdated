"use client";

import CustomPasswordInput from "@/components/signup/password-input";
import { useForm } from "@mantine/form";
import {
  Box,
  Button,
  Divider,
  Flex,
  Progress,
  TextInput,
  Title,
} from "@mantine/core";
import React, { useState } from "react";
import { Icons } from "@/config/icons";

export default function SignupPage() {
  const [password, setPassword] = useState("");

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: password,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const handleSubmit = async (vals: any) => {
    const { email } = vals;
    const response = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) console.log("User signed up successfully");
    else console.log("Signup failed");
  };

  return (
    <>
      <Box
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Flex gap="lg" direction={"column"} justify={"center"} align={"center"}>
          <Title order={3}>Welcome to Netherite</Title>
          <form onSubmit={form.onSubmit((vals) => handleSubmit(vals))}>
            <Flex gap={"md"} direction={"column"}>
              <TextInput
                placeholder="Email"
                size="md"
                {...form.getInputProps("email")}
              />
              <CustomPasswordInput
                value={password}
                onChange={(e: any) => setPassword(e?.currentTarget.value)}
              />
              <Button variant="filled" color="orange" type="submit">
                Sign up
              </Button>
              <Divider label="OR" />
              <Button
                variant="outline"
                style={{
                  borderColor: "#111",
                  color: "#111",
                }}
                leftSection={<Icons.google />}
              >
                Sign up with Google
              </Button>
            </Flex>
          </form>
        </Flex>
      </Box>
    </>
  );
}
