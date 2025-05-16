
import "../globals.css";
import UserDashboard         from '@/components/user.dashboard';
import {SearchProvider} from "@/context/SearchContext";


export const metadata = {
  title: "Thelix Holdings dashboard",
  description: "",
};

export default function Layout({ children }) {
  return (

    <html lang="en">
      <body>
      <SearchProvider>
        <UserDashboard>
          {children}
        </UserDashboard>
      </SearchProvider>
      </body>
    </html>
  );
}
