export const CURRENCIES = {
  PKR: { symbol: 'RS', code: 'PKR', rate: 1, label: 'PKR' },
  USD: { symbol: '$', code: 'USD', rate: 0.0036, label: 'USD' },
  GBP: { symbol: '£', code: 'GBP', rate: 0.0028, label: 'GBP' },
  AED: { symbol: 'AED', code: 'AED', rate: 0.013, label: 'AED' },
  EUR: { symbol: '€', code: 'EUR', rate: 0.0033, label: 'EUR' },
  CAD: { symbol: 'CAD $', code: 'CAD', rate: 0.0049, label: 'CAD' },
  SAR: { symbol: 'SAR', code: 'SAR', rate: 0.0135, label: 'SAR' },
};

export const ANNOUNCEMENTS = [
  "FREE INTERNATIONAL SHIPPING ON ALL ORDERS ABOVE PKR 150,000/-",
  "FREE SHIPPING ALL OVER PAKISTAN",
  "CHIFFON ESSENTIALS '26 NOW LIVE IN STORES & ONLINE",
  "CUSTOM BESPOKE TAILORING AVAILABLE ON ALL ORDERS"
];

export const HERO_SLIDES = [
  {
    id: 1,
    collection: "ZARRIN LUXURY VELVET '26",
    tagline: "Elegance woven in pure silk velvet with handcrafted antique zardozi & tilla needlework.",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1600&auto=format&fit=crop",
    linkText: "DISCOVER NOW",
    category: "Velvet"
  },
  {
    id: 2,
    collection: "CHIFFON ESSENTIALS '26",
    tagline: "Timeless artisanal chiffon silhouettes crafted for festive celebrations.",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1600&auto=format&fit=crop",
    linkText: "EXPLORE COLLECTION",
    category: "Chiffon"
  },
  {
    id: 3,
    collection: "ZEBAISH BRIDAL COUTURE",
    tagline: "An ode to royal heritage and majestic needlecraft passed through generations.",
    image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1600&auto=format&fit=crop",
    linkText: "VIEW LOOKBOOK",
    category: "Bridal"
  }
];

export const FEATURED_CATEGORIES = [
  {
    id: "rozana",
    title: "ROZANA '26",
    subtitle: "Everyday Luxury Unstitched",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=900&auto=format&fit=crop",
    filter: "Rozana"
  },
  {
    id: "chiffon",
    title: "CHIFFON ESSENTIALS",
    subtitle: "Signature Festive Formals",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=900&auto=format&fit=crop",
    filter: "Chiffon"
  },
  {
    id: "formals",
    title: "ZEBAISH FORMALS",
    subtitle: "Hand-Embroidered Evening Wear",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=900&auto=format&fit=crop",
    filter: "Formals"
  },
  {
    id: "ready-to-wear",
    title: "READY TO WEAR",
    subtitle: "Tailored Contemporary Pret",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=900&auto=format&fit=crop",
    filter: "Pret"
  }
];

export const EDITORIAL_TRIO = [
  {
    id: "bridal",
    title: "BRIDAL WEAR",
    tagline: "Heritage Heirloom Pieces",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "festive-velvet",
    title: "FESTIVE VELVET",
    tagline: "Opulent Regal Drapes",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "velvet-shawls",
    title: "VELVET SHAWLS",
    tagline: "Statement Hand-Embellished Wraps",
    image: "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?q=80&w=800&auto=format&fit=crop",
  }
];

