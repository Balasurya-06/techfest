import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Footer = () => {
    return (
        <>
            {/* CTA Section */}
            <section className="relative py-32 px-4 bg-black overflow-hidden">
                {/* Background Image Effect */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
                </div>

                <div className="relative z-10 w-4/5 mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
                            Register For Tech Fest 2K26
                        </h2>
                        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                            Join us for an unforgettable experience at the National Level Technical Symposium. 
                            Compete, learn, and network with the brightest minds in technology. Limited seats available!
                        </p>
                        <motion.a
                            href="https://docs.google.com/forms/d/1tsiLFyOveddLrO794Vqn5WqIdr2A-1GrGI8rC0A4_HM/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group bg-white text-gray-900 px-10 py-5 rounded-full font-bold text-lg inline-flex items-center gap-4 hover:bg-gray-100 transition-colors shadow-2xl"
                        >
                            Register Now
                            <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                            </div>
                        </motion.a>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black border-t border-gray-800 py-16 px-4">
                <div className="w-4/5 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        {/* Brand */}
                        <div className="md:col-span-1">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-gray-900 rounded-lg p-1.5 flex items-center justify-center border border-gray-800">
                                    <Image 
                                        src="/metaverse-logo.png" 
                                        alt="Metaverse Logo" 
                                        width={40} 
                                        height={40}
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="text-2xl font-black text-white">TechFest</h3>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Department of Computer Science and Engineering, 
                                Karpagam Academy of Higher Education
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Home</a></li>
                                <li><a href="#events" className="text-gray-400 hover:text-white transition-colors text-sm">Events</a></li>
                                <li><a href="#schedule" className="text-gray-400 hover:text-white transition-colors text-sm">Schedule</a></li>
                                <li><a href="#workshop" className="text-gray-400 hover:text-white transition-colors text-sm">Workshop</a></li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact</h4>
                            <ul className="space-y-3 text-sm text-gray-400">
                                <li>
                                    <span className="block font-semibold text-white">Dr. A. Amudha</span>
                                    <span className="text-xs">Dean, Faculty of Engineering</span>
                                </li>
                                <li>
                                    <span className="block font-semibold text-white">Dr. R. Santhosh</span>
                                    <span className="text-xs">Head of Department, Computer Science and Engineering</span>
                                </li>
                                <li className="pt-2">
                                    <span className="block font-semibold text-white mb-1">Faculty Coordinators</span>
                                    <span className="block text-xs">Dr. B. Dhanapal - 96776 66396</span>
                                    <span className="block text-xs">Mrs. N. Mekala - 63807 32104</span>
                                </li>
                                <li className="pt-2">
                                    <span className="block font-semibold text-white mb-1">Student Coordinators</span>
                                    <span className="block text-xs">Vasanthakumar K - 93426 46741</span>
                                    <span className="block text-xs">SmithMarshall J - 63692 74107</span>
                                </li>
                            </ul>
                        </div>

                        {/* Social */}
                        <div>
                            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Follow Us</h4>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Twitter</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Instagram</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">LinkedIn</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Facebook</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm">
                            Privacy Policy
                        </p>
                        <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-500">
                            <p>© 2026 Tech Fest. All rights reserved.</p>
                            <span className="hidden md:block">|</span>
                            <p className="text-gray-400">
                                Developed by <span className="text-white font-semibold">Metaverse</span>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
