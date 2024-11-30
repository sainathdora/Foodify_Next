import Image from "next/image";
import localFont from "next/font/local";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import { useState } from "react";
import Link from "next/link";
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
          <header className="grid grid-cols-2 gap-4">
            <ImageSlideShow />
            <section>
              <h1 className="text-center text-4xl font-bold">Obesity</h1>
              <p className="p-4">
                In our effort to combat the rising health challenges in India,
                we’ve developed a cutting-edge deep learning model fine-tuned on
                a diverse Indian food dataset. This model, powered by the
                EfficientNetB7 architecture, is designed to predict the
                macronutrients (carbohydrates, proteins, fats, and calories) in
                food based on images uploaded by the user. With obesity and
                related health issues becoming increasingly prevalent in India,
                our tool aims to provide individuals with valuable insights into
                the nutritional content of the food they consume. By empowering
                users with this knowledge, we hope to inspire healthier eating
                habits and contribute to the ongoing efforts to tackle obesity,
                diabetes, and heart diseases that are affecting millions of
                people in the country. Our goal is to promote awareness, improve
                health outcomes, and encourage informed food choices, ultimately
                creating a healthier future for India.
              </p>
            </section>
          </header>
          <section>
            <h1 className="text-center text-7xl">
              Fine Tuned On EfficientNetB7
            </h1>
            <p className="text-center text-lg">
              EfficientNetB7, a state-of-the-art deep learning model, boasts up
              to 60 million parameters, making it one of the most powerful
              architectures for image recognition tasks. This model has been
              fine-tuned on our custom Indian food cuisine dataset, which
              includes thousands of high-quality images representing a wide
              variety of traditional Indian dishes.
            </p>
          </section>
          <section>
            <h1 className="text-center text-6xl font-bold text-green-600">
              Achieving 80% Accuracy on Test Data
            </h1>
            <p className="text-center text-lg mt-4">
              Our deep learning model, fine-tuned on a custom Indian food
              dataset, has successfully achieved an impressive 80% accuracy on
              test data. This milestone demonstrates the model&apos;s ability to
              make accurate predictions for macronutrient content, offering
              users a reliable tool for understanding the nutritional value of
              their meals.
            </p>
          </section>
          <Form />
          <div className="container text-center hover:text-blue-400">
            <Link href="https://colab.research.google.com/drive/17KkI5bqJbLn0OCzkTTOrybIf58Dlq3Z7?authuser=2">
              Model Training
            </Link>
            <Link href="https://colab.research.google.com/drive/17KkI5bqJbLn0OCzkTTOrybIf58Dlq3Z7?authuser=2">
              Model Training
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
