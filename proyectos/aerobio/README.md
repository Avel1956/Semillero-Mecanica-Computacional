<img src="../../recursos/marca/smc-isotipo.svg" alt="SMC" width="64" align="right">

# AeroBio — De las aves al vuelo del futuro

**Proyecto integrador del semillero** · Líneas: las cinco · **Estado:** modelado y simulación terminados; fabricación y ensayo pendientes

Pregunta de ingeniería: **¿cómo diseñar un ala más liviana sin que se rompa?** El proyecto transfiere el principio estructural de los huesos de las aves planeadoras (paredes delgadas con refuerzos internos y material lejos del eje neutro) a un ala fabricable por impresión 3D, y la compara con un ala maciza de perfil NACA 4412.

## Papel de cada línea

| Línea | Responsable | Aporte |
|---|---|---|
| Biomecánica | Katherin Johanna Arcila Valencia | Biomecánica del vuelo del cóndor andino; modelo CAD del perfil bioinspirado comparado con el NACA 4412 (entrega en STEP/IGES con ficha de parámetros) |
| Formación | Coordina el tutor | Simulación estática (FreeCAD/CalculiX o SolidWorks): mapa de esfuerzos de von Mises y deformaciones |
| Inteligencia artificial | Juanita Prado Valencia | Optimización topológica (SIMP y BESO en Python; SolidWorks como verificación) para reducir la masa interna en torno al 40 %, y malla reticular imprimible |
| Modelado físico (línea líder) | Gabriel Mariño Arcila, con Daniel Enrique Ramírez Marcus | Modelo CAD paramétrico de la familia de alas en SolidWorks (fase 1) y fabricación FDM en PLA y TPU (fase 2) |
| Control | Juan José Zubiria Bedoya | Banco de ensayo con celdas de carga y galgas (Arduino/ESP32) para contrastar la simulación |

En noviembre de 2026 las líneas de IA, Modelado físico y Biomecánica trabajan con un plan de cuatro semanas (costos, actividades y cronograma). Criterio común: la cifra de reducción de masa que se presenta a los estudiantes es la medida en la pieza impresa, no el valor teórico.

## Resultados a noviembre de 2026

Comparación controlada: misma cuerda (120 mm), misma semienvergadura expuesta (180 mm) y mismo bloque de raíz.

| Espécimen | Volumen | Masa en PLA | Error CAD frente al cálculo |
|---|---|---|---|
| Ala NACA 4412 maciza | 225 798 mm³ | 280,0 g | 0,04 % |
| Ala bioinspirada | 67 148 mm³ | 83,3 g | 0,8 % |

Reducción de masa: **70,3 %** con la misma geometría exterior. Próximo paso: imprimir las dos alas y ensayarlas en el banco para contrastar la simulación con datos experimentales.

## Documentación

- [`docs/propuesta-aerobio.pdf`](docs/propuesta-aerobio.pdf) — propuesta del proyecto y metodología del taller para colegios.
- [`docs/analisis-biomecanico-aerobio.pdf`](docs/analisis-biomecanico-aerobio.pdf) — análisis biomecánico.
- Divulgación: [charla en el Colegio Militar General Agustín Codazzi (7 nov. 2026)](../../divulgacion/2026-11-07-charla-cmgac/README.md).
