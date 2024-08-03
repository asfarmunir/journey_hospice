import React from "react";
import Topbar from "../components/shared/Topbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col min-h-screen">
      <Topbar />
      {children}
    </main>
  );
};

export default layout;
