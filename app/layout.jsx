import Navbar from "@/components/common/Navbar/Navbar";
import "@/styles/globals.css";

export const metadata = {
  title: "Animesh Gupta Portfolio",
};

const Layout = ({ children }) => {
  return (
    <html>
      <body>
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
};

export default Layout;
