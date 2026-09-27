/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ignore TypeScript errors during production build
  typescript: {
    ignoreBuildErrors: true,
  },

  // Ignore ESLint errors during production build
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
      {
        protocol: "https",
        hostname: "utfs.io",
      },
      {
        protocol: "https",
        hostname: "sharmafitness.com",
      },
      {
        protocol: "https",
        hostname: "g0p7auwucr.ufs.sh",
      },
      {
        protocol: "https",
        hostname: "pub-a3d2b35862c1483894ffbee942bb995e.r2.dev",
      },
      {
        protocol: "https",
        hostname: "panaceamedcare.com",
      },
      {
        protocol: "https",
        hostname: "shresthaacademy.com",
      },
      {
        protocol: "https",
        hostname: "www.desitoglobaltravel.com",
      },
      {
        protocol: "https",
        hostname: "sljsolutions.com",
      },
      {
        protocol: "https",
        hostname: "genuinenutrition.com",
      },
      {
        protocol: "https",
        hostname: "bansurividya.com",
      },
      {
        protocol: "https",
        hostname: "kaaltools.com",
      },
      {
        protocol: "https",
        hostname: "djchallenger.in",
      },
      // {
      //   protocol: "https",
      //   hostname: "dfixkart.com",
      // },
      {
        protocol: "https",
        hostname: "prohousing.in",
      },
      {
        protocol: "https",
        hostname: "groxmedia.in",
      },
      {
        protocol: "https",
        hostname: "jainfoodsvmp.com",
      },
      {
        protocol: "https",
        hostname: "eoan.in",
      },
      {
        protocol: "https",
        hostname: "www.airharbours.com",
      },
      {
        protocol: "https",
        hostname: "bohraproperty.com",
      },
      {
        protocol: "https",
        hostname: "clinicadentalandskin.com",
      },
      {
        protocol: "https",
        hostname: "indianlawmasters.com",
      },
      {
        protocol: "https",
        hostname: "ravenlaw.in",
      },
      {
        protocol: "https",
        hostname: "genuinepharmacy.com",
      },
      {
        protocol: "https",
        hostname: "beinggenuinenutrition.com",
      },
      {
        protocol: "https",
        hostname: "muscle-x.com",
      },
      {
        protocol: "https",
        hostname: "suratclothhouse.com",
      },
      {
        protocol: "https",
        hostname: "adyashakti.org",
      },
      {
        protocol: "https",
        hostname: "umsc.in",
      },
      {
        protocol: "https",
        hostname: "pirgunairsystems.com",
      },
      {
        protocol: "https",
        hostname: "godeliverygroup.com",
      },
      {
        protocol: "https",
        hostname: "ananyabhatnagar.org",
      },
      {
        protocol: "https",
        hostname: "belvorealty.com",
      },
      {
        protocol: "https",
        hostname: "knmedicolegal.com",
      },
      {
        protocol: "https",
        hostname: "pawsfriend.in",
      },
      {
        protocol: "https",
        hostname: "shubhlawfirm.com",
      },
      {
        protocol: "https",
        hostname: "jpinfotech.net",
      },
      {
        protocol: "https",
        hostname: "borrowww.com",
      },
      {
        protocol: "https",
        hostname: "investnicp.com",
      },
      {
        protocol: "https",
        hostname: "satyacs.com",
      },
    ],
  },
};

export default nextConfig;