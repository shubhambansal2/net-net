import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const HeroSection = () => {
    return (
        <div className="h-[60rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
            <div className="w-full max-w-[90%] mx-auto">
                <Carousel>
                    <CarouselPrevious />
                    <CarouselContent>
                        <CarouselItem>
                            <div className="h-[42rem] w-full flex items-center justify-center bg-blue-500">
                                <div className="text-white text-center">
                                    <h2 className="text-3xl md:text-5xl font-bold">Banner 1</h2>
                                    <p className="mt-4">This is the first banner description.</p>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="h-[42rem] w-full flex items-center justify-center bg-green-500">
                                <div className="text-white text-center">
                                    <h2 className="text-3xl md:text-5xl font-bold">Banner 2</h2>
                                    <p className="mt-4">This is the second banner description.</p>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="h-[42rem] w-full flex items-center justify-center bg-red-500">
                                <div className="text-white text-center">
                                    <h2 className="text-3xl md:text-5xl font-bold">Banner 3</h2>
                                    <p className="mt-4">This is the third banner description.</p>
                                </div>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    );
};

export default HeroSection;