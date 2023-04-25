import Header from "@/components/layouts/Header";
import "../styles/globals.css";
import Sidebar from "@/components/layouts/Sidebar";
import RightSideBar from "@/components/layouts/RightSideBar";
import Footer from "@/components/layouts/Footer";

export const metadata = {
  title: "KKS Capitals",
  description: "KKS Capitals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white relative">
        <Header />
        <div className="w-full flex">
          <Sidebar />
          {children}
          <RightSideBar />
        </div>
        <Footer />
      </body>
    </html>
  );
}
