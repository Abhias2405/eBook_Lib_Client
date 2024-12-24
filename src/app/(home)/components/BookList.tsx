import ClientBookList from './ClientBookList';

export const dynamic = 'force-dynamic';

const BookList = async () => {
    try {
        // Check for environment variable
        const backendUrl = process.env.BACKEND_URL;
        if (!backendUrl) {
            throw new Error('Please set BACKEND_URL in your .env.local file');
        }

        const response = await fetch(`${backendUrl}/books`, {
            cache: 'no-store',
        });

        if (!response.ok) {
            throw new Error('An error occurred while fetching the books');
        }

        const result = await response.json();

        const books = Array.isArray(result?.data?.books)
            ? result.data.books
            : Array.isArray(result?.books)
            ? result.books
            : [];

        return <ClientBookList books={books} />;
    } catch (error) {
        console.error('Error fetching books:', error);

        // Trigger a page reload if fetch fails
        if (typeof window !== 'undefined') {
            setTimeout(() => {
                window.location.reload();
            }, 2000); // Delay the reload by 2 seconds
        }

        return (
            <div className="text-center text-red-600">
                {error instanceof Error
                    ? error.message
                    : 'An error occurred while fetching the books'}
            </div>
        );
    }
};

export default BookList;
