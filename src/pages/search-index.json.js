import { getCollection } from 'astro:content';

export async function GET() {
  const posts    = await getCollection('posts',    ({ data }) => !data.draft);
  const projects = await getCollection('projects', ({ data }) => !data.draft);

  const index = [
    ...posts.map(p => ({
      type: 'post',
      slug: p.slug,
      title: p.data.title,
      description: p.data.description ?? '',
      tags: p.data.tags ?? [],
    })),
    ...projects.map(p => ({
      type: 'project',
      slug: p.slug,
      title: p.data.title,
      description: p.data.description ?? '',
      tags: p.data.tags ?? [],
    })),
  ];

  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json' },
  });
}
