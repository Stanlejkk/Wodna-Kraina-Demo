import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";

export const metadata: Metadata = {
  title: "Wodna Kraina – Łowisko Wędkarskie | Wilga",
  description:
    "Łowisko wędkarskie Wodna Kraina w Wildze. 150 ha powierzchni, karpie do 25 kg, amury do 20 kg. Zasada Złów i Wypuść. 50 km od Warszawy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className="antialiased">
        <Navbar />
        <main className="relative z-[1]">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
