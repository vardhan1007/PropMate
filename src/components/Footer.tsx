import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050A15] border-t border-white/5 pt-20 pb-10 px-8 text-slate-400">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Mission */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-white font-black text-2xl">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-sm">P</span>
              </div>
              PropMate
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Discover your dream property with PropMate. We connect you with the finest homes, apartments, and commercial spaces across the globe.
            </p>
            <div className="space-y-3 text-xs">
              <div className="flex items-center gap-3"><MapPin size={14} className="text-blue-500" /> 123 Innovation Drive, Tech City</div>
              <div className="flex items-center gap-3"><Phone size={14} className="text-blue-500" /> +1 (555) 123-4567</div>
              <div className="flex items-center gap-3"><Mail size={14} className="text-blue-500" /> hello@propmate.com</div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Press</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Properties Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Properties</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Buy</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Rent</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Sell</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Commercial</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs">© 2025 PropMate. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><Facebook size={18} /></Link>
            <Link href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><Twitter size={18} /></Link>
            <Link href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><Instagram size={18} /></Link>
            <Link href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><Linkedin size={18} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}