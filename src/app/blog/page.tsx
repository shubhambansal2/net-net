
import React from "react";
import { fetchpages, fetchNotionPages} from '@/lib/notion';
// import exp from 'constants';
// import { NotionPage } from '@/lib/notiontypes';

export async function Blog() {

    const databaseId = '588f5828beed4cf3bc46f18e3954455a';
    const pages =  await fetchNotionPages(databaseId);
    console.log('Data pulled from Notion: ', pages);

    return (
       <main className="">
        <div>
        <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h1 className="text-center text-bold">Welcome to the blog page</h1>
          <ul>
          {pages.map((page) => {
            const title = page.properties.title.map(t => t.text.content).join(' ') || 'Untitled';
            const slug  = page.properties.slug.map(s => s.text.content).join(' ') || 'Untitled';
            return (
              <li key={page.id}>
              <a href={`/blog/${slug}`} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
              </li>
            );
          })}
      </ul>
        </div>
        </main>
    );
  }

  export default Blog;