/**
 * Location and Service Data for SEO Demo Pages
 *
 * Centralized data structure for location-service combinations
 * used in this portfolio-friendly long-tail SEO implementation.
 *
 * All locations, names, and landmarks are fictional or generalized.
 */

// Location and Service Data for SEO Demo Pages
export const locations = {
  indianapolis: {
    name: "Metro City",
    state: "Demo State",
    stateAbbr: "MC",
    zipCodes: ["46201", "46202", "46203", "46204", "46205"],
    coordinates: { lat: 39.7684, lng: -86.1581 },
    population: "880,000+",
    nickname: "Central Hub",
    serviceRadius: "30 miles",
    keyNeighborhoods: ["Downtown District", "Riverside", "Market Square", "Old Town", "Uptown Heights"],
    localLandmarks: ["Metro City Arena", "Central Plaza", "Riverside Park"]
  },
  carmel: {
    name: "Northfield",
    state: "Demo State",
    stateAbbr: "MC",
    zipCodes: ["46032", "46033", "46074"],
    coordinates: { lat: 39.9784, lng: -86.1180 },
    population: "95,000+",
    nickname: "Northside Community",
    serviceRadius: "25 miles",
    keyNeighborhoods: ["Arts District", "Northfield Commons", "Oak Ridge"],
    localLandmarks: ["Northfield Arts District", "Town Center", "Greenway Trail"]
  },
  fishers: {
    name: "Lakeside",
    state: "Demo State",
    stateAbbr: "MC",
    zipCodes: ["46037", "46038"],
    coordinates: { lat: 39.9568, lng: -85.9685 },
    population: "90,000+",
    nickname: "Lakeside Community",
    serviceRadius: "25 miles",
    keyNeighborhoods: ["Lakeside Harbor", "East Shore", "Hillcrest"],
    localLandmarks: ["Lakeside Reservoir", "Harbor Park", "Community Events Center"]
  },
  westfield: {
    name: "Westbrook",
    state: "Demo State",
    stateAbbr: "MC",
    zipCodes: ["46074"],
    coordinates: { lat: 40.0431, lng: -86.1276 },
    population: "45,000+",
    nickname: "Westside Gateway",
    serviceRadius: "20 miles",
    keyNeighborhoods: ["Westbrook Park", "Chatham Ridge", "Wood Valley"],
    localLandmarks: ["Westbrook Sports Complex", "Westbrook Township Center"]
  },
  noblesville: {
    name: "Riverton",
    state: "Demo State",
    stateAbbr: "MC",
    zipCodes: ["46060", "46061", "46062"],
    coordinates: { lat: 40.0456, lng: -86.0086 },
    population: "70,000+",
    nickname: "Riverfront Community",
    serviceRadius: "25 miles",
    keyNeighborhoods: ["Old Town Riverton", "Harbor Point", "Pebble Brook"],
    localLandmarks: ["Riverfront Amphitheater", "Riverton Park", "Riverwalk"]
  }
};

export const services = {
  "emergency-hvac": {
    name: "Emergency HVAC Service",
    shortName: "Emergency HVAC",
    description: "24/7 emergency heating and cooling repair services",
    longTailKeywords: [
      "emergency hvac repair",
      "24 hour hvac service",
      "emergency furnace repair",
      "emergency ac repair",
      "hvac emergency service",
      "same day hvac repair",
      "urgent hvac repair",
      "overnight hvac service"
    ],
    urgencyLevel: "critical",
    averagePrice: "$150-$500",
    serviceTime: "2-4 hours"
  },
  "hvac-repair": {
    name: "HVAC Repair",
    shortName: "HVAC Repair",
    description: "Professional heating and cooling system repair services",
    longTailKeywords: [
      "hvac repair",
      "furnace repair",
      "air conditioner repair",
      "heating system repair",
      "cooling system repair",
      "hvac technician",
      "same day hvac repair"
    ],
    urgencyLevel: "emergency",
    averagePrice: "$150-$400",
    serviceTime: "Same day"
  },
  "furnace-installation": {
    name: "Furnace Installation",
    shortName: "Furnace Installation",
    description: "Complete furnace installation and replacement services",
    longTailKeywords: [
      "new furnace installation",
      "furnace replacement",
      "high efficiency furnace",
      "gas furnace installation",
      "electric furnace installation",
      "furnace upgrade"
    ],
    urgencyLevel: "planned",
    averagePrice: "$3,000-$6,000",
    serviceTime: "1-2 days"
  },
  "air-conditioning-service": {
    name: "Air Conditioning Service",
    shortName: "AC Service",
    description: "Complete air conditioning installation, repair, and maintenance",
    longTailKeywords: [
      "ac installation",
      "central air conditioning",
      "air conditioner replacement",
      "ac maintenance",
      "cooling system service",
      "ac unit repair"
    ],
    urgencyLevel: "seasonal",
    averagePrice: "$200-$500",
    serviceTime: "Same day"
  },
  "hvac-maintenance": {
    name: "HVAC Maintenance",
    shortName: "HVAC Maintenance",
    description: "Preventive maintenance to keep your HVAC system running efficiently",
    longTailKeywords: [
      "hvac tune up",
      "seasonal maintenance",
      "preventive maintenance",
      "hvac inspection",
      "system cleaning",
      "maintenance plan"
    ],
    urgencyLevel: "routine",
    averagePrice: "$150-$300",
    serviceTime: "2-4 hours"
  },
  "duct-cleaning": {
    name: "Duct Cleaning",
    shortName: "Duct Cleaning",
    description: "Professional air duct cleaning and sanitization services",
    longTailKeywords: [
      "air duct cleaning",
      "ductwork cleaning",
      "dryer vent cleaning",
      "indoor air quality",
      "duct sanitization",
      "air quality improvement"
    ],
    urgencyLevel: "maintenance",
    averagePrice: "$300-$600",
    serviceTime: "3-5 hours"
  }
};

export const businessInfo = {
  name: "λlambda Heating & Air (Demo)",
  phone: "(317) 555-0123",
  email: "hello@example.com",
  address: "123 Demo Street, Metro City, MC 00000",
  hours: "24/7 Emergency Service",
  established: "2015",
  googleGuarantee: true,
  certifications: ["EPA Certified", "NATE Certified", "BBB A+ Rating"],
  emergencyService: true
};