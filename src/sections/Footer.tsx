"use client";
import Image from "next/image";
import logo from "@/assets/logosaas.png";
import Yt from "@/assets/social-youtube.svg";
import Insta from "@/assets/social-insta.svg";
import Linkedin from "@/assets/social-linkedin.svg";
import Pin from "@/assets/social-pin.svg";
import Xlogo from "@/assets/social-x.svg";
export const Footer = () => {



  return <footer className="py-20 bg-black text-white text-base">
          <div className="container py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
              {/* Brand & description */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <Image src={logo} alt="saas logo" height={44} width={44} />
                  <div>
                    <div className="font-bold">Pathway</div>
                    <div className="text-sm text-white/60">Productivity toolkit</div>
                  </div>
                </div>

                <p className="text-sm text-white/70 max-w-sm">
                  Build better habits, track progress, and keep your team aligned — the lightweight way.
                </p>

                <div className="flex gap-3">
                  <a href="#" aria-label="YouTube" className="hover:text-white/90 text-white/70">
                    <Yt className="h-6 w-6" />
                  </a>
                  <a href="#" aria-label="Pinterest" className="hover:text-white/90 text-white/70">
                    <Pin className="h-6 w-6" />
                  </a>
                  <a href="#" aria-label="X" className="hover:text-white/90 text-white/70">
                    <Xlogo className="h-6 w-6" />
                  </a>
                  <a href="#" aria-label="LinkedIn" className="hover:text-white/90 text-white/70">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="#" aria-label="Instagram" className="hover:text-white/90 text-white/70">
                    <Insta className="h-6 w-6" />
                  </a>
                </div>
              </div>

              {/* Links columns */}
              <div className="grid grid-cols-2 gap-6 md:col-span-1 lg:col-span-1">
                <div>
                  <h4 className="font-semibold mb-3">Product</h4>
                  <ul className="flex flex-col gap-2 text-white/70 text-sm">
                    <li><a href="#" className="hover:text-white">Features</a></li>
                    <li><a href="#" className="hover:text-white">Pricing</a></li>
                    <li><a href="#" className="hover:text-white">Integrations</a></li>
                    <li><a href="#" className="hover:text-white">Release notes</a></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Company</h4>
                  <ul className="flex flex-col gap-2 text-white/70 text-sm">
                    <li><a href="#" className="hover:text-white">About</a></li>
                    <li><a href="#" className="hover:text-white">Careers</a></li>
                    <li><a href="#" className="hover:text-white">Customers</a></li>
                    <li><a href="#" className="hover:text-white">Contact</a></li>
                  </ul>
                </div>
              </div>

              {/* Newsletter / CTA */}
              <div className="md:pt-2">
                <h4 className="font-semibold mb-3">Stay up to date</h4>
                <p className="text-sm text-white/70 mb-4">Get product updates, tips, and early access to new features.</p>

                <form className="flex gap-3 max-w-md" onSubmit={(e) => e.preventDefault()}>
                  <label className="sr-only" htmlFor="footer-email">Email</label>
                  <input id="footer-email" type="email" placeholder="Your email" className="flex-1 px-4 py-2 rounded-lg bg-white/5 placeholder:text-white/40 border border-white/6 focus:outline-none focus:ring-2 focus:ring-[#001E80]/30" />
                  <button className="btn btn-primary">Subscribe</button>
                </form>

                <div className="text-xs text-white/50 mt-4">
                  By subscribing you agree to our <a href="#" className="underline">privacy policy</a>.
                </div>
              </div>
            </div>

            <div className="border-t border-white/6 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
              <div>© {new Date().getFullYear()} Pathway. All rights reserved.</div>
              <div className="flex gap-6 mt-3 md:mt-0">
                <a href="#" className="hover:text-white">Terms</a>
                <a href="#" className="hover:text-white">Privacy</a>
                <a href="https://github.com/PratikKhaire" target="_blank" rel="noopener noreferrer" className="hover:text-white">Made by Pratik</a>
              </div>
            </div>
          </div>
        </footer>
      ;
    };
