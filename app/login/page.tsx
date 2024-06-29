import LoginBtn from '@/components/LoginBtn'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

function LoginPage() {
    return (
        <div className='grid place-content-center h-screen'>
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>
                        Sign in with Oauth providers to get started with RaiseX
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <LoginBtn />
                </CardContent>
            </Card>

        </div>
    )
}

export default LoginPage