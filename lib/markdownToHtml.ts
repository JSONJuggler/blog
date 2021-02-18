import remark from 'remark';
import html from 'remark-html';
import highlight from 'remark-highlight.js';
import gfm from 'remark-gfm';

export default async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(highlight)
    .use(gfm)
    .use(html)
    .process('<link rel="stylesheet" type="text/css" href="/blog/css/markdown-styles.css" />' + markdown);
  return result.toString();
}
