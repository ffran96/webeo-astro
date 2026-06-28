export const defaultSeo = {
  title: "Webeo - Agencia web y marketing digital",
  description: "Webeo crea webs, aplicaciones web, SEO y campañas digitales para captar clientes online.",
};

export const site = {
  name: "Webeo",
  url: "https://webeo.es",
  socialImagePath: "/og-image.png",
};

export const socialImage = `${site.url}${site.socialImagePath}`;

export const navLinks = [
  { label: "Servicios", href: "/#servicios" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Proceso", href: "/#proceso" },
  { label: "Resultados", href: "/#resultados" },
];

export const footerSections = [
  {
    title: "Webeo",
    links: [
      { label: "Inicio", href: "/#inicio" },
      { label: "Servicios", href: "/#servicios" },
      { label: "Portfolio", href: "/#portfolio" },
      { label: "Proceso", href: "/#proceso" },
      { label: "Resultados", href: "/#resultados" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Cookies", href: "/cookies" },
      { label: "Privacidad", href: "/privacidad" },
      { label: "Términos de uso", href: "/terminos" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
];
