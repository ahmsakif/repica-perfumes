import { NextResponse } from 'next/server';
import { perfumes } from '@/lib/data';

export async function GET(request, { params }) {
    
    const { id } = await params;
    

    const perfume = perfumes.find((p) => p.id === parseInt(id));


    if (!perfume) {
        return NextResponse.json({ error: "Perfume not found" }, { status: 404 });
    }


    return NextResponse.json(perfume);
}