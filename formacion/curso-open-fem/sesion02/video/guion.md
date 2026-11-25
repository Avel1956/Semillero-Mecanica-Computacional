# Guion de Video — Sesión 2: Métodos numéricos y la idea del FEM

**Curso:** FEM práctico con FreeCAD (6 sesiones)
**Duración objetivo:** ~11 minutos
**Formato:** Navegador fullscreen + OBS (cámara PiP ~25% abajo a la derecha)
**Archivo de escenas:** `video/diapositivas.html`

> Convenciones: cada bloque indica la **escena** (s0–s5) y el **beat** (revelado
> con ESPACIO) que debe estar en pantalla. Los tiempos son orientativos para
> la narración. El texto entre comillas es lo que se dice en cámara.

---

## Bloque 1 — Apertura y anclaje (0:00–1:15) · Escena s0

**[s0, beat 1 — la barra en la prensa de tracción]**

> "En la sesión anterior simulamos una viga en voladizo y la verificamos contra
> la fórmula de flexión. Hoy vamos a responder la pregunta que quedó abierta:
> ¿qué hace el método de elementos finitos por dentro? ¿Qué significa eso de
> *discretizar*? Y para responderlo usaremos la pieza más simple que existe en
> mecánica: una barra de acero en la prensa de tracción, como la que ve aquí."

**[s0, beat 1 — título en pantalla]**

> "Bienvenidos a la sesión dos del curso práctico de FEM con FreeCAD. Soy el
> profesor Jaime Andrés Vélez, de Ingeniería Mecánica de la Javeriana Cali.
> Hoy: métodos numéricos y la idea del FEM — discretizar para resolver."

---

## Bloque 2 — ¿Por qué métodos numéricos? (1:15–3:00) · Escena s1

**[s1, beat 1 — la ecuación gobernante]**

> "Toda la física de la ingeniería se escribe con ecuaciones diferenciales
> parciales: el equilibrio de una pieza, la conducción del calor, el flujo de
> un fluido. Estas EDP tienen una propiedad incómoda: solo admiten solución
> analítica — una fórmula cerrada — para geometrías y condiciones de frontera
> muy simples: una viga, una placa, una esfera."

**[s1, beat 2 — no hay fórmula para la pieza real]**

> "Ahora mire su pieza real: agujeros, chaflanes, cambios de sección, cargas
> combinadas. Para esa pieza la fórmula cerrada no existe. No es que sea
> difícil de encontrar: matemáticamente no existe. Esa es la razón de ser de
> los métodos numéricos."

**[s1, beat 3 — aproximamos]**

> "La salida es aproximar: discretizar el dominio — partirlo en pedazos — y
> resolver con cómputo un sistema de ecuaciones algebraicas. Aproximamos, sí,
> pero con un error que podemos medir y controlar. De eso trata todo el curso."

---

## Bloque 3 — Tres familias: FDM, FVM y FEM (3:00–5:00) · Escena s2

**[s2, beat 1 — FDM]**

> "Hay tres familias clásicas de métodos numéricos. La primera, diferencias
> finitas, FDM: reemplaza las derivadas por diferencias entre puntos de una
> malla regular. Es simple, eficiente en dominios rectangulares, y domina los
> problemas de calor unidimensionales y bidimensionales. Pero sufre con
> geometrías complejas."

**[s2, beat 2 — FVM]**

> "La segunda, volúmenes finitos, FVM: divide el dominio en volúmenes de
> control y aplica leyes de conservación en cada uno. Su gran fortaleza es que
> la conservación queda garantizada por construcción, y por eso domina la
> mecánica de fluidos computacional: Fluent, CFX, OpenFOAM."

**[s2, beat 3 — FEM]**

> "La tercera, y la que protagoniza este curso, elementos finitos, FEM: divide
> el dominio en elementos pequeños y aproxima la solución dentro de cada uno
> con funciones de forma. Maneja geometrías arbitrarias, tiene base matemática
> rigurosa, y es el estándar de la industria estructural: lo usan ANSYS,
> Abaqus y SolidWorks Simulation. Para el ingeniero mecánico, el FEM es su
> herramienta principal."

---

## Bloque 4 — La idea del FEM: discretizar para resolver (5:00–7:30) · Escena s3

**[s3, beat 1 — el dominio continuo]**

> "Veamos la idea central, que la guía resume en cuatro pasos. Primero, el
> problema original: un dominio continuo, descrito por una EDP. El desplaza-
> miento es una función u de x, con infinitos grados de libertad. Una compu-
> tadora no puede trabajar con infinitos valores."

