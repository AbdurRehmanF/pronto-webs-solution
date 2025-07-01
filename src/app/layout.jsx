import { Poppins } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/sonner";

// Layout components
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer/footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: "Best Digital Marketing Services Company in USA ",
  description:
    "Elevate your brand on a budget with the best digital marketing company offering affordable services. Achieve online success without breaking the bank. ",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Navbar />
        <div>{children}</div>
        <Footer />
        <Toaster richColors />
      </body>
    </html>
  );
};

export default RootLayout;
