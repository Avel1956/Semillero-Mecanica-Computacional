# Guion de Video — Sesión 1: ¿Qué es simular? Del fenómeno al modelo

**Curso:** FEM práctico con FreeCAD (6 sesiones)
**Duración objetivo:** ~11 minutos
**Formato:** Navegador fullscreen + OBS (cámara PiP ~25% abajo a la derecha)
**Archivo de escenas:** `video/diapositivas.html`

> Convenciones: cada bloque indica la **escena** (s0–s5) y el **beat** (revelado
> con ESPACIO) que debe estar en pantalla. Los tiempos son orientativos para
> la narración. El texto entre comillas es lo que se dice en cámara.

---

## Bloque 1 — Apertura y anclaje (0:00–1:10) · Escena s0

**[s0, beat 1 — el puente oscila]**

> "En 1940, el puente de Tacoma Narrows empezó a oscilar bajo un viento
> moderado. Los ingenieros que lo diseñaron tenían modelos estáticos muy
> cuidadosos — pero ningún modelo capturaba los efectos aeroelásticos que
> ese día destruyeron el puente. No fue un error de cálculo: fue un error
> de *modelo*. Esta sesión es sobre eso: qué significa simular, qué se gana,
> qué se pierde, y por qué ningún resultado de simulación merece confianza
> ciega."

**[s0, beat 1 — título en pantalla]**

> "Bienvenidos al curso práctico de FEM con FreeCAD. Soy el profesor Jaime
> Andrés Vélez, de Ingeniería Mecánica de la Javeriana Cali. Esta es la
> sesión uno: del fenómeno físico al modelo matemático."

---

## Bloque 2 — Los tres pilares (1:10–3:20) · Escena s1

**[s1, beat 1 — teoría y experimento aparecen]**

> "La ingeniería históricamente descansó sobre dos pilares. El primero, la
> teoría: modelos matemáticos, ecuaciones, generalizables y exactas dentro
> de sus supuestos — pero solo resolubles para geometrías simples. El
> segundo, el experimento: ensayos, prototipos, la realidad física completa
> — pero costosa, lenta, y a veces imposible."

**[s1, beat 2 — aparece la simulación]**

> "Desde hace cinco décadas existe un tercer pilar: la simulación
> computacional. Rápida, exploratoria, repetible. Pero con una debilidad
> fundamental: su resultado depende por completo de la calidad del modelo.
> Simular no reemplaza la teoría ni el experimento: los complementa."

**[s1, beat 3 — tríada virtuosa]**

> "La tríada virtuosa es teoría, simulación, experimento, validación — y de
> vuelta a teoría refinada. Un ingeniero que domina los tres pilares toma
> decisiones que ninguno de ellos por separado podría justificar."

---

## Bloque 3 — Para qué simular y el costo de hacerlo mal (3:20–5:00) · Escena s0/s2

**[s0, beat 1 — puente de nuevo]**

> "¿Para qué simulamos? Para predecir antes de construir, para optimizar
> sin fabricar prototipos, para diagnosticar fallas, para explorar
> escenarios peligrosos, y para certificar que un diseño cumple normas."

> "Y el costo de hacerlo mal es real. Tacoma Narrows en 1940. La plataforma
> Sleipner A en 1991: un error en la malla de elementos finitos subestimó
> los esfuerzos en una celda crítica, y la plataforma se hundió. Una mala
> simulación es peor que ninguna: genera falsa confianza."

---

## Bloque 4 — Modelar es simplificar: la brecha de modelado (5:00–7:20) · Escena s2

**[s2, beat 1 — la viga real]**

> "El corazón de la simulación es el modelado. Modelar es elegir qué
> simplificar. Miremos una viga en voladizo. La realidad: micro-defectos,
> soldadura imperfecta, rugosidad, variaciones del módulo de Young lote a
> lote, vibraciones del entorno. Todo eso existe."

**[s2, beat 2 — la viga ideal y la brecha]**

> "El modelo ingenieril: sección constante, material homogéneo e isótropo,
> empotramiento perfecto, carga puntual ideal, pequeñas deformaciones. La
> diferencia entre ambos es la brecha de modelado. La pregunta no es si un
> modelo es correcto o incorrecto — es si resulta útil para el propósito.
> Un buen ingeniero conoce su brecha de modelado y la declara."

---

## Bloque 5 — Ecuaciones y condiciones de frontera (7:20–9:20) · Escena s3

**[s3, beat 1 — tipos de frontera]**

> "Cada fenómeno tiene ecuaciones que lo gobiernan. En elasticidad lineal,
> la ecuación de equilibrio: divergencia de sigma más fuerzas de volumen
> igual a cero. No hay que memorizarla: hay que saber que existe y qué
> significa. La variable primaria son los desplazamientos."

> "Las ecuaciones diferenciales tienen infinitas soluciones. Las condiciones
> de frontera seleccionan la suya: Dirichlet fija el valor — un
> empotramiento; Neumann fija el flujo — una presión; Robin es una mezcla
> — un soporte elástico. Las condiciones de frontera son la parte más
> importante del modelo y la fuente más frecuente de errores."

**[s3, beat 2 — la trampa]**

> "Y la trampa más común: un empotramiento perfecto no existe en la
> realidad. El concreto cede, los pernos se deforman, hay fricción. Hay que
> preguntarse siempre: ¿qué tan sensible es mi resultado a cómo modelo los
> apoyos?"

---

## Bloque 6 — El flujo de trabajo y el plan de práctica (9:20–10:40) · Escena s4

**[s4, beats 1 a 4 — pasos que se revelan]**

> "El flujo de trabajo FEM en FreeCAD es siempre el mismo. Primero, el
> fenómeno: cargas, apoyos, material. Segundo, el modelo matemático:
> ecuaciones, condiciones de frontera y modelo constitutivo. Tercero, la
> discretización: la malla de elementos finitos. Cuarto, resolver: en
> nuestro caso, CalculiX monta y resuelve el sistema de ecuaciones
> [K]{u}={F}."

**[s4, beat 5 — validación]**

> "Y quinto: resultados y validación. ¿Tiene sentido físico? ¿Converge al
> refinar la malla? ¿Compara con la solución analítica? En la práctica de
> esta sesión modelaremos una viga en voladizo de 200 por 20 por 10
> milímetros con 100 newtons en el extremo: la solución analítica nos dice
> que debe deflectarse 0.76 milímetros con 60 megapascales máximos. Si el
> FEM no reproduce eso, algo está mal en el modelo."

---

## Bloque 7 — Cierre (10:40–11:30) · Escena s5

**[s5, beat 1 — regla de oro]**

> "Recuerden la regla de oro de la guía: traten cada resultado de
> simulación como una hipótesis que debe verificarse, no como una verdad
> revelada."

> "Completen el taller uno: modelen la viga, comparen con la solución
> analítica, y exploren la sensibilidad al módulo de Young y a la carga.
> En la próxima sesión entraremos en la idea del FEM: discretizar para
> resolver, con la barra en tracción. Nos vemos."

---

## Notas de grabación

- **Escena con más beats:** s4 (5 pasos del flujo) — avanzar con ESPACIO a
  medida que se narra cada paso.
- **Paleta:** usar paleta 1 (Ingeniería Viva) por defecto. Si el color del
  tema lo exige, probar 2-5.
- **Checklist pre-grabación:** F fullscreen · R reiniciar · recorrer → todas
  las escenas · ESPACIO en cada beat · consola sin errores (F12).
- **Recalcar (cámara):** la brecha de modelado y la regla de oro son los dos
  conceptos que deben quedar en el estudiante.
