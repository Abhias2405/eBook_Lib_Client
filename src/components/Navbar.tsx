import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className="border-b border-primary-100 bg-primary-50 shadow-subtle">
            <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
                {/* Logo */}
                <Link href={'/'}>
                    <div className="flex items-center gap-2">
                        <Hexagon />
                        <span className="text-2xl font-semibold text-primary-700 tracking-wide">
                            Coders Library
                        </span>
                    </div>
                </Link>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <button className="h-10 px-5 rounded border border-primary-200 text-primary-600 text-sm font-medium transition-shadow hover:shadow-medium active:scale-95">
                        Sign In
                    </button>
                    <button className="h-10 px-5 rounded bg-accent-500 text-white text-sm font-medium shadow-subtle hover:bg-accent-600 active:scale-95">
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

// Minimal Hexagon Logo
const Hexagon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="#9e9784"
        stroke="#655f57"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="drop-shadow-sm">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    </svg>
);
