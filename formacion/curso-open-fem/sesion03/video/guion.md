# Guion de Video — Sesión 3: Pre-procesamiento: geometría, material y malla

**Curso:** FEM práctico con FreeCAD (6 sesiones)
**Duración objetivo:** ~11 minutos
**Formato:** Navegador fullscreen + OBS (cámara PiP ~25% abajo a la derecha)
**Archivo de escenas:** `video/diapositivas.html`

> Convenciones: cada bloque indica la **escena** (s0–s5) y el **beat** (revelado
> con ESPACIO) que debe estar en pantalla. Los tiempos son orientativos para
> la narración. El texto entre comillas es lo que se dice en cámara.

---

## Bloque 1 — Apertura y anclaje (0:00–1:40) · Escena s0

**[s0, beat 1 — el ala del avión con remaches]**

> "Miren el ala de un avión: está llena de agujeros — remaches, inspección,
> drenaje. Y es precisamente ahí, en esos agujeros, donde nacen las grietas y
> las fallas de fatiga. No es casualidad: un agujero concentra el esfuerzo. En
> esta sesión vamos a aprender a tratar bien esos detalles: a decidir qué se
> elimina de la geometría, qué se conserva, qué propiedades de material se
> usan, y qué malla se construye. Eso, en su conjunto, se llama
> pre-procesamiento — y consume el sesenta o setenta por ciento del tiempo de
> toda simulación profesional."

**[s0, beat 1 — título en pantalla]**

> "Bienvenidos al curso práctico de FEM con FreeCAD. Soy el profesor Jaime
> Andrés Vélez, de Ingeniería Mecánica de la Javeriana Cali. Sesión tres:
> pre-procesamiento — geometría, material y malla."

---

## Bloque 2 — Por qué el pre-procesamiento manda (1:40–3:00) · Escena s1

**[s1, beat 1 — columna eliminar]**

> "La guía que acompaña este curso lo dice sin rodeos: el pre-procesamiento
> consume típicamente el sesenta a setenta por ciento del tiempo de una
> simulación, y es donde se toman las decisiones que determinan la calidad del
> resultado. No es trabajo administrativo: es ingeniería. Empecemos por la
> geometría, capítulo cuatro punto dos punto uno: simplificar con criterio."

**[s1, beat 2 — columna conservar]**

> "¿Qué se elimina casi siempre? Las roscas de tornillos — se modelan como
> cilindros o conectores; los redondeos y chaflanes pequeños, si no están en
> zona de alta tensión; los logotipos, grabados y texturas; y los agujeros no
> estructurales, de drenaje o accesorios sin carga. Pero ojo: lo que se
> CONSERVA siempre son los cambios bruscos de sección — concentradores de
> esfuerzo; los agujeros en zonas de alta tensión; las superficies de contacto;
> y los filetes y radios en zonas críticas."

**[s1, beat 3 — cita de St. Venant]**

> "La regla que gobierna esta decisión es la de Saint-Venant: los detalles
> geométricos solo afectan localmente. Si la zona de interés está lejos de un
> detalle que eliminó, el error es despreciable. La pregunta no es '¿puedo
> eliminarlo?', sino '¿está lejos de mi zona de interés?'."

---

## Bloque 3 — El material con trazabilidad (3:00–5:00) · Escena s2

**[s2, beat 1 — tabla animada]**

> "Segunda decisión: el material, capítulo cuatro punto dos punto dos. Las
> propiedades deben tener trazabilidad: de dónde salió cada valor, de qué
> norma, de qué ensayo. El acero estructural tiene un módulo de Young entre
> doscientos y doscientos diez gigapascales, coeficiente de Poisson cero coma
> treinta, densidad siete mil ochocientos cincuenta kilogramos por metro
> cúbico. El aluminio: sesenta y ocho a setenta y dos gigapascales, cero coma
> treinta y tres, dos mil setecientos. La fundición gris: ochenta a ciento
> cuarenta gigapascales, cero coma veintiséis — y un comportamiento frágil al
> que hay que respetar."

**[s2, beat 2 — warning del E nominal]**

> "Y aquí está el error frecuente que la guía advierte: usar el E nominal del
> acero, doscientos gigapascales, cuando la norma especifica un rango de ciento
> noventa a doscientos diez. En análisis de pandeo o de frecuencias naturales,
> esa diferencia es crítica. E entra directamente en la rigidez: un cinco por
> ciento de error en E es un cinco por ciento de error en desplazamientos."

---

## Bloque 4 — Tipos de elemento y reglas de mallado (5:00–7:30) · Escena s3

**[s3, beat 1 — las tres tarjetas]**

> "Tercera decisión, y la más técnica: la malla, el corazón del FEM — capítulo
> cuatro punto dos punto tres. El elemento más común en mallas automáticas es
> el tetraedro lineal, TET4. Cuidado: es demasiado rígido, subestima los
> esfuerzos. El TET10, de segundo orden, es el buen compromiso: precisión
> razonable con mallas automáticas, y es el estándar para geometría
> tridimensional compleja. Y cuando la geometría se puede barrer, el hexaedro
> HEX8 — o el HEX20, de segundo orden — da la máxima precisión."