export const PRODUCTS = [
  {
    id: "aster",
    slug: "aster-chiffon-luxury",
    name: "ASTER",
    sku: "ZBS-26-AST",
    pricePKR: 6950,
    collection: "CHIFFON ESSENTIALS '26",
    category: "Chiffon",
    badge: "BESTSELLER",
    isNew: true,
    rating: 5,
    reviewsCount: 38,
    primaryImage: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=900&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=900&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=900&auto=format&fit=crop"
    ],
    color: "Berry Magenta",
    fabric: "Pure Embroidered Chiffon",
    description: "An ethereal berry magenta ensemble featuring an exquisitely embroidered pure chiffon front with fine botanical thread and tilla motifs. The neckline and sleeves are accentuated with delicate hand-finished cutwork lace. Paired with a cascading floral digital-printed organza dupatta with scalloped borders and tailored dyed raw silk trousers.",
    fabricDetails: [
      "Embroidered Pure Chiffon Front (0.85 Meter)",
      "Plain Dyed Chiffon Back (0.85 Meter)",
      "Embroidered Chiffon Sleeves with Hand-cut Lace (0.65 Meter)",
      "Organza Embroidered Neckline & Daman Border (1.5 Meter)",
      "Digital Printed & Embroidered Floral Organza Dupatta (2.5 Meter)",
      "Dyed Raw Silk Trouser with Lace Embellishment (2.5 Meter)"
    ],
    careInstructions: [
      "Dry clean recommended for long-lasting vibrancy.",
      "Do not use bleach or stain-removing chemicals.",
      "Iron at medium heat with a protective pressing cloth.",
      "Store in a breathable fabric garment bag away from direct sunlight."
    ],
    deliveryInfo: "Domestic Delivery within Pakistan: 3 to 5 working days. International Express Shipping: 7 to 10 working days via DHL Express.",
    inStock: true
  },
  {
    id: "amethyst-dream",
    slug: "amethyst-dream-chiffon",
    name: "AMETHYST DREAM",
    sku: "ZBS-26-AMD",
    pricePKR: 14500,
    collection: "CHIFFON ESSENTIALS '26",
    category: "Chiffon",
    badge: "EXCLUSIVE",
    isNew: true,
    rating: 5,
    reviewsCount: 24,
    primaryImage: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=900&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=900&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=900&auto=format&fit=crop"
    ],
    color: "Deep Royal Violet",
    fabric: "Crinkle Chiffon & Silk",
    description: "Royal deep amethyst silhouette with resham embroidery, pearl beadwork, and layered flared skirt. Comes with an opulent embroidered chiffon dupatta featuring ornate pallu borders.",
    fabricDetails: [
      "Handcrafted Embellished Chiffon Peshwas (12 Kalis)",
      "Heavy Embroidered Chiffon Dupatta with Pallu Motifs (2.6 Meter)",
      "Dyed Silk Inner Slip & Flared Trouser (3.5 Meter)"
    ],
    careInstructions: ["Strictly dry clean only.", "Iron on reverse side."],
    deliveryInfo: "Estimated dispatch: 3-5 days across Pakistan.",
    inStock: true
  },
  {
    id: "blush-lace",
    slug: "blush-lace-peshwas",
    name: "BLUSH LACE",
    sku: "ZBS-26-BLS",
    pricePKR: 13500,
    collection: "CHIFFON ESSENTIALS '26",
    category: "Chiffon",
    badge: "TRENDING",
    isNew: true,
    rating: 5,
    reviewsCount: 19,
    primaryImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=900&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=900&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=900&auto=format&fit=crop"
    ],
    color: "Powder Blush Pink",
    fabric: "Organza & Pure Chiffon",
    description: "A dreamy blush pink long anarkali with delicate sequin spray, lace insets, and fine Chikankari needlework. Complemented by an embroidered tonal net dupatta.",
    fabricDetails: [
      "Embroidered & Sequinned Front Bodice & Kali Flairs",
      "Fine Embroidered Border for Ghera (4 Meters)",
      "Dyed Viscose Crepe Inner and Trousers"
    ],
    careInstructions: ["Dry clean only."],
    deliveryInfo: "Dispatched within 48 hours.",
    inStock: true
  },
  {
    id: "jade-serenade",
    slug: "jade-serenade-sharara",
    name: "JADE SERENADE",
    sku: "ZBS-26-JAD",
    pricePKR: 15500,
    collection: "CHIFFON ESSENTIALS '26",
    category: "Chiffon",
    badge: "LUXURY",
    isNew: false,
    rating: 5,
    reviewsCount: 42,
    primaryImage: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=900&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=900&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=900&auto=format&fit=crop"
    ],
    color: "Emerald Bottle Green",
    fabric: "Crinkle Chiffon",
    description: "Deep bottle green three-piece formal attire adorned with antique tilla, kora and sequin craftsmanship. Comes with heavily flared matching sharara.",
    fabricDetails: [
      "Pure Chiffon Embroidered Shirt Front & Back",
      "Embroidered Flared Sharara Fabric (4.5 Meter)",
      "Four Sided Embroidered Organza Dupatta"
    ],
    careInstructions: ["Professional dry clean only."],
    deliveryInfo: "Express delivery in 3 days.",
    inStock: true
  },
  {
    id: "fig-velvet",
    slug: "fig-velvet-formal",
    name: "FIG VELVET",
    sku: "ZBS-26-FIG",
    pricePKR: 14500,
    collection: "CHIFFON ESSENTIALS '26",
    category: "Chiffon",
    badge: "NEW",
    isNew: true,
    rating: 4.9,
    reviewsCount: 15,
    primaryImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=900&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=900&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=900&auto=format&fit=crop"
    ],
    color: "Wine Plum",
    fabric: "Silk Blend & Chiffon",
    description: "Subtle yet impactful plum hue layered with tone-on-tone embroidery and intricate scallop cutouts along the hemline and sleeves.",
    fabricDetails: [
      "Embroidered Chiffon Tunic Front & Sleeves",
      "Organza Scallop Laser-cut Embroidered Daman",
      "Silk Cigarette Pants with Pearls"
    ],
    careInstructions: ["Dry clean only."],
    deliveryInfo: "Ships within 3 days.",
    inStock: true
  },
  {
    id: "midnight-dust",
    slug: "midnight-dust-navy",
    name: "MIDNIGHT DUST",
    sku: "ZBS-26-MDN",
    pricePKR: 14500,
    collection: "CHIFFON ESSENTIALS '26",
    category: "Chiffon",
    badge: "LIMITED",
    isNew: true,
    rating: 5,
    reviewsCount: 29,
    primaryImage: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=900&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=900&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=900&auto=format&fit=crop"
    ],
    color: "Midnight Royal Blue",
    fabric: "Chiffon & Micro Pleats",
    description: "A dramatic midnight navy blue cascading pleated maxi gown enriched with silver sitara work and a hand-crafted crystal tassel neckline.",
    fabricDetails: [
      "Micro Pleated Pure Chiffon Front & Back Flare",
      "Embroidered Neck Yoke & Sleeves with Zari",
      "Silk Trousers"
    ],
    careInstructions: ["Dry clean only."],
    deliveryInfo: "Standard shipping 3-5 days.",
    inStock: true
  },
  {
    id: "emerald-charm",
    slug: "emerald-charm-tunic",
    name: "EMERALD CHARM",
    sku: "ZBS-26-EMC",
    pricePKR: 14500,
    collection: "CHIFFON ESSENTIALS '26",
    category: "Chiffon",
    badge: "POPULAR",
    isNew: false,
    rating: 4.8,
    reviewsCount: 21,
    primaryImage: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=900&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=900&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=900&auto=format&fit=crop"
    ],
    color: "Teal Green",
    fabric: "Raw Silk & Chiffon",
    description: "A modern straight-cut emerald silhouette featuring geometric embroidery and contrast silk finishing, coupled with a printed chiffon dupatta.",
    fabricDetails: [
      "Raw Silk Embroidered Kurta Panels",
      "Printed & Embroidered Chiffon Dupatta",
      "Straight Culottes Pants"
    ],
    careInstructions: ["Dry clean only."],
    deliveryInfo: "Ships within 2 days.",
    inStock: true
  },
  {
    id: "merlot-satin",
    slug: "merlot-satin-formal",
    name: "MERLOT SATIN",
    sku: "ZBS-26-MRT",
    pricePKR: 13500,
    collection: "CHIFFON ESSENTIALS '26",
    category: "Chiffon",
    badge: "BESTSELLER",
    isNew: true,
    rating: 5,
    reviewsCount: 31,
    primaryImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=900&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=900&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=900&auto=format&fit=crop"
    ],
    color: "Deep Merlot Crimson",
    fabric: "Satin Silk & Chiffon",
    description: "Deep garnet crimson shade enhanced with delicate gold embroidery, scalloped edges, and handcrafted silk thread tassels on the dupatta pallu.",
    fabricDetails: [
      "Embroidered Satin Chiffon Kurta (3 Meters)",
      "Embroidered Border with Silk Tassels",
      "Tonal Raw Silk Cigarette Pants"
    ],
    careInstructions: ["Dry clean only."],
    deliveryInfo: "Dispatched in 3 business days.",
    inStock: true
  },
  {
    id: "royal-cypric",
    slug: "royal-cypric-violet",
    name: "ROYAL CYPRIC",
    sku: "ZBS-26-RYC",
    pricePKR: 14500,
    collection: "CHIFFON ESSENTIALS '26",
    category: "Chiffon",
    badge: "FEATURED",
    isNew: true,
    rating: 4.9,
    reviewsCount: 16,
    primaryImage: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=900&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=900&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=900&auto=format&fit=crop"
    ],
    color: "Deep Magenta",
    fabric: "Chiffon & Organza",
    description: "Rich magenta violet tone tailored with scalloped hemwork, button embellishments, and an airy organza dupatta with multi-color floral spray.",
    fabricDetails: [
      "Chiffon Embroidered Front, Back & Sleeves",
      "Embroidered Organza Dupatta with 4-Side Borders",
      "Dyed Silk Pants"
    ],
    careInstructions: ["Dry clean only."],
    deliveryInfo: "3-5 days delivery.",
    inStock: true
  },
  {
    id: "black-dahlia",
    slug: "black-dahlia-couture",
    name: "BLACK DAHLIA",
    sku: "ZBS-26-BKD",
    pricePKR: 15500,
    collection: "CHIFFON ESSENTIALS '26",
    category: "Chiffon",
    badge: "ICONIC",
    isNew: true,
    rating: 5,
    reviewsCount: 57,
    primaryImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=900&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=900&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=900&auto=format&fit=crop"
    ],
    color: "Jet Black",
    fabric: "Chiffon & Organza",
    description: "The quintessential black statement ensemble. Intricate monochrome black-on-black embroidery highlighted with subtle jet crystals and sheer organza border inserts.",
    fabricDetails: [
      "Embroidered Jet Black Chiffon Front & Back",
      "Heavy Embroidered Dupatta with Tassel Fringes",
      "Dyed Silk Culottes"
    ],
    careInstructions: ["Dry clean only.", "Iron on reverse side."],
    deliveryInfo: "Dispatched within 24 hours.",
    inStock: true
  },
  {
    id: "pearl-shimmer",
    slug: "pearl-shimmer-ivory",
    name: "PEARL SHIMMER",
    sku: "ZBS-26-PRL",
    pricePKR: 14500,
    collection: "CHIFFON ESSENTIALS '26",
    category: "Chiffon",
    badge: "ELEGANT",
    isNew: false,
    rating: 5,
    reviewsCount: 34,
    primaryImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=900&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=900&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=900&auto=format&fit=crop"
    ],
    color: "Ivory Pearl Gold",
    fabric: "Organza & Chiffon",
    description: "An angelic ivory flared peshwas highlighted with luminous pearl and gold tilla work, matched with a luxurious gold foil-printed dupatta.",
    fabricDetails: [
      "Embroidered Chiffon 12-Panel Peshwas",
      "Gold Foil & Embroidered Dupatta",
      "Dyed Viscose Trousers"
    ],
    careInstructions: ["Dry clean only."],
    deliveryInfo: "Ready to ship in 2-4 days.",
    inStock: true
  },
  {
    id: "viola-noir",
    slug: "viola-noir-luxury",
    name: "VIOLA NOIR",
    sku: "ZBS-26-VLN",
    pricePKR: 14500,
    collection: "CHIFFON ESSENTIALS '26",
    category: "Chiffon",
    badge: "EXCLUSIVE",
    isNew: true,
    rating: 4.9,
    reviewsCount: 18,
    primaryImage: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=900&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=900&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=900&auto=format&fit=crop"
    ],
    color: "Deep Aubergine",
    fabric: "Pure Silk & Chiffon",
    description: "Graceful deep aubergine long silhouette styled with handcrafted buttons, organza sleeve borders, and an embroidered silk drape.",
    fabricDetails: [
      "Embroidered Silk Shirt Front (0.85m)",
      "Embroidered Chiffon Dupatta (2.5m)",
      "Dyed Flared Silk Trouser"
    ],
    careInstructions: ["Dry clean only."],
    deliveryInfo: "Ships in 3-5 days.",
    inStock: true
  }
];

