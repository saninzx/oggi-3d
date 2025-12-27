import { Instagram, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-transparent border-t border-border/50">
      <div className="w-full max-w-lg md:max-w-4xl lg:max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8">
        <div className="space-y-6 mb-6 md:grid md:grid-cols-3 md:gap-8 md:space-y-0">
          {/* Brand */}
          <div>
            <img
              src={logo}
              alt="OGGI"
              className="h-10 w-auto mb-3 brightness-0 invert"
            />
            <p className="text-[15px] text-white/80 max-w-prose">
              Redefining men's fashion in Kerala through minimalist design and
              premium quality.
            </p>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold mb-3 text-sm">Connect</h4>
            <div className="space-y-2">
              <a
                href="https://www.instagram.com/oggi.brandfactory"
                className="flex items-center gap-2 text-[15px] text-white/80 hover:text-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>
              <a
                href="mailto:info@oggi.in"
                className="flex items-center gap-2 text-[15px] text-white/80 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
              <a
                href="tel:+919747531823"
                className="flex items-center gap-2 text-[15px] text-white/80 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Phone</span>
              </a>
            </div>
          </div>

          {/* Visit */}
          <div>
            <h4 className="font-bold mb-3 text-sm">Visit</h4>
            <p className="text-[15px] text-white/80 max-w-prose">
              OGGI Brand Factory<br />
              Malappuram, Kerala<br />
              India
            </p>
          </div>
        </div>

        <div className="border-t border-border/50 pt-6">
          <p className="text-center text-[15px] text-white/80">
            © {new Date().getFullYear()} OGGI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
