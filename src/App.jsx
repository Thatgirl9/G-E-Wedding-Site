import React, { useEffect, useRef, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Intro from "./Components/Intro";
import Countdown from "./Components/Countdown";
import RegistrySection from "./Components/RegistrySection";
import GiftPage from "./GiftPage";
import Footer from "./Components/Footer";
import ThankYou from "./Components/ThankYou";
import GalleryOverview from "./Components/GalleryOverview";
import GalleryPage from "./GalleryPage";

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Countdown />
        <RegistrySection />
        <GalleryOverview/>
        <ThankYou />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gift" element={<GiftPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
    </Routes>
  );
}
