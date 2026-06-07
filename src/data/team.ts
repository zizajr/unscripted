export interface TeamMember {
  id: string;
  initials: string;
  name: string;
  title: string;
  accent: string;
  bio: string[];
}

export const teamMembers: TeamMember[] = [
  {
    id: "gavin-ngabonziza",
    initials: "GN",
    name: "Gavin Ngabonziza",
    title: "Business Development & Product Lead",
    accent: "#F2B705",
    bio: [
      "Gavin Ngabonziza is the Business Development and Product lead at Unscripted. With 8 years of experience across finance, business, and product development, Gavin possesses a diverse skill set that encompasses Business Development, UIX Design, Product Design, and Project Management.",
      "His experience includes serving as Business Development Manager at Zelomove Technologies Ltd, UIX Designer at TicketDaddy Inc., Business Development Executive at Hamz Ltd, and Honorary Consul of Namibia in Uganda. Notably, Gavin served as Legal and Development assistant to the Honorary Consul of Namibia in Uganda — Ambassador Patrick Bitature — for 5 years."
    ],
  },
  {
    id: "bolton-abdulmalik",
    initials: "BA",
    name: "Bolton Abdulmalik",
    title: "Creative Director",
    accent: "#8B2FC9",
    bio: [
      "A maestro orchestrating visual symphonies, Bolton Abdulmalik is the Creative Director at Unscripted. As the creative force behind the agency's visual identity, Bolton combines an eye for detail with a passion for design.",
      "Notable clients: FX Pesa, Nyaka Global, TicketDaddy."
    ],
  },
/*
  {
    id: "bruce-bagarukayo",
    initials: "BB",
    name: "Bruce Bagarukayo",
    title: "Co-CTO",
    accent: "#F2B705",
    bio: [
      "Bruce Bagarukayo is a backend engineer and technology leader with a rare combination of financial technology depth and open-source platform contribution in East Africa.",
      "He authored and published the first Python SDK for the MTN Mobile Money API on PyPI — making it the first publicly available open-source MTN MoMo integration library for East African developers. He served as CTO at Hamz Ltd (leading the build of HamzPay mobile wallet) and CTO at TicketDaddy Inc (designing the Smart Tickets platform — 600,000+ ticket transactions). He also led the Zelomove production database schemas, MTN MoMo integration, and full DevOps pipeline."
    ],
  },
*/
  {
    id: "kayondo-edward",
    initials: "KE",
    name: "Kayondo Edward",
    title: "Co-CTO",
    accent: "#8B2FC9",
    bio: [
      "Edward Kayondo is a full-stack and mobile engineer who began his technology career as a self-taught developer in high school, building a functional social media platform.",
      "He served as Tech Lead for the US Presidential campaign of Gabriel Coenho, co-founded JS Kampala (a JavaScript developer community in Kampala, Uganda), served as Software Lead at Andela, and built the HamzPay iOS application. He served as Co-CTO at TicketDaddy alongside Bruce Bagarukayo, and leads all frontend and mobile engineering at Zelomove Technologies Ltd."
    ],
  },
];

// Placeholder fetcher for future CMS integration
export async function getTeamMembers(): Promise<TeamMember[]> {
  // e.g. return await sanityClient.fetch(`*[_type == "teamMember"]`)
  return teamMembers;
}
