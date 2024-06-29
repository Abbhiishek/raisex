"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'

function ProfileDropdown() {

    const { data: session, status } = useSession()

    if (!session) {
        return <p onClick={() => signIn("github", { callbackUrl: "/feed" })}>Sign in</p>
    }


    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src={session?.user?.image || "/placeholder-user.jpg"} />
                        <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <span className="sr-only">Toggle user menu</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <div className="flex items-center gap-2 p-2">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src={session?.user?.image || "/placeholder-user.jpg"} />
                        <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-0.5 leading-none">
                        <div className="font-semibold">{session?.user?.name}</div>
                        <div className="text-sm text-muted-foreground">{session?.user?.email}</div>
                    </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link href="/profile" className="flex items-center gap-2" prefetch={false}>
                        <div className="h-4 w-4" />
                        <span>Profile</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="/settings" className="flex items-center gap-2" prefetch={false}>
                        <div className="h-4 w-4" />
                        <span>Settings</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link
                        onClick={() => {
                            signOut()
                        }}
                        href="/login" className="flex items-center gap-2" prefetch={false}>
                        <div className="h-4 w-4" />
                        <span>Sign out</span>
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ProfileDropdown