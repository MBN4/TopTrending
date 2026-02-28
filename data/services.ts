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
        slug: 'mobile-apps',
        title: 'Mobile Applications',
        tagline: 'Pocket-Sized Powerhouses.',
        description: 'We develop high-performance iOS and Android applications that provide seamless user experiences and robust functionality.',
        bannerImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1600',
        features: [
            { title: 'iOS & Android', desc: 'Native and cross-platform builds.', icon: 'Smartphone' },
            { title: 'UI/UX Design', desc: 'Intuitive mobile interfaces.', icon: 'Palette' },
            { title: 'App Store Optimization', desc: 'Visibility in the marketplace.', icon: 'Target' }
        ],
        sections: [{ title: 'Mobile First Future', content: 'In an increasingly mobile world, your app is the direct link to your customers. We ensure it is fast, secure, and engaging.' }]
    },
    {
        slug: 'web-dev',
        title: 'Web Development',
        tagline: 'Building the Digital Backbone.',
        description: 'From landing pages to complex enterprise platforms, we build websites that are fast, secure, and optimized for growth.',
        bannerImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1600',
        features: [
            { title: 'React & Next.js', desc: 'Modern, blazing fast frontends.', icon: 'Code' },
            { title: 'Backend Systems', desc: 'Scalable and secure databases.', icon: 'Database' },
            { title: 'SEO Optimized', desc: 'Rank high right from launch.', icon: 'Zap' }
        ],
        sections: [{ title: 'Performant Engineering', content: 'We don\'t just write code; we engineer digital experiences. Our websites are built to handle traffic and convert users into customers.' }]
    },
    {
        slug: 'software-dev',
        title: 'Custom Software',
        tagline: 'Bespoke Solutions for Complex Problems.',
        description: 'Tailor-made software solutions designed to streamline your business processes and solve unique operational challenges.',
        bannerImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1600',
        features: [
            { title: 'System Architecture', desc: 'Robust planning for long-term growth.', icon: 'Settings' },
            { title: 'API Integration', desc: 'Connecting your existing tools.', icon: 'Zap' },
            { title: 'Cloud Solutions', desc: 'Secure hosting and accessibility.', icon: 'Globe' }
        ],
        sections: [{ title: 'Business Efficiency', content: 'Automate repetitive tasks and gain insights through custom dashboards. We build the tools that empower your team.' }]
    },
    {
        slug: 'digital-marketing',
        title: 'Digital Marketing',
        tagline: 'Results-Driven Growth Strategies.',
        description: 'We help brands grow through data-backed marketing campaigns across social media, search engines, and display networks.',
        bannerImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600',
        features: [
            { title: 'Social Media Ads', desc: 'Targeted Facebook and IG campaigns.', icon: 'Users' },
            { title: 'Lead Generation', desc: 'Consistent pipelines for your sales.', icon: 'Target' },
            { title: 'Analytics', desc: 'Measure every dollar spent.', icon: 'Target' }
        ],
        sections: [{ title: 'The Growth Engine', content: 'Marketing is an investment, not an expense. We ensure your campaigns are optimized to deliver the highest possible ROI.' }]
    },
    {
        slug: 'seo',
        title: 'SEO Services',
        tagline: 'Dominating the Search Results.',
        description: 'Boost your visibility and organic traffic through advanced search engine optimization techniques.',
        bannerImage: 'https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?auto=format&fit=crop&q=80&w=1600',
        features: [
            { title: 'Keyword Research', desc: 'Find what your customers search for.', icon: 'Search' },
            { title: 'Technical SEO', desc: 'Optimize site speed and indexing.', icon: 'Settings' },
            { title: 'Content Strategy', desc: 'Authoritative articles that rank.', icon: 'PenTool' }
        ],
        sections: [{ title: 'Organic Authority', content: 'Appearing on the first page of Google is the ultimate trust signal. We help you climb the rankings and stay there.' }]
    },
    {
        slug: 'openai',
        title: 'Open AI Solutions',
        tagline: 'Leveraging Artificial Intelligence.',
        description: 'Integrate GPT and other cutting-edge AI models into your workflows to automate content and customer service.',
        bannerImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600',
        features: [
            { title: 'AI Automation', desc: 'Reduce manual tasks with GPT.', icon: 'Cpu' },
            { title: 'Custom Chatbots', desc: '24/7 intelligent customer support.', icon: 'MessageSquare' },
            { title: 'Model Training', desc: 'Fine-tuning AI for your data.', icon: 'Cpu' }
        ],
        sections: [{ title: 'The AI Revolution', content: 'Stay ahead of the competition by adopting AI today. We help you implement smart solutions that save time and money.' }]
    },
    {
        slug: 'branding',
        title: 'Branding',
        tagline: 'Visual Identities with Impact.',
        description: 'We craft comprehensive brand systems that include logos, color palettes, and voice guidelines to make you stand out.',
        bannerImage: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=1600',
        features: [
            { title: 'Logo Design', desc: 'Iconic visuals for your business.', icon: 'Palette' },
            { title: 'Brand Guidelines', desc: 'Consistency across all platforms.', icon: 'BookOpen' },
            { title: 'Visual Assets', desc: 'Everything needed for marketing.', icon: 'Layout' }
        ],
        sections: [{ title: 'Creating Connections', content: 'A brand is more than a logo—it is an emotional connection. We help you build trust through visual excellence.' }]
    },
    {
        slug: 'content',
        title: 'Content Creation',
        tagline: 'Words and Visuals That Convert.',
        description: 'Strategic content production including blogging, copywriting, and social media assets that drive engagement.',
        bannerImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1600',
        features: [
            { title: 'Copywriting', desc: 'Persuasive text for sales.', icon: 'PenTool' },
            { title: 'Blog Content', desc: 'Educational SEO articles.', icon: 'Globe' },
            { title: 'Social Media', desc: 'Engaging posts and graphics.', icon: 'Share2' }
        ],
        sections: [{ title: 'Authority through Value', content: 'We write content that positions you as a leader in your industry. Every word is crafted to provide value and drive action.' }]
    },
    {
        slug: 'bpo',
        title: 'BPO Services',
        tagline: 'Scalable Outsourced Operations.',
        description: 'Efficiency-driven business process outsourcing to help you focus on your core strengths while we handle the rest.',
        bannerImage: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1600',
        features: [
            { title: 'Customer Support', desc: 'Dedicated 24/7 support teams.', icon: 'Users' },
            { title: 'Data Entry', desc: 'Fast and accurate data management.', icon: 'Database' },
            { title: 'Virtual Assistants', desc: 'Executive help on demand.', icon: 'Target' }
        ],
        sections: [{ title: 'Operational Scale', content: 'Scale your business without increasing overhead. Our BPO solutions provide the talent you need at a fraction of the cost.' }]
    }
];