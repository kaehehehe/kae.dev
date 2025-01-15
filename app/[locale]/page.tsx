import { useTranslations } from "next-intl";
import { Flex, Heading, Wrap } from "@yamada-ui/react";
import { Text, Container } from "@yamada-ui/react";
import Image from "next/image";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <Container>
      <Flex direction="column" align="center">
        <Image
          src="https://avatars.githubusercontent.com/u/77221488?v=4"
          alt="profile image"
          width={300}
          height={300}
        />

        <Heading as="h1" marginTop={"12px"}>
          About Me
        </Heading>

        <Wrap maxWidth={"800px"} width={"95%"}>
          <Text mt={4}>{t("paragraphs.para1")}</Text>
          <Text mt={4}>{t("paragraphs.para2")}</Text>
          <Text mt={4}>{t("paragraphs.para3")}</Text>
          <Text mt={4}>{t("paragraphs.para4")}</Text>
          <Text mt={4}>{t("paragraphs.para5")}</Text>
          <Text mt={4}>{t("paragraphs.para6")}</Text>
        </Wrap>
      </Flex>
    </Container>
  );
}
