export const contactEmail = "hola@webeo.es";

const whatsappPhone = "34689154632";

export const whatsappMessages = {
  header: "Holaa, me gustaría pedir una propuesta para mejorar mi presencia digital 😊",
  hero: "Holaa, me gustaría crear o mejorar mi web para captar más clientes 🚀 ¿Podemos hablar?☺️",
  services: "Holaa, me gustaría recibir una propuesta para una página web nueva, SEO o campañas digitales 😄",
  portfolio: "Holaa, he visto vuestro portfolio y me gustaría algo parecido para mi negocio 🤗",
  process: "Holaa, me gustaría agendar un diagnóstico gratuito para mi proyecto ☺️",
  results: "Holaa, me gustaría ver cómo mejorar mi web y conseguir más contactos 🚀",
  finalCta: "Holaa, me gustaría que mi web me ayude a conseguir más clientes 😄",
  footer: "Holaa, me gustaría solicitar presupuesto para una web o proyecto digital 😊",
  contact: "Holaa, vengo desde la página de contacto y me gustaría hablar sobre una página web nueva o mejorar mi web actual 🤗",
};

export type WhatsappMessageKey = keyof typeof whatsappMessages;

export const getWhatsappUrl = (message: string) => {
  const params = new URLSearchParams({
    phone: whatsappPhone,
    text: message,
  });

  return `https://api.whatsapp.com/send?${params.toString()}`;
};
