import React from 'react'
import { HoverEffect } from './ui/card-hover-effect'

const Project = [
    {
        "title": "Mastering Music Production",
        "description": "Join us for an in-depth session on music production techniques, covering DAWs, mixing, and mastering.",
        "link": "https://example.com/webinar-music-production"
      },
      
      {
        "title": "Songwriting Secrets",
        "description": "Learn the art of crafting compelling lyrics and melodies from industry professionals.",
        "link": "https://example.com/webinar-songwriting"
      },
      
      {
        "title": "Music Marketing 101",
        "description": "Discover strategies to promote your music and build your fanbase using social media and streaming platforms.",
        "link": "https://example.com/webinar-music-marketing"
      },
      
      {
        "title": "Live Performance Tips",
        "description": "Enhance your stage presence and learn techniques to engage your audience during live performances.",
        "link": "https://example.com/webinar-live-performance"
      },
      
      {
        "title": "Building a Home Studio",
        "description": "A beginner-friendly guide on setting up an affordable and efficient home studio for music recording and production.",
        "link": "https://example.com/webinar-home-studio"
      },
      
      {
        "title": "The Business of Music",
        "description": "Understand the legal and financial aspects of the music industry, including copyrights, royalties, and contracts.",
        "link": "https://example.com/webinar-music-business"
      },
]

function Webinar() {
  return (
    <div className='bg-black font-bold text-xl'>
      <HoverEffect items={Project} />
    </div>
  )
}

export default Webinar
