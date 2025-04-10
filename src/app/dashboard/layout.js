
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import UserDashboard         from '@/components/user.dashboard';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "QaceTech Dashboard",
  description: "",
};

export default function Layout({ children }) {
  return (

    <html lang="en">
    {/*<AuthProvider>*/}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <UserDashboard>
          {children}
        </UserDashboard>
      </body>
    </html>
  );
}
