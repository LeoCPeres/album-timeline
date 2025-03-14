import type { Metadata } from "next";
import { Pacifico, Montserrat } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"], // ou o peso que preferir
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Álbum de fotos",
  description: "Criado com muito amor para o meu amor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pacifico.className} ${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
