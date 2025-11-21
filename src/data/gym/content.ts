export interface GymTrainer {
  name: string;
  speciality: string;
  image: string;
}
export interface GymFacility {
  title: string;
  description: string;
}
export interface GymPricing {
  plan: string;
  amount: string;
}
export interface GymReview {
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
}
export interface GymContent {
  name: string;
  tagline: string;
  address: string;
  phone: string;
  openingHours: string;
  googleMapEmbedUrl: string;
  about: string;
  facilities: GymFacility[];
  pricing: GymPricing[];
  trainers: GymTrainer[];
  gallery: string[];
  reviews: GymReview[];
  // New optional external links list
  links?: { label: string; url: string }[];
}

export const gymContent: GymContent = {
  name: "ABS Fitness",
  tagline: "Well-Equipped • Clean Ambience • Accessible Unisex Gym",
  address: "Ring Road, Jafar Nagar, New Mankapur, Nagpur, Maharashtra 440013",
  phone: "+91 88884 53205",
  openingHours: "Mon–Sun: 6:00 AM – 10:00 PM",
  googleMapEmbedUrl:
    "https://www.google.com/maps?q=ABS+Fitness+Ring+Road+Nagpur&output=embed",
  about:
    "ABS Fitness (ॲब्स फिटनेस) offers a balanced training environment with well‑maintained equipment, clean workout zones, supportive staff, and accessible facilities. From strength and conditioning to general wellness, members benefit from structured guidance, online class options, and appointment-based coaching for personalized progress.",
  facilities: [
    { title: "Strength & Machines", description: "Selectorized and plate-loaded equipment maintained regularly." },
    { title: "Free Weights", description: "Dumbbells, Olympic barbells, flat & incline benches for progressive overload." },
    { title: "Cardio Equipment", description: "Treadmills, cycles, cross-trainers for endurance & calorie burn." },
    { title: "Functional Tools", description: "Battle ropes, kettlebells, resistance bands, mats for dynamic conditioning." },
    { title: "Online Classes", description: "Remote instruction option for flexibility outside peak hours." },
    { title: "Appointment Coaching", description: "Structured, appointment-required sessions for focused guidance." },
    { title: "Clean Restroom", description: "Maintained hygiene standards for member comfort." },
    { title: "Accessibility - Entrance", description: "Wheelchair-accessible entrance for inclusive access." },
    { title: "Accessibility - Car Park", description: "Wheelchair-accessible car park and clear approach path." },
    { title: "Member Support", description: "Staff offers approachable assistance; environment motivating & disciplined." },
    { title: "Parking", description: "Free street parking available near entrance." },
    { title: "Ambience & Maintenance", description: "Gym environment is good; machines are serviced and organized." },
    { title: "Digital / Mobile Payments", description: "Supports modern mobile payment flows (NFC/UPI when available)." },
    { title: "Core & Mobility Space", description: "Mats & open floor area for stretching and core work." },
  ],
  pricing: [
    { plan: "Monthly", amount: "₹1,199" },
    { plan: "Quarterly", amount: "₹3,399" },
    { plan: "Half-Yearly", amount: "₹6,499" },
    { plan: "Yearly", amount: "₹11,999" },
  ],
  trainers: [
    { name: "Lead Instructor", speciality: "General Conditioning", image: "" },
    { name: "Strength Guide", speciality: "Progressive Overload & Form", image: "" },
    { name: "Wellness Coach", speciality: "Mobility & Recovery Basics", image: "" },
  ],
  // Leave empty to use /assets/change/1.jpg..6.jpg or defaults from /assets/default/
  gallery: [],
  reviews: [
    {
      author: "Review Summary",
      rating: 4,
      text: "Overall rating 4.0 (169 reviews) – well-equipped, clean, motivating environment.",
    },
    {
      author: "Member Comment",
      rating: 4,
      text: "Fitness centre is well equipped and a great place to workout.",
    },
    {
      author: "Ambience Feedback",
      rating: 4,
      text: "Gym environment is good; machines are maintained and staff is helpful.",
    },
    {
      author: "Value Observation",
      rating: 3,
      text: "Price feels a bit high compared to amenities, but maintenance is solid.",
    },
    {
      author: "Accessibility Note",
      rating: 5,
      text: "Appreciate accessible entrance and car park – inclusive layout.",
    },
  ],
  // Optional external links to show in About
  links: [
    { label: "Directions", url: "https://www.google.com/maps?q=ABS+Fitness+Ring+Road+Nagpur" },
    { label: "Call", url: "tel:+918888453205" },
    // { label: "Website", url: "" } // add when available
  ],
};
