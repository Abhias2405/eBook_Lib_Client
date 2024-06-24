import React from 'react';
import Image from 'next/image';
import DownloadButton from './components/DownloadButton';

const SingleBookPage = async ({ params }: { params: Promise<{ bookId: string }> }) => {
    try {
        // Await params
        const { bookId } = await params;

        const response = await fetch(`${process.env.BACKEND_URL}/books/${bookId}`, {
            next: {
                revalidate: 3600,
            },
        });

        if (!response.ok) {
            console.error('Response not OK:', response.status, response.statusText);
            throw new Error(`Failed to fetch book: ${response.statusText}`);
        }

        const result = await response.json();

        // Handle potential data structures
        const book = result?.data?.book || result?.data || result;

        if (!book?._id) {
            console.error('Invalid book data:', result);
            throw new Error('Invalid book data received');
        }

        return (
            <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-3 gap-8 px-5 py-10">
                {/* Left Section */}
                <div className="md:col-span-2 text-primary-950">
                    <h1 className="mb-4 text-4xl font-bold tracking-tight leading-[1.2]">
                        {book.title}
                    </h1>
                    <h3 className="text-lg font-semibold text-gray-700 mb-6">
                        by {book.writer}
                    </h3>
                    <p className="text-md leading-7 text-gray-700">{book.description}</p>
                    <DownloadButton fileLink={book.file} />
                </div>

                {/* Right Section (Image) */}
                <div className="flex justify-center md:justify-end">
                    <Image
                        src={book.coverImage}
                        alt={book.title}
                        className="rounded-lg border shadow-md"
                        height={0}
                        width={0}
                        sizes="100vw"
                        style={{ width: '100%', maxWidth: '300px', height: 'auto' }}
                    />
                </div>
            </div>
        );
    } catch (error) {
        console.error('Error in SingleBookPage:', error);
        throw error;
    }
};

export default SingleBookPage;
