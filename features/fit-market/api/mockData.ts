import { Store, StoresResponse } from "./types";

export const MOCK_STORES: Store[] = [
  {
    storeId: 1,
    name: "FitZone Supplements",
    address: "123 Muscle Way",
    city: "Baku",
    logoUrl: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=200&q=80",
    coverImageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    discounts: ["10% OFF Proteins", "Buy 1 Get 1 BCAA"],
    distanceKm: 2.5,
    social: {
      links: ["https://instagram.com", "https://facebook.com"]
    },
    isSaved: true,
    isNew: false,
  },
  {
    storeId: 2,
    name: "Healthy Eats Cafe",
    address: "456 Wellness Blvd",
    city: "Baku",
    logoUrl: "https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&w=200&q=80",
    coverImageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    discounts: ["15% OFF Salads"],
    distanceKm: 5.1,
    social: {
      links: ["https://instagram.com"]
    },
    isSaved: false,
    isNew: true,
  },
  {
    storeId: 3,
    name: "Iron Gear Apparel",
    address: "789 Power Ave",
    city: "Baku",
    logoUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=200&q=80",
    coverImageUrl: "https://images.unsplash.com/photo-1558017487-06bf9f82613a?auto=format&fit=crop&w=800&q=80",
    discounts: ["Free Shipping Over 100 AZN"],
    distanceKm: 8.3,
    social: {
      links: []
    },
    isSaved: false,
    isNew: false,
  },
  {
    storeId: 4,
    name: "Vitamin Store",
    address: "321 Health St",
    city: "Baku",
    logoUrl: "https://images.unsplash.com/photo-1584308666744-24d5e4a7ec52?auto=format&fit=crop&w=200&q=80",
    coverImageUrl: "https://images.unsplash.com/photo-1550345332-09e3ac89ab2f?auto=format&fit=crop&w=800&q=80",
    discounts: ["20% OFF Omega-3"],
    distanceKm: 1.2,
    social: {
      links: ["https://facebook.com"]
    },
    isSaved: true,
    isNew: true,
  },
  {
    storeId: 5,
    name: "Elite Fitness Gear",
    address: "987 Strength Rd",
    city: "Baku",
    logoUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=200&q=80",
    coverImageUrl: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80",
    discounts: ["10% OFF First Purchase"],
    distanceKm: 3.4,
    social: {
      links: ["https://instagram.com", "https://youtube.com"]
    },
    isSaved: false,
    isNew: true,
  },
  {
    storeId: 6,
    name: "Green Smoothie Bar",
    address: "555 Fresh Way",
    city: "Baku",
    logoUrl: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=200&q=80",
    coverImageUrl: "https://images.unsplash.com/photo-1623366302587-bca2532cb1e3?auto=format&fit=crop&w=800&q=80",
    discounts: [],
    distanceKm: 4.8,
    social: {
      links: ["https://facebook.com"]
    },
    isSaved: false,
    isNew: false,
  }
];

export const MOCK_STORES_RESPONSE: StoresResponse = {
  items: MOCK_STORES,
  total: 6,
  page: 1,
  pageSize: 10,
};
