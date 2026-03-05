

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


export interface StartupDataType {
  id?: string;
  founder_name: string;
  founder_email: string;
  startup_name: string;
  startup_description: string;
  startup_portfolio_url: string;
  startup_image_url: string;
  phone_number: string;
}


export interface CohortFormData {
  id?: string;
  startup_name: string,
  founder_phonenumber: string,
  founder_email: string,
  problem_solving: string,
  solution_description: string,
  industry_category: "fintech" | "edutech" | "healthtech" | "agrictech" | "ai/data" | "e-commerce" | "others" | "",
  startup_stage: "idealogy" | "prototype/mvp" | "generating revenue" | "",
  have_customers: boolean,
  have_pitchdeck: boolean,
  pitchdeck_url: string,
}