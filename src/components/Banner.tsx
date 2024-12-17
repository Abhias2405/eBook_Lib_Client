import React from 'react';

const Banner = () => {
    return (
        <section className="relative w-full bg-primary-50 py-16 px-6 shadow-subtle">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="max-w-2xl text-center md:text-left">
                    <h1 className="text-4xl font-bold tracking-tight text-primary-700 leading-tight md:leading-snug">
                        Welcome to <span className="text-accent-600">Coders Library</span>
                    </h1>
                    <p className="mt-4 text-lg text-text-light leading-relaxed">
                        Your one-stop platform to discover, explore, and share e-books and resources
                        for developers and tech enthusiasts.
                    </p>
                    <div className="mt-6 flex justify-center md:justify-start gap-4">
                        <button className="h-12 px-6 rounded bg-accent-500 text-white font-medium shadow-subtle transition-all hover:bg-accent-600 active:scale-95">
                            Explore Library
                        </button>
                        <button className="h-12 px-6 rounded border border-primary-200 text-primary-600 font-medium transition-all hover:shadow-medium active:scale-95">
                            Learn More
                        </button>
                    </div>
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
