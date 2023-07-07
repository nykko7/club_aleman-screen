import { InactiveModal } from "@/components/inactive-modal";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Club Aleman - Puerto Montt",
  description: "Club Aleman - Puerto Montt",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
      <InactiveModal />
    </html>
  );
}
