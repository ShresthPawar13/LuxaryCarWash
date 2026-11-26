export const HERO_MEDIA = {
  main: "/images/car-wash-1.jpg",
  bike: "/images/bike-washing-1.jpg",
};

export const CAR_PACKAGES = [
  {
    id: "car-express",
    category: "Car",
    tag: "Quick exterior maintenance",
    name: "Express Car Wash",
    description:
      "A convenient doorstep exterior refresh to remove everyday dust and road dirt right at your parking spot.",
    price: "₹399",
    numericPrice: 399,
    billing: "/ One-time service",
    duration: "30–40 mins",
    image:
      "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=900&q=80",
    features: [
      "High-pressure water rinse",
      "pH-neutral snow foam & hand scrubbing",
      "Tyre & wheel arch cleaning",
      "Exterior glass & mirror wipe",
      "Microfiber drying & tyre polish",
    ],
  },
  {
    id: "car-standard",
    category: "Car",
    tag: "Most popular",
    featured: true,
    name: "Standard Car Care & Sanitization",
    description:
      "Complete inside-and-out care combining exterior snow foam wash with interior vacuuming, cabin sanitization, and polish.",
    price: "₹599",
    numericPrice: 599,
    billing: "/ One-time service",
    duration: "45–55 mins",
    image:
      "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=900&q=80",
    features: [
      "External snow foam wash",
      "Interior vacuum & cabin sanitization",
      "Floor mat & boot cleaning",
      "Dashboard & ORVM mirror polish",
      "Tyre scrubbing, polish & fresh fragrance",
    ],
  },
  {
    id: "car-subscription",
    category: "Car",
    tag: "Monthly Society Plan",
    name: "Car Monthly Wash Subscription",
    description:
      "8 Express Doorstep Washes per month at your apartment society or office parking — zero travel, always spotless.",
    price: "₹1,999",
    numericPrice: 1999,
    billing: "/ month",
    duration: "8 washes / month",
    image:
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=900&q=80",
    features: [
      "8 Doorstep Express Foam Washes",
      "2 Interior vacuum & sanitization sessions",
      "Dedicated weekly time slots",
      "6th wash loyalty bonus included",
    ],
  },
];

export const BIKE_PACKAGES = [
  {
    id: "bike-express",
    category: "Bike",
    tag: "Quick exterior maintenance",
    name: "Express Bike Wash",
    description:
      "A convenient doorstep exterior refresh to remove everyday dust and road grime from your two-wheeler.",
    price: "₹149",
    numericPrice: 149,
    billing: "/ One-time service",
    duration: "25–30 mins",
    image:
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=900&q=80",
    features: [
      "High-pressure water rinse",
      "pH-neutral snow foam & hand wash",
      "Tyre, alloy & mudguard cleaning",
      "Visor & mirror streak-free wipe",
      "Microfiber drying & tyre polish",
    ],
  },
  {
    id: "bike-standard",
    category: "Bike",
    tag: "Most popular",
    featured: true,
    name: "Standard Bike Spa & Sanitization",
    description:
      "Complete two-wheeler care combining thick snow foam wash, engine degreasing, chain lubrication, and handlebar sanitization.",
    price: "₹299",
    numericPrice: 299,
    billing: "/ One-time service",
    duration: "40–45 mins",
    image:
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=900&q=80",
    features: [
      "Thick snow foam bath & hand wash",
      "Chain cleaning & anti-fling lubrication",
      "Engine fins & exhaust degreasing",
      "Handlebar, seat & switch sanitization",
      "Matte/gloss body & tyre dressing",
    ],
  },
  {
    id: "bike-subscription",
    category: "Bike",
    tag: "Monthly Care Plan",
    name: "Bike Monthly Doorstep Plan",
    description:
      "4 Express Bike Washes + 1 Standard Bike Spa every month right at your home or society parking.",
    price: "₹699",
    numericPrice: 699,
    billing: "/ month (5 services)",
    duration: "Weekly scheduled slots",
    image:
      "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?auto=format&fit=crop&w=900&q=80",
    features: [
      "4 Doorstep Express Foam Washes",
      "1 Full Standard Bike Spa & Chain Lube",
      "Priority morning/evening slots",
      "Free anti-bacterial helmet & seat sanitization",
    ],
  },
];

