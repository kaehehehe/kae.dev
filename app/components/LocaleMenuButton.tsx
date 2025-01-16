import Link from "next/link";
import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@yamada-ui/react";
import { LanguagesIcon } from "@yamada-ui/lucide";
import { useLocale } from "next-intl";
import { Locale } from "../../i18n/routing";

export default function LocaleMenuButton() {
  const currentLocale = useLocale();

  const setFontWeight = (locale: Locale) => {
    return locale === currentLocale ? "700" : "400";
  };

  return (
    <Menu animation="top">
      <MenuButton
        as={IconButton}
        icon={<LanguagesIcon fontSize="2xl" />}
        colorScheme="primary"
        variant="primary"
        fontSize={"2xl"}
      />
      <MenuList minBoxSize={"100px"}>
        <Link href="ja">
          <MenuItem fontWeight={setFontWeight("ja")}>日本語</MenuItem>
        </Link>

        <Link href="ko">
          <MenuItem fontWeight={setFontWeight("ko")}>한국어</MenuItem>
        </Link>

        <Link href="en">
          <MenuItem fontWeight={setFontWeight("en")}>English</MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
}
