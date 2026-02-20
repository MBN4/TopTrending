
export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface Brand {
  id: number;
  name: string;
  logo: string;
  scale?: number;
}
