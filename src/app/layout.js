import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import "./globals.css";


export const metadata = {
  title: "K. Atchannaidu | Cabinet Minister, Andhra Pradesh",
  description:
    "Official website of K. Atchannaidu, Cabinet Minister, Government of Andhra Pradesh.",
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
