export default function Footer() {
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#0f437f] to-[#064ea4] text-white mt-auto">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center mb-4 group">
              <span className="text-3xl font-bold bg-gradient-to-r from-white to-[#e8c745] bg-clip-text text-transparent group-hover:from-[#e8c745] group-hover:to-white transition-all duration-300">
                LearnNova
              </span>
            </a>
            <p className="text-[#e1edfb] text-sm leading-relaxed mb-4">
              Empowering learners worldwide with quality education and
              innovative teaching methods.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#e8c745] flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 8 19">
                  <path
                    fillRule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#e8c745] flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 17"
                >
                  <path
                    fillRule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#e8c745] flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Discord"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 21 16"
                >
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#e8c745] flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.812-2.322 4.644-4.532 4.888.274.235.52.7.52 1.412 0 1.02-.009 1.843-.009 2.09 0 .263.18.573.684.474A9.91 9.91 0 0 0 10 .333Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#e8c745]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  className="text-[#e1edfb] hover:text-[#e8c745] transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e1edfb] group-hover:bg-[#e8c745] transition-colors duration-300"></span>
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/courses"
                  className="text-[#e1edfb] hover:text-[#e8c745] transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e1edfb] group-hover:bg-[#e8c745] transition-colors duration-300"></span>
                  Our Courses
                </a>
              </li>
              <li>
                <a
                  href="/teachers"
                  className="text-[#e1edfb] hover:text-[#e8c745] transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e1edfb] group-hover:bg-[#e8c745] transition-colors duration-300"></span>
                  Our Teachers
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-[#e1edfb] hover:text-[#e8c745] transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e1edfb] group-hover:bg-[#e8c745] transition-colors duration-300"></span>
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-[#e1edfb] hover:text-[#e8c745] transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e1edfb] group-hover:bg-[#e8c745] transition-colors duration-300"></span>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#e8c745]">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/help"
                  className="text-[#e1edfb] hover:text-[#e8c745] transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e1edfb] group-hover:bg-[#e8c745] transition-colors duration-300"></span>
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-[#e1edfb] hover:text-[#e8c745] transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e1edfb] group-hover:bg-[#e8c745] transition-colors duration-300"></span>
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/documentation"
                  className="text-[#e1edfb] hover:text-[#e8c745] transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e1edfb] group-hover:bg-[#e8c745] transition-colors duration-300"></span>
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="/community"
                  className="text-[#e1edfb] hover:text-[#e8c745] transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e1edfb] group-hover:bg-[#e8c745] transition-colors duration-300"></span>
                  Community
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="text-[#e1edfb] hover:text-[#e8c745] transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e1edfb] group-hover:bg-[#e8c745] transition-colors duration-300"></span>
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#e8c745]">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/privacy"
                  className="text-[#e1edfb] hover:text-[#e8c745] transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e1edfb] group-hover:bg-[#e8c745] transition-colors duration-300"></span>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-[#e1edfb] hover:text-[#e8c745] transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e1edfb] group-hover:bg-[#e8c745] transition-colors duration-300"></span>
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/cookies"
                  className="text-[#e1edfb] hover:text-[#e8c745] transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e1edfb] group-hover:bg-[#e8c745] transition-colors duration-300"></span>
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="/licenses"
                  className="text-[#e1edfb] hover:text-[#e8c745] transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e1edfb] group-hover:bg-[#e8c745] transition-colors duration-300"></span>
                  Licenses
                </a>
              </li>
              <li>
                <a
                  href="/refund"
                  className="text-[#e1edfb] hover:text-[#e8c745] transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e1edfb] group-hover:bg-[#e8c745] transition-colors duration-300"></span>
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3 text-white">Stay Updated</h3>
            <p className="text-[#e1edfb] mb-6">
              Subscribe to our newsletter for the latest courses and updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-[#e1edfb] focus:outline-none focus:border-[#e8c745] focus:bg-white/20 transition-all duration-300"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#e8c745] text-[#064ea4] font-bold rounded-lg hover:bg-[#ffd95a] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[#e1edfb] text-sm text-center sm:text-left">
              © {currentYear}{" "}
              <a
                href="/"
                className="font-semibold hover:text-[#e8c745] transition-colors duration-300"
              >
                LearnNova
              </a>
              . All Rights Reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a
                href="/sitemap"
                className="text-[#e1edfb] hover:text-[#e8c745] transition-colors duration-300"
              >
                Sitemap
              </a>
              <span className="text-[#e1edfb]">•</span>
              <a
                href="/accessibility"
                className="text-[#e1edfb] hover:text-[#e8c745] transition-colors duration-300"
              >
                Accessibility
              </a>
              <span className="text-[#e1edfb]">•</span>
              <a
                href="/support"
                className="text-[#e1edfb] hover:text-[#e8c745] transition-colors duration-300"
              >
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
