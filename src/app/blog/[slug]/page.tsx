import React from "react";
import { fetchPageBlocks, fetchbySlug, notion } from "@/lib/notion";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";


export default async function page({params}: {params: {slug: string}}) {

    const page = await fetchbySlug(params.slug);
    // console.log('Data pulled from Notion:', page);
    
    if (!page) {
      return null; // or handle the error in an appropriate way
    }

    const blocks = await fetchPageBlocks(page.id);

    const renderer = new NotionRenderer({
        client: notion
        });

    renderer.use(hljsPlugin({}));
    renderer.use(bookmarkPlugin(undefined ));

    const html = await renderer.render(...blocks);

    console.log('HTML:', html);
    //   const blocks = await fetchPageBlocks(page.id);

        return (
            <main className="items-center justify-center">
          <div className="flex flex-col items-center justify-center">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
                {/* <h1 className="text-3xl font-bold text-center">{post.properties.Name.title[0].plain_text}</h1> */}
                <div className = "prose" dangerouslySetInnerHTML={{ __html: html }} />
            </div>
            </main>
        );

}