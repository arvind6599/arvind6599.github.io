import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  posts.sort((a, b) => (b.data.date?.valueOf() ?? 0) - (a.data.date?.valueOf() ?? 0));

  return rss({
    title: 'Arvind Menon',
    description: 'Personal blog by Arvind Menon — AI builder, hackathon enthusiast, and data scientist.',
    site: context.site,
    items: posts.map(post => ({
      title:       post.data.title,
      pubDate:     post.data.date,
      description: post.data.description,
      link:        `/posts/${post.slug}/`,
    })),
  });
}