export const HOME_PACKAGES = [
  {
    id: "home-sofa-spa",
    category: "Home",
    tag: "Sofa & Upholstery Care",
    featured: true,
    name: "Sofa, Mattress & Carpet Deep Cleaning",
    description:
      "Deep vacuum extraction, fabric shampooing, and 180°C steam sanitization to lift stains, dust mites, and allergens from sofas and mattresses.",
    price: "₹799",
    numericPrice: 799,
    billing: "/ Up to 5-Seater Sofa",
    duration: "60–90 mins",
    image: "/images/SofaCleaning.jpg",
    features: [
      "HEPA dry vacuuming for dust & pet hair",
      "Fabric-safe foam shampooing & stain lifting",
      "Wet extraction & fast-dry moisture removal",
      "Anti-bacterial steam sanitization",
      "Fresh anti-odor fabric conditioning",
    ],
  },
  {
    id: "home-deep-clean",
    category: "Home",
    tag: "Full Home Hygiene",
    name: "Home Deep Cleaning & Sanitization",
    description:
      "Complete residential deep cleaning covering living spaces, kitchen degreasing, bathroom descaling, and full home disinfection.",
    price: "₹1,499",
    numericPrice: 1499,
    billing: "/ 1–2 BHK Home",
    duration: "2.5–3.5 hours",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
    features: [
      "Full floor scrubbing & machine mopping",
      "Kitchen tiles, chimney exterior & slab degreasing",
      "Bathroom tiles, fittings & sanitaryware descaling",
      "Window tracks, grills, fans & cobweb removal",
      "Hospital-grade ULV mist sanitization",
    ],
  },
  {
    id: "home-sanitization",
    category: "Home",
    tag: "Quick Disinfection",
    name: "Room & High-Touch Surface Sanitization",
    description:
      "Non-toxic, kid- and pet-safe ULV fogging and surface disinfection for bedrooms, living rooms, and home offices.",
    price: "₹499",
    numericPrice: 499,
    billing: "/ Full Flat Session",
    duration: "45 mins",
    image: "/images/BathroomCleaning.jpg",
    features: [
      "Hospital-grade non-toxic ULV mist sanitization",
      "Door handles, switches, tables & railings wipe",
      "Living room & bedroom dust vacuuming",
      "Kitchen counter & sink disinfection",
    ],
  },
];

export const ADDON_SERVICES = [
  {
    id: "seat-cleaning",
    title: "Car Seat Deep Cleaning",
    desc: "Deep-focused shampooing & sanitization to lift embedded dirt and stains from fabric or leather car seats.",
    price: "₹399",
    numericPrice: 399,
    image: "/images/seatcleaning.jpg",
  },
  {
    id: "ac-vent",
    title: "Car AC Vent Steam Sanitization",
    desc: "Removes dust and odor-causing microbes from AC vent ducts for cleaner, healthier cabin air.",
    price: "₹299",
    numericPrice: 299,
    image: "/images/CarVentACCleaning.jpg",
  },
  {
    id: "dashboard-polish",
    title: "Dashboard & Door Trim Polish",
    desc: "Sanitizes and cleans interior car dashboard & door trims with a neat, non-greasy factory matte finish.",
    price: "₹199",
    numericPrice: 199,
    image: "/images/DashboardPolish.jpg",
  },
  {
    id: "headlight-restoration",
    title: "Headlight Restoration (Both)",
    desc: "Improves night visibility and appearance by treating dull, hazy, oxidized outer lens surfaces.",
    price: "₹899",
    numericPrice: 899,
    image: "/images/HeadlightRestoration.jpg",
  },
  {
    id: "sofa-shampoo",
    title: "Home Sofa Shampoo & Steam (3-Seater)",
    desc: "Deep foam shampooing and steam sanitization to lift stains and allergens from living room sofas.",
    price: "₹499",
    numericPrice: 499,
    image: "/images/SofaCleaning.jpg",
  },
  {
    id: "home-room-sanitize",
    title: "Bathroom / Kitchen Deep Sanitization",
    desc: "Targeted descaling, degreasing, and anti-bacterial sanitization for home bathrooms or kitchen slabs.",
    price: "₹399",
    numericPrice: 399,
    image: "/images/BathroomCleaning.jpg",
  },
];

export const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Pick Car, Bike or Sofa/Home Service",
    desc: "Select your car wash, bike spa, or add-on sofa & home sanitization in your Service Cart.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=700&q=80",
  },
  {
    step: "02",
    title: "Share slot & Google Maps pin",
    desc: "Choose your preferred date, time slot, and drop your Google Maps location on WhatsApp in one tap.",
    image:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=700&q=80",
  },
  {
    step: "03",
    title: "Relax — DSP comes to you",
    desc: "Our uniformed DSP specialists arrive at your parking spot or home and deliver a sanitized showroom shine.",
    image:
      "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=700&q=80",
  },
];

export const SERVICE_AREAS = [
  "Manjari – Hadapsar",
  "Mundhwa – Keshav Nagar",
  "Magarpatta – Amanora",
  "Kharadi – Viman Nagar",
  "Wadgaon Sheri – Kalyani Nagar",
  "Camp – Wanwadi – Fatima Nagar",
  "Kondhwa – NIBM – Undri",
  "Bibwewadi – Dhankawadi",
  "Dhanori – Lohegaon",
  "Wakad – Hinjewadi – Baner",
];

export const FAQS = [
  {
    q: "What doorstep services does DSP specialize in?",
    a: "Doorstep Sanitization Providers (DSP) specializes primarily in doorstep Car Washing & Detailing and Bike Spa & Chain Care, while also offering Sofa Shampooing and Home Cleaning & Sanitization upon request.",
  },
  {
    q: "Do you bring your own water, foam, and equipment?",
    a: "Yes! Our mobile team arrives with pressure washers, pH-neutral snow foam, vacuum extractors, and sanitization gear. For vehicle washes, we only need a standard power point within 100 ft (we carry a 100-ft extension cable).",
  },
  {
    q: "Can I book Car, Bike, and Sofa/Home services together?",
    a: "Yes! You can add Car packages, Bike packages, and Sofa or Home Cleaning add-ons into the same Service Cart, select your preferred slot and Google Maps location, and send the complete order on WhatsApp in one click.",
  },
  {
    q: "Are your chemicals safe for vehicle paint and home fabrics?",
    a: "100%. We use pH-neutral shampoos safe for factory clear coats and ceramic coatings, as well as non-toxic, child- and pet-safe upholstery shampoos and sanitizers.",
  },
];
