import Image from "next/image";
import localFont from "next/font/local";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import { useState } from "react";
import ImageSlideShow from "@/components/ImageSlideShow";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <NavBar></NavBar>
          <ImageSlideShow />
          <Form />
        </main>
        <Footer />
      </div>
    </>
  );
}