export const POLICIES_DATA = {
  privacy: {
    title: "Privacy Policy",
    content: "At ZEBAISH, your privacy and trust are paramount. We collect personal information solely to process orders, enhance your bespoke shopping experience, and inform you of exclusive collection releases. We never sell, lease, or share your private data with third parties beyond essential courier and payment gateways."
  },
  returns: {
    title: "Return & Exchange Policy",
    content: "We accept returns and size exchanges within 7 days of delivery for unworn, unwashed items in their original packaging with security tags intact. Custom-stitched orders and clearance articles are final sale unless damaged upon arrival. Refunds are processed to the original payment method within 5-7 business days."
  },
  cancellation: {
    title: "Order Cancellation Policy",
    content: "Orders can be modified or cancelled free of charge within 12 hours of placement by contacting customer care via WhatsApp or email. Once dispatched or sent to the custom tailoring workshop, cancellations cannot be accommodated."
  },
  sizes: {
    title: "Customized Sizes & Tailoring",
    content: "Every ZEBAISH garment can be customized to your exact body measurements by our master couturiers. Please select 'CUSTOM' when ordering and enter your bust, waist, hips, shirt length, and shoulder widths in the order note or send them to our bespoke tailoring team on WhatsApp."
  },
  terms: {
    title: "Terms of Service",
    content: "By visiting or placing an order on Zebaish.com, you agree to our terms and conditions. All imagery, designs, and embroidery artworks are intellectual property of Zebaish Luxury Apparel."
  },
  shipping: {
    title: "Shipping & Delivery Policy",
    content: "We offer FREE Shipping across Pakistan on all orders. Free International Express Shipping applies to all global orders exceeding PKR 150,000/-. Deliveries are dispatched using tracked DHL Express and TCS couriers."
  }
};
