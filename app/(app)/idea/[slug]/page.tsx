
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Ideas } from '@/lib/data/ideas';
import { Separator } from '@radix-ui/react-dropdown-menu';
import { CoinsIcon } from 'lucide-react';

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


import React from 'react'
import Image from 'next/image';

interface IdeaPageProps {
    params: {
        slug: string;
    };
}

function IdeaPage({ params }: IdeaPageProps) {
    const { slug } = params;

    const idea = Ideas.find((idea) => idea.slug === slug);

    if (!idea) {
        return (<div>Idea not found</div>);
    }

    return (
        <div className='container  mx-auto px-[.6rem] py-4 flex flex-col items-center gap-4'>
            <div className='text-center'>
                <h1 className='text-3xl font-bold'>{idea.name}</h1>
                <p className='text-base italic'># {idea.tagline}</p>
                <p className='text-lg'>{idea.description}</p>
            </div>

            <span className='flex flex-wrap gap-2 '>
                {idea.category.map((category, index) => (
                    <Badge key={index} className='text-sm italic'>#{category}</Badge>
                ))}
            </span>

            <hr />
            <Separator />


            <div>
                <Carousel className="w-full max-w-xs">
                    <CarouselContent>
                        {idea.images.map((image, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <Image
                                                src={image}
                                                alt={image}
                                                width={400}
                                                height={400}
                                                className='object-cover h-full w-full rounded-t-lg'
                                            />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    )
}

export default IdeaPage