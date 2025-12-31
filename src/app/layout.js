import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import "./globals.css";


export const metadata = {
  title: "K. Atchannaidu | Cabinet Minister, Andhra Pradesh",
  description:
    "Official website of K. Atchannaidu, Cabinet Minister, Government of Andhra Pradesh.",
};

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className={`${poppins.className} antialiased bg-[#F7FAFC] text-gray-900`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
