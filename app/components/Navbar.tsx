import { Flex, Text, Wrap } from "@yamada-ui/react";
import React from "react";
import LocaleMenuButton from "./LocaleMenuButton";
import Link from "next/link";
import { Locale } from "../../i18n/routing";
import GIthubIconButton from "./GIthubIconButton";

export default function Navbar({ locale }: { locale: Locale }) {
  return (
    <nav>
      <Flex
        justify={"space-between"}
        alignItems={"center"}
        padding={"20px 40px"}
      >
        <Flex justify={"space-around"} width={"180px"}>
          <Link href={`/${locale}/`}>
            <Text>Home</Text>
          </Link>
          <Link href={`/${locale}/work`}>
            <Text>Work</Text>
          </Link>
          <Link href={`/${locale}/post`}>
            <Text>Post</Text>
          </Link>
        </Flex>

        <Flex justify={"space-around"} width={"100px"}>
          <GIthubIconButton />
          <LocaleMenuButton />
        </Flex>
      </Flex>
    </nav>
  );
}
