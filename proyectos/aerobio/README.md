# AeroBio — De las aves al vuelo del futuro

**Proyecto integrador del semillero** · Líneas: las cinco · **Estado:** modelado y simulación terminados; fabricación y ensayo pendientes

Pregunta de ingeniería: **¿cómo diseñar un ala más liviana sin que se rompa?** El proyecto transfiere el principio estructural de los huesos de las aves planeadoras (paredes delgadas con refuerzos internos y material lejos del eje neutro) a un ala fabricable por impresión 3D, y la compara con un ala maciza de perfil NACA 4412.

## Papel de cada línea

| Línea | Aporte |
|---|---|
| Biomecánica | Revisión de la biomecánica del vuelo del cóndor andino y definición del perfil bioinspirado |
| Formación | Simulación estática (FreeCAD/CalculiX o SolidWorks): mapa de esfuerzos y deformaciones |
| Inteligencia artificial | Aligeramiento de la estructura interna (optimización topológica) |
| Modelado físico | Fabricación de los especímenes en impresión 3D (PLA / TPU) |
| Control | Banco de ensayo con celdas de carga y galgas (Arduino/ESP32) para validar la simulación |

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
