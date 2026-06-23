export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Hero Section */}
      <section className="bg-green-900 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">
          KATOLAJ VIRTUS LTD
        </h1>

        <p className="text-2xl mb-4">
          Dare to Dream
        </p>

        <p className="max-w-4xl mx-auto text-lg">
          Innovating Sustainability for a Better Future
        </p>
      </section>

      {/* About */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          About Us
        </h2>

        <p className="text-lg leading-8">
          KATOLAJ Virtus Ltd is a multidisciplinary environmental
          intelligence and sustainability company providing innovative
          solutions in forestry, GIS, remote sensing, restoration science,
          biodiversity conservation, climate resilience, research,
          environmental monitoring and capacity development.
        </p>
      </section>

      {/* Vision */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Our Vision
          </h2>

          <p className="text-lg">
            To become a leading African environmental intelligence and
            sustainability company delivering innovative solutions for
            resilient ecosystems and sustainable development.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="p-6 shadow rounded-lg">
            <h3 className="font-bold text-xl mb-3">
              Forestry & Natural Resources
            </h3>
            <p>
              Forest inventory, biodiversity surveys,
              restoration planning and ecosystem management.
            </p>
          </div>

          <div className="p-6 shadow rounded-lg">
            <h3 className="font-bold text-xl mb-3">
              GIS & Remote Sensing
            </h3>
            <p>
              Mapping, drone applications,
              satellite analysis and environmental monitoring.
            </p>
          </div>

          <div className="p-6 shadow rounded-lg">
            <h3 className="font-bold text-xl mb-3">
              Climate & Sustainability
            </h3>
            <p>
              Carbon assessment, ESG support,
              restoration monitoring and climate resilience.
            </p>
          </div>

        </div>
      </section>

      {/* Flagship Initiatives */}
      <section className="bg-green-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold mb-10">
            Flagship Initiatives
          </h2>

          <div className="space-y-8">

            <div>
              <h3 className="text-2xl font-bold">
                KEIN
              </h3>
              <p>
                Katolaj Environmental Intelligence Network
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                KFIO
              </h3>
              <p>
                Katolaj Forest Intelligence Observatory
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                KARS
              </h3>
              <p>
                Katolaj Adaptive Restoration Solutions
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                CRS
              </h3>
              <p>
                Centre for Restoration Studies
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* TV & Media */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          TV & Media Division
        </h2>

        <p className="text-lg">
          Producing environmental documentaries,
          educational video series, YouTube content,
          social media campaigns and public awareness programmes.
        </p>
      </section>

      {/* Founder */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold mb-6">
            Founder
          </h2>

          <h3 className="text-2xl font-semibold">
            Dr. Francis A. Faruwa
          </h3>

          <p className="mt-4">
            Forestry and environmental management professional
            with expertise in GIS, remote sensing,
            biomass energy, biodiversity conservation,
            restoration science and climate resilience.
          </p>

        </div>
      </section>

      {/* Contact */}
      <section className="bg-green-900 text-white py-16 px-6 text-center">

        <h2 className="text-3xl font-bold mb-6">
          Contact Us
        </h2>

        <p>Email: katolajvirtus@gmail.com</p>

        <p>Phone: +2347019817838</p>

        <p>
          No 3 Okeola Kemta, Abeokuta,
          Ogun State, Nigeria
        </p>

      </section>

    </main>
  );
}