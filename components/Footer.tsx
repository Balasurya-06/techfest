import { Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black border-t border-neon-green/20 pt-16 pb-24 relative overflow-hidden">
            {/* Decorative Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(57,255,20,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(57,255,20,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">

                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-orbitron font-bold text-white">
                            TECH FEST 2K26
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Faculty of Engineering<br />
                            Department of Computer Science and Engineering<br />
                            Karpagam Academy of Higher Education<br />
                            (Deemed to be University)
                        </p>
                        <div className="inline-block px-3 py-1 border border-neon-green/30 rounded text-neon-green text-xs font-bold bg-neon-green/5">
                            NAAC A+ ACCREDITED
                        </div>
                    </div>

                    {/* Coordinators */}
                    <div className="lg:col-span-1">
                        <h4 className="text-neon-green font-orbitron text-lg mb-6 uppercase tracking-wider">
                            Organizing Committee
                        </h4>
                        <div className="space-y-6">

                            {/* Leadership */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <span className="text-gray-500 text-xs uppercase tracking-widest block mb-1">Dean</span>
                                    <span className="block font-bold text-white text-sm">Dr. A. Amudha</span>
                                    <span className="text-xs text-gray-500">Faculty of Engineering, Karpagam Academy of Higher Education</span>
                                </div>
                                <div>
                                    <span className="text-gray-500 text-xs uppercase tracking-widest block mb-1">Convenor</span>
                                    <span className="block font-bold text-white text-sm">Dr. R. Santhosh</span>
                                    <span className="text-xs text-gray-500">HOD, CSE, FOE, Karpagam Academy of Higher Education</span>
                                </div>
                            </div>

                            {/* Faculty Coordinators */}
                            <div>
                                <span className="text-gray-500 text-xs uppercase tracking-widest block mb-2">Faculty Coordinators</span>
                                <div className="space-y-3">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <span className="block font-medium text-white text-sm">Dr. B. Dhanapal</span>
                                            <span className="text-xs text-gray-500">AP/CSE</span>
                                        </div>
                                        <a href="tel:9677666396" className="text-gray-400 hover:text-neon-green text-sm flex items-center gap-2 transition-colors">
                                            <Phone className="w-3 h-3" /> 96776 66396
                                        </a>
                                    </div>
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <span className="block font-medium text-white text-sm">Mrs. N. Mekala</span>
                                            <span className="text-xs text-gray-500">AP/CSE</span>
                                        </div>
                                        <a href="tel:6380732104" className="text-gray-400 hover:text-neon-green text-sm flex items-center gap-2 transition-colors">
                                            <Phone className="w-3 h-3" /> 63807 32104
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Student Coordinators */}
                            <div>
                                <span className="text-gray-500 text-xs uppercase tracking-widest block mb-2">Student Coordinators</span>
                                <div className="grid grid-cols-2 gap-4">
                                    <a href="tel:9342646741" className="group">
                                        <span className="block font-medium text-white text-sm group-hover:text-neon-green transition-colors">Vasanthakumar K</span>
                                        <span className="text-xs text-gray-500 flex items-center gap-1">
                                            <Phone className="w-3 h-3" /> 93426 46741
                                        </span>
                                    </a>
                                    <a href="tel:6369274107" className="group">
                                        <span className="block font-medium text-white text-sm group-hover:text-neon-green transition-colors">SmithMarshall J</span>
                                        <span className="text-xs text-gray-500 flex items-center gap-1">
                                            <Phone className="w-3 h-3" /> 63692 74107
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Location */}
                    <div>
                        <h4 className="text-neon-green font-orbitron text-lg mb-6 uppercase tracking-wider">
                            Locate Us
                        </h4>
                        <div className="flex items-start gap-3 text-gray-400">
                            <MapPin className="w-5 h-5 text-neon-green shrink-0 mt-1" />
                            <p className="text-sm leading-relaxed">
                                Pollachi Main Road, Eachanari Post,<br />
                                Coimbatore - 641 021,<br />
                                Tamil Nadu, India.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-600 text-sm">
                        © 2026 Tech Fest. Dept of CSE.
                    </p>
                    <p className="text-gray-600 text-xs font-mono">
                        SYSTEM_STATUS: <span className="text-neon-green">ONLINE</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
