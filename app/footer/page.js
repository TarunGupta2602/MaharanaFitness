import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="mb-2">Email: info@maharanafitnessclub.com</p>
          <p className="mb-2">Phone: +91-123-456-7890</p>
          <p>Address: 123 Fitness Lane, Mumbai, India</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-blue-300">Home</Link></li>
            <li><Link href="/about" className="hover:text-blue-300">About</Link></li>
            <li><Link href="/services" className="hover:text-blue-300">Services</Link></li>
            <li><Link href="/contact" className="hover:text-blue-300">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .386.045.762.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.733-.666 1.585-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.396 0-.788-.023-1.175-.068 2.187 1.405 4.78 2.223 7.576 2.223 9.055 0 14.01-7.503 14.01-14.01 0-.213-.005-.426-.014-.637.962-.695 1.8-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.319 3.608 1.294.975.975 1.232 2.242 1.294 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.319 2.633-1.294 3.608-.975.975-2.242 1.232-3.608 1.294-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.319-3.608-1.294-.975-.975-1.232-2.242-1.294-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.319-2.633 1.294-3.608.975-.975 2.242-1.232 3.608-1.294 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.67.014-4.953.072-1.315.067-2.598.315-3.528.844-1.031.557-1.9 1.425-2.457 2.457-.529.93-.777 2.213-.844 3.528-.058 1.283-.072 1.694-.072 4.953s.014 3.67.072 4.953c.067 1.315.315 2.598.844 3.528.557 1.031 1.425 1.9 2.457 2.457.93.529 2.213.777 3.528.844 1.283.058 1.694.072 4.953.072s3.67-.014 4.953-.072c1.315-.067 2.598-.315 3.528-.844 1.031-.557 1.9-1.425 2.457-2.457.529-.93.777-2.213.844-3.528.058-1.283.072-1.694.072-4.953s-.014-3.67-.072-4.953c-.067-1.315-.315-2.598-.844-3.528-.557-1.031-1.425-1.9-2.457-2.457-.93-.529-2.213-.777-3.528-.844-1.283-.058-1.694-.072-4.953-.072z"/>
                <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 border-t border-blue-700 pt-4">
        <p>&copy; {new Date().getFullYear()} Maharana Fitness Club. All rights reserved.</p>
      </div>
    </footer>
  );
}