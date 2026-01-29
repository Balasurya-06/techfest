import Image from 'next/image';

const Navbar = () => {
    const navLinks = [
        { href: '#', label: 'Home' },
        { href: '#events', label: 'Events' },
        { href: '#schedule', label: 'Schedule' },
        { href: '#workshop', label: 'Workshop' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm">
            <div className="w-4/5 mx-auto">
                <div className="flex items-center justify-between h-20">
                    {/* Left - Logo & Brand */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-12 h-12 bg-white rounded-lg border-2 border-gray-900 p-1.5 flex items-center justify-center">
                                <Image 
                                    src="/college-logo.png" 
                                    alt="KAHE Logo" 
                                    width={40} 
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                            <div className="w-12 h-12 bg-gray-900 rounded-lg p-1.5 flex items-center justify-center">
                                <Image 
                                    src="/metaverse-logo.png" 
                                    alt="Metaverse Logo" 
                                    width={40} 
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <div className="border-l-2 border-gray-300 pl-4 ml-2">
                            <h1 className="text-xl font-black text-gray-900">TECH FEST 2K26</h1>
                            <p className="text-[10px] text-gray-500 uppercase tracking-wider">National Level Symposium</p>
                        </div>
                    </div>
                    
                    {/* Right - Navigation Links */}
                    <div className="flex items-center gap-8">
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
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

