// app/book/[bookId]/error.tsx
'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error('Book page error:', error);
    }, [error]);

    return (
        <div className="min-h-[50vh] flex flex-col items-center justify-center px-4">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Sorry, we couldn't find that book
            </h2>
            <p className="text-gray-600 mb-6">
                The book you're looking for might have been removed or is temporarily unavailable.
            </p>
            <div className="flex gap-4">
                <button
                    onClick={reset}
                    className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
                >
                    Try again
                </button>
                <Link
                    href="/"
                    className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                    Go home
                </Link>
            </div>
        </div>
    );
}