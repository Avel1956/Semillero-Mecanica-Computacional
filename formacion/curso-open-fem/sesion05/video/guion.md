# Guion de Video — Sesión 5: Errores comunes + Verificación y Validación

**Curso:** FEM práctico con FreeCAD (6 sesiones)
**Duración objetivo:** ~11-12 minutos
**Formato:** Navegador fullscreen + OBS (cámara PiP ~25% abajo a la derecha)
**Archivo de escenas:** `video/diapositivas.html`

> Convenciones: cada bloque indica la **escena** (s0–s6) y el **beat** (revelado
> con ESPACIO) que debe estar en pantalla. Los tiempos son orientativos para
> la narración. El texto entre comillas es lo que se dice en cámara.

---

## Bloque 1 — Apertura y anclaje (0:00–1:00) · Escena s0

**[s0, beat 1 — la probeta en la prensa]**

> "En un laboratorio de materiales, la probeta va en la prensa, se estira y se
> mide: desplazamiento contra fuerza. Ese informe de ensayo es la verdad física.
> Cuando usted corre un modelo en FreeCAD y CalculiX, está contando la misma
> historia con otras palabras. Si las dos historias no coinciden, algo está mal.
> Esta sesión es sobre eso: los errores que hacen que no coincidan, y los dos
> procesos que garantizan que sí: la verificación y la validación."

**[s0, beat 1 — título en pantalla]**

> "Bienvenidos al curso práctico de FEM con FreeCAD. Soy el profesor Jaime
> Andrés Vélez, de Ingeniería Mecánica de la Javeriana Cali. Esta es la sesión
> cinco: errores comunes, verificación y validación — los caps. 5 y 6 de la guía."

---

## Bloque 2 — Los 10 errores (1:00–3:30) · Escena s1

**[s1, beats 1 a 3 — aparecen CF, mallado y material en rojo]**

> "El capítulo cinco de la guía clasifica los errores de simulación en tres
> categorías: errores de modelado, cuando la física del modelo no representa el
> fenómeno; errores de discretización, cuando la malla o el tipo de elemento
> introducen error numérico; y errores de usuario, cuando configuramos mal el
> software o interpretamos mal los resultados."

> "Y la frecuencia no miente. El error más común, con el 28 por ciento de los
> casos, son las condiciones de frontera incorrectas: cargas mal dirigidas,
> apoyos que no restringen un mecanismo. El segundo, con 22 por ciento, es el
> mallado inadecuado: resultados que cambian al refinar. El tercero, con 15 por
> ciento, son las propiedades de material erróneas. Entre los tres suman el 65
> por ciento de los errores."

**[s1, beats 4 a 10 — el resto de la lista]**

> "Completan la lista: el tipo de elemento inapropiado, diez por ciento;
> contactos mal definidos, ocho; interpretación errónea de resultados, siete;
> unidades inconsistentes, cinco; simplificaciones excesivas, tres; no verificar
> convergencia, dos; e ignorar no linealidades relevantes, uno. Fíjense en el
> error nueve: no verificar convergencia es de los menos frecuentes y, sin
> embargo, de los más costosos — porque genera falsa confianza. Hoy lo
> corregimos con el GCI."

---

## Bloque 3 — Verificación vs validación (3:30–5:00) · Escena s2

**[s2, beat 1 — tarjeta verificación]**

> "El capítulo seis abre con dos conceptos que suelen confundirse. La
> verificación responde a la pregunta: ¿estamos resolviendo bien las
> ecuaciones? Es un problema matemático: comparamos el código contra una
> solución analítica, un benchmark o el método de las soluciones fabricadas.
> Si el código falla aquí, todo lo demás es sospechoso."

**[s2, beat 2 — tarjeta validación + cita de Roache]**

> "La validación responde a la otra pregunta: ¿estamos resolviendo las
> ecuaciones correctas? Es un problema físico: comparamos contra datos
> experimentales. Patrick Roache lo resumió en una frase: verification, are we
> solving the equations right? Validation, are we solving the right equations?
> El orden importa: primero se verifica, después se valida. No tiene sentido
> validar contra experimentos un modelo que ni siquiera resuelve bien sus
> propias ecuaciones."

---

## Bloque 4 — Convergencia de malla y GCI (5:00–7:00) · Escena s3

**[s3, beat 1 — malla gruesa: 500 elementos]**

> "La herramienta más importante de verificación es la convergencia de malla.
> El procedimiento es siempre el mismo: generamos tres mallas con razón de
> refinamiento de aproximadamente dos — por ejemplo 500, 2000 y 8000 elementos
> — y ejecutamos el mismo problema en las tres. La variable de interés debe
> estabilizarse. En nuestra viga en voladizo, la deflexión del extremo libre."

**[s3, beat 2 — malla media: 2000 elementos]**

> "Con la malla gruesa obtenemos 0.778 milímetros. Al refinar a 2000 elementos,
> baja a 0.765. La solución analítica, recuerden de la sesión uno, es 0.762
> milímetros: la fórmula de la viga en voladizo, PL cúbica sobre tres EI."

**[s3, beat 3 — malla fina: 8000 elementos + fórmula GCI]**

