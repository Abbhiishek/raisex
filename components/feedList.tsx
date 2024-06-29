import Image from 'next/image'
import React from 'react'
import { Card, CardContent, CardDescription, CardTitle } from './ui/card'
import { HeartIcon, MoveHorizontalIcon } from 'lucide-react'
import { Button } from './ui/button'
import ideas from "@/public/ideas.json"

async function FeedList() {

    return (
        <div>
            <hr />
            <div className='grid grid-cols-4 flex-col gap-4 '>
                {ideas.map((idea) => (
                    <Card className="w-full max-w-md rounded-lg shadow-md" key={idea.id}>
                        <Image
                            src={idea.image}
                            alt="Card Image"
                            width={400}
                            height={100}
                            className="rounded-t-lg object-cover w-full max-h-36"
                        />
                        <CardContent className="p-6 space-y-4">
                            <div>
                                <CardTitle className="text-2xl font-bold">{idea.name}</CardTitle>
                                <CardDescription className="text-muted-foreground">
                                    {idea.description}
                                </CardDescription>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <HeartIcon className="w-5 h-5" />
                                    <span>{idea.category}</span>
                                </div>
                                <Button variant="ghost" size="icon">
                                    <MoveHorizontalIcon className="w-5 h-5" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default FeedList