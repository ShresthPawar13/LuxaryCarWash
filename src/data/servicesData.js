export const HERO_MEDIA = {
  main: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1400&q=80",
};

export const BIKE_PACKAGES = [
  {
    id: "bike-express",
    vehicleCategory: "Bike",
    tag: "Quick exterior maintenance",
    name: "Express Bike Wash",
    description:
      "A convenient doorstep exterior refresh to remove everyday dust and road grime and keep your two-wheeler looking sharp.",
    price: "₹149",
    numericPrice: 149,
    billing: "/ One-time service",
    duration: "25–30 mins",
    image:
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=900&q=80",
    features: [
      "High-pressure water rinse",
      "pH-neutral snow foam & hand scrubbing",
      "Tyre, alloy & mudguard cleaning",
      "Visor & mirror streak-free wipe",
      "Microfiber towel drying & tyre polish",
    ],
  },
  {
    id: "bike-standard",
    vehicleCategory: "Bike",
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
      "Engine fins & exhaust surface degreasing",
      "Handlebar, seat & switch sanitization",
      "Matte/gloss body & tyre dressing",
    ],
  },
  {
    id: "bike-subscription",
    vehicleCategory: "Bike",
    tag: "Monthly Care Plan",
    name: "Bike Monthly Doorstep Plan",
    description:
      "4 Express Bike Washes + 1 Standard Bike Spa every month right at your society or home parking.",
    price: "₹699",
    numericPrice: 699,
    billing: "/ month (5 services)",
    duration: "Weekly scheduled slots",
    image:
      "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?auto=format&fit=crop&w=900&q=80",
    features: [
      "4 Doorstep Express Foam Washes",
      "1 Full Standard Bike Spa & Chain Lube",
      "Priority morning/evening slot booking",
      "Free anti-bacterial helmet & seat sanitization",
    ],
  },
];

export const CAR_PACKAGES = [
  {
    id: "car-express",
    vehicleCategory: "Car",
    tag: "Quick exterior maintenance",
    name: "Express Car Wash",
    description:
      "A convenient exterior refresh to remove everyday dust and road dirt and keep your car looking neat right at your parking spot.",
    price: "₹399",
    numericPrice: 399,
    billing: "/ One-time service",
    duration: "30–40 mins",
    image:
      "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=900&q=80",
    features: [
      "Water rinse",
      "Foam wash & hand scrubbing",
      "Pressure wash",
      "Tyre & wheel cleaning",
      "Exterior glass / mirror cleaning",
      "Microfiber drying & tyre polish",
    ],
  },
  {
    id: "car-standard",
    vehicleCategory: "Car",
    tag: "Most popular",
    featured: true,
    name: "Standard Car Care & Sanitization",
    description:
      "Complete inside-and-out care combining an exterior snow foam wash with essential interior vacuuming, sanitization, and finishing.",
    price: "₹599",
    numericPrice: 599,
    billing: "/ One-time service",
    duration: "45–55 mins",
    image:
      "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=900&q=80",
    features: [
      "External snow foam wash",
      "Interior vacuum & cabin sanitization",
      "Floor mat cleaning",
      "Dashboard cleaning & polish",
      "ORVM / mirror cleaning",
      "Tyre scrubbing & polish",
      "Interior fragrance & disposable paper mat",
    ],
  },
  {
    id: "car-subscription",
    vehicleCategory: "Car",
    tag: "Society & Fleet Plan",
    name: "Express Wash Subscription",
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

export const ADDON_SERVICES = [
  {
    id: "seat-cleaning",
    title: "Seat Deep Cleaning",
    desc: "Deep-focused cleaning & sanitization to lift embedded dirt and everyday stains from fabric or leather seats.",
    price: "₹399",
    numericPrice: 399,
    image:
      "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "roof-cleaning",
    title: "Roof & Headliner Cleaning",
    desc: "Cleans the interior roof lining carefully to refresh the cabin and remove surface dust and marks.",
    price: "₹299",
    numericPrice: 299,
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "carpet-cleaning",
    title: "Floor Carpet Deep Cleaning",
    desc: "Targets trapped dust, mud, and bacteria in the floor carpet for a fresher, sanitized footwell.",
    price: "₹299",
    numericPrice: 299,
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "dashboard-polish",
    title: "Dashboard & Door Panel Polish",
    desc: "Sanitizes and cleans interior dashboard & door trims with a neat, non-greasy factory matte finish.",
    price: "₹199",
    numericPrice: 199,
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "ac-vent",
    title: "AC Vent Steam Sanitization",
    desc: "Removes dust and odor-causing microbes from AC vent ducts for cleaner, healthier cabin air.",
    price: "₹299",
    numericPrice: 299,
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "headlight-restoration",
    title: "Headlight Restoration (Both)",
    desc: "Improves night visibility and appearance by treating dull, hazy, oxidized outer lens surfaces.",
    price: "₹899",
    numericPrice: 899,
    image:
      "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=700&q=80",
  },
];

export const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Choose your service",
    desc: "Select a Bike or Car package and toggle any extra sanitization add-ons into your service cart.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=700&q=80",
  },
  {
    step: "02",
    title: "Share slot & Google Maps pin",
    desc: "Pick your preferred date, time slot, and drop your Google Maps location in one tap on WhatsApp.",
    image:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=700&q=80",
  },
  {
    step: "03",
    title: "Relax — we come to you",
    desc: "Our trained DSP technician arrives at your parking spot and delivers a sanitized showroom shine.",
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
    q: "Do you bring your own water and equipment for doorstep washing?",
    a: "Yes! Doorstep Sanitization Providers (DSP) brings our own water supply, pressure washer, pH-neutral snow foam, and sanitization gear. We only need a standard power point within 100 feet (we carry a 100-ft heavy-duty extension cable).",
  },
  {
    q: "How do I book and share my parking location?",
    a: "Pick your package and any add-on services in the cart, choose your date, time slot, and tap 'Use My GPS Location' or paste your Google Maps link — it generates a ready-to-send WhatsApp booking message automatically.",
  },
  {
    q: "How long does a doorstep service take?",
    a: "An Express Wash takes 30–40 minutes, while Standard Car Care & Sanitization takes 45–55 minutes right in your parking spot.",
  },
  {
    q: "Are your chemicals safe for vehicle paint and cabin interiors?",
    a: "100%. We use biodegradable, pH-neutral snow foam and non-toxic interior sanitizers with separate color-coded microfiber towels for paint, glass, and wheels.",
  },
];