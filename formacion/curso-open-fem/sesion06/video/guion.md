# Guion de Video — Sesión 6: Flujo de trabajo profesional e IA en simulación

**Curso:** FEM práctico con FreeCAD (6 sesiones)
**Duración objetivo:** ~11-12 minutos
**Formato:** Navegador fullscreen + OBS (cámara PiP ~25% abajo a la derecha)
**Archivo de escenas:** `video/diapositivas.html`

> Convenciones: cada bloque indica la **escena** (s0–s6) y el **beat** (revelado
> con ESPACIO) que debe estar en pantalla. Los tiempos son orientativos para
> la narración. El texto entre comillas es lo que se dice en cámara.

---

## Bloque 1 — Apertura y anclaje (0:00–1:20) · Escena s0

**[s0, beat 1 — línea de producción con sensores y gemelo digital]**

> "Hemos recorrido seis sesiones: desde la idea de simular, pasando por la
> discretización, el pre-procesamiento, el solver, y la verificación con la
> validación. Hoy cerramos el curso con lo que hace profesional ese flujo:
> el checklist previo, el informe de resultados, la reproducibilidad — y el
> panorama de la inteligencia artificial aplicada a la simulación."

**[s0, beat 1 — flujo CAD → malla → solver → informe]**

> "Bienvenidos a la sesión seis. Soy el profesor Jaime Andrés Vélez, de
> Ingeniería Mecánica de la Javeriana Cali. Miren la línea de producción
> detrás: sensores, datos, un gemelo digital corriendo en tiempo real.
> Así funciona hoy la industria — y la simulación es parte de esa cadena.
> Hoy aprenderemos a cerrar el ciclo: del CAD al informe, con criterio."

---

## Bloque 2 — Checklist pre-simulación: las 5 preguntas (1:20–3:40) · Escena s1

**[s1, beat 1 — pregunta 1]**

> "La guía lo dice claro: antes de abrir el software, responda cinco
> preguntas. Si no puede responder alguna, no está listo para simular.
> Primera: ¿qué quiero saber? Un desplazamiento máximo, un factor de
> seguridad, una frecuencia natural, una temperatura de operación. Defina
> la pregunta de diseño antes de tocar el modelo."

**[s1, beat 2 — pregunta 2]**

> "Segunda: ¿qué física gobierna el fenómeno? Elástico lineal, plástico,
> térmico, acoplado. Esto decide la ecuación que se resuelve y el modelo
> constitutivo del material. La física primero, el software después."

**[s1, beat 3 — pregunta 3]**

> "Tercera: ¿qué precisión necesito? ¿Más o menos uno por ciento, o basta
> con diez? Esto determina el refinamiento de malla y el nivel de
> validación exigido. Simular a cinco decimales cuando la decisión tolera
> diez por ciento es desperdiciar horas de cómputo."

**[s1, beat 4 — pregunta 4]**

> "Cuarta: ¿contra qué voy a comparar? Un experimento, una solución
> analítica, una norma, o una simulación previa validada. Sin referencia,
> no hay verificación posible."

**[s1, beat 5 — pregunta 5]**

> "Y quinta, la más valiosa: ¿cuál es mi hipótesis? ¿Qué espero que pase?
> Si el resultado difiere mucho de lo esperado, ¿confío en mi intuición o
> en la simulación? Sin hipótesis previa, cualquier resultado parece
> razonable. Esa es la trampa más sutil de todas."

---

## Bloque 3 — Documentación y el informe de 7 secciones (3:40–6:10) · Escena s2

**[s2, beats 1 a 3 — resumen, descripción, verificación]**

> "Un modelo no documentado es un modelo desechable. En seis meses, ni
> usted recordará por qué eligió ese tamaño de malla o esa condición de
> frontera. Documente lo mínimo: versión del software y del solver,
> sistema de unidades, propiedades del material con su fuente, las
> condiciones de frontera con su justificación, las estadísticas de malla,
> el criterio de convergencia, y la comparación con la referencia."

**[s2, beats 4 a 7 — validación, resultados, discusión, conclusiones]**

> "Y al final, el informe de resultados con siete secciones: resumen
> ejecutivo, descripción del modelo, verificación, validación, resultados,
> discusión, y conclusiones con recomendaciones. El informe es el
> entregable profesional: sin él, la simulación no existe para quien toma
> la decisión."

---

## Bloque 4 — Reproducibilidad (6:10–7:30) · Escena s3

**[s3, beat 1 — scripts en lugar de clicks]**

