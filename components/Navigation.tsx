"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { href: "/about", label: "소개" },
    { href: "/how-it-works", label: "작동방식" },
    { href: "/for-farmers", label: "일감 등록" },
    { href: "/for-workers", label: "일감 찾기" },
    { href: "/features", label: "기능" },
    { href: "/safety", label: "안전" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "문의" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect shadow-lg" : "bg-white bg-opacity-95"
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-white text-xl font-bold">단</span>
            </div>
            <span className="text-2xl font-bold gradient-text hidden sm:inline-block">
              단감
            </span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === item.href
                    ? "bg-primary-100 text-primary-700"
                    : "text-text-light hover:bg-primary-50 hover:text-primary-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="#download" className="btn btn-primary px-6 py-2.5 text-sm">
              앱 다운로드
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-primary-50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="메뉴 열기"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 animate-slide-up">
            <div className="space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? "bg-primary-100 text-primary-700"
                      : "text-text-light hover:bg-primary-50 hover:text-primary-600"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2">
                <a
                  href="#download"
                  className="btn btn-primary w-full text-center py-3 text-sm block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  앱 다운로드
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
