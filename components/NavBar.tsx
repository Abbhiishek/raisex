"use client"

import Link from 'next/link'
import React from 'react'
import ProfileDropdown from './ProfileDropdown'
import { ThemeToggler } from '@/components/shared/ThemeToggler'
import { Button } from './ui/button'
import { PlusCircle } from 'lucide-react'
import { toast } from 'sonner'


function Navbar() {

    return (
        <header className="flex h-16 w-full shrink-0 items-center px-4 md:px-6 bg-background border-b">
            <Link href="#" className="flex items-center" prefetch={false}>

                <span className="">RaiseX</span>
            </Link>
            <div className="ml-auto flex items-center gap-4">
                <Button variant={"default"} size={"icon"} onClick={() => toast.error("Backend connection timeout! Try again later")}>
                    <PlusCircle className="h-5 w-5" />
                </Button>
                <ThemeToggler />
                <ProfileDropdown />
            </div>
        </header>
    )
} ``

export default Navbar