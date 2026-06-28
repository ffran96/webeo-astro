# Webeo

Landing page minimalista, moderna y responsive para **Webeo**, una agencia enfocada en creación de webs, aplicaciones web, SEO, SEM, analítica, automatizaciones y captación de clientes online.

![Vista previa de Webeo](public/og-image.png)

## Descripción

Webeo es una landing comercial construida para convertir visitas en contactos cualificados. La web combina una estética limpia con secciones orientadas a explicar servicios, mostrar trabajos realizados, generar confianza mediante métricas animadas y dirigir al usuario hacia WhatsApp o correo.

El proyecto está desarrollado con Astro, Tailwind CSS y Motion, con una estructura modular basada en componentes reutilizables y archivos de datos separados.

## Características

| Área | Detalle |
| --- | --- |
| Landing principal | Hero, métricas, servicios, portfolio, proceso, resultados y llamada final a la acción. |
| Captación | Botones de acción conectados a WhatsApp con mensajes personalizados según la sección. |
| Portfolio | Trabajos visuales con vídeos ligeros y enlaces a proyectos reales. |
| Navegación | Header global, navegación por anclas, menú móvil y scroll suave. |
| Legal | Páginas de cookies, privacidad, términos de uso y contacto. |
| SEO | Metadatos base, Open Graph, favicon, robots.txt y sitemap.xml. |
| Animaciones | Interacciones sutiles con Motion y métricas animadas con soporte para usuarios con animaciones reducidas. |
| Error 404 | Página personalizada, minimalista y visual. |

## Stack

| Tecnología | Uso |
| --- | --- |
| [Astro](https://astro.build/) | Framework principal para generar una web estática rápida. |
| [Tailwind CSS](https://tailwindcss.com/) | Estilos, diseño responsive y sistema visual. |
| [Motion](https://motion.dev/) | Animaciones sutiles en la interfaz. |
| TypeScript | Tipado y organización de datos compartidos. |

## Estructura

```text
.
├── public/
│   ├── favicon.svg
│   ├── og-image.png
│   ├── robots.txt
│   ├── sitemap.xml
│   └── portfolio/
├── src/
│   ├── components/
│   │   ├── CtaButton.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── MetricsStrip.astro
│   │   ├── Portfolio.astro
│   │   ├── Process.astro
│   │   └── Services.astro
│   ├── data/
│   │   ├── contact.ts
│   │   ├── layout.ts
│   │   ├── metrics.ts
│   │   ├── portfolio.ts
│   │   ├── process.ts
│   │   └── services.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── 404.astro
│   │   ├── contacto.astro
│   │   ├── cookies.astro
│   │   ├── index.astro
│   │   ├── privacidad.astro
│   │   └── terminos.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Instalación

Requisitos:

- Node.js `>=22.12.0`
- npm

```bash
npm install
```

## Comandos

| Comando | Acción |
| --- | --- |
| `npm run dev` | Inicia el entorno de desarrollo en `localhost:4321`. |
| `npm run build` | Genera la versión de producción en `dist/`. |
| `npm run preview` | Previsualiza localmente la versión generada. |
| `npm run astro` | Ejecuta comandos de Astro. |

## Configuración de contacto

Los datos de contacto y los mensajes de WhatsApp están centralizados en:

```text
src/data/contact.ts
```

Desde este archivo se gestionan:

- Email de contacto.
- Número de WhatsApp.
- Mensajes predeterminados por sección.
- Generación de enlaces hacia WhatsApp.

## Contenido editable

La información principal de la landing está separada por responsabilidad:

| Archivo | Contenido |
| --- | --- |
| `src/data/layout.ts` | Enlaces de navegación, footer y metadatos base. |
| `src/data/services.ts` | Servicios ofrecidos por Webeo. |
| `src/data/portfolio.ts` | Proyectos mostrados en el portfolio. |
| `src/data/process.ts` | Pasos del proceso de trabajo. |
| `src/data/metrics.ts` | Métricas animadas de confianza. |
| `src/data/contact.ts` | Email, WhatsApp y mensajes de contacto. |

## SEO

El proyecto incluye archivos preparados para indexación:

```text
public/robots.txt
public/sitemap.xml
public/og-image.png
public/favicon.svg
```

URL del sitemap para Google Search Console:

```text
https://webeo.es/sitemap.xml
```

## Despliegue

La web se genera como sitio estático. Para desplegar:

```bash
npm run build
```

El resultado queda disponible en:

```text
dist/
```

Ese directorio puede publicarse en servicios como Netlify, Vercel, Cloudflare Pages o cualquier hosting compatible con sitios estáticos.

## Licencia

Proyecto privado de Webeo.
