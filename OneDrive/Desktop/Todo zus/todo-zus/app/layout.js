import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Todo | ZUS",
  description: "Todo App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" border-b-2 w-full p-4 flex justify-around">
          <h1 className="font-bold">ZUS</h1>
          <p>Hey, everyone this is a Todo app. 🎉</p>
        </div>
        {children}
      </body>
    </html>
  );
}
