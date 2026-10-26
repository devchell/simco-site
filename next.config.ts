import type { NextConfig } from "next";

const indexar = process.env.NEXT_PUBLIC_INDEXAR === "true";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "i.ytimg.com", pathname: "/vi/**" }],
  },
  async headers() {
    const seguranca = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
    ];
    if (!indexar) seguranca.push({ key: "X-Robots-Tag", value: "noindex, nofollow" });
    return [{ source: "/:path*", headers: seguranca }];
  },
  async redirects() {
    // Endereços do site antigo apontando para as páginas novas
    return [
      { source: "/treinamentos", destination: "/suporte/videos", permanent: true },
      { source: "/blog", destination: "/", permanent: true },
      { source: "/solucoes-2", destination: "/modulos", permanent: true },
      { source: "/erp-comercial", destination: "/solucoes", permanent: true },
      { source: "/produtos/erp-simco/erp-para-autopecas", destination: "/solucoes/autopecas", permanent: true },
      { source: "/produtos/erp-simco/erp-para-oficinas", destination: "/solucoes/oficinas", permanent: true },
      { source: "/produtos/erp-simco/erp-para-comercio", destination: "/solucoes/comercio", permanent: true },
      {
        source: "/produtos/erp-simco/erp-para-controle-de-equipamentos",
        destination: "/solucoes/controle-de-equipamentos",
        permanent: true,
      },
      { source: "/produtos/pmmvd", destination: "/pmmvd", permanent: true },
      { source: "/produtos/mdfe", destination: "/modulos#mdfe", permanent: true },
      { source: "/empresa/parceiros", destination: "/empresa#parceiros", permanent: true },
      { source: "/empresa/trabalhe-conosco", destination: "/empresa#trabalhe-conosco", permanent: true },
    ];
  },
};

export default nextConfig;
