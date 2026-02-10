

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
  content: string,
  slug?: string,
  publicationDate: Date | null,
  facebook_link: string,
  instagram_link: string,
  linkedin_link: string,
  x_link: string,
}


export interface ServiceDataType {
  title: string;
  description: string;
  image: string
}

export interface TenantDataType {
  id?: string;
  founder_name: string;
  founder_email: string;
  startup_name: string;
  startup_description: string;
  startup_portfolio_url: string;
  startup_image_url: string;
  phone_number: string;
}