import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Adrian Diseño Web",
  description: "Creo páginas web modernas y optimizadas para ayudar a negocios y emprendedores a destacar y atraer más clientes."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
