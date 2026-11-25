<img src="../../recursos/marca/smc-isotipo.svg" alt="SMC" width="64" align="right">

# PUJ-IA — Tutor socrático y generador de agentes pedagógicos

**Línea:** Inteligencia artificial · **Estado:** en funcionamiento (v0.1.0) · **Responsable:** Jaime Andrés Vélez Zea

- Código fuente: [Avel1956/PUJ-AI](https://github.com/Avel1956/PUJ-AI)
- Aplicación (Mecánica de Sólidos): <https://puj-ai-mecsol.streamlit.app/>

## Qué es

Plataforma web de tutoría con IA generativa para cursos de ingeniería. El tutor no entrega soluciones terminadas: guía al estudiante con preguntas para que construya su propio razonamiento.

- **RAG:** los documentos oficiales del curso se indexan en ChromaDB y el tutor responde priorizando ese contenido.
- **Guardarraíles socráticos:** reglas que impiden entregar soluciones completas o código listo para copiar.
- **Roles:** estudiante, docente y administrador, con control de acceso por curso (Supabase con Row Level Security).
- **Modelos:** DeepSeek y OpenRouter (Gemini Flash, Claude), configurables desde la aplicación; telemetría de tokens y costo por sesión.
- **Cursos activos:** Mecánica de Sólidos, Diseño Mecánico, Métodos Numéricos y Proyecto Integrador I.

El **generador de agentes (Agent Builder)** permite a un docente construir el *system prompt* de su propio agente pedagógico en un asistente de seis pasos, a partir de los documentos de su curso.

## Relación con el semillero

Es el proyecto base de la línea de inteligencia artificial: herramientas de IA como apoyo a la programación de métodos numéricos, al análisis de resultados y a la elaboración de material de formación.

## Documentación

- [`docs/resumen-ejecutivo-tutor-socratico.pdf`](docs/resumen-ejecutivo-tutor-socratico.pdf)
- [`docs/presentacion-tutor-socratico.html`](docs/presentacion-tutor-socratico.html) (abrir en el navegador)
- [`docs/presentacion-constructor-agente-tutor.html`](docs/presentacion-constructor-agente-tutor.html)
