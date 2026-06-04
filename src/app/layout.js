import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import variables from "daisyui/functions/variables";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
})

export const metadata = {
  title: "Dragon News",
  description: "Best News Website in Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${poppins.className} light h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <main className="max-w-300 mx-auto">
          {children}
        </main>
        </body>
    </html>
  );
}
