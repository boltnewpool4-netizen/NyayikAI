import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="floating-orb w-[500px] h-[500px] bg-primary/20 top-[-200px] left-[-100px]" />
        <div className="floating-orb w-[400px] h-[400px] bg-accent/15 top-[30%] right-[-150px]" style={{ animationDelay: "2s" }} />
        <div className="floating-orb w-[300px] h-[300px] bg-primary/10 bottom-[20%] left-[10%]" style={{ animationDelay: "4s" }} />
      </div>
      
      <Navigation />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
