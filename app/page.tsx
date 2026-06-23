export default function Home() {
  const services = [
    {
      title: "Environmental Intelligence",
      items: [
        "Environmental Monitoring",
        "Decision Support Systems",
        "Environmental Analytics",
        "Landscape Intelligence",
      ],
    },
    {
      title: "Forestry & Natural Resources",
      items: [
        "Forest Inventory",
        "Forest Management Planning",
        "Biodiversity Surveys",
        "Tree Planting & Restoration",
      ],
    },
    {
      title: "GIS & Remote Sensing",
      items: [
        "Satellite Image Analysis",
        "Drone Mapping",
        "Spatial Analysis",
        "Geospatial Databases",
      ],
    },
    {
      title: "Restoration Science",
      items: [
        "Ecosystem Restoration",
        "Landscape Recovery",
        "Restoration Monitoring",
        "Adaptive Management",
      ],
    },
    {
      title: "Biomass & Bioenergy",
      items: [
        "Biochar Systems",
        "Biomass Resource Assessment",
        "Sawmill Waste Utilization",
        "Renewable Energy Solutions",
      ],
    },
    {
      title: "Carbon & Climate Solutions",
      items: [
        "Carbon Accounting",
        "Carbon Assessment",
        "MRV Systems",
        "ESG Reporting",
      ],
    },
  ];

  const initiatives = [
    {
      name: "KEIN",
      description: "Katolaj Environmental Intelligence Network",
    },
    {
      name: "KFIO",
      description: "Katolaj Forest Intelligence Observatory",
    },
    {
      name: "KARS",
      description: "Katolaj Adaptive Restoration Solutions",
    },
    {
      name: "CRS",
      description: "Centre for Restoration Studies",
    },
  ];

  return (
    <main style={{ fontFamily: "Arial, sans-serif", color: "#0f172a" }}>
      {/* HERO */}
      <section
        style={{
          background: "#14532d",
          color: "white",
          textAlign: "center",
          padding: "100px 20px",
        }}
      >
        <h1 style={{ fontSize: "3.5rem", marginBottom: "10px" }}>
          KATOLAJ VIRTUS LTD
        </h1>

        <p style={{ fontSize: "1.4rem", marginBottom: "20px" }}>
          Dare to Dream
        </p>

        <p style={{ maxWidth: "900px", margin: "0 auto", lineHeight: "1.8" }}>
          Environmental Intelligence • Forestry • GIS & Remote Sensing •
          Biomass & Bioenergy • Carbon Solutions
        </p>

        <h2 style={{ marginTop: "25px" }}>
          Innovating Sustainability for a Better Future
        </h2>
      </section>

      {/* ABOUT */}
      <section style={{ padding: "80px 10%" }}>
        <h2>About Us</h2>

        <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
          KATOLAJ Virtus Ltd is a multidisciplinary environmental intelligence
          and sustainability company providing innovative solutions in forestry,
          environmental monitoring, GIS and remote sensing, restoration
          science, biomass energy, carbon accounting, biodiversity
          conservation, climate resilience, research and capacity development.
        </p>

        <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
          We transform environmental data into actionable intelligence for
          sustainable development, restoration planning, carbon management and
          ecosystem resilience across Africa and beyond.
        </p>
      </section>

      {/* VISION */}
      <section
        style={{
          background: "#f3f4f6",
          padding: "60px 10%",
        }}
      >
        <h2>Our Vision</h2>

        <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
          To become a leading African environmental intelligence and
          sustainability company delivering innovative solutions for resilient
          ecosystems, climate action and sustainable development.
        </p>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "80px 10%" }}>
        <h2 style={{ marginBottom: "30px" }}>Our Services</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "20px",
          }}
        >
          {services.map((service) => (
            <div
              key={service.title}
              style={{
                border: "1px solid #ddd",
                borderRadius: "12px",
                padding: "20px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
              }}
            >
              <h3>{service.title}</h3>

              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CIRCULAR ECONOMY */}
      <section
        style={{
          background: "#ecfdf5",
          padding: "80px 10%",
        }}
      >
        <h2>Circular Economy & Waste-to-Wealth</h2>

        <p style={{ lineHeight: "1.8", fontSize: "1.1rem" }}>
          Turning waste streams into valuable resources through innovative
          biomass utilization, circular economy models, biochar technologies
          and sustainable energy systems.
        </p>

        <ul style={{ lineHeight: "2" }}>
          <li>Waste-to-Wealth Solutions</li>
          <li>Circular Bioeconomy</li>
          <li>Biochar Production Systems</li>
          <li>Biomass Briquettes</li>
          <li>Resource Recovery Technologies</li>
        </ul>
      </section>

      {/* CARBON */}
      <section style={{ padding: "80px 10%" }}>
        <h2>Carbon & Climate Services</h2>

        <ul style={{ lineHeight: "2" }}>
          <li>Carbon Accounting</li>
          <li>Forest Carbon Assessment</li>
          <li>Carbon Project Development</li>
          <li>Carbon Credit Readiness</li>
          <li>MRV Systems</li>
          <li>ESG & Sustainability Reporting</li>
        </ul>
      </section>

      {/* INITIATIVES */}
      <section
        style={{
          background: "#f0fdf4",
          padding: "80px 10%",
        }}
      >
        <h2>Flagship Initiatives</h2>

        {initiatives.map((initiative) => (
          <div key={initiative.name} style={{ marginBottom: "30px" }}>
            <h3>{initiative.name}</h3>
            <p>{initiative.description}</p>
          </div>
        ))}
      </section>

      {/* TV & MEDIA */}
      <section style={{ padding: "80px 10%" }}>
        <h2>TV & Media Division</h2>

        <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
          Producing environmental documentaries, educational television series,
          YouTube content, social media campaigns and public awareness
          programmes that promote sustainability and environmental stewardship.
        </p>

        <ul style={{ lineHeight: "2" }}>
          <li>Environmental TV Series</li>
          <li>YouTube Educational Content</li>
          <li>Documentary Production</li>
          <li>Environmental Awareness Campaigns</li>
          <li>Educational Media Programmes</li>
        </ul>

        <h3 style={{ color: "#14532d" }}>
          Coming Soon on YouTube and Facebook
        </h3>
      </section>

      {/* FOUNDER */}
      <section
        style={{
          background: "#f3f4f6",
          padding: "80px 10%",
        }}
      >
        <h2>Founder</h2>

        <h3>Dr. Francis A. Faruwa</h3>

        <p style={{ lineHeight: "1.8" }}>
          Forestry and Environmental Management Professional with expertise in
          Biomass Energy, Carbon Accounting, GIS & Remote Sensing, Restoration
          Science, Environmental Intelligence, Biodiversity Conservation and
          Climate Resilience.
        </p>
      </section>

      {/* PARTNERSHIPS */}
      <section style={{ padding: "80px 10%" }}>
        <h2>Partnerships</h2>

        <p>We collaborate with:</p>

        <ul style={{ lineHeight: "2" }}>
          <li>Government Agencies</li>
          <li>Universities</li>
          <li>Research Institutions</li>
          <li>NGOs</li>
          <li>Development Organisations</li>
          <li>Carbon Project Developers</li>
          <li>Private Sector Partners</li>
        </ul>
      </section>

      {/* CONTACT */}
      <section
        style={{
          background: "#14532d",
          color: "white",
          textAlign: "center",
          padding: "80px 20px",
        }}
      >
        <h2>Contact Us</h2>

        <p>Email: katolajvirtus@gmail.com</p>

        <p>Phone: +2347019817838</p>

        <p>
          No 3 Okeola Kemta,
          <br />
          Abeokuta,
          <br />
          Ogun State, Nigeria
        </p>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#052e16",
          color: "white",
          textAlign: "center",
          padding: "30px",
        }}
      >
        <h3>KATOLAJ VIRTUS LTD</h3>

        <p>
          Environmental Intelligence | Forestry | GIS & Remote Sensing |
          Biomass & Bioenergy | Carbon Solutions
        </p>

        <p>Dare to Dream. Innovating Sustainability for a Better Future.</p>
      </footer>
    </main>
  );
}