import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "u7ebcbzi",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: "sk9ZbV4HjfQEKENWqpNNEGHKEucn4NTGe6dxgoG3pvRbfEu3R5tY8dZJp1n5DMAZhbpsX3xdAI8tTEVM1IAnWKV4tMdQYPNEmjioPMRuuzzQ7XbhScMwGDcSg9T4wdFRcGFV06mQNZhgyflXMk35lsT70ByCVV8ovGpdFc04Ck3iNcNm6uZK",
});

const projects = [
  { title: "Residential Tower Project", category: "Residential", desc: "Multi-storey residential building with full civil and structural scope, MEP works, and finishing.", scope: "Civil, Structural, MEP", order: 1 },
  { title: "Villa Development", category: "Residential", desc: "Premium villa cluster delivered turnkey with landscaping, MEP installations, and interior finishing.", scope: "Turnkey Build", order: 2 },
  { title: "Corporate Office Complex", category: "Commercial", desc: "Glass-facade commercial office building with full MEP scope, fit-out, and building management systems.", scope: "Civil, MEP, Fit-out", order: 3 },
  { title: "Retail Plaza", category: "Commercial", desc: "Mixed-use retail destination with anchor tenants, structured parking, and MEP installations.", scope: "Building Contracting", order: 4 },
  { title: "Industrial Warehouse", category: "Industrial", desc: "Large-span steel-structure warehouse with loading bays, utility connections, and site office setup.", scope: "Structural, Site Facilities", order: 5 },
  { title: "Manufacturing Facility", category: "Industrial", desc: "Process-driven industrial facility with structural steel works, MEP, and safety compliance scope.", scope: "Industrial Contracting", order: 6 },
  { title: "HVAC & Plumbing Installation", category: "MEP", desc: "Full MEP package for a commercial building — HVAC, plumbing, drainage, and low-current systems.", scope: "MEP Contracting", order: 7 },
  { title: "Electrical Power Upgrade", category: "MEP", desc: "Power distribution panel replacement, lighting upgrade, and LV system installation for an operational facility.", scope: "Electrical Works", order: 8 },
  { title: "Corporate Office Fit-out", category: "Fit-out", desc: "Premium interior fit-out with glass partitions, raised flooring, feature lighting, and integrated MEP.", scope: "MEP Fit-out & Interior", order: 9 },
  { title: "Retail Showroom Fit-out", category: "Fit-out", desc: "Retail interior with custom joinery, brand-aligned finishes, feature display systems, and electrical works.", scope: "Interior & MEP", order: 10 },
  { title: "Site Office Setup", category: "Site Facilities", desc: "Turnkey portable office cabin complex with utility connections, furniture, and site welfare facilities.", scope: "Site Office Facilities", order: 11 },
  { title: "Temporary Project Facilities", category: "Site Facilities", desc: "Full site support infrastructure including storage, sanitation, fencing, and utility rental units.", scope: "Rental Services", order: 12 },
];

async function seed() {
  console.log("Seeding Sanity with", projects.length, "projects...");

  // Clear existing project documents first
  const existing = await client.fetch(`*[_type == "project"]._id`);
  if (existing.length > 0) {
    console.log(`Found ${existing.length} existing projects — deleting...`);
    await Promise.all(existing.map((id: string) => client.delete(id)));
  }

  for (const p of projects) {
    await client.create({
      _type: "project",
      title: p.title,
      category: p.category,
      description: p.desc,
      scope: p.scope,
      order: p.order,
    });
    console.log(`✓ Created: ${p.title}`);
  }

  console.log("\nDone! All projects seeded to Sanity.");
}

seed().catch(console.error);
