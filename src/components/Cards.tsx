import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const cardContent = [
  {
    quote:
      "Music is a higher revelation than all wisdom and philosophy. It is the electrical soil in which the spirit lives, thinks, and invents. Without music, life would be an error, exhaustion, exile.",
    name: "Ludwig van Beethoven",
    title: "Composer & Pianist",
  },

  {
    quote:
      "Music produces a kind of pleasure which human nature cannot do without. It is the heart's own language, beyond words and beyond time.",
    name: "Confucius",
    title: "Philosopher",
  },

  {
    quote:
      "After silence, that which comes nearest to expressing the inexpressible is music.",
    name: "Aldous Huxley",
    title: "Writer & Philosopher",
  },

  {
    quote:
      "Music acts like a magic key, to which the most tightly closed heart opens.",
    name: "Maria von Trapp",
    title: "Singer & Author",
  },

  {
    quote:
      "Music is the divine way to tell beautiful, poetic things to the heart.",
    name: "Pablo Casals",
    title: "Cellist & Composer",
  },

  {
    quote:
      "To stop the flow of music would be like the stopping of time itself, incredible and inconceivable.",
    name: "Aaron Copland",
    title: "Composer & Conductor",
  },
];

function Cards() {
  return (
    <div className="h-[47rem] w-full dark:bg-black bg-black  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="text-white">
        <div className="text-center content-center mt-44 font-bold text-3xl font-sans">
          <h1>Hear Our Harmony: Voice of Success</h1>
        </div>
        <div className="content-end pb-72  text-2xl  pt-20 pl-24 font-bold">
          <InfiniteMovingCards
            items={cardContent}
            direction="right"
            speed="normal"
          />  
        </div> 
      </div>
    </div>
  );
}

export default Cards;
