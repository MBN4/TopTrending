import { Smartphone, Globe, Code, LineChart, Search, Zap, Cpu, Palette, Headphones, LucideIcon } from 'lucide-react';

export interface MegaSubItem {
  label: string;
  desc: string;
  icon: LucideIcon;
  href: string;
}

export interface MegaColumn {
  title: string;
  items: MegaSubItem[];
}

export interface NavItem {
  label: string;
  href: string;
  isMega?: boolean;
  columns?: MegaColumn[];
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about' },
  { 
    label: 'Services', 
    href: '#services',
    isMega: true,
    columns: [
      {
        title: "Development",
        items: [
          { label: "Mobile Apps", desc: "iOS & Android apps", icon: Smartphone, href: "/services/mobile-apps" },
          { label: "Web Dev", desc: "Scalable web solutions", icon: Globe, href: "/services/web-dev" },
          { label: "Software", desc: "Bespoke systems", icon: Code, href: "/services/software-dev" },
        ]
      },
      {
        title: "Marketing & AI",
        items: [
          { label: "Digital Marketing", desc: "Drive conversions", icon: LineChart, href: "/services/digital-marketing" },
          { label: "SEO Services", desc: "Rank on Google", icon: Zap, href: "/services/seo" },
          { label: "Open AI", desc: "Harness AI power", icon: Cpu, href: "/services/openai" },
        ]
      },
      {
        title: "Creative",
        items: [
          { label: "Branding", desc: "Brand identities", icon: Palette, href: "/services/branding" },
          { label: "Content", desc: "Quality writing", icon: Headphones, href: "/services/content" },
        ]
      }
    ]
  },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];