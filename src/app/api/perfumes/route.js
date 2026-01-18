
import { NextResponse } from 'next/server';
import { perfumes } from '@/lib/data';

export async function GET() {
    return NextResponse.json(perfumes);
}


export async function POST(request) {
    const body = await request.json();
    
    const newPerfume = {
        id: perfumes.length + 1,
        name: body.name,
        brand: body.brand,
        price: parseFloat(body.price),
        description: body.description,
        image: body.image || "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop",
        isFeatured: false
    };

    perfumes.push(newPerfume);
    
    return NextResponse.json(newPerfume, { status: 201 });
}