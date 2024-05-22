"use client";

import {
  Box,
  Button,
  Flex,
  PasswordInput,
  Progress,
  TextInput,
  Title,
} from "@mantine/core";
import React from "react";

export default function SignUp() {
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
        <Flex gap="lg" direction={"column"}>
          <Title order={3}>Welcome to Netherite</Title>
          <Flex gap={"md"} direction={"column"}>
            <TextInput placeholder="Email" size="md" />
            <Flex gap={"xs"} direction={"column"}>
              <PasswordInput placeholder="Password" size="md" />
              <Progress value={50} size="xs" transitionDuration={200} />
            </Flex>
            <Button variant="filled" color="orange">
              Sign up
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
