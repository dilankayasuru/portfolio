import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { SideNavigation } from "./components/SideNavigation";
import { Logo } from "./components/Logo";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dilanka Yasuru - Portfolio",
  description: "Dilanka Yasuru - Software engineering student specializing in full stack development with expertise in both frontend and backend technologies. Passionate about creating intuitive UI/UX designs that enhance user experience. Explore my projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased`}
      >
        <Logo />
        <SideNavigation />
        {children}
      </body>
    </html>
  );
}
