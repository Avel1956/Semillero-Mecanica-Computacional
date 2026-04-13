
<div align="center">

# ⚙️ Semillero de Mecánica Computacional
### Universidad Javeriana de Cali — Facultad de Ingeniería
*Simulando la física. Construyendo el criterio.*

---

![Python](https://img.shields.io/badge/Python-3.10%2B-3776AB?style=for-the-badge&logo=python&logoColor=white)
![FEniCSx](https://img.shields.io/badge/FEniCSx-0.7-blue?style=for-the-badge)
![OpenFOAM](https://img.shields.io/badge/OpenFOAM-v2312-informational?style=for-the-badge)
![License](https://img.shields.io/badge/Licencia-MIT-green?style=for-the-badge)
![Status](https://img.shields.io/badge/Estado-Activo-brightgreen?style=for-the-badge)
![Miembros](https://img.shields.io/badge/Miembros-12-orange?style=for-the-badge)

</div>

---

## 📋 Tabla de Contenidos

- [¿Qué es este repositorio?](#-qué-es-este-repositorio)
- [¿Quiénes somos?](#-quiénes-somos)
- [Estructura del repositorio](#-estructura-del-repositorio)
- [Cómo empezar](#-cómo-empezar)
  - [Requisitos previos](#requisitos-previos)
  - [Instalación del entorno](#instalación-del-entorno)
  - [Verificación de la instalación](#verificación-de-la-instalación)
- [Proyectos activos](#-proyectos-activos)
- [Cómo contribuir](#-cómo-contribuir)
  - [Estándar de código](#estándar-de-código)
  - [Flujo de trabajo con Git](#flujo-de-trabajo-con-git)
  - [Plantilla de commit](#plantilla-de-commit)
- [Recursos de aprendizaje](#-recursos-de-aprendizaje)
- [Valores del semillero](#-valores-del-semillero)
- [Equipo](#-equipo)
- [Licencia](#-licencia)
- [Contacto](#-contacto)

---

## 📦 ¿Qué es este repositorio?

Este repositorio es la **memoria técnica viva** del Semillero de Mecánica Computacional de la Universidad Javeriana de Cali. Aquí conviven:

- El **código fuente** de todos los proyectos de investigación del semillero.
- Los **tutoriales internos** desarrollados por y para los miembros.
- Las **presentaciones y resúmenes** del Journal Club.
- Las **actas** de cada sesión de trabajo.
- Los **recursos curados** que guían el aprendizaje del grupo.

> **Principio fundamental:** Todo lo que se aprende en el semillero se documenta aquí. El conocimiento que no se escribe, no existe para el siguiente miembro que llegue.

---

## 👥 ¿Quiénes somos?

Somos un grupo de estudiantes de pregrado y su docente tutor, unidos por el interés en comprender y simular fenómenos físicos mediante métodos numéricos y computación científica. Trabajamos en la intersección de:

**Matemáticas Aplicadas × Física de Medios Continuos × Computación Científica**

**No somos** usuarios de software. **Somos** desarrolladores de criterio: entendemos qué hay detrás de cada simulación que ejecutamos.

**Áreas de trabajo:**

| Área | Método Principal | Herramientas |
|---|---|---|
| Mecánica Estructural | FEM | FEniCSx, Ansys |
| Dinámica de Fluidos | FVM | OpenFOAM, Fluent |
| Transferencia de Calor | FDM / FEM | Python, FEniCSx |
| Biomecánica | FEM | Abaqus, FEniCSx |

---

## 🗂️ Estructura del repositorio

```text
semillero-mecanica-computacional/
│
├── 📂 proyectos/
│   ├── 2026-04-12_ecuacion_calor_2d/
│   │   ├── README.md              ← Descripción del proyecto
│   │   ├── src/                   ← Código fuente
│   │   ├── mallas/                ← Archivos de malla (.msh, .xdmf)
│   │   ├── resultados/            ← Outputs y figuras
│   │   └── referencias/           ← Papers y notas técnicas
│   │
│   └── 2026-04-12_elasticidad_lineal/
│       └── ...
│
├── 📂 tutoriales/
│   ├── 00_python_cientifico/
│   │   ├── README.md
│   │   └── notebook.ipynb
│   ├── 01_fdm_calor_1d/
│   ├── 02_fdm_laplace_2d/
│   ├── 03_intro_fenics/
│   ├── 04_generacion_mallas_gmsh/
│   └── 05_postprocesamiento_paraview/
│
├── 📂 journal_club/
│   ├── 2026-04-12_titulo_articulo/
│   │   ├── presentacion.pdf
│   │   ├── resumen.md             ← Resumen crítico del artículo
│   │   └── preguntas_discusion.md
│   └── ...
│
├── 📂 actas/
│   ├── 2026-04-12_sesion_fundacional.md
│   ├── 2026-04-12_sesion_02.md
│   └── plantilla_acta.md          ← Usar esta para nuevas actas
│
├── 📂 recursos/
│   ├── libros_recomendados.md
│   ├── cursos_online.md
│   ├── revistas_cientificas.md
│   └── datasets_y_benchmarks.md
│
├── 📂 entorno/
│   ├── environment.yml            ← Entorno Conda
│   ├── requirements.txt           ← Dependencias pip
│   └── setup_instructions.md      ← Guía de instalación detallada
│
├── 📄 README.md                   ← Este archivo
├── 📄 CONTRIBUTING.md             ← Guía completa de contribución
├── 📄 CODE_OF_CONDUCT.md          ← Código de conducta
└── 📄 LICENSE
````

-----

## 🚀 Cómo empezar

### Requisitos previos

Antes de clonar el repositorio, asegúrate de tener instalado:

  - **Git** ≥ 2.40 → [git-scm.com](https://git-scm.com/)
  - **Python** ≥ 3.10 → [python.org](https://www.python.org/)
  - **Conda / Miniconda** (recomendado) → [docs.conda.io](https://docs.conda.io/)
  - **Editor de código:** VS Code + extensiones Python y Jupyter (recomendado)

> 💡 Si no tienes experiencia con Git, comienza con el tutorial interno:
> [`tutoriales/00_python_cientifico/git_basico.md`](https://www.google.com/search?q=tutoriales/00_python_cientifico/git_basico.md)

-----

### Instalación del entorno

**Paso 1 — Clona el repositorio**

```bash
git clone [https://github.com/javeriana-cali-comp-mech/semillero.git](https://github.com/javeriana-cali-comp-mech/semillero.git)
cd semillero
```

**Paso 2 — Crea el entorno Conda**

```bash
conda env create -f entorno/environment.yml
conda activate semillero-mc
```

\<details\>
\<summary\>📦 ¿Qué contiene el entorno? (click para expandir)\</summary\>

```yaml
# entorno/environment.yml
name: semillero-mc
channels:
  - conda-forge
  - defaults
dependencies:
  - python=3.11
  - numpy
  - scipy
  - matplotlib
  - sympy
  - jupyterlab
  - ipywidgets
  - fenics-dolfinx          # FEM con FEniCSx
  - gmsh                    # Generación de mallas
  - pyvista                 # Visualización 3D en Python
  - meshio                  # Conversión de formatos de malla
  - tqdm                    # Barras de progreso
  - black                   # Formateador de código
  - pytest                  # Testing
  - pip:
    - scikit-fem             # FEM alternativo liviano
```

\</details\>

**Paso 3 — Verifica la instalación**

```bash
python entorno/verificar_instalacion.py
```

Deberías ver una salida similar a:

```text
✅ Python        3.11.x   — OK
✅ NumPy         1.26.x   — OK
✅ SciPy         1.12.x   — OK
✅ Matplotlib    3.8.x    — OK
✅ FEniCSx       0.7.x    — OK
✅ Gmsh          4.12.x   — OK
✅ PyVista       0.43.x   — OK

🎉 Entorno listo. Bienvenido al semillero.
```

### Verificación de la instalación

Para confirmar que todo funciona correctamente, ejecuta el primer tutorial:

```bash
cd tutoriales/01_fdm_calor_1d/
jupyter lab notebook.ipynb
```

Si la celda de verificación corre sin errores y genera una gráfica de distribución de temperatura, tu entorno está configurado correctamente.

-----

## 🔬 Proyectos activos

| \# | Proyecto | Responsables | Estado | Método |
|---|---|---|---|---|
| 01 | Solución numérica de la ecuación de calor 2D | Equipo A | 🟡 En progreso | FDM |
| 02 | Análisis de elasticidad lineal plana con FEniCSx | Equipo B | 🟢 Iniciado | FEM |
| 03 | Validación de flujo de Poiseuille en OpenFOAM | Equipo C | 🔵 Planificado | FVM |

Para unirte a un proyecto o proponer uno nuevo, consulta la sección **Cómo contribuir** y abre un Issue con la etiqueta `nuevo-proyecto`.

-----

## 🤝 Cómo contribuir

Todo miembro activo del semillero debe contribuir al repositorio. A continuación, el proceso estándar:

### Estándar de código

Todo script de Python debe comenzar con el siguiente encabezado:

```python
# ═══════════════════════════════════════════════════════════════════════
# ARCHIVO     : nombre_descriptivo.py
# SEMILLERO   : Mecánica Computacional — U. Javeriana Cali
# AUTOR(ES)   : Nombre Apellido <correo@javerianacali.edu.co>
# FECHA       : YYYY-MM-DD
# VERSIÓN     : 1.0.0
#
# DESCRIPCIÓN :
#   Descripción clara de qué hace el script y qué problema resuelve.
#   Incluir las ecuaciones o fenómeno físico que se modela.
#
# MÉTODO      : FDM | FEM | FVM | Analítico | Otro
# REFERENCIA  : Apellido, A. (Año). Título. Journal. DOI:...
#
# DEPENDENCIAS: numpy, scipy, matplotlib
# USO         : python nombre_descriptivo.py
#               o: jupyter nbconvert --to script notebook.ipynb
# ═══════════════════════════════════════════════════════════════════════
```

**Convenciones adicionales:**

  * Nombres de variables en `snake_case` descriptivo (ej: `nodos_internos`, no `n`).
  * Constantes físicas en `MAYUSCULAS` con unidades en comentario.
  * Una función = una responsabilidad. Funciones de más de 30 líneas deben dividirse.
  * Toda función debe tener `docstring` con parámetros, retorno y ejemplo.

<!-- end list -->

```python
def calcular_temperatura_fdm(n_nodos: int, t_izq: float, t_der: float) -> np.ndarray:
    """
    Resuelve la ecuación de Laplace 1D por diferencias finitas.

    Parámetros
    ----------
    n_nodos : int
        Número total de nodos incluyendo fronteras.
    t_izq : float
        Temperatura en la frontera izquierda [°C].
    t_der : float
        Temperatura en la frontera derecha [°C].

    Retorna
    -------
    np.ndarray
        Vector de temperaturas en todos los nodos [°C].

    Ejemplo
    -------
    >>> T = calcular_temperatura_fdm(5, 100.0, 50.0)
    >>> print(T)
    [100.  87.5  75.  62.5  50.]
    """
```

### Flujo de trabajo con Git

Nunca trabajes directamente sobre la rama `main`. El flujo es:

```bash
# 1. Asegúrate de tener la versión más reciente
git checkout main
git pull origin main

# 2. Crea una rama de trabajo con nombre descriptivo
#    Formato: tipo/descripcion-corta
#    Tipos: feat | fix | docs | tutorial | refactor
git checkout -b feat/solucion-calor-2d-dirichlet

# 3. Trabaja, haz commits frecuentes (ver plantilla abajo)
git add src/solver_calor_2d.py
git commit -m "feat(calor-2d): implementar ensamblaje de matriz de rigidez"

# 4. Empuja tu rama al repositorio remoto
git push origin feat/solucion-calor-2d-dirichlet

# 5. Abre un Pull Request en GitHub hacia main
#    - Describe qué hiciste y por qué
#    - Asigna a un revisor (otro miembro del semillero)
#    - Espera la revisión antes de hacer merge
```

### Plantilla de commit

Seguimos la convención **Conventional Commits**:

```text
<tipo>(<alcance>): <descripción corta en imperativo>

[Cuerpo opcional: qué se hizo y por qué, no el cómo]

[Referencias opcionales: Closes #12, Refs #8]
```

**Tipos válidos:**

| Tipo | Cuándo usarlo |
|---|---|
| `feat` | Nueva funcionalidad o script |
| `fix` | Corrección de un error en el código |
| `docs` | Cambios en documentación o README |
| `tutorial` | Adición o mejora de un tutorial |
| `refactor` | Reestructuración de código sin cambio de comportamiento |
| `test` | Adición de pruebas unitarias |
| `acta` | Nueva acta de sesión |
| `jclub` | Material del Journal Club |

**Ejemplos:**

```bash
git commit -m "feat(fdm): agregar solver 2D para ecuación de Poisson"
git commit -m "fix(fem): corregir indexación en ensamblaje de vector de fuerzas"
git commit -m "docs(tutorial-01): agregar explicación de condición CFL"
git commit -m "acta: sesión 05 del 2024-09-12"
```

-----

## 📚 Recursos de aprendizaje

**Libros fundamentales del semillero**

| Libro | Autores | Nivel | Disponible en |
|---|---|---|---|
| Numerical Methods for Engineers | Chapra & Canale | ⭐ Introductorio | Biblioteca Javeriana |
| Solving PDEs in Python | Langtangen & Logg | ⭐⭐ Intermedio | Libre online |
| The Finite Element Method | Zienkiewicz & Taylor | ⭐⭐⭐ Avanzado | Biblioteca Javeriana |
| An Introduction to CFD | Versteeg & Malalasekera | ⭐⭐ Intermedio | Biblioteca Javeriana |

**Cursos en línea recomendados**

  * 🎓 **CFD Python** — Lorena Barba (GWU) → lorenabarba.com
  * 🎓 **FEniCSx Tutorial** — Jørgen Dokken → jsdokken.com
  * 🎓 **MIT 18.335** — Numerical Methods → ocw.mit.edu
  * 🎓 **Scientific Computing with Python** — edX / Coursera

**Recursos internos del repositorio**

```text
recursos/
├── libros_recomendados.md        ← Lista anotada con comentarios del grupo
├── cursos_online.md              ← Cursos evaluados por miembros del semillero
├── revistas_cientificas.md       ← Journals relevantes y cómo acceder desde Javeriana
└── datasets_y_benchmarks.md      ← Problemas de referencia para validar solvers
```

-----

## 🧭 Valores del semillero

Estos principios definen cómo trabajamos:

  * 🔬 **Rigor Matemático:** No basta con que el código "corra". Debemos entender la física detrás del resultado, analizar la convergencia y conocer los límites de validez de nuestros modelos.
  * ⚖️ **Ética en la Simulación:** Reportamos los errores, las limitaciones de la malla y los casos en que el modelo falla. Una simulación bien documentada —incluyendo sus limitaciones— vale más que una que solo muestra los resultados bonitos.
  * 🤝 **Colaboración Radical:** Todo lo que desarrollamos se documenta y comparte. Este repositorio es la evidencia de ese compromiso.
  * 🧪 **Cultura del Experimento:** Los errores son datos. Fallar en reproducir un resultado es el inicio de una investigación, no un fracaso.

-----

## 👨‍🔬 Equipo

**Docente Tutor**

| Nombre | Correo | Perfil |
|---|---|---|
| Jaime Andrés Vélez Zea | jaimea.velez@javerianacali.edu.co | Google Scholar · ResearchGate |

**Miembros Activos — Cohorte 2026**

| Nombre | Programa | Rol | Proyecto |
|---|---|---|---|
| [Estudiante 1] | Ing. Civil | Coordinador | Calor 2D |
| [Estudiante 2] | Ing. Mecánica | Gestor de Docs | Elasticidad |
| [Estudiante 3] | Ing. Electrónica | Miembro | Calor 2D |

🙌 **¿Quieres unirte?** Lee la sección *Cómo empezar* y escríbenos al correo de contacto.

**Miembros Alumni**

| Nombre | Año | Proyecto | Destino |
|---|---|---|---|
| — | — | — | — |
*(Esta tabla se irá llenando con el tiempo. Tú podrías ser el primero.)*

-----

## 📊 Estado del repositorio

```text
Última actualización     : 2026-04-12
Tutoriales disponibles   : 1 / 6 planificados
Proyectos activos        : 3
Actas registradas        : 1
Journal Clubs realizados : 0
```

-----

## 📄 Licencia

El contenido de este repositorio se distribuye bajo la licencia **MIT** para el código fuente y **CC BY 4.0** para la documentación y materiales educativos.

Esto significa que puedes usar, modificar y distribuir el contenido siempre que des crédito al semillero de origen.

```text
Copyright (c) 2026 Semillero de Mecánica Computacional
Universidad Javeriana de Cali
```

-----

## 📬 Contacto

| Canal | Información |
|---|---|
| ✉️ Correo del semillero | semillero.mc@javerianacali.edu.co |
| ✉️ Docente tutor | tutor@javerianacali.edu.co |
| 💬 Grupo de WhatsApp | Solicitar acceso por correo |
| 🏛️ Facultad | Ingeniería — Universidad Javeriana Cali |

-----



*"No puedes simular lo que no entiendes. No puedes entender lo que no te atreves a preguntar."*

**Semillero de Mecánica Computacional**
Universidad Javeriana de Cali · Facultad de Ingeniería · Desde 2026

⭐ Si este repositorio te fue útil, considera darle una estrella.