> "Con 8000 elementos llegamos a 0.762: la curva se estabiliza. Pero
> 'se ve estable' no basta: necesitamos una medida. Esa medida es el índice GCI
> — Grid Convergence Index — con su fórmula: GCI igual a F sub s por el valor
> absoluto de épsilon, sobre r a la p menos uno. F sub s es 1.25 para tres
> mallas, épsilon es el cambio relativo entre mallas consecutivas, r es la razón
> de refinamiento y p el orden del elemento, dos para cuadráticos. En nuestro
> estudio: GCI de 0.16 por ciento entre la malla fina y la media, y 0.70 por
> ciento entre la media y la gruesa. El criterio de la guía: menos del cinco por
> ciento para diseño detallado, menos del dos por ciento para certificación.
> Cumplimos con holgura."

---

## Bloque 5 — Validación con experimentos y métricas (7:00–9:00) · Escena s4

**[s4, beat 1 — puntos experimentales vs curva FEM]**

> "Ahora la validación. Superponemos la curva del modelo FEM y los puntos
> experimentales con sus barras de incertidumbre. Una buena validación exige
> tres cosas: datos experimentales de calidad, con incertidumbre conocida y
> condiciones documentadas; múltiples puntos de comparación — no solo el máximo
> —; y métricas cuantitativas."

**[s4, beat 2 — métricas MAE, RMSE, R²]**

> "Las métricas estándar de la guía: el MAE, error absoluto medio, el error
> promedio en las unidades de la variable; el RMSE, raíz del error cuadrático
> medio, que penaliza más los errores grandes; el MAPE, error porcentual
> absoluto medio, fácil de interpretar; y el R cuadrado, la proporción de
> varianza explicada — uno es perfecto. En nuestro ejemplo, un R cuadrado de
> 0.998 y errores del orden de la centésima de milímetro. Si no hay datos
> experimentales, la guía ofrece alternativas: el orden de magnitud de una
> solución analítica, la comparación entre dos códigos, la simetría y los casos
> límite, y el balance de energía."

---

## Bloque 6 — Sensibilidad (9:00–10:20) · Escena s5

**[s5, beat 1 — δ ∝ 1/E: tres puntos]**

> "Último concepto: la sensibilidad. Incluso un modelo validado produce
> resultados inciertos si los parámetros de entrada son inciertos. En problemas
> lineales la sensibilidad es directa: la deflexión es proporcional a uno sobre
> E. Si el módulo real es cinco por ciento menor que el nominal, la deflexión
> crece aproximadamente cinco por ciento. Con nuestros tres puntos: 189
> gigapascales dan 0.847 milímetros, 210 dan 0.762, y 231 dan 0.693."

**[s5, beat 2 — warning de no linealidad]**

> "Pero cuidado: en problemas no lineales la sensibilidad puede amplificarse.
> La guía lo advierte: un cinco por ciento de variación en el límite elástico
> puede producir un treinta por ciento de diferencia en la carga de colapso.
> Por eso la práctica recomendada: incluya barras de error o bandas de
> incertidumbre en sus resultados cuando los presente."

---

## Bloque 7 — Cierre y taller (10:20–11:40) · Escena s6

**[s6, beat 1 — verifica, valida, documenta]**

> "Resumen de la sesión en tres palabras: verifica, valida, documenta.
> Verifique con el GCI sobre tres mallas. Valide contra experimentos con
> métricas, o contra las estrategias de la guía si no los hay. Y documente:
> un resultado sin GCI ni validación es una opinión con colores bonitos."

> "El taller cinco les pide aplicar todo esto a la placa con agujero de la
> sesión tres: el estudio de convergencia con GCI sobre el esfuerzo máximo, la
> validación contra el factor de concentración de esfuerzos de Peterson — unos
> 25 megapascales esperados — y el análisis de sensibilidad al módulo de Young,
> donde el esfuerzo no debe cambiar pero la deflexión sí, proporcional a uno
> sobre E. En la próxima sesión cerramos el curso con el flujo profesional y la
> inteligencia artificial en simulación. Nos vemos."

---

## Notas de grabación

- **Escena con más beats:** s1 (11 beats: título + 10 errores) — avanzar con
  ESPACIO un error por vez; narrar la frecuencia de cada uno sin prisa.
- **Énfasis (cámara):** la cita de Roache (s2) y la fórmula del GCI (s3) son los
  dos conceptos que deben quedar en el estudiante. Repetirlos al cierre.
- **Paleta:** usar paleta 1 (Ingeniería Viva) por defecto. El verde menta del
  tema de la sesión (Esmeralda) se asemeja a la paleta 4 (Bosque) si se desea
  variar; probar 1-4 y elegir una sola para todo el video.
- **Checklist pre-grabación:** F fullscreen · R reiniciar · recorrer → todas
  las escenas · ESPACIO en cada beat · consola sin errores (F12).
- **Recalcar (capítulos de la guía):** cap. 5 (taxonomía y 10 errores), cap. 6.1
  (V vs V), cap. 6.2 (GCI y criterios), cap. 6.3 (métricas y sin experimentos),
  cap. 6.4 (sensibilidad lineal vs no lineal).
