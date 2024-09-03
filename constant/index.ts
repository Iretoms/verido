import { ICountry } from "../types/index";
export const videoDummyData = [
  {
    id: "01",
    title: "Verido Help Video",
    youtubeId: "qwertyuio",
    category: "Help",
  },
  {
    id: "02",
    title: "Verido Help Video",
    youtubeId: "qwertyuio",
    category: "Help",
  },
  {
    id: "03",
    title: "Verido Help Video",
    youtubeId: "qwertyuio",
    category: "Help",
  },
  {
    id: "04",
    title: "Verido Help Video",
    youtubeId: "qwertyuio",
    category: "Help",
  },
  {
    id: "05",
    title: "Verido Help Video",
    youtubeId: "qwertyuio",
    category: "Help",
  },
];

export const countryData: ICountry[] = [
  {
    country: "Nigeria",
    partners: 56,
    consultants: 1003,
    businesses: 2693,
    subscribers: 723,
  },
  {
    country: "Kenya",
    partners: 56,
    consultants: 1003,
    businesses: 2693,
    subscribers: 723,
  },
  {
    country: "Uganda",
    partners: 56,
    consultants: 1003,
    businesses: 2693,
    subscribers: 723,
  },
  {
    country: "Mozambique",
    partners: 56,
    consultants: 1003,
    businesses: 2693,
    subscribers: 723,
  },
  {
    country: "Ghana",
    partners: 56,
    consultants: 1003,
    businesses: 2693,
    subscribers: 723,
  },
  {
    country: "South Africa",
    partners: 56,
    consultants: 1003,
    businesses: 2693,
    subscribers: 723,
  },
];

export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const countryRevenueData = [
  { label: "🇬🇧 United Kingdom", value: "$57,000" },
  { label: "🇳🇬 Nigeria", value: "$40,000" },
  { label: "🇰🇪 Kenya", value: "$36,000" },
  { label: "🇩🇪 Germany", value: "$30,000" },
  { label: "🇦🇺 Australia", value: "$27,000" },
];
export const partnerRevenueData = [
  { label: "Invasion", value: "$57,000" },
  { label: "Figma", value: "$40,000" },
  { label: "Trello", value: "$36,000" },
  { label: "Google", value: "$30,000" },
  { label: "Infogenix", value: "$27,000" },
];
export const companyRevenueData = [
  { label: "Avon Products", value: "$57,000" },
  { label: "NCR Coperation", value: "$40,000" },
  { label: "Navistar International Corporation", value: "$36,000" },
  { label: "Ball Corporation", value: "$30,000" },
  { label: "Baker Hughes Incorporated", value: "$27,000" },
];
export const superAgentsRevenueData = [
  { label: "Mary Dokubo", value: "$57,000" },
  { label: "Joseph Opuene", value: "$40,000" },
  { label: "Sarah Suoyo", value: "$36,000" },
  { label: "Simon Nwosu", value: "$30,000" },
  { label: "Sarah Werinipre", value: "$27,000" },
];
export const subAgentsRevenueData = [
  { label: "Mary Dokubo", value: "$57,000" },
  { label: "Joseph Opuene", value: "$40,000" },
  { label: "Sarah Suoyo", value: "$36,000" },
  { label: "Simon Nwosu", value: "$30,000" },
  { label: "Sarah Werinipre", value: "$27,000" },
];

export const cardData = [
  {
    title: "Total Users",
    value: 536,
    background: "#E6F6EA",
    percentage: 2.5,
    trend: "up",
    icon: "/assets/icons/green-trend.svg",
    roles: [
      "master_admin",
      "country_admin",
      "company",
      "partner",
      "super_agent",
      "sub_agent",
    ],
  },
  {
    title: "Country Admin",
    value: 3,
    background: "#FFF4E6",
    percentage: 2.5,
    trend: "down",
    icon: "/assets/icons/purple-trend.svg",
    roles: ["master_admin"],
  },
  {
    title: "Partners",
    value: 9,
    background: "#E6F2F2",
    percentage: 2.5,
    trend: "up",
    icon: "/assets/icons/orange-trend.svg",
    roles: [
      "master_admin",
      "country_admin",
      "company",
      "super_agent",
      "sub_agent",
    ],
  },
  {
    title: "Companies",
    value: 24,
    background: "#F1EEFB",
    percentage: 2.5,
    trend: "up",
    icon: "/assets/icons/red-trend.svg",
    roles: ["master_admin", "country_admin", "partner"],
  },
  {
    title: "Super Agents",
    value: 100,
    background: "#FFE8E5",
    percentage: 2.5,
    trend: "down",
    icon: "/assets/icons/blue-trend.svg",
    roles: ["master_admin", "country_admin", "company", "partner"],
  },
  {
    title: "Sub Agents",
    value: 400,
    background: "#E6F2FF",
    percentage: 2.5,
    trend: "up",
    icon: "/assets/icons/teal-trend.svg",
    roles: [
      "master_admin",
      "country_admin",
      "company",
      "partner",
      "super_agent",
    ],
  },
];
