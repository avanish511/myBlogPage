import type { APIRoute } from 'astro';
import { getPoemsCollection } from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export const GET: APIRoute = async ({ params }) => {
  try {
    const { id } = params;
    
    if (!id) {
      return new Response(JSON.stringify({ error: 'Poem ID is required' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    
    const collection = await getPoemsCollection();
    const poem = await collection.findOne({ _id: new ObjectId(id) });
    
    if (!poem) {
      return new Response(JSON.stringify({ error: 'Poem not found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    
    return new Response(JSON.stringify(poem), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching poem:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch poem' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};

export const PUT: APIRoute = async ({ params, request }) => {
  try {
    const { id } = params;
    const updates = await request.json();
    
    if (!id) {
      return new Response(JSON.stringify({ error: 'Poem ID is required' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    
    const collection = await getPoemsCollection();
    
    const updateData = {
      ...updates,
      updatedAt: new Date(),
    };
    
    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updateData }
    );
    
    if (result.matchedCount === 0) {
      return new Response(JSON.stringify({ error: 'Poem not found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    
    const updatedPoem = await collection.findOne({ _id: new ObjectId(id) });
    
    return new Response(JSON.stringify(updatedPoem), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error updating poem:', error);
    return new Response(JSON.stringify({ error: 'Failed to update poem' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};

export const DELETE: APIRoute = async ({ params }) => {
  try {
    const { id } = params;
    
    if (!id) {
      return new Response(JSON.stringify({ error: 'Poem ID is required' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    
    const collection = await getPoemsCollection();
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    
    if (result.deletedCount === 0) {
      return new Response(JSON.stringify({ error: 'Poem not found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    
    return new Response(JSON.stringify({ message: 'Poem deleted successfully' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error deleting poem:', error);
    return new Response(JSON.stringify({ error: 'Failed to delete poem' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
