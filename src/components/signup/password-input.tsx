import {
  getStrength,
  PasswordRequirement,
  requirements,
} from "@/utils/password-requirement";
import { PasswordInput, Popover, Progress } from "@mantine/core";
import React, { useState } from "react";

export default function CustomPasswordInput({
  value,
  onChange,
}: {
  value: string;
  onChange: any;
}) {
  const [password, setPassword] = useState("");
  const [popoverOpened, setPopoverOpened] = useState(false);

  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement
      key={index}
      label={requirement.label}
      meets={requirement.re.test(value)}
    />
  ));

  const strength = getStrength(value);
  const color = strength === 100 ? "teal" : strength > 50 ? "yellow" : "red";

  return (
    <Popover
      opened={popoverOpened}
      position="bottom"
      width="target"
      transitionProps={{ transition: "pop" }}
    >
      <Popover.Target>
        <div
          onFocusCapture={() => setPopoverOpened(true)}
          onBlurCapture={() => setPopoverOpened(false)}
        >
          <PasswordInput
            placeholder="Password"
            value={value}
            size="md"
            onChange={onChange}
          />
        </div>
      </Popover.Target>
      <Popover.Dropdown>
        <Progress color={color} value={strength} size={5} mb="xs" />
        <PasswordRequirement
          label="have at least 6 characters"
          meets={value.length > 5}
        />
        {checks}
      </Popover.Dropdown>
    </Popover>
  );
}
