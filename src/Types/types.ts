

export interface FocusAreaType {
  id: number;
  title: string;
  description: string;
  img: string
}


export interface NewsBlogType {
  id?: string;
  image: string;
  title: string;
  content: string
  publicationDate: Date | null,
  facebook_link: string,
   insta_link: string,
        linkedin_link: string,
        x_link: string,
}


export interface ServiceDataType {
  title: string;
  description: string;
  image: string
}