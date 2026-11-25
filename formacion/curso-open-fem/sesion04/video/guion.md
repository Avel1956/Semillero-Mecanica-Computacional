# Guion de Video — Sesión 4: Solver y post-procesamiento

**Curso:** FEM práctico con FreeCAD (6 sesiones)
**Duración objetivo:** ~11-12 minutos
**Formato:** Navegador fullscreen + OBS (cámara PiP ~25% abajo a la derecha)
**Archivo de escenas:** `video/diapositivas.html`

> Convenciones: cada bloque indica la **escena** (s0–s5) y el **beat** (revelado
> con ESPACIO) que debe estar en pantalla. Los tiempos son orientativos para
> la narración. El texto entre comillas es lo que se dice en cámara.

---

## Bloque 1 — Apertura y anclaje (0:00–1:20) · Escena s0

**[s0, beat 1 — la plataforma en el mar, celda crítica en rojo]**

> "En 1991, la plataforma Sleipner A se hundió en el Mar del Norte pocos días
> después de ser instalada. La causa no fue un error de cálculo en el diseño
> conceptual: fue un error en la malla de elementos finitos que subestimó los
> esfuerzos en una celda crítica de concreto. La celda falló, el agua entró, y
> la plataforma se fue a pique. El costo del reemplazo fue de cientos de
> millones de dólares. Esta sesión es sobre eso: el solver resuelve, pero
> leer los resultados — leerlos bien, con escepticismo — es lo que separa a
> un buen análisis de una falsa confianza."

**[s0, beat 1 — título en pantalla]**

> "Bienvenidos a la sesión cuatro del curso práctico de FEM con FreeCAD. Soy
> el profesor Jaime Andrés Vélez, de Ingeniería Mecánica de la Javeriana
> Cali. Hoy veremos el solver y el post-procesamiento: qué hace el software
> cuando aprieta Solve, y por qué debe leer cada número del mapa de colores
> con ojo crítico."

---

## Bloque 2 — El solver (1:20–3:30) · Escena s1

**[s1, beat 1 — tarjeta del solver directo]**

> "Cuando aprieta Solve, el software construye y resuelve el sistema
> [K]{u}={F}: la matriz de rigidez, los desplazamientos nodales y el vector
> de fuerzas. La primera familia de métodos es la directa: eliminación
> gaussiana o factorización LU. Es robusta — si la matriz es no singular,
> siempre encuentra la solución — pero cuesta del orden de N al cubo. Es
> ideal para modelos de menos de quinientos mil grados de libertad, que es
> el rango de este curso."

**[s1, beat 2 — tarjeta del solver iterativo]**

> "La segunda familia es la iterativa: PCG, GMRES. En lugar de factorizar,
> aproxima la solución por pasos hasta alcanzar una tolerancia. Es más
> rápida en modelos de más de un millón de grados de libertad bien
> condicionados. Pero tiene una debilidad seria: puede no converger. Si la
> matriz está mal condicionada, el método simplemente no encuentra la
> respuesta."

**[s1, beat 3 — tarjeta de Newton–Raphson]**

> "La tercera familia es para problemas no lineales: Newton–Raphson.
> Resuelve en cada iteración [K_T]Δu = R, con la rigidez tangente evaluada
> en el estado actual. Maneja plasticidad, contacto y grandes deformaciones,
> pero requiere un buen punto inicial y puede diverger. En la práctica de
> hoy usaremos análisis lineal, así que no se preocupe por esto todavía."

**[s1, beat 3 — consejo en pantalla]**

> "En FreeCAD, CalculiX resuelve con solver directo, SPOOLES o PARDISO. Es
> la opción segura: para nuestros modelos, converge siempre que el modelo
> esté bien planteado."

---

## Bloque 3 — La singularidad de la esquina entrante (3:30–6:10) · Escena s2

**[s2, beat 1 — el perfil en L]**

> "Vamos al corazón de la sesión: la práctica de hoy es un soporte en L, una
> ménsula de acero de 150 por 80 por 10 milímetros, empotrada por el brazo
> corto y cargada con mil newtons hacia abajo en el extremo del brazo largo.
> Observe la esquina interior: es una esquina entrante de noventa grados."

**[s2, beat 2 — primera malla, σ = 300 MPa]**

> "En esa esquina, la teoría elástica predice que el esfuerzo tiende a
> infinito en el punto exacto del vértice. El FEM no puede representar un
> infinito: aproxima. Con una malla de cinco milímetros, el pico de von
> Mises reporta unos 300 megapascales. Fíjese que el desplazamiento del
> extremo ya aparece: alrededor de 0.34 milímetros, del orden de décimas."

**[s2, beat 3 — malla de 2.5 mm, σ = 450 MPa]**

> "Ahora refine la malla a 2.5 milímetros. El pico sube a unos 450
> megapascales. Y el desplazamiento baja apenas a 0.31 milímetros: se está
> estabilizando."

**[s2, beat 4 — malla de 1.25 mm, σ = 650 MPa]**

> "Refine otra vez, a 1.25 milímetros: el pico salta a unos 650 megapascales,
> mientras el desplazamiento se queda en 0.30. Esta es la lección: el
> esfuerzo en la esquina entrante no converge. Refinar la malla no acerca el
> pico a ningún valor verdadero — lo hace crecer sin límite. Y esto no
> significa que la pieza vaya a fallar: es un artefacto matemático del
> vértice, una singularidad numérica. La guía lo dice en el capítulo 4.4.1."

