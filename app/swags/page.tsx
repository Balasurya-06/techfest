'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import { Upload, Download } from 'lucide-react';

export default function SwagsPage() {
    const [name, setName] = useState('');
    const [uploadedImage, setUploadedImage] = useState<string | null>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUploadedImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDownload = () => {
        const canvas = canvasRef.current;
        if (canvas) {
            const link = document.createElement('a');
            link.download = `techfest-2k26-${name || 'pass'}.png`;
            link.href = canvas.toDataURL();
            link.click();
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20">
            <div className="w-4/5 mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
                        GENERATE YOUR PASS
                    </h1>
                    <p className="text-gray-400 text-lg">Create your personalized Tech Fest 2K26 identity card</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Side - Preview */}
                    <div className="relative">
                        <div className="absolute -top-4 -left-4 bg-green-500 text-black px-4 py-2 rounded-lg font-bold text-sm z-10">
                            Preview
                        </div>
                        
                        {/* Canvas for actual rendering */}
                        <canvas ref={canvasRef} width={600} height={800} className="hidden" />
                        
                        {/* Visual Preview */}
                        <div className="relative w-full aspect-[3/4] bg-gradient-to-br from-amber-100 via-stone-200 to-amber-50 rounded-2xl overflow-hidden shadow-2xl border-8 border-amber-900">
                            {/* Military Background Pattern */}
                            <div className="absolute inset-0 opacity-30">
                                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.1)_10px,rgba(0,0,0,0.1)_20px)]"></div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute top-0 left-0 w-32 h-32 opacity-20">
                                <svg viewBox="0 0 100 100" className="w-full h-full">
                                    <polygon points="50,10 90,90 10,90" fill="currentColor" />
                                </svg>
                            </div>
                            <div className="absolute bottom-0 right-0 w-24 h-48 opacity-10">
                                <div className="w-full h-full bg-gray-900 transform skew-x-12"></div>
                            </div>

                            {/* Header */}
                            <div className="relative z-10 text-center pt-8 px-6">
                                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-1 tracking-tight">
                                    TECH<span className="text-green-600">FEST</span>
                                </h2>
                                <p className="text-sm text-gray-700 font-semibold">
                                    National Level Technical Symposium | 2026
                                </p>
                            </div>

                            {/* Photo Frame */}
                            <div className="relative z-10 mx-auto mt-8 w-[70%]">
                                <div className="relative bg-black rounded-lg overflow-hidden aspect-square border-4 border-amber-900 shadow-xl">
                                    {uploadedImage ? (
                                        <img src={uploadedImage} alt="Uploaded" className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gray-900">
                                            <div className="text-center text-gray-500">
                                                <Upload className="w-16 h-16 mx-auto mb-2 opacity-50" />
                                                <p className="text-xs font-mono">UPLOAD PHOTO</p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Vertical Text */}
                                <div className="absolute -left-12 top-0 bottom-0 flex items-center">
                                    <p className="text-amber-900 font-black text-3xl tracking-widest transform -rotate-90 origin-center whitespace-nowrap opacity-80">
                                        PARTICIPANT
                                    </p>
                                </div>
                            </div>

                            {/* Name Plate */}
                            <div className="relative z-10 mx-auto mt-8 w-[70%]">
                                <div className="bg-gradient-to-r from-amber-200 via-stone-100 to-amber-200 border-4 border-amber-900 rounded-lg py-4 px-6 shadow-lg">
                                    <div className="flex items-center justify-center gap-2">
                                        <span className="text-amber-900 font-bold text-lg">↔</span>
                                        <p className="text-xl md:text-2xl font-black text-gray-900 uppercase tracking-wide text-center">
                                            {name || 'YOUR NAME'}
                                        </p>
                                        <span className="text-amber-900 font-bold text-lg">↔</span>
                                    </div>
                                </div>
                            </div>

                            {/* Footer Silhouettes */}
                            <div className="absolute bottom-0 left-0 right-0 h-32 flex items-end justify-between px-8 pb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-white rounded-lg p-1.5 shadow-lg border-2 border-amber-900">
                                        <Image 
                                            src="/college-logo.png" 
                                            alt="KAHE" 
                                            width={40} 
                                            height={40}
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="w-12 h-12 bg-gray-900 rounded-lg p-1.5 shadow-lg border-2 border-amber-900">
                                        <Image 
                                            src="/metaverse-logo.png" 
                                            alt="MA" 
                                            width={40} 
                                            height={40}
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                
                                <div className="text-right">
                                    <p className="text-xs font-bold text-gray-900">FEB 12, 2026</p>
                                    <p className="text-[10px] text-gray-700">KAHE, Coimbatore</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="space-y-8">
                        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-xl">
                            <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-wider">
                                Customize Your Pass
                            </h3>

                            {/* Name Input */}
                            <div className="mb-6">
                                <label className="block text-sm font-bold text-gray-300 mb-3 uppercase tracking-wider">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter your name"
                                    className="w-full bg-gray-900 border-2 border-gray-700 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:border-green-500 focus:outline-none font-semibold uppercase tracking-wide transition-all"
                                    maxLength={30}
                                />
                            </div>

                            {/* Photo Upload */}
                            <div className="mb-6">
                                <label className="block text-sm font-bold text-gray-300 mb-3 uppercase tracking-wider">
                                    Upload Photo
                                </label>
                                <div className="relative border-2 border-dashed border-gray-700 rounded-lg p-12 text-center hover:border-green-500 transition-all cursor-pointer bg-gray-900/50 group">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                        id="photo-upload"
                                    />
                                    <Upload className="w-12 h-12 mx-auto mb-4 text-gray-500 group-hover:text-green-500 transition-colors" />
                                    <p className="text-gray-400 font-semibold text-sm">
                                        {uploadedImage ? 'Photo uploaded! Click to change' : 'Click or drag to upload'}
                                    </p>
                                    <p className="text-gray-600 text-xs mt-2">Recommended: Square image, max 5MB</p>
                                </div>
                            </div>

                            {/* Download Button */}
                            <button
                                onClick={handleDownload}
                                disabled={!name || !uploadedImage}
                                className="w-full bg-gradient-to-r from-green-600 to-emerald-700 text-white py-5 rounded-lg font-black text-lg uppercase tracking-wider hover:from-green-700 hover:to-emerald-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg disabled:shadow-none"
                            >
                                <Download className="w-6 h-6" />
                                Download Your Pass
                            </button>

                            {/* Info */}
                            <div className="mt-6 bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                                <p className="text-xs text-green-400 leading-relaxed">
                                    <strong>Note:</strong> Upload a clear photo and enter your name to generate your personalized Tech Fest 2K26 identity card. The pass will be downloaded as a PNG image.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
