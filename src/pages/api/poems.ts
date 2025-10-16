import type { APIRoute } from 'astro';
import { getPoemsCollection, type Poem } from '../../lib/mongodb';

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const category = url.searchParams.get('category');
    const published = url.searchParams.get('published') !== 'false';
    
    const collection = await getPoemsCollection();
    
    let query: any = {};
    if (category) {
      query.category = category;
    }
    if (published) {
      query.published = true;
    }
    
    const poems = await collection
      .find(query)
      .sort({ createdAt: -1 })
      .toArray();
    
    return new Response(JSON.stringify(poems), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching poems:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch poems' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const poem: Omit<Poem, '_id'> = await request.json();
    
    // Validate required fields
    if (!poem.title || !poem.content || !poem.category) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    
    const collection = await getPoemsCollection();
    
    const newPoem = {
      ...poem,
      createdAt: new Date(),
      updatedAt: new Date(),
      published: poem.published ?? false,
    };
    
    const result = await collection.insertOne(newPoem);
    
    return new Response(JSON.stringify({ 
      _id: result.insertedId,
      ...newPoem 
    }), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error creating poem:', error);
    return new Response(JSON.stringify({ error: 'Failed to create poem' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