---

## Bloque 4 — Qué hacer: el hot-spot a 2 mm (6:10–7:40) · Escena s3

**[s3, beat 1 — flecha al punto a 2 mm de la esquina]**

> "Entonces, ¿qué hacemos? La regla es simple: no evalúe el esfuerzo en el
> punto singular. Evalúe a una distancia característica — uno o dos
> milímetros de la esquina — donde el campo de esfuerzos ya es regular y el
> valor converge con la malla. Es el método conocido como hot-spot stress,
> usado en recipientes a presión y uniones soldadas."

**[s3, beat 2 — valor estable]**

> "A dos milímetros de la esquina, el esfuerzo queda en el rango de 150 a 200
> megapascales, y lo más importante: apenas cambia entre mallas. Ese es el
> valor que se reporta. El desplazamiento — que sí converge — nos da el
> orden de magnitud de la deformación: décimas de milímetro."

---

## Bloque 5 — Tipos de esfuerzo (7:40–9:30) · Escena s4

**[s4, beat 1 — von Mises]**

> "Tercer tema del post-proceso: ¿qué esfuerzo reportar? Von Mises es la
> energía de distorsión: es el criterio de fluencia para metales dúctiles
> como el acero estructural. Es el que usamos por defecto, y está bien para
> acero."

**[s4, beat 2 — Tresca]**

> "Tresca es el esfuerzo cortante máximo: un criterio conservador
> alternativo. Si el problema es de corte dominante, o si quiere el margen
> más prudente en una certificación, Tresca es su aliado."

**[s4, beat 3 — principal máxima y mínima]**

> "La principal máxima, sigma uno, es la tracción máxima: es el criterio
> para materiales frágiles como la fundición gris o las cerámicas, que
> fallan por tracción y no por fluencia. La principal mínima, sigma tres, se
> usa para evaluar compresión y pandeo local. Y cuando la dirección de falla
> es conocida, se reporta la componente normal direccional. El error típico
> del principiante está aquí, en rojo: asumir que von Mises mayor que el
> límite de fluencia implica falla — sin verificar si el pico es una
> singularidad numérica. Recuerde el ejercicio: 650 megapascales en la
> esquina no significaban que el soporte fallara."

---

## Bloque 6 — La práctica y el taller 4 (9:30–10:50) · Referencia s2/s3

**[s2, beat 1 — el soporte en L]**

> "En la práctica guiada de esta sesión usted repetirá exactamente lo que
> acabo de mostrar: construirá el soporte en L en FreeCAD — un box de 150
> por 80 por 10, recortado con un booleano para dejar la L — lo empotrará
> por la cara del brazo corto, aplicará los mil newtons, y correrá tres
> mallas: cinco, dos y medio, y uno punto veinticinco milímetros. Anote el
> pico de von Mises en cada una: verá que crece. Anote el desplazamiento:
> verá que se estabiliza. Y luego lea el esfuerzo a dos milímetros de la
> esquina: verá que es estable."

**[s3, beat 2 — el hot-spot]**

> "El taller cuatro va un paso más allá: el efecto del radio de acuerdo.
> Simulará la esquina aguda con tres mallas, documentando que el pico no
> converge. Luego añadirá un redondeo de cinco milímetros con Part Fillet, y
> repetirá las tres mallas: ahora el pico sí converge, porque el radio
> elimina la singularidad. Además comparará von Mises contra la principal
> máxima en el punto crítico, y discutirá qué criterio usaría para acero
> dúctil y cuál para fundición gris. Todo está en el archivo
> ejercicio_paso_a_paso y en taller.html, con la rúbrica de cien puntos."

---

## Bloque 7 — Cierre (10:50–11:50) · Escena s5

**[s5, beat 1 — glow de cierre]**

> "Cierro con la frase de la sesión: el desplazamiento converge, el esfuerzo
> sospecha, el pico singular acusa. Cada número que saque del post-proceso
> debe pasar por una pregunta: ¿esto es física, o es la malla? Lea los
> resultados como un escéptico — es la única forma de que la simulación le
> sirva para decidir."

> "Completen el taller cuatro antes de la próxima sesión, donde entraremos
> en el capítulo de errores comunes y en la verificación y validación formal
> con el índice de convergencia de malla, el GCI. Allí convertiremos en
> cuantitativo lo que hoy vimos cualitativamente. Nos vemos."

---

## Notas de grabación

- **Escena con más beats:** s2 (5 beats: perfil + 3 refinamientos + lección)
  — avanzar con ESPACIO a medida que se narra cada malla; el salto de σ_pico
  debe ser visible (300 → 450 → 650 MPa en rojo).
- **Paleta:** usar paleta 1 (Ingeniería Viva) por defecto. Si el color del
  tema lo exige, probar 2-5.
- **Checklist pre-grabación:** F fullscreen · R reiniciar · recorrer → todas
  las escenas · ESPACIO en cada beat · consola sin errores (F12).
- **Recalcar (cámara):** (1) el esfuerzo en la esquina entrante NO converge;
  (2) se evalúa a 1-2 mm (hot-spot); (3) von Mises > σy no es falla si el
  pico es una singularidad. Estos tres puntos deben quedar en el estudiante.
- **Dato extra:** mencionar que los valores (300/450/650 MPa, 0.30-0.34 mm)
  son ilustrativos; lo que importa es la tendencia — el pico sube, δ se
  estabiliza.
