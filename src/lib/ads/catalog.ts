import type { Product, ProductPage, GetProductsOptions, SiteConfig } from './types';
import { request, mockMode } from './client';

const MOCK_PRODUCTS: Product[] = [
  {
    "id": "ald-1",
    "title": "Happy Voice",
    "tagline": "Turn restaurant phone orders into Clover POS tickets automatically with AI voice agents",
    "link": "https://happyvoice.io",
    "category": "AI & ML",
    "upvotes": 480,
    "tags": [
      "ai",
      "voice",
      "pos"
    ],
    "techStack": [
      "Next.js",
      "React",
      "Twilio"
    ],
    "maker": {
      "name": "Gautam B.",
      "avatar": "https://placehold.co/64x64/ff5722/ffffff?text=GB"
    }
  },
  {
    "id": "ald-2",
    "title": "ShipFast",
    "tagline": "Next.js boilerplate with Stripe, Supabase auth, and emails pre-built to launch your startup in days",
    "link": "https://shipfa.st",
    "category": "Developer Tools",
    "upvotes": 450,
    "tags": [
      "boilerplate",
      "nextjs",
      "saas"
    ],
    "techStack": [
      "Next.js",
      "Stripe",
      "Supabase"
    ],
    "maker": {
      "name": "Marc Lou",
      "avatar": "https://placehold.co/64x64/ffb300/ffffff?text=ML"
    }
  },
  {
    "id": "ald-3",
    "title": "ChatNode",
    "tagline": "Train conversational AI bots on your websites, Notion pages, and PDFs for instant customer support",
    "link": "https://chatnode.ai",
    "category": "Automation",
    "upvotes": 390,
    "tags": [
      "chatbots",
      "customer-support",
      "ai"
    ],
    "techStack": [
      "OpenAI",
      "Next.js",
      "Vector DB"
    ],
    "maker": {
      "name": "Alex M.",
      "avatar": "https://placehold.co/64x64/3b82f6/ffffff?text=CN"
    }
  },
  {
    "id": "ald-4",
    "title": "Typefully",
    "tagline": "Distraction-free publishing platform and analytics to write, schedule, and grow your audience",
    "link": "https://typefully.com",
    "category": "Productivity",
    "upvotes": 360,
    "tags": [
      "social",
      "content",
      "growth"
    ],
    "techStack": [
      "React",
      "Node.js"
    ],
    "maker": {
      "name": "Fabrizio Rinaldi",
      "avatar": "https://placehold.co/64x64/10b981/ffffff?text=TF"
    }
  },
  {
    "id": "ald-5",
    "title": "Dub.co",
    "tagline": "Open-source link management infrastructure for modern marketing teams with enterprise analytics",
    "link": "https://dub.co",
    "category": "Search & Data",
    "upvotes": 340,
    "tags": [
      "shortlink",
      "analytics",
      "marketing"
    ],
    "techStack": [
      "Next.js",
      "Upstash",
      "Tinybird"
    ],
    "maker": {
      "name": "Steven Tey",
      "avatar": "https://placehold.co/64x64/8b5cf6/ffffff?text=DB"
    }
  },
  {
    "id": "ald-6",
    "title": "Screen Studio",
    "tagline": "Professional screen recorder for macOS that automatically creates silky smooth camera zooms",
    "link": "https://screen.studio",
    "category": "Design & Media",
    "upvotes": 320,
    "tags": [
      "video",
      "macos",
      "demo"
    ],
    "techStack": [
      "Swift",
      "Metal",
      "VideoKit"
    ],
    "maker": {
      "name": "Adam Lovrencic",
      "avatar": "https://placehold.co/64x64/ec4899/ffffff?text=SS"
    }
  }
];

const MOCK_SITE: SiteConfig = {
  "key": "applaunchdaily",
  "name": "AppLaunchDaily",
  "domain": "applaunchdaily.com",
  "category": "apps",
  "tags": [
    "apps",
    "indie",
    "mobile",
    "ios",
    "android",
    "saas"
  ],
  "status": "live",
  "statusMessage": null,
  "slots": [
    {
      "key": "sidebar-1",
      "slotType": "sidebar",
      "format": "native"
    }
  ]
};

export async function getSiteConfig(timeoutMs?: number): Promise<SiteConfig | null> {
  if (mockMode()) return MOCK_SITE;
  const data = await request<{ site: SiteConfig }>('/api/v1/site', {}, timeoutMs, 'getSiteConfig');
  return data?.site ?? MOCK_SITE;
}

export async function getProducts(options: GetProductsOptions = {}): Promise<ProductPage> {
  const mock = mockMode();
  if (mock) {
    if (mock === 'empty') return { products: [], nextCursor: null, appliedTags: [] };
    let filtered = [...MOCK_PRODUCTS];
    if (options.category) {
      filtered = filtered.filter((p) => p.category.toLowerCase() === options.category?.toLowerCase());
    }
    if (options.q) {
      const q = options.q.toLowerCase();
      filtered = filtered.filter((p) => p.title.toLowerCase().includes(q) || p.tagline.toLowerCase().includes(q));
    }
    const sorted = options.sort === 'top' ? filtered.sort((a, b) => b.upvotes - a.upvotes) : filtered;
    return {
      products: sorted.slice(0, options.limit ?? sorted.length),
      nextCursor: null,
      appliedTags: MOCK_SITE.tags,
    };
  }

  const data = await request<ProductPage>(
    '/api/v1/catalog/products',
    {
      tags: options.tags?.join(','),
      category: options.category,
      q: options.q,
      since: options.since,
      sort: options.sort,
      limit: options.limit ? String(options.limit) : undefined,
      cursor: options.cursor,
    },
    options.timeoutMs,
    'getProducts',
  );

  if (!data || !data.products || data.products.length === 0) {
    let filtered = [...MOCK_PRODUCTS];
    if (options.category) {
      filtered = filtered.filter((p) => p.category.toLowerCase() === options.category?.toLowerCase());
    }
    if (options.q) {
      const q = options.q.toLowerCase();
      filtered = filtered.filter((p) => p.title.toLowerCase().includes(q) || p.tagline.toLowerCase().includes(q));
    }
    const sorted =
      options.sort === 'top' ? filtered.sort((a, b) => b.upvotes - a.upvotes) : filtered;
    return {
      products: sorted.slice(0, options.limit ?? sorted.length),
      nextCursor: null,
      appliedTags: MOCK_SITE.tags,
    };
  }

  return data;
}

export async function getProduct(id: string, timeoutMs?: number): Promise<Product | null> {
  if (mockMode()) return MOCK_PRODUCTS.find((p) => p.id === id) ?? MOCK_PRODUCTS[0];

  const data = await request<{ product: Product }>(
    `/api/v1/catalog/products/${encodeURIComponent(id)}`,
    {},
    timeoutMs,
    'getProduct',
  );
  return data?.product ?? MOCK_PRODUCTS.find((p) => p.id === id) ?? MOCK_PRODUCTS[0];
}
