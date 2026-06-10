import type { Metadata } from "next";
import { Inter, Saira } from "next/font/google";
import AnnouncementBar from "@/components/AnnouncementBar";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SearchModal from "@/components/SearchModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const saira = Saira({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-saira",
});

export const metadata: Metadata = {
  title: {
    default: "MEFIT — Ropa Deportiva | Envíos a todo Colombia",
    template: "%s | MEFIT",
  },
  description: `MEFIT: ropa deportiva con ${site.slogan.toLowerCase()}. Shorts, pantalones y más. Envíos a todo Colombia.`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CO">
      <body className={`${inter.variable} ${saira.variable} font-sans`}>
        <AnnouncementBar />
        <Header />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CartDrawer />
        <SearchModal />
      </body>
    </html>
  );
}
