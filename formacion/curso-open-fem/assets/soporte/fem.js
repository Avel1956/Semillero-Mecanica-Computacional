/* ═══════════════════════════════════════════════════════════════
   FEM CURSO — soporte compartido (fem.js)
   Prof. J. A. Vélez — Pontificia Univ. Javeriana Cali

   1. SPRITE DE ICONOS SVG (técnicos, dibujados a medida, sin emojis)
      - Cada símbolo se define con <symbol id="fem-...">
      - Uso en HTML:  <svg class="fico"><use href="#fem-viga"/></svg>
      - Coloreado por CSS: .fico{fill:none;stroke:currentColor;...}
   2. INIT DE KATEX (offline, desde assets/katex/)
      - Delimitadores: $$...$$ (display) y \(...\) (inline)
      - Se ejecuta tras DOMContentLoaded
   3. TEMAS POR SESIÓN (variación de estilos)
      - body[data-tema="X"] activa la paleta/fuente/portada de la sesión
   ═══════════════════════════════════════════════════════════════ */
(function(){
  /* ── 1. SPRITE SVG ─────────────────────────────────────────── */
  var SPRITE = '<svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true">' +
  /* logo del curso: cubo FEM + retícula */
  '<symbol id="fem-logo" viewBox="0 0 64 64"><path d="M32 6 L54 18 L54 46 L32 58 L10 46 L10 18 Z" fill="none" stroke-width="2.6" stroke-linejoin="round"/><path d="M10 18 L32 30 L54 18 M32 30 L32 58 M22 23.5 L22 41 M42 23.5 L42 41" fill="none" stroke-width="1.6"/><text x="32" y="44" font-family="Consolas,monospace" font-size="13" font-weight="bold" text-anchor="middle" fill="currentColor" stroke="none">FEM</text></symbol>' +
  /* clase / presentación */
  '<symbol id="fem-clase" viewBox="0 0 64 64"><rect x="8" y="14" width="40" height="28" rx="3" fill="none" stroke-width="2.4"/><path d="M14 21 h16 M14 27 h28 M14 33 h20" stroke-width="1.6"/><path d="M28 42 L24 52 M36 42 L40 52 M18 52 h28" stroke-width="2.4"/></symbol>' +
  /* video */
  '<symbol id="fem-video" viewBox="0 0 64 64"><rect x="8" y="18" width="34" height="26" rx="4" fill="none" stroke-width="2.4"/><path d="M42 28 L56 21 L56 41 L42 34 Z" fill="none" stroke-width="2.4" stroke-linejoin="round"/><circle cx="20" cy="31" r="4" stroke-width="1.6"/></symbol>' +
  /* ejercicio (malla + nodo) */
  '<symbol id="fem-ejer" viewBox="0 0 64 64"><path d="M12 20 L30 12 L48 20 L48 42 L30 50 L12 42 Z" fill="none" stroke-width="2.2" stroke-linejoin="round"/><path d="M12 20 L30 28 L48 20 M30 28 L30 50 M20 24 L20 40 M40 24 L40 40" stroke-width="1.4"/><circle cx="30" cy="28" r="2.6" stroke-width="1.6"/><circle cx="20" cy="24" r="2.6" stroke-width="1.6"/><circle cx="40" cy="24" r="2.6" stroke-width="1.6"/><circle cx="20" cy="40" r="2.6" stroke-width="1.6"/><circle cx="40" cy="40" r="2.6" stroke-width="1.6"/></symbol>' +
  /* taller (documento + casillas) */
  '<symbol id="fem-taller" viewBox="0 0 64 64"><path d="M16 6 L44 6 L52 14 L52 58 L16 58 Z" fill="none" stroke-width="2.2" stroke-linejoin="round"/><path d="M44 6 L44 14 L52 14" fill="none" stroke-width="2.2"/><rect x="22" y="22" width="8" height="8" rx="1.5" stroke-width="1.6"/><path d="M23.5 26 l2.5 2.5 l4.5 -5" stroke-width="1.8"/><rect x="22" y="36" width="8" height="8" rx="1.5" stroke-width="1.6"/><path d="M23.5 40 l2.5 2.5 l4.5 -5" stroke-width="1.8"/><path d="M36 25 h10 M36 39 h10" stroke-width="1.8"/></symbol>' +
  /* teoría (sigma + llaves) */
  '<symbol id="fem-teoria" viewBox="0 0 64 64"><path d="M16 14 h24 a6 6 0 0 1 0 12 h-8 a6 6 0 0 0 0 12 h24" fill="none" stroke-width="2.6"/><path d="M20 50 h26" stroke-width="1.8"/><circle cx="20" cy="50" r="2.4" stroke-width="1.4"/></symbol>' +
  /* práctica (cubo con carga) */
  '<symbol id="fem-practica" viewBox="0 0 64 64"><path d="M14 26 L32 14 L50 26 L50 46 L32 58 L14 46 Z" fill="none" stroke-width="2.2" stroke-linejoin="round"/><path d="M14 26 L32 38 L50 26 M32 38 L32 58" stroke-width="1.4"/><path d="M50 30 L58 22 M58 22 L50 22 M58 22 L58 30" stroke-width="2" stroke-linejoin="round"/></symbol>' +
  /* verificación (check + curva) */
  '<symbol id="fem-verif" viewBox="0 0 64 64"><path d="M10 44 C 22 18, 40 18, 54 40" fill="none" stroke-width="2.2"/><path d="M50 34 L55 44 L45 44 Z" fill="none" stroke-width="1.8" stroke-linejoin="round"/><circle cx="18" cy="48" r="2.4" stroke-width="1.4"/><circle cx="38" cy="30" r="2.4" stroke-width="1.4"/><path d="M44 54 l10 -12 M48 54 l10 -12" stroke-width="1.8"/></symbol>' +
  /* IA (red de nodos) */
  '<symbol id="fem-ia" viewBox="0 0 64 64"><circle cx="12" cy="32" r="4" stroke-width="1.8"/><circle cx="32" cy="14" r="4" stroke-width="1.8"/><circle cx="32" cy="32" r="4" stroke-width="1.8"/><circle cx="32" cy="50" r="4" stroke-width="1.8"/><circle cx="52" cy="32" r="4" stroke-width="1.8"/><path d="M15 30 L29 16 M15 34 L29 48 M35 16 L49 30 M35 48 L49 34 M29 28 L35 30 M29 36 L35 34" stroke-width="1.4"/></symbol>' +
  /* viga en voladizo */
  '<symbol id="fem-viga" viewBox="0 0 64 64"><path d="M10 26 L50 26 L50 32 L10 32 Z" fill="none" stroke-width="2"/><path d="M10 18 L10 40 M10 18 L16 22 M10 18 L16 14 M10 40 L16 36 M10 40 L16 44" stroke-width="2" stroke-linejoin="round"/><path d="M50 29 L58 22 M58 22 L58 29 M58 22 L50 29" stroke-width="2" stroke-linejoin="round"/></symbol>' +
  /* barra en tracción */
  '<symbol id="fem-barra" viewBox="0 0 64 64"><rect x="18" y="24" width="28" height="14" rx="2" fill="none" stroke-width="2.2"/><path d="M10 31 L18 31 M46 31 L54 31 M12 25 L8 31 L12 37 M52 25 L56 31 L52 37" stroke-width="2" stroke-linejoin="round"/></symbol>' +
  /* placa con agujero */
  '<symbol id="fem-placa" viewBox="0 0 64 64"><rect x="10" y="18" width="44" height="26" rx="2" fill="none" stroke-width="2.2"/><circle cx="32" cy="31" r="7" stroke-width="2"/><path d="M6 22 L2 28 L6 34 M58 22 L62 28 L58 34" stroke-width="2" stroke-linejoin="round"/></symbol>' +
  /* soporte en L (esquina entrante) */
  '<symbol id="fem-esquina" viewBox="0 0 64 64"><path d="M14 14 L14 38 L42 38 L42 50" fill="none" stroke-width="2.4" stroke-linejoin="round"/><path d="M14 8 L14 20 M8 14 L20 14" stroke-width="2" stroke-linejoin="round"/><circle cx="42" cy="50" r="3" stroke-width="1.8"/><path d="M42 50 L52 50 M42 50 L42 58" stroke-width="2"/></symbol>' +
  /* convergencia (curva asintótica) */
  '<symbol id="fem-conv" viewBox="0 0 64 64"><path d="M8 52 L56 52 M8 52 L8 10" stroke-width="1.6"/><path d="M10 50 C 20 46, 30 30, 50 16" fill="none" stroke-width="2.2"/><path d="M46 12 L52 15 L48 21" fill="none" stroke-width="1.6" stroke-linejoin="round"/><circle cx="50" cy="16" r="2.4" stroke-width="1.4"/><path d="M28 38 l3 3 l5 -6" stroke-width="1.8"/></symbol>' +
  /* ciclo completo (flecha circular) */
  '<symbol id="fem-ciclo" viewBox="0 0 64 64"><path d="M32 12 A 20 20 0 1 1 14 46" fill="none" stroke-width="2.4"/><path d="M14 34 L14 46 L26 46" fill="none" stroke-width="2" stroke-linejoin="round"/><circle cx="32" cy="32" r="6" stroke-width="1.8"/><path d="M32 28 L32 36 M29 32 L35 32" stroke-width="1.8"/></symbol>' +
  /* unidades (regla) */
  '<symbol id="fem-unidades" viewBox="0 0 64 64"><rect x="10" y="26" width="44" height="14" rx="2" fill="none" stroke-width="2.2"/><path d="M16 26 L16 40 M24 26 L24 40 M32 26 L32 40 M40 26 L40 40 M48 26 L48 40" stroke-width="1.4"/><path d="M20 32 h8 M36 32 h8" stroke-width="1.6"/></symbol>' +
  /* glosario (libro) */
  '<symbol id="fem-glosario" viewBox="0 0 64 64"><path d="M14 14 C 22 10, 30 14, 32 18 C 34 14, 42 10, 50 14 L 50 50 C 42 46, 34 50, 32 54 C 30 50, 22 46, 14 50 Z" fill="none" stroke-width="2.2" stroke-linejoin="round"/><path d="M32 18 L32 54" stroke-width="1.6"/></symbol>' +
  /* instalación (descarga) */
  '<symbol id="fem-instala" viewBox="0 0 64 64"><path d="M32 8 L32 36 M22 26 L32 36 L42 26" fill="none" stroke-width="2.4" stroke-linejoin="round"/><path d="M14 44 L14 50 L50 50 L50 44" fill="none" stroke-width="2.4" stroke-linejoin="round"/></symbol>' +
  /* atención (triángulo) */
  '<symbol id="fem-atencion" viewBox="0 0 64 64"><path d="M32 10 L56 52 L8 52 Z" fill="none" stroke-width="2.4" stroke-linejoin="round"/><path d="M32 26 L32 38" stroke-width="2.2"/><circle cx="32" cy="45" r="2.2" stroke-width="1.6"/></symbol>' +
  '</svg>';
  document.write(SPRITE);

  /* helper: insertar icono por id */
  window.fico = function(id, cls){
    return '<svg class="fico '+(cls||'')+'" aria-hidden="true"><use href="#'+id+'"/></svg>';
  };

  /* ── 2. KATEX INIT (offline) ──────────────────────────────── */
  function initKatex(){
    if(window.renderMathInElement && document.body){
      try{
        renderMathInElement(document.body, {
          delimiters:[
            {left:'$$',right:'$$',display:true},
            {left:'\\(',right:'\\)',display:false}
          ],
          throwOnError:false
        });
        /* formulas .formula con contenido raw → también renderizar si quedó sin tocar */
        document.querySelectorAll('.formula:not(.katex-rendered)').forEach(function(el){
          var raw = el.getAttribute('data-katex');
          if(raw && window.katex){
            el.innerHTML = katex.renderToString(raw,{displayMode:true,throwOnError:false});
            el.classList.add('katex-rendered');
          }
        });
      }catch(e){ console.warn('KaTeX init:', e); }
    }
  }
  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded', initKatex);
  } else { initKatex(); }

  /* ── 3. TEMA POR SESIÓN (data-tema en <html> o <body>) ────── */
  /* Las paletas se definen en el CSS de cada presentación con
     body[data-tema="t2"]{--blue:...;--gold:...;...} etc. */
})();
