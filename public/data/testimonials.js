/**
 * Testimonials Data
 * 
 * This file contains testimonial data that mimics the structure of Google Reviews API.
 * In this demo, all testimonials are fictional sample content for λlambda Heating & Air.
 * 
 * Structure matches Google Reviews API format:
 * - author_name, author_url, profile_photo_url
 * - rating, text, time (timestamp)
 * - relative_time_description
 */

export const testimonialsData = {
  // Mimics Google Places API response structure
  result: {
    rating: 4.9,
    user_ratings_total: 42,
    reviews: [
      {
        author_name: "Sample Reviewer One",
        author_url: "https://www.google.com/maps/contrib/...",
        profile_photo_url: "https://lh3.googleusercontent.com/...",
        rating: 5,
        relative_time_description: "2 weeks ago",
        text: "λlambda Heating & Air (Demo) restored our heat in just a few hours. The tech walked through every step and the experience felt exactly like a real-world pro visit.",
        time: 1703875200,
        location: "Metro City, MC"
      },
      {
        author_name: "Sample Reviewer Two",
        author_url: "https://www.google.com/maps/contrib/...",
        profile_photo_url: "https://lh3.googleusercontent.com/...",
        rating: 5,
        relative_time_description: "3 weeks ago",
        text: "From the first call to the final walkthrough, the process this demo models is clear, efficient, and focused on homeowner comfort.",
        time: 1703270400,
        location: "Northfield, MC"
      },
      {
        author_name: "Sample Property Manager",
        author_url: "https://www.google.com/maps/contrib/...",
        profile_photo_url: "https://lh3.googleusercontent.com/...",
        rating: 5,
        relative_time_description: "1 month ago",
        text: "For our demo portfolio of rental properties, λlambda's system shows how a single site can coordinate requests across dozens of addresses without losing detail.",
        time: 1702665600,
        location: "Lakeside, MC"
      },
      {
        author_name: "Sample Emergency Caller",
        author_url: "https://www.google.com/maps/contrib/...",
        profile_photo_url: "https://lh3.googleusercontent.com/...",
        rating: 5,
        relative_time_description: "1 month ago",
        text: "The 24/7 emergency flow in this demo is exactly what we expect from a modern service site: clear CTAs and fast routing to a real person.",
        time: 1702060800,
        location: "Westbrook, MC"
      },
      {
        author_name: "Sample Homeowner",
        author_url: "https://www.google.com/maps/contrib/...",
        profile_photo_url: "https://lh3.googleusercontent.com/...",
        rating: 5,
        relative_time_description: "2 months ago",
        text: "The demo installation journey—from quote to scheduling to follow-up—shows how you can explain complex HVAC work in friendly, human language.",
        time: 1701456000,
        location: "Riverton, MC"
      },
      {
        author_name: "Sample Facilities Director",
        author_url: "https://www.google.com/maps/contrib/...",
        profile_photo_url: "https://lh3.googleusercontent.com/...",
        rating: 5,
        relative_time_description: "2 months ago",
        text: "This demo makes it easy to imagine multi-property maintenance requests flowing into a single, organized inbox.",
        time: 1700851200,
        location: "Metro City, MC"
      },
      {
        author_name: "Sample Second Opinion",
        author_url: "https://www.google.com/maps/contrib/...",
        profile_photo_url: "https://lh3.googleusercontent.com/...",
        rating: 5,
        relative_time_description: "3 months ago",
        text: "The comparison section in this demo illustrates how to communicate options and pricing without overwhelming visitors.",
        time: 1700246400,
        location: "Riverside, MC"
      },
      {
        author_name: "Sample IAQ Customer",
        author_url: "https://www.google.com/maps/contrib/...",
        profile_photo_url: "https://lh3.googleusercontent.com/...",
        rating: 5,
        relative_time_description: "3 months ago",
        text: "The indoor air quality section of this demo site is a great pattern for explaining invisible benefits like filtration and ventilation.",
        time: 1699641600,
        location: "Greenfield, MC"
      },
      {
        author_name: "Sample Commercial Client",
        author_url: "https://www.google.com/maps/contrib/...",
        profile_photo_url: "https://lh3.googleusercontent.com/...",
        rating: 5,
        relative_time_description: "4 months ago",
        text: "The commercial HVAC pages in this demo show how to talk to operations teams in plain language while still covering technical details.",
        time: 1699036800,
        location: "Metro City, MC"
      },
      {
        author_name: "Sample Smart Home Owner",
        author_url: "https://www.google.com/maps/contrib/...",
        profile_photo_url: "https://lh3.googleusercontent.com/...",
        rating: 4,
        relative_time_description: "4 months ago",
        text: "The smart thermostat and maintenance content here is a solid blueprint for explaining long-term value—even when scheduling takes a few steps.",
        time: 1698432000,
        location: "Easton, MC"
      },
      {
        author_name: "Sample Maintenance Member",
        author_url: "https://www.google.com/maps/contrib/...",
        profile_photo_url: "https://lh3.googleusercontent.com/...",
        rating: 5,
        relative_time_description: "5 months ago",
        text: "The maintenance plan explained in this demo clearly shows how recurring revenue products can be woven into a service website.",
        time: 1697827200,
        location: "Northfield, MC"
      },
      {
        author_name: "Sample Long-Term Customer",
        author_url: "https://www.google.com/maps/contrib/...",
        profile_photo_url: "https://lh3.googleusercontent.com/...",
        rating: 5,
        relative_time_description: "5 months ago",
        text: "Over time, the patterns in this demo—clear CTAs, simple forms, and structured content—add up to a site that feels genuinely trustworthy.",
        time: 1697222400,
        location: "Lakeside, MC"
      }
    ]
  }
};

// Helper function to get featured testimonials for carousel
export function getFeaturedTestimonials(count = 4) {
  return testimonialsData.result.reviews.slice(0, count);
}

// Helper function to get testimonials by rating
export function getTestimonialsByRating(rating = 5) {
  return testimonialsData.result.reviews.filter(review => review.rating === rating);
}

// Helper function to get overall rating data
export function getRatingData() {
  return {
    rating: testimonialsData.result.rating,
    total_reviews: testimonialsData.result.user_ratings_total,
    reviews_text: `${testimonialsData.result.user_ratings_total}+ verified reviews`
  };
} 