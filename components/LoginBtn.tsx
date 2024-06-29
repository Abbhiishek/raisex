"use client";

import React from 'react'
import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'

function LoginBtn() {
    return (
        <Button
            onClick={() => signIn("github", { callbackUrl: "/feed" })}
            className="w-full"
        >
            GitHub
        </Button>
    )
}

export default LoginBtn