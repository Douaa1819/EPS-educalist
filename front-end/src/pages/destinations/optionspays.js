import React from 'react';
import Head from 'next/head';
import '@/app/styles/globals.css';
import Navbar from '@/app/components/Navbar/Navbar';
import Footer from '@/app/components/Footer/footer';

export default function OptionsPays() {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Options</title>
            </Head>
            <Navbar />
                <div className="relative rounded-lg overflow-hidden">
                    <div class="max-w-lg mx-auto bg-white dark:bg-zinc-800 rounded-lg shadow-md p-4 mt-[5%] mb-[5%]">
                        <h2 class="text-lg font-semibold mb-4 border-b-2 border-[#F52C2C] pb-2">Les Options</h2>
                        <div class="space-y-4">
                            <a href='/destinations/infodepays'>
                                <div class="flex items-center bg-[#F52C2C] text-white rounded-lg p-4">
                                    <img src="../assets/images/article.png" alt="Article Icon" class="w-12 h-12 mr-4" />
                                    <span class="text-xl">Article</span>
                                </div>
                            </a>
                            <div class="flex items-center bg-[#F52C2C] text-white rounded-lg p-4">
                                <img src="../assets/images/visa.png" alt="Visa Icon" class="w-12 h-12 mr-4" />
                                <span class="text-xl">Visa</span>
                            </div>
                            <div class="flex items-center bg-[#F52C2C] text-white rounded-lg p-4">
                                <img src="../assets/images/bource.png" alt="Bources Icon" class="w-12 h-12 mr-4" />
                                <span class="text-xl">Bources</span>
                            </div>
                        </div>
                    </div>
                <Footer />
                </div>
        </>
    );
}