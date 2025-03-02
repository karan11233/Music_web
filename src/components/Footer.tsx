export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div>
            <h2 className="text-xl font-semibold text-white">About Us</h2>
            <p className="mt-2 text-sm">
              Your go-to platform for music lovers, artists, and industry insights.
            </p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold text-white">Quick Links</h2>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
              <li><a href="/blog" className="hover:text-white">Blog</a></li>
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
  
          {/* Music Categories */}
          <div>
            <h2 className="text-xl font-semibold text-white">Music Categories</h2>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="/new-releases" className="hover:text-white">New Releases</a></li>
              <li><a href="/top-charts" className="hover:text-white">Top Charts</a></li>
              <li><a href="/playlists" className="hover:text-white">Playlists</a></li>
              <li><a href="/genres" className="hover:text-white">Genres</a></li>
              <li><a href="/artists" className="hover:text-white">Featured Artists</a></li>
            </ul>
          </div>
  
          {/* Social Media & Newsletter */}
          <div>
            <h2 className="text-xl font-semibold text-white">Stay Connected</h2>
            <div className="mt-3 flex space-x-3">
              <a href="#" className="text-xl hover:text-white">🔵 FB</a>
              <a href="#" className="text-xl hover:text-white">🐦 TW</a>
              <a href="#" className="text-xl hover:text-white">📷 IG</a>
              <a href="#" className="text-xl hover:text-white">▶️ YT</a>
            </div>
            <h3 className="mt-4 text-sm">Subscribe to our Newsletter</h3>
            <form className="mt-2 flex">
              <input type="email" placeholder="Your email" className="w-full p-2 bg-gray-800 text-white border-none rounded-l-md focus:outline-none" />
              <button className="px-4 bg-blue-600 text-white rounded-r-md hover:bg-blue-500">Subscribe</button>
            </form>
          </div>
  
        </div>
  
        {/* Copyright & Contact Info */}
        <div className="mt-10 border-t border-gray-700 pt-5 text-center text-sm">
          <p>📧 support@example.com | 📞 +1 (123) 456-7890</p>
          <p className="mt-2">© 2025 MusicWave. All Rights Reserved.</p>
        </div>
      </footer>
    );
  }
  