> "La simulación ingenieril debe ser reproducible. Eso significa: scripts
> en lugar de clicks. En ANSYS, APDL; en Abaqus, Python; en nuestro caso,
> las macros de FreeCAD y el archivo de entrada de CalculiX, el punto inp.
> Lo que se puede repetir, se puede auditar."

**[s3, beat 2 — control de versiones]**

> "Segundo: control de versiones. Guarde los archivos de entrada en Git,
> no solo los PDF de resultados. El modelo es el código fuente de su
> análisis."

**[s3, beat 3 — parámetros explícitos]**

> "Tercero: parámetros explícitos. No use valores por defecto sin
> entenderlos. Cada parámetro debe tener un valor intencional y
> documentado. Así, en seis meses, el análisis sigue siendo suyo."

---

## Bloque 5 — IA en simulación: 3 tecnologías (7:30–9:40) · Escena s4

**[s4, beat 1 — modelos surrogados]**

> "Pasemos al panorama de la inteligencia artificial. La simulación
> tradicional tiene tres cuellos de botella: costo computacional — horas o
> días por análisis; exploración del espacio de diseño — cientos de
> simulaciones para optimizar; y conocimiento experto — años de práctica
> para configurar bien un modelo. La IA ataca los tres frentes."

**[s4, beat 2 — PINNs]**

> "Primera tecnología: los modelos surrogados. Un proceso gaussiano o una
> red neuronal aprende la relación entrada-salida de su simulador: usted
> corre quinientas simulaciones, entrena el modelo, y luego predice en
> menos de un milisegundo lo que antes tomaba horas. Segunda: las redes
> informadas por la física, las PINNs, que incorporan la ecuación
> diferencial directamente en la función de pérdida — L igual a L de datos
> más lambda por L de la PDE. La red no solo aprende de datos: obedece la
> física. No requiere malla y sirve para problemas inversos."

**[s4, beat 3 — ROM con deep learning]**

> "Tercera: la reducción de modelos con aprendizaje profundo. POD más red
> neuronal comprime un modelo de millones de grados de libertad a unos
> cientos, y eso permite gemelos digitales que corren en tiempo real, como
> el de la pantalla de la portada. En aeroespacial y automotriz esto ya es
> industria."

---

## Bloque 6 — Qué significa para el ingeniero (9:40–11:00) · Escena s5

**[s5, beats 1 a 4 — las 4 lecciones]**

> "¿Y qué significa esto para usted? Cuatro cosas. Primera: la IA no
> reemplaza el criterio ingenieril — un surrogate entrenado con datos de
> mala calidad produce predicciones malas a alta velocidad. Segunda: la
> verificación y la validación aplican también a los modelos de IA: ¿con
> qué datos se entrenó? ¿Cuál es el dominio de validez? ¿Respeta las leyes
> físicas? Tercera: la habilidad más valiosa será formular buenas
> preguntas — la IA acelera la exploración, pero saber qué explorar sigue
> siendo humano. Y cuarta: aprenda los fundamentos. Un ingeniero que
> entiende FEM y fundamentos de aprendizaje automático vale más que uno
> que solo sabe usar software."

---

## Bloque 7 — Cierre (11:00–12:00) · Escena s6

**[s6, beat 1 — ciclo completo + verifica, valida, documenta]**

> "Cerramos el curso con la regla de oro, ahora completa: verifica,
> valida, documenta. Todo resultado de simulación es una hipótesis.
> Compruébela contra una referencia, y déjela por escrito."

**[s6, beat 1 — invitación al proyecto integrador]**

> "Y el cierre es también el inicio: el taller seis es su proyecto
> integrador. Elija una geometría — soporte, ménsula, chasis simple, viga
> con agujeros — bajo carga combinada, y llévela por el ciclo completo:
> modelo simplificado con justificación, convergencia de malla con tres
> mallas y el índice GCI, sensibilidad a más o menos diez por ciento en el
> módulo de Young, y el informe de resultados en siete secciones. Ha sido
> un gusto acompañarlos. Nos vemos en los informes."

---

## Notas de grabación

- **Escena con más beats:** s2 (7 secciones del informe) — avanzar con
  ESPACIO a medida que se narra cada sección.
- **Paleta:** usar paleta 1 (Ingeniería Viva) por defecto. La portada
  (línea de producción + gemelo digital) se ve bien con paletas 1 y 4.
- **Checklist pre-grabación:** F fullscreen · R reiniciar · recorrer →
  todas las escenas (7) · ESPACIO en cada beat · consola sin errores (F12).
- **Recalcar (cámara):** las 5 preguntas del checklist y la regla de oro
  final ("verifica, valida, documenta") son los dos mensajes que deben
  quedar en el estudiante.
