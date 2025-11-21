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
  name: "Fitness World Unisex Gym",
  tagline: "Top-notch Equipment • Motivating Atmosphere • Unisex Training",
  address: "Jafar Nagar, New Mankapur, Nagpur, Maharashtra 440030",
  phone: "+91 85529 49501",
  openingHours: "Mon–Sun: 6:00 AM – 10:00 PM",
  googleMapEmbedUrl:
    "https://www.google.com/maps?q=Fitness+World+Unisex+Gym+Nagpur&output=embed",
  about:
    "Fitness World Unisex Gym (फिटनेस वर्ल्ड यूनिसेक्स जिम) delivers a premium, motivating environment with modern machines, clean workout spaces, and a friendly, goal-driven staff. Equal focus on strength, conditioning, aesthetics, and sustainable wellness—ideal for both beginners and advanced athletes.",
  facilities: [
    { title: "Free Weight Zone", description: "Complete dumbbell set, Olympic barbells, calibrated plates, flat/incline benches." },
    { title: "Strength Machines", description: "Plate-loaded & selectorized machines targeting every major muscle group." },
    { title: "Squat & Power Racks", description: "Multiple racks with safety pins, landmine attachments & pull-up bars." },
    { title: "Cardio Endurance", description: "Treadmills, spin bikes, air bikes, rower & elliptical for heart health and fat loss." },
    { title: "Functional Rig", description: "TRX, resistance bands, sled, battle ropes, plyo boxes for athletic conditioning." },
    { title: "Mobility & Stretch Zone", description: "Foam rollers, mats, bands for recovery, activation & flexibility drills." },
    { title: "Core & Stability", description: "Medicine balls, kettlebells, ab wheels, Swiss balls for trunk development." },
    { title: "Clean & Hygienic Space", description: "Regular sanitization, organized layout, ventilation & tidy flooring." },
    { title: "Guided Personal Coaching", description: "Goal-based plans: fat loss, muscle gain, strength, posture & rehab basics." },
    { title: "Accessibility", description: "Wheelchair-accessible entrance and spacious pathways." },
    { title: "Digital Payments", description: "NFC mobile payments + standard card & UPI support." },
    { title: "Member Support", description: "Friendly staff fostering a motivating, inclusive training atmosphere." },
  ],
  pricing: [
    { plan: "Monthly", amount: "₹1,299" },
    { plan: "Quarterly", amount: "₹3,599" },
    { plan: "Half-Yearly", amount: "₹6,799" },
    { plan: "Yearly", amount: "₹12,499" },
  ],
  trainers: [
    { name: "Lead Trainer", speciality: "Strength & Form Coaching", image: "" },
    { name: "Transformation Coach", speciality: "Fat Loss & Muscle Gain", image: "" },
    { name: "Functional Specialist", speciality: "Mobility & Conditioning", image: "" },
  ],
  // Leave empty to use /assets/change/1.jpg..6.jpg or defaults from /assets/default/
  gallery: [],
  reviews: [
    {
      author: "Review Summary",
      rating: 5,
      text: "Great gym with top-notch equipment, friendly staff, motivating atmosphere, and variety of machines.",
    },
    {
      author: "Ravikant K",
      rating: 5,
      text: "Electric energy—perfect environment to crush goals. You instantly feel you’re in the right place to level up.",
    },
    {
      author: "Sohail Khan",
      rating: 5,
      text: "Well-equipped, clean workout spaces, motivating environment for men and women. Staff is friendly and supportive.",
    },
    {
      author: "Member Feedback",
      rating: 5,
      text: "Nice gym for workout—variety of machines available to train every muscle group effectively.",
    },
    {
      author: "Motivation Highlight",
      rating: 5,
      text: "Trainers are approachable; their guidance builds a positive long-term training mindset.",
    },
  ],
  // Optional external links to show in About
  links: [
    { label: "Directions", url: "https://www.google.com/maps?q=Fitness+World+Unisex+Gym+Nagpur" },
    { label: "Call", url: "tel:+918552949501" },
  ],
};
