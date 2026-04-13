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
│   ├── 2024-01_ecuacion_calor_2d/
│   │   ├── README.md              ← Descripción del proyecto
│   │   ├── src/                   ← Código fuente
│   │   ├── mallas/                ← Archivos de malla (.msh, .xdmf)
│   │   ├── resultados/            ← Outputs y figuras
│   │   └── referencias/           ← Papers y notas técnicas
│   │
│   └── 2024-02_elasticidad_lineal/
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
│   ├── 2024-08-15_titulo_articulo/
│   │   ├── presentacion.pdf
│   │   ├── resumen.md             ← Resumen crítico del artículo
│   │   └── preguntas_discusion.md
│   └── ...
│
├── 📂 actas/
│   ├── 2024-08-01_sesion_fundacional.md
│   ├── 2024-08-15_sesion_02.md
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