**[s3, beat 2 — regla del espesor]**

> "Con el elemento elegido, seis reglas prácticas. Primera: mínimo dos o tres
> elementos a través del espesor en paredes delgadas modeladas con sólidos.
> Si su pared de cinco milímetros tiene un solo elemento en el espesor, está
> mal resuelta la flexión."

**[s3, beat 3 — curvatura y transición]**

> "Segunda: mínimo cuatro o cinco elementos en un radio de noventa grados,
> para capturar la curvatura. Tercera: transición suave — el tamaño de
> elemento no debe cambiar más del doble entre vecinos. Y las reglas cuatro,
> cinco y seis las verán en la presentación: refinar donde hay gradientes
> altos, evitar elementos distorsionados, y chequear la calidad de la malla
> antes de resolver."

---

## Bloque 5 — La placa con agujero (7:30–10:00) · Escena s4

**[s4, beat 1 — placa, agujero y cargas]**

> "Ahora la práctica guiada: una placa de acero de doscientos por cien por
> cinco milímetros, con un agujero central de veinte milímetros de diámetro,
> sometida a tracción uniaxial de diez megapascales. La fuerza equivalente es
> diez megapascales por el área, cien por cinco: cinco mil newtons. En
> FreeCAD: caja, cilindro, resta booleana, material acero, empotramiento en un
> extremo y fuerza de cinco mil newtons en el otro."

**[s4, beat 2 — el flujo de fuerzas se comprime]**

> "Miren lo que pasa con las líneas de flujo de fuerza: al llegar al agujero,
> se comprimen, se aprietan contra el borde. Donde las líneas se juntan, el
> esfuerzo crece. Ese es el mecanismo físico de la concentración de esfuerzos:
> la carga tiene que rodear el agujero y pasa por un cuello cada vez más
> estrecho. El pico vive en el borde del agujero — y ahí, exactamente ahí,
> debe ir la malla fina."

**[s4, beat 3 — valores esperados]**

> "¿Cuánto vale el pico? La teoría de Peterson, para una placa finita con
> relación diámetro entre ancho de cero coma dos, da un factor de
> concentración de unos dos coma cinco. El esfuerzo nominal es diez
> megapascales, así que el esfuerzo máximo esperado es del orden de
> veinticinco megapascales. La verificación del modelo: el Kt numérico, el
> pico del FEM dividido entre el nominal, debe dar un error menor del cinco
> por ciento con malla fina local. Un detalle importante: para la misma
> placa infinita, el Kt sería tres — la finitud de la placa y el soporte del
> material vecino lo reducen. Y recuerden: los TET10 convergen mejor que los
> TET4."

**[s4, beat 4 — verificación]**

> "Entonces el flujo de la práctica es: malla gruesa, media y fina, siempre
> con refinamiento local de uno o dos milímetros en las aristas del agujero;
> ejecutar CalculiX; leer el von Mises máximo; y comparar contra Peterson. Si
> el pico cambia poco al refinar, la malla local es suficiente."

---

## Bloque 6 — Cierre (10:00–11:30) · Escena s5

**[s5, beat 1 — la malla es el corazón del FEM]**

> "Recuerden la frase de esta sesión: la malla es el corazón del FEM — pero
> la geometría y el material son la sangre que le llega. Las tres decisiones
> del pre-procesamiento determinan la calidad del resultado antes de que el
> solver escriba una sola línea."

> "Completen el taller tres: el estudio del concentrador de esfuerzos. Varien
> el diámetro del agujero — diez, veinte y treinta milímetros — y comparen el
> Kt numérico con Peterson; comparen malla gruesa contra malla fina alrededor
> del agujero; y reflexionen sobre por qué la placa infinita da un Kt de tres.
> En la próxima sesión: el solver y el post-procesamiento — qué hace
> CalculiX cuando aprieta 'Solve', y cómo leer los resultados con
> escepticismo. Nos vemos."

---

## Notas de grabación

- **Escena con más beats:** s4 (4 beats: geometría, flujo, valores, verificación)
  — avanzar con ESPACIO a medida que se narra.
- **Anclaje:** el ala con remaches de la portada; recalcar en cámara que las
  grietas y fallas nacen en los agujeros (concentración de esfuerzos).
- **Paleta:** usar paleta 1 (Ingeniería Viva) por defecto. Si el color del
  tema lo exige, probar 2-5.
- **Checklist pre-grabación:** F fullscreen · R reiniciar · recorrer → todas
  las escenas · ESPACIO en cada beat · consola sin errores (F12).
- **Recalcar (cámara):** la regla de St. Venant, el error del E nominal y las
  seis reglas de mallado — y la frase "la malla es el corazón del FEM".
