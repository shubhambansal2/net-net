
import React from "react";
import {fetchNotionPages} from '@/lib/notion';
// import {WobbleBlogCards} from "@/components/blogcards2"
import {BentoGridDemo} from "@/components/blogcards";
import { AuroraBackground } from "@/components/ui/aurora-background";
// import exp from 'constants';
// import { NotionPage } from '@/lib/notiontypes';

export default async function Blog() {

    const databaseId = '588f5828beed4cf3bc46f18e3954455a';
    const pages =  await fetchNotionPages(databaseId);
    console.log('Data pulled from Notion: ', pages);

    return (

        <AuroraBackground>
          <div className="mt-20 z-10">
          <BentoGridDemo/>
          </div>
        </AuroraBackground>
    );
  }

  {/* </div> */}
          {/* <ul>
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
      </ul> */}
        {/* </div> */}

  // export default Blog;