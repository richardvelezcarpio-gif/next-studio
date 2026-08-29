NEXT STUDIO DIGITAL CARD V2

Objetivo
- V2 mobile-first de la tarjeta de Richard Vélez.
- Convierte la tarjeta informativa en un recorrido de ventas.
- Bilingüe ES/EN.
- QR conserva exactamente: https://www.nextstudio.agency/card/richard

Archivos
- index.html
- styles.css
- app.js
- assets/richard-velez.png
- assets/richard-card-qr.png

Rutas integradas desde el repositorio Next Studio
ES:
- /es/diagnostico-ia
- /es/servicios
- /es/paginas-web
- /es/ai-content-strategy
- /es/plataformas
- /es/tarjeta-digital
- /es/apps-herramientas
- /es/proyectos
- /es/contacto

EN:
- /en/ai-business-diagnosis
- /en/services
- /en/websites
- /en/ai-content-strategy
- /en/platforms
- /en/digital-card
- /en/apps-tools
- /en/projects
- /en/contact

IMPORTANTE ANTES DE PUBLICAR
Los botones de WhatsApp y teléfono están preparados en app/index pero deben recibir el número real actual antes del deploy.
No se cambió el destino del QR.

PRUEBA LOCAL
Desde esta carpeta:
python3 -m http.server 5500
Abrir:
http://localhost:5500

REEMPLAZO EN NEXT STUDIO
La producción actual vive en:
public/card/richard/

1. Haz backup:
mv public/card/richard public/card/richard-v1-backup

2. Copia esta carpeta V2:
cp -R next-studio-digital-card-v2 public/card/richard

3. Prueba localmente el proyecto Next Studio.

4. Confirma que:
- /card/richard abre V2
- QR abre https://www.nextstudio.agency/card/richard
- ES/EN cambia textos y rutas
- Compartir funciona
- Guardar contacto descarga VCF
- diagnóstico abre la ruta correcta
- 390px y 430px no tienen overflow

No borres el backup hasta verificar producción.

V2.1 — cambios congelados solicitados
- NO se cambió el orden de secciones ni el esquema general.
- En móvil, “¿Qué quieres mejorar?” queda congelado en 2 columnas.
- Los 6 cuadros reciben degradados claros premium/futuristas, sin oscurecer la página.
- Redes Sociales usa logos de marca a color (Facebook, Instagram, TikTok, LinkedIn, Google).
- Proyectos Destacados usa los logos originales proporcionados para La Casa del Marisco y Next Studio.
