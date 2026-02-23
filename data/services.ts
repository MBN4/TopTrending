export interface ServiceDetail {
    slug: string;
    title: string;
    tagline: string;
    description: string;
    bannerImage: string;
    features: { title: string; desc: string; icon: string }[];
    sections: { title: string; content: string; image?: string }[];
}

export const SERVICES_DATA: ServiceDetail[] = [
    {
        slug: 'corporate-branding',
        title: 'Corporate Branding',
        tagline: 'Crafting Identities That Command Respect.',
        description: 'We go beyond logos. We build comprehensive brand ecosystems that resonate with your audience and stand the test of time.',
        bannerImage: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=1600',
        features: [
            { title: 'Identity Design', desc: 'Logos, color palettes, and typography.', icon: 'Palette' },
            { title: 'Brand Strategy', desc: 'Positioning and voice development.', icon: 'Target' },
            { title: 'Brand Guidelines', desc: 'Ensuring consistency across all touchpoints.', icon: 'BookOpen' }
        ],
        sections: [
            {
                title: 'Storytelling Through Design',
                content: 'Your brand is a story. We help you tell it through visual excellence and strategic positioning. Our process involves deep market research to ensure your brand stands out in a crowded marketplace.'
            }
        ]
    },
    {
        slug: 'packing-pos-material',
        title: 'Packing & POS Material',
        tagline: 'Packaging That Sells Itself.',
        description: 'From box design to point-of-sale displays, we create physical touchpoints that drive conversion.',
        bannerImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1600',
        features: [
            { title: 'Product Packaging', desc: 'Innovative and sustainable box designs.', icon: 'Package' },
            { title: 'POS Displays', desc: 'Eye-catching in-store marketing materials.', icon: 'ShoppingBag' },
            { title: 'Print Production', desc: 'High-quality finishes and materials.', icon: 'Printer' }
        ],
        sections: [
            {
                title: 'Physical Brilliance',
                content: 'In the digital age, physical packaging is more important than ever. We design packaging that creates an unboxing experience your customers will remember.'
            }
        ]
    },
    {
        slug: 'print-media',
        title: 'Print Media',
        tagline: 'Tangible Excellence in a Digital World.',
        description: 'High-impact print solutions for brochures, magazines, and outdoor advertising.',
        bannerImage: 'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&q=80&w=1600',
        features: [
            { title: 'Brochure Design', desc: 'Informative and beautifully laid out.', icon: 'FileText' },
            { title: 'Editorial Design', desc: 'Magazine and catalog layout. ', icon: 'Layout' },
            { title: 'Large Format', desc: 'Billboards and event signage.', icon: 'Maximize' }
        ],
        sections: [
            {
                title: 'The Power of Print',
                content: 'Print media offers a level of permanence and trust that digital often lacks. Our designs leverage typography and layout to create lasting impressions.'
            }
        ]
    },
    {
        slug: 'event-management',
        title: 'Event Management',
        tagline: 'Memorable Experiences, Flawlessly Executed.',
        description: 'Strategic planning and creative execution for corporate events, launches, and exhibitions.',
        bannerImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1600',
        features: [
            { title: 'Full Planning', desc: 'Concept to execution management.', icon: 'Calendar' },
            { title: 'Experiential Marketing', desc: 'Interactive brand experiences.', icon: 'Users' },
            { title: 'Technical Setup', desc: 'Audio-visual and stage management.', icon: 'Settings' }
        ],
        sections: [
            {
                title: 'Bringing Brands to Life',
                content: 'We create immersive environments where your brand can interact directly with its community. Every detail is managed to ensure a seamless experience.'
            }
        ]
    },
    {
        slug: 'ecommerce-service',
        title: 'Ecommerce Service',
        tagline: 'Optimizing Every Step of the Buyer Journey.',
        description: 'End-to-end ecommerce solutions including store setup, optimization, and digital marketing.',
        bannerImage: 'https://images.unsplash.com/photo-1556742049-13e73bb3b27c?auto=format&fit=crop&q=80&w=1600',
        features: [
            { title: 'Platform Setup', desc: 'Shopify, WooCommerce, and custom builds.', icon: 'ShoppingCart' },
            { title: 'CRO', desc: 'Conversion rate optimization strategies.', icon: 'Zap' },
            { title: 'Logistics Integration', desc: 'Seamless shipping and inventory sync.', icon: 'Truck' }
        ],
        sections: [
            {
                title: 'Selling Without Borders',
                content: 'Our ecommerce strategies are built on data. We analyze user behavior to create storefronts that don\'t just look good, but sell efficiently.'
            }
        ]
    },
    {
        slug: 'web-development',
        title: 'Web Development',
        tagline: 'High-Performance Digital Platforms.',
        description: 'Cutting-edge websites and applications built for speed, security, and scalability.',
        bannerImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1600',
        features: [
            { title: 'Frontend Mastery', desc: 'React, Next.js, and modern UI/UX.', icon: 'Code' },
            { title: 'Robust Backend', desc: 'Secure and scalable infrastructure.', icon: 'Database' },
            { title: 'Performance First', desc: 'Lightning-fast load times.', icon: 'FastForward' }
        ],
        sections: [
            {
                title: 'Technological Superiority',
                content: 'We build digital products that represent the pinnacle of modern web technology. Our code is clean, our designs are responsive, and our results are measurable.'
            }
        ]
    },
    {
        slug: 'photography-videography',
        title: 'Photography & Videography',
        tagline: 'Visual Content That Captivates.',
        description: 'Professional media production for brands, products, and corporate storytelling.',
        bannerImage: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1600',
        features: [
            { title: 'Product Shoots', desc: 'High-end studio photography.', icon: 'Camera' },
            { title: 'Corporate Video', desc: 'Interviews, promos, and docs.', icon: 'Video' },
            { title: 'Aerial Media', desc: 'Drone-based photo and video.', icon: 'Wind' }
        ],
        sections: [
            {
                title: 'Mastering the Frame',
                content: 'Visuals are the first thing your audience sees. We ensure those visuals are stunning, professional, and on-brand.'
            }
        ]
    },
    {
        slug: 'podcast',
        title: 'Podcast Production',
        tagline: 'Voice Your Authority.',
        description: 'Professional audio production, editing, and distribution for branded podcasts.',
        bannerImage: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=1600',
        features: [
            { title: 'Audio Engineering', desc: 'Crystal-clear sound quality.', icon: 'Mic' },
            { title: 'Show Notes & SEO', desc: 'Content that drives listeners.', icon: 'Search' },
            { title: 'Distribution', desc: 'Spotify, Apple, and beyond.', icon: 'Share2' }
        ],
        sections: [
            {
                title: 'Conversing with the World',
                content: 'Podcasts are a powerful way to build trust and authority. We handle the technical side so you can focus on the conversation.'
            }
        ]
    },
    {
        slug: 'content-writing',
        title: 'Content Writing',
        tagline: 'Words That Convert.',
        description: 'Strategic copywriting for blogs, websites, and social media that drives engagement and SEO.',
        bannerImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1600',
        features: [
            { title: 'Copywriting', desc: 'Persuasive sales and ad copy.', icon: 'PenTool' },
            { title: 'SEO Blogging', desc: 'Traffic-driving educational content.', icon: 'Globe' },
            { title: 'Social Strategy', desc: 'Engaging captions and scripts.', icon: 'MessageSquare' }
        ],
        sections: [
            {
                title: 'The Art of Persuasion',
                content: 'Great design needs great words. Our writers understand how to balance brand voice with psychological triggers to drive action.'
            }
        ]
    }
];
