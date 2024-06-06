import React, { useState } from 'react';
import SmallBanner from "./SmallBanner";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const BlogSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const blogs = [
        { color: "blue-500", title: "Blog 1", description: "This is the first blog description." },
        { color: "green-500", title: "Blog 2", description: "This is the second blog description." },
        { color: "red-500", title: "Blog 3", description: "This is the third blog description." },
        { color: "yellow-500", title: "Blog 4", description: "This is the fourth blog description." },
        { color: "indigo-500", title: "Blog 5", description: "This is the fifth blog description." },
        { color: "purple-500", title: "Blog 6", description: "This is the sixth blog description." }
    ];

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % blogs.length);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + blogs.length) % blogs.length);
    };

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4 max-w-[70%]">
                <h2 className="text-3xl font-bold text-center mb-8">Latest Blogs</h2>
                <Carousel>
                    <CarouselPrevious goToPrevious={goToPrevious} />
                    <CarouselContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogs.map((blog, index) => (
                                <CarouselItem key={index} isActive={index === currentIndex}>
                                    <SmallBanner color={blog.color} title={blog.title} description={blog.description} />
                                </CarouselItem>
                            ))}
                        </div>
                    </CarouselContent>
                    <CarouselNext goToNext={goToNext} />
                </Carousel>
            </div>
        </section>
    );
};

export default BlogSection;
