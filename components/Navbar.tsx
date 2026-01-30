import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navLinks = [
        { href: '#', label: 'Home' },
        { href: '#events', label: 'Events' },
        { href: '#workshop', label: 'Workshop' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm">
            <div className="w-11/12 md:w-4/5 mx-auto">
                <div className="flex items-center justify-between h-20">
                    {/* Left - Logo & Brand */}
                    <div className="flex items-center gap-2 md:gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg border-2 border-gray-900 p-1 flex items-center justify-center">
                                <Image 
                                    src="/college-logo.png" 
                                    alt="KAHE Logo" 
                                    width={32} 
                                    height={32}
                                    className="object-contain"
                                />
                            </div>
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-900 rounded-lg p-1 flex items-center justify-center">
                                <Image 
                                    src="/metaverse-logo.png" 
                                    alt="Metaverse Logo" 
                                    width={32} 
                                    height={32}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <div className="border-l-2 border-gray-300 pl-3 md:pl-4 ml-1 md:ml-2">
                            <h1 className="text-lg md:text-xl font-black text-gray-900 leading-tight">TECH FEST 2K26</h1>
                            <p className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-wider">National Level Symposium</p>
                        </div>
                    </div>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a 
                                key={link.href}
                                href={link.href} 
                                className="text-gray-700 hover:text-gray-900 transition-colors font-semibold text-sm uppercase tracking-wide relative group"
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all group-hover:w-full"></span>
                            </a>
                        ))}
                        <a 
                            href="https://docs.google.com/forms/d/1tsiLFyOveddLrO794Vqn5WqIdr2A-1GrGI8rC0A4_HM/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-900 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-gray-800 transition-colors shadow-lg"
                        >
                            Register Now
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-gray-200 bg-white overflow-hidden"
                    >
                        <div className="p-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a 
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-gray-900 font-semibold text-base py-2 hover:text-blue-600 transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a 
                                href="https://docs.google.com/forms/d/1tsiLFyOveddLrO794Vqn5WqIdr2A-1GrGI8rC0A4_HM/viewform"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-900 text-white text-center py-3 rounded-lg font-bold text-sm hover:bg-gray-800 transition-colors shadow-md mt-2"
                            >
                                Register Now
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

