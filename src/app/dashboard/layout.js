
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import UserDashboard         from '@/components/user.dashboard';


export const metadata = {
  title: "QaceTech Dashboard",
  description: "",
};

export default function Layout({ children }) {
  return (

    <html lang="en">
    {/*<AuthProvider>*/}
      <body>
        <UserDashboard>
          {children}
        </UserDashboard>
      </body>
    </html>
  );
}
