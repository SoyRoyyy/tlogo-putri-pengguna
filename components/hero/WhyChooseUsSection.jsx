// components/hero/WhyChooseUsSection.js
import React from 'react';
import FeatureCard from './FeatureCard';

const WhyChooseUsSection = () => {
  const features = [
    {
      title: "Pelayanan Profesional",
      description: "Tim kami berpengalaman dan siap membantu Anda kapan saja.",
      iconColor: "text-blue-600",
      iconPath: "M9.75 17L15 12.75m0 0L9.75 8.5M15 12.75H3",
    },
    {
        title: "Harga Kompetitif",
        description: "Kami menawarkan harga terbaik dengan kualitas terjamin.",
        iconColor: "text-green-600",
        iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-5h2v-2h-2v2zm0-4h2v-6h-2v6zz",
    },
    {
      title: "Tepat Waktu",
      description: "Kami memastikan semua jadwal sesuai dengan yang dijanjikan.",
      iconColor: "text-yellow-500",
      iconPath: "M12 6v6l4 2M12 2a10 10 0 100 20 10 10 0 000-20z",
    },
    {
      title: "Free Retribusi",
      description: "Semua biaya retribusi wisata ditanggung kami, tanpa biaya tambahan.",
      iconColor: "text-purple-500",
      iconPath: "M4 6h16M4 10h16M4 14h10",
    },
    {
      title: "Armada Terawat",
      description: "Seluruh armada kami dirawat secara berkala demi kenyamanan dan keselamatan.",
      iconColor: "text-indigo-600",
      iconPath: "M5 16V6a1 1 0 011-1h12a1 1 0 011 1v10M3 16h18M6 16v4h2v-2h8v2h2v-4",
    },
    {
      title: "Lisensi Guide/Driver",
      description: "Semua guide dan driver kami bersertifikat resmi dan profesional.",
      iconColor: "text-rose-600",
      iconPath: "M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-3.33 0-8 1.67-8 5v1h16v-1c0-3.33-4.67-5-8-5z",
    },
    {
      title: "Fleksibel & Mudah",
      description: "Kemudahan dalam pemesanan dan penyesuaian rencana perjalanan Anda.",
      iconColor: "text-cyan-600",
      iconPath: "M4 4h16v4H4V4zm0 6h10v4H4v-4zm0 6h16v4H4v-4z",
    },
    {
      title: "Asuransi Perjalanan",
      description: "Setiap perjalanan dilindungi oleh asuransi untuk keamanan ekstra.",
      iconColor: "text-orange-500",
      iconPath: "M12 2l7 4v6c0 5-3.5 9.74-7 10-3.5-.26-7-5-7-10V6l7-4z",
    },
  ];

  return (
    <section className="relative bg-gray-100">
      <div className="relative max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Mengapa Memilih Kami
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-16">
          Kami memberikan pelayanan terbaik dengan pengalaman lebih dari 10
          tahun dan selalu mengutamakan kepuasan pelanggan.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <FeatureCard
              key={idx}
              title={feature.title}
              description={feature.description}
              iconColor={feature.iconColor}
              iconPath={feature.iconPath}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
