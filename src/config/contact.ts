export const contactEmail = "hola@webeo.es";

const whatsappPhone = "34689154632";

export const whatsappMessages = {
  header: "Hola Equipo de Webeo👋 quiero pedir una propuesta para mejorar mi presencia digital 😊",
  hero: "Hola Equipo de Webeo👋 quiero crear o mejorar mi web para captar más clientes 🚀 ¿Podemos hablar?☺️",
  services: "Hola Equipo de Webeo👋 quiero recibir una propuesta para una página web nueva, SEO o campañas digitales 😄",
  portfolio: "Hola Equipo de Webeo👋 he visto vuestro portfolio y quiero algo parecido para mi negocio 🤗",
  process: "Hola Equipo de Webeo👋 quiero agendar un diagnóstico gratuito para mi proyecto ☺️",
  results: "Hola Equipo de Webeo👋 quiero ver cómo mejorar mi web y conseguir más contactos 🚀",
  finalCta: "Hola Equipo de Webeo👋 quiero que mi web me ayude a conseguir más clientes 😄",
  footer: "Hola Equipo de Webeo👋 quiero solicitar presupuesto para una web o proyecto digital 😊",
  contact: "Hola Equipo de Webeo👋 vengo desde la página de contacto y quiero hablar sobre una página web nueva o mejorar mi web actual 🤗",
};

export type WhatsappMessageKey = keyof typeof whatsappMessages;

export const getWhatsappUrl = (message: string) => {
  const params = new URLSearchParams({
    phone: whatsappPhone,
    text: message,
  });

  return `https://api.whatsapp.com/send?${params.toString()}`;
};
