import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className="border-b bg-white shadow-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
                {/* Logo Section */}
                <Link href={'/'} className="flex items-center gap-2">
                    <div className="relative h-10 w-10 bg-accent-500 rounded-md flex items-center justify-center shadow-md">
                        <BookIcon />
                    </div>
                    <span className="text-2xl font-bold uppercase tracking-tight text-accent-700">
                        Coders Library
                    </span>
                </Link>

                {/* Buttons */}
                <div className="flex items-center gap-4">
                    <button className="h-10 rounded-md border border-accent-500 px-4 py-2 text-sm font-medium text-accent-600 transition-all hover:bg-accent-100 active:scale-95">
                        Sign in
                    </button>
                    <button className="h-10 rounded-md bg-accent-500 px-4 py-2 text-sm font-medium text-white shadow-md transition-all hover:bg-accent-600 active:scale-95">
                        Sign up
                    </button>
                </div>
            </div>
        </nav>
    );
};

const BookIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#fff"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="#1d4e89"
        className="h-6 w-6">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
        />
    </svg>
);

export default Navbar;
