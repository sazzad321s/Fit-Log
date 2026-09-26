import React from 'react';
import Link from 'next/link';
const NotFound = () => {
    return (
        <main className="flex min-h-[70vh] items-center justify-center px-5">
            <div className="text-center">
                
                <p className="text-8xl font-black text-white">
                    404
                </p>

                <h1 className="mt-4 text-3xl font-extrabold uppercase text-white">
                    Workout Not Found
                </h1>

                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-400">
                    Looks like this workout or page doesn&apos;t exist.
                    Let&apos;s get you back to training.
                </p>

                <Link
                    href="/"
                    className="mt-6 inline-block rounded-lg bg-black px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-black"
                >
                    BACK TO HOME
                </Link>
            </div>
        </main>
    );
};

export default NotFound;