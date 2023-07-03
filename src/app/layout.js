import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons8-person-24.png" sizes="any" />
      </head>
      <body className={`${roboto.variable} px-2`}>
        <>{children}</>
      </body>
    </html>
  );
}
