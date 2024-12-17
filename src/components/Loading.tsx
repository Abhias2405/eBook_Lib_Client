import React from 'react';

const Loading = () => {
    return (
        <div className="min-h-[800px] mx-auto max-w-7xl px-5 pb-10 mb-6 flex flex-col items-center justify-center">
            <div className="text-2xl font-medium text-gray-700 mb-4">
                Loading, please wait...
            </div>
            <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-primary-500 animate-bounce delay-200"></div>
                <div className="w-3 h-3 rounded-full bg-primary-500 animate-bounce delay-400"></div>
                <div className="w-3 h-3 rounded-full bg-primary-500 animate-bounce delay-600"></div>
            </div>
        </div>
    );
};

export default Loading;
