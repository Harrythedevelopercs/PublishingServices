import { Montserrat, Comfortaa } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer/Footer";
import { Navigation } from "./components";


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-comfortaa",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${comfortaa.variable} transition-all duration-1000`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
