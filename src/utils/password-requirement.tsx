/**
 * @reference https://mantine.dev/core/password-input/#strength-meter-example
 */

import { IconX, IconCheck } from "@tabler/icons-react";
import { Box, rem, Text } from "@mantine/core";

export function PasswordRequirement({
  meets,
  label,
}: {
  meets: boolean;
  label: string;
}) {
  return (
    <Text
      c={meets ? "teal" : "red"}
      style={{ display: "flex", alignItems: "center" }}
      mt={7}
      size="sm"
    >
      {meets ? (
        <IconCheck style={{ width: rem(14), height: rem(14) }} />
      ) : (
        <IconX style={{ width: rem(14), height: rem(14) }} />
      )}{" "}
      <Box ml={10}>{label}</Box>
    </Text>
  );
}

export const requirements = [
  { re: /[0-9]/, label: "how about some numbers?" },
  { re: /[a-z]/, label: "letters too" },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "symbols are must" },
];

export function getStrength(password: string) {
  let multiplier = password.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 0);
}
