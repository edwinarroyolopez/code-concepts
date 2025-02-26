import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const Layout = dynamic(() => import("@/components/layouts/layout"), {
  ssr: false,
});

const Home = () => {
  return (
    <div className="flex min-h-screen">
      <p className="text-lg text-gray-500">Home</p>
    </div>
  );
};

Home.Layout = Layout;

export default Home;
