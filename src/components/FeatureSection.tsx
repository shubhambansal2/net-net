'use client';
import React from 'react';
import Link from "next/link";
import aiCatalogData from "@/app/data/blogTemplate.json";
import {BackgroundGradient} from "@/components/ui/background-gradient";

interface Catalog {
    id: number;
    title: string;
    slug: string;
    description: string;
    instructor: string;
    isFeatured: boolean;
    image: string;
}

const FeatureSection = () => {
    const featuredItems = aiCatalogData.aiCatalog.filter((item:Catalog) => item.isFeatured);
    return (
        <>
            <div className="py-10 bg-gray-950">
                <div className="p-4 relative z-10 w-full text-center">
                    <h2 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Featured Projects</h2>
                    <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">Latest AI Projects</p>
                </div>
                <div className="mt-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">

                        {featuredItems.map((item:Catalog)=>(
                            <div key={item.id} className="flex justify-center">
                                <BackgroundGradient
                                    className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                                    <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                        <img src={item.image} />
                                        <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{item.title}</p>
                                        <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{item.description}</p>
                                        <Link href={`/blog/${item.slug}`}>
                                            Learn More
                                        </Link>
                                    </div>
                                </BackgroundGradient>
                            </div>
                        ))}

                    </div>
                </div>
                <div className="mt-20 text-center">
                    <Link href={"/blog"} className="shadow-[inset_0_0_0_2px_#616467] px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
                        View More Blogs
                    </Link>
                </div>

            </div>
        </>
    );
};

export default FeatureSection;


//
// <button className="shadow-[inset_0_0_0_2px_#616467] px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
//     Playlist
// </button>
