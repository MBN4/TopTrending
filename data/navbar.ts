import { NavItem } from '../types';

export const NAV_ITEMS: NavItem[] = [
    { label: 'Home', href: '/' },
    {
        label: 'Services',
        href: '#',
        children: [
            { label: 'Corporate Branding', href: '/services/corporate-branding' },
            { label: 'Packing & POS Material', href: '/services/packing-pos-material' },
            { label: 'Print Media', href: '/services/print-media' },
            { label: 'Event Management', href: '/services/event-management' },
            { label: 'Ecommerce Service', href: '/services/ecommerce-service' },
            { label: 'Web Development', href: '/services/web-development' },
            { label: 'Photography & Videography', href: '/services/photography-videography' },
            { label: 'Podcast', href: '/services/podcast' },
            { label: 'Content Writing', href: '/services/content-writing' },
        ]
    },
    { label: 'Gallery', href: '/#gallery' },
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/#contact' },
];
