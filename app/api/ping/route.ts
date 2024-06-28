import { NextResponse } from "next/server";

export async function GET(request: Request) {
    return NextResponse.json({
        message: "pong", method: request.method
    });
}

export async function POST(request: Request) {
    return NextResponse.json({
        message: "pong", method: request.method
    });
}

export async function DELETE(request: Request) {
    return NextResponse.json({
        message: "pong", method: request.method
    });
}

export async function PATCH(request: Request) {
    return NextResponse.json({
        message: "pong", method: request.method
    });
}