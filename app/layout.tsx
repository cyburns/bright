import Header from "@/components/navbar/header";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/home/footer";
import ThemeSwitch from "@/components/home/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
import ProfileHeader from "@/components/profile-header/profile-header";
import Mouse from "@/components/ui/Mouse";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata = {
  title: "BRIGHT",
  description: "Fast web development",
  image: "https://example.com/image.jpg",
  url: "https://example.com",
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
        className={`${poppins.className} bg-white text-gray-950 relative  dark:bg-black dark:text-white dark:text-opacity-90`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            {children}
            <Toaster position="top-right" />
            <ProfileHeader />
            <ThemeSwitch />
            <Mouse />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
