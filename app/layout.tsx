import "./globals.css";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
import Contact from "@/components/home/contact";
import { Poppins } from "next/font/google";
import MouseAndNav from "@/components/ui/MouseAndNav";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata = {
  title: "BRIGHT",
  description: "Design and Development Agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-EHK6K1XR52"
        ></Script>
        <Script id="google-anal">
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-EHK6K1XR52');`}
        </Script>
      </head>
      <body
        className={`${poppins.className} bg-white text-gray-950 relative  dark:bg-black dark:text-white dark:text-opacity-90 example`}
      >
        <ThemeContextProvider>
          <MouseAndNav />
          {children}
          <Contact />
          <Toaster position="top-right" />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
