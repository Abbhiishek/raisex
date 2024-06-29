import Image from 'next/image'
import React from 'react'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { FlaskConical, HandCoins, HeartIcon, MoveHorizontalIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Ideas } from '@/lib/data/ideas'
import Link from 'next/link'

async function FeedList() {

    return (
        <div>
            <hr />
            <div className='grid grid-cols-4 flex-col gap-4 '>
                {Ideas.map((idea, index) => (
                    <Card className="w-full max-w-md rounded-lg shadow-md" key={index}>
                        <Image
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuFMvIAkwhIDUMI1sBd4EjJ_Lfa-qEaRnD8g&s"
                            alt="Card Image"
                            width={400}
                            height={100}
                            className="rounded-t-lg object-cover w-full max-h-36"
                        />
                        <CardContent className="flex  flex-col">
                            <div className='flex-1'>
                                <CardTitle className="text-2xl font-bold">{idea.name}</CardTitle>
                                <CardDescription className="text-muted-foreground">
                                    {idea.description}

                                    <span className='flex flex-wrap gap-2 '>
                                        {idea.category.map((category, index) => (
                                            <span key={index} className='text-sm italic'>#{category}</span>
                                        ))}
                                    </span>
                                </CardDescription>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <HandCoins className="w-5 h-5" />
                                    <span>{idea.raised_amount}USD</span>
                                </div>
                                <Link href={`/idea/${idea.slug}`}>
                                    <Button variant="ghost" size="icon">
                                        <FlaskConical className="w-5 h-5" />
                                    </Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default FeedList