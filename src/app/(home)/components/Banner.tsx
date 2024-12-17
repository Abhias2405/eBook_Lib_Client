import React from 'react';

const Banner = () => {
    return (
        <section className="relative w-full bg-primary-50 py-8 px-6 shadow-subtle">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                
                <div className="max-w-2xl text-center md:text-left">
                    <h1 className="text-5xl font-bold tracking-tight text-primary-700 leading-snug md:leading-snug">
                        Welcome to <span className="text-accent-600">Coders Library</span>
                    </h1>
                    <p className="mt-2 text-xl text-text-light leading-relaxed">
                        Discover, explore, and share e-books and resources for developers and tech enthusiasts.
                    </p>
                </div>

                <div className="w-full md:w-1/3">
                    <img
                        src="/book.png"
                        alt="Library Illustration"
                        className="w-full h-auto drop-shadow-sm"
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;
