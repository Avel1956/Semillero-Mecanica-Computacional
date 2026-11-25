<img src="../../recursos/marca/smc-isotipo.svg" alt="SMC" width="64" align="right">

# Solver FEM de armaduras 2D/3D (método de rigidez matricial)

**Línea:** Formación · **Estado:** terminado (versión desplegada en Streamlit) · **Periodo:** marzo – mayo de 2026

**Autor del código:** Juan Esteban Navarrete — estudiante vinculado al semillero
**Tutor:** Jaime Andrés Vélez Zea

Repositorio original: [juanes12nava/Python-FEM-Truss-Solver](https://github.com/juanes12nava/Python-FEM-Truss-Solver). La copia en [`codigo/`](codigo/) se incluye con autorización de la licencia MIT del autor ([`codigo/LICENSE`](codigo/LICENSE)), que se conserva sin cambios.

## Qué resuelve

Análisis estático lineal de armaduras planas y espaciales por el método de rigidez matricial:

- desplazamientos nodales, reacciones en los apoyos y fuerzas axiales en las barras;
- esfuerzo axial por elemento y verificación contra el esfuerzo admisible (OK / FAIL);
- varios casos de carga en un mismo modelo;
- detección de estructuras inestables (matriz de rigidez singular);
- gráficas de la estructura y de la deformada en 2D y 3D;
- entrada y salida de datos en Excel, y una interfaz web en Streamlit.

## Estructura del código

| Archivo | Responsabilidad |
|---|---|
| `fem_solver.py` | Núcleo matricial: rigidez de elemento, ensamblaje, condiciones de contorno por eliminación de grados de libertad, solución |
| `fem_postprocess.py` | Esfuerzos, resúmenes, elementos críticos y preparación de la deformada |
| `fem_excel_reader.py` / `fem_excel_writer.py` | Lectura del modelo y exportación de resultados en Excel |
| `fem_plotter.py` / `fem_tables.py` | Gráficas 2D/3D y tablas de resultados |
| `app.py` | Interfaz web (Streamlit) |
| `run_from_excel.py` | Ejecución por consola |
| `examples/demo_2d.xlsx` | Modelo de ejemplo (armadura triangular, dos casos de carga) |

Hojas esperadas en el Excel de entrada: `nodes`, `elements`, `loads`, `supports`, `control` y, opcional, `load_cases`.

## Uso

```bash
cd proyectos/fem-armaduras/codigo
pip install -r requirements.txt
streamlit run app.py
```

## Verificación contra la solución analítica

Ejemplo `demo_2d.xlsx`, caso LC1: armadura triangular con apoyos en (0,0) y (4,0) m, nudo superior en (2,3) m, carga vertical de 10 kN; A = 0,003 m², E = 200 GPa.

| Magnitud | Cálculo manual | Solver | Diferencia |
|---|---|---|---|
| Fuerza en barras inclinadas | P / (2 sen θ) = 6 009,25 N (compresión) | −6 009,25 N | < 0,01 % |
| Fuerza en la barra inferior | 0 N | 0 N | — |
| Reacciones verticales | 5 000 N en cada apoyo | 5 000 N | < 0,01 % |
| Desplazamiento vertical del nudo 3 | Σ F·f·L/(AE) = 4,34 × 10⁻⁵ m | 4,34 × 10⁻⁵ m | < 0,01 % |

## Documentación

- [`docs/reporte-final-proyecto-fem.pdf`](docs/reporte-final-proyecto-fem.pdf) — reporte de desarrollo semana a semana (64 páginas): estructura de datos, formulación 2D, generalización a 3D, validación con cálculos manuales, refactorización modular y despliegue web.
- [`docs/presentacion-proyecto-fem.pdf`](docs/presentacion-proyecto-fem.pdf) — presentación del proyecto.
