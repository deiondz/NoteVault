import "./globals.css";

import { Poppins as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

import { cn } from "@lib/utils";
import { Providers } from "./providers";
import { Navbar } from "@components/Navbar";

export const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
});

export const metadata = {
  title: "CollegeRep",
  description: "For educational purposes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("font-sans min-h-screen ", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Providers>
            <Navbar />
            {children}
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