**[s3, beat 2 — elementos]**

> "Paso uno: discretizar. Dividimos el dominio en elementos finitos. Cada
> elemento es un pedazo pequeño y simple de la pieza."

**[s3, beat 3 — nodos]**

> "Los elementos se conectan entre sí por nodos. Y aquí está la clave: las
> incógnitas ya no son la función completa u de x, sino los desplazamientos en
> los nodos: u uno, u dos, hasta u seis. Un número finito de incógnitas."

**[s3, beat 4 — funciones de forma]**

> "Paso dos: la formulación elemental. Dentro de cada elemento aproximamos la
> solución con funciones de forma N sub i: u de x aproximadamente igual a la
> suma de N sub i por u sub i. Cada función de forma vale uno en su nodo y cero
> en los demás. Es un polinomio local, y su grado define el orden del
> elemento: lineal o cuadrático."

**[s3, beat 5 — ensamblaje y solución]**

> "Paso tres: ensamblar. Combinamos las matrices de todos los elementos en un
> sistema global: [K] por {u} igual a {F}. La matriz de rigidez global, el
> vector de desplazamientos nodales — las incógnitas — y el vector de fuerzas.
> Paso cuatro: resolver ese sistema. Eso es exactamente lo que hace CalculiX
> cuando usted aprieta *Run*. Del sistema sale {u}, y de ahí se derivan
> deformaciones y esfuerzos."

---

## Bloque 5 — La barra en tracción (7:30–9:30) · Escena s4

**[s4, beat 1 — geometría y carga]**

> "Apliquemos la idea al problema de la sesión. Una barra de acero de 200 por
> 20 por 10 milímetros, área de 200 milímetros cuadrados, empotrada en un
> extremo y con diez kilonewtons de tracción en el otro."

**[s4, beat 2 — esfuerzo uniforme]**

> "La solución analítica es inmediata. El esfuerzo es fuerza sobre área:
> diez mil newtons sobre doscientos milímetros cuadrados, cincuenta megapas-
> cales. Y gracias al principio de St. Venant, lejos de la cara cargada ese
> esfuerzo es uniforme: el FEM debe reproducir ese valor."

**[s4, beat 3 — alargamiento]**

> "El alargamiento es fuerza por longitud sobre módulo de Young por área:
> casi cero coma cero cinco milímetros. Y la rigidez axial de la barra es de
> doscientos diez mil newtons por milímetro. En la práctica de esta sesión
> usted va a construir esta barra en FreeCAD, paso a paso, y va a verificar
> que el FEM reproduce estos valores con menos de diez por ciento de error."

---

## Bloque 6 — Cierre y taller (9:30–11:00) · Escena s5

**[s5, beat 1 — FEM = discretizar para resolver]**

> "Recuerden la idea de hoy: FEM es discretizar para resolver. Se toma una
> EDP con infinitos grados de libertad, se parte el dominio en elementos, se
> aproxima con funciones de forma, se ensambla y se resuelve [K]{u}={F}. Todo
> lo que veremos en las próximas sesiones — pre-procesamiento, mallado,
> convergencia, errores — es profundizar en estos cuatro pasos."

> "Completen el taller dos: una barra escalonada con dos tramos de sección
> diferente. Predigan el alargamiento total con el modelo de resortes en
> serie — que es, literalmente, el ensamblaje del FEM hecho a mano — y
> compárenlo con la simulación. En la próxima sesión entraremos al pre-proce-
> samiento profesional con una placa con agujero. Nos vemos."

---

## Notas de grabación

- **Escena con más beats:** s3 (5 pasos de la idea del FEM) — avanzar con
  ESPACIO a medida que se narra cada paso; es el corazón de la sesión.
- **Paleta:** usar paleta 1 (Ingeniería Viva) por defecto. Si el color del
  tema lo exige, probar 2-5.
- **Checklist pre-grabación:** F fullscreen · R reiniciar · recorrer → todas
  las escenas · ESPACIO en cada beat · consola sin errores (F12).
- **Recalcar (cámara):** los cuatro pasos del FEM (s3) y el principio de
  St. Venant (s4) son los conceptos que deben quedar en el estudiante.
- **Dato para la narración (s4):** el alargamiento de la barra se dibuja
  exagerado ~300 veces en pantalla para que sea visible; aclararlo si se
  pregunta por qué la deformada "se ve tan grande".
