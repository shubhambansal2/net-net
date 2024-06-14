export interface NotionText {
  content: string;
}

export interface NotionTitle {
  type: string;
  text: NotionText;
}

export interface NotionRichText {
  type: string;
  text: NotionText;
}

export interface NotionPageProperties {
  title: NotionTitle[];
  slug: NotionRichText[];
}

export interface NotionPage {
  id: string;
  url: string;
  properties: NotionPageProperties;
}