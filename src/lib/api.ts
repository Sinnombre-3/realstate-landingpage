import { sanityClient } from "sanity:client";

export async function getLandingPageData() {
  const query = `*[_type == "landingPage"][0]{
    heroTitle,
    heroSubtitle,
    ctaText,
    ctaLink,
    "videoFile": heroVideo.asset->url,
    heroVideoUrl
  }`;
  
  const data = await sanityClient.fetch(query);
  return data;
}

export async function getFeaturedProperties() {
  const query = `*[_type == "property" && status == "for-sale"][0...6]{
    title,
    slug,
    price,
    location,
    "imageUrl": images[0].asset->url,
    soulLabel,
    status
  }`;
  const data = await sanityClient.fetch(query);
  return data;
}
