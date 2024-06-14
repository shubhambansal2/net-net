import { Client } from '@notionhq/client'
import 'server-only'
import React from 'react'
import { BlockObjectResponse, PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { NotionPage } from '@/lib/notiontypes';

export const notion = new Client({
    auth: 'secret_QtfQppeAAKmHlzjKDAxmxHQCLvYcTSa5MSX7HoBHsDe',
});

export const fetchpages = React.cache(() => {
    return notion.databases.query({
        database_id: '588f5828beed4cf3bc46f18e3954455a',
        filter: {
            property: 'Status',
            status: {
                equals: 'Live'
            }
        }
    });
});

export const fetchbySlug = React.cache(async (slug: string) => {    
    return notion.databases.query({
        database_id:'588f5828beed4cf3bc46f18e3954455a',
        filter: {
            property: "slug",
            rich_text: {
                equals: slug
            }
        }
    }).then((res) => res.results[0] as PageObjectResponse | undefined);
});

export const fetchPageBlocks = React.cache((pageId: string) => {
    return notion.blocks.children.list({
        block_id: pageId
    }).then((res) => res.results as BlockObjectResponse[]);  
});


export const fetchNotionPages = async (databaseId: string) : Promise<NotionPage[]>  => {
    const response = await notion.databases.query({ database_id: databaseId ,
        filter: {
            property: 'Status',
            status: {
                equals: 'Live'
            } }
        }
        );
    return response.results.map((page: any) => ({
      id: page.id,
      url: page.url,
      properties: {
        title: page.properties.title.title,
        slug: page.properties.slug.rich_text
      },
    }));
  }