import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Locale, routing } from "@/i18n/routing";
import { Flex, UIProvider } from "@yamada-ui/react";
import "../reset.css";
import Navbar from "../components/Navbar";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <UIProvider>
            <Navbar locale={locale} />
            <Flex justify={"center"} alignItems={"center"}>
              {children}
            </Flex>
          </UIProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
