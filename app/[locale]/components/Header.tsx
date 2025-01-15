import { Flex, Text } from "@yamada-ui/react";
import React from "react";
import LocaleMenuButton from "./LocaleMenuButton";

export default function Header() {
  return (
    <header>
      <Flex justify={"space-between"} padding={" 20px 40px"}>
        <nav>
          <Text as="p">Home</Text>
        </nav>
        <LocaleMenuButton />
      </Flex>
    </header>
  );
}
