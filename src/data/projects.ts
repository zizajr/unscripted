export type ProjectCategory = "Branding" | "Strategy" | "Digital" | "PR" | "Production";

export interface Project {
  id: string;
  client: string;
  type: string;
  category: ProjectCategory;
  outcome: string;
  color: string;
}

export const projects: Project[] = [
  {
    id: "ticketdaddy",
    client: "TicketDaddy Inc.",
    type: "Brand & Digital",
    category: "Branding",
    outcome: "Smart Tickets infrastructure — 600,000+ transactions across East Africa.",
    color: "#0d1b2a",
  },
  {
    id: "hamzpay",
    client: "HamzPay / Hamz Ltd",
    type: "Brand & FinTech",
    category: "Branding",
    outcome: "Mobile wallet identity and communications for Ugandan consumers.",
    color: "#1a1a2e",
  },
  {
    id: "nyaka-global",
    client: "Nyaka Global",
    type: "Brand & Communications",
    category: "PR",
    outcome: "Global NGO identity and media strategy.",
    color: "#0f3460",
  },
  {
    id: "fx-pesa",
    client: "FX Pesa",
    type: "Design & Marketing",
    category: "Digital",
    outcome: "Financial brand design for East Africa's trading audience.",
    color: "#1a2a0a",
  },
  {
    id: "honorary-consul-namibia",
    client: "Honorary Consul of Namibia in Uganda",
    type: "Communications & PR",
    category: "PR",
    outcome: "Diplomatic communications and event coordination.",
    color: "#2a150a",
  },
];

// Placeholder fetcher for future CMS integration
export async function getProjects(): Promise<Project[]> {
  // e.g. return await sanityClient.fetch(`*[_type == "project"]`)
  return projects;
}
