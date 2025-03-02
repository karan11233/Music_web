"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const Content = [
  {
    title: "Unlimited Music, Anytime, Anywhere",
    description:
      "Enjoy seamless streaming of your favorite tracks, albums, and playlists without interruptions. With WaveTunes, music is always at your fingertips.",
  },
  {
    title: "Curated Playlists for Every Mood",
    description:
      "From upbeat party anthems to relaxing acoustic vibes, our expertly curated playlists ensure you always have the perfect soundtrack for any moment.",
  },
  {
    title: "Discover Emerging Artists & Trending Hits",
    description:
      "Stay ahead of the curve with fresh releases, rising stars, and the hottest music charts. WaveTunes keeps you updated with the latest in the music world.",
  },
  {
    title: "High-Quality Audio for the Best Experience",
    description:
      "Immerse yourself in crystal-clear sound with our high-definition audio streaming. Hear every beat, every note, just as the artist intended.",
  },
  {
    title: "Personalized Recommendations Just for You",
    description:
      "WaveTunes learns your taste and delivers music recommendations that match your vibe, ensuring a truly customized listening experience.",
  },
  {
    title: "Exclusive Content & Behind-the-Scenes Access",
    description:
      "Get exclusive interviews, behind-the-scenes footage, and early access to music from your favorite artists, only on WaveTunes.",
  },
  {
    title: "Ad-Free Premium Experience",
    description:
      "Upgrade to WaveTunes Premium for an uninterrupted, ad-free music experience with offline listening and unlimited skips.",
  },
  {
    title: "Connect with a Global Music Community",
    description:
      "Join a passionate community of music lovers. Share your playlists, discover new sounds, and connect with people who share your taste.",
  },
];

function WhyChooseUs() {
  return (
    <div className="text-white font-bold text-2xl">
        <StickyScroll content={Content}/>
    </div>
  )
}

export default WhyChooseUs;
