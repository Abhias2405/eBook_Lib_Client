'use client';
import React from 'react';

const DownloadButton = ({ fileLink }: { fileLink: string }) => {
    const handleDownload = () => {
        window.open(fileLink, '_blank');
    };

    return (
        <button
            onClick={handleDownload}
            className="mt-6 px-6 py-3 rounded-lg bg-primary-500 text-white text-base font-semibold transition duration-200 ease-in-out 
            hover:bg-primary-600 hover:scale-105 active:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-400">
            Download the book
        </button>
    );
};

export default DownloadButton;
