import { DM_Mono } from "next/font/google";
import "./globals.css";

const dm_mono = DM_Mono({
  weight: ["300", "400", "500"],

  subsets: ["latin"],
});

export const metadata = {
  title: "2023 in retrospective",
  description: "Tell us your 2023 story",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dm_mono.className}>{children}</body>
    </html>
  );
}
