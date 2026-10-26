import { empresa, siteUrl } from "@/content/site";

export function DadosEstruturados() {
  const dados = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#empresa`,
    name: empresa.nome,
    legalName: empresa.razaoSocial,
    url: siteUrl,
    logo: `${siteUrl}/img/simco-logo.png`,
    foundingDate: String(empresa.fundacao),
    telephone: "+55-11-4158-3078",
    email: empresa.email,
    taxID: empresa.cnpj,
    address: {
      "@type": "PostalAddress",
      streetAddress: empresa.endereco.logradouro,
      addressLocality: empresa.endereco.cidade,
      addressRegion: empresa.endereco.uf,
      postalCode: empresa.endereco.cep,
      addressCountry: "BR",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    sameAs: [empresa.redes.linkedin, empresa.redes.instagram],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dados).replace(/</g, "\\u003c") }} />;
}
