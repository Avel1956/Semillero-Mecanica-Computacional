# De conversar a delegar: skills, agentes y arneses

Nov 14, 2026 · @Jaime Andrés Vélez Zea

## La trampa de las quinientas herramientas

Quien empieza a trabajar con inteligencia artificial suele acumular herramientas: una para las presentaciones, otra para buscar información, otra para resumir, otra para las imágenes. Quinientas herramientas para quinientas tareas. Es una forma poco eficiente de trabajar, y casi todos pasamos por ella. Con algo más de práctica uno descubre que la mayor parte de esas tareas se resuelve en una sola conversación con un modelo general, y abandona la colección.

Lo curioso es que, un paso más adelante, las quinientas herramientas regresan. Solo que esta vez no las compramos: las construimos. Y no son aplicaciones, sino procedimientos propios que el modelo ejecuta por nosotros.

Este capítulo trata de ese tercer momento y del que le sigue. Mi tesis es que el salto real de productividad no viene de un modelo mejor ni de una pregunta mejor formulada. Viene de convertir el propio método de trabajo en algo explícito, reutilizable y verificable. Las palabras técnicas para eso son tres: *skill* o habilidad, agente y arnés (*harness*). Ninguna exige saber programar. Todas exigen saber con precisión cómo hace uno su trabajo, y eso es bastante más difícil.

Escribo desde un lugar particular. Soy profesor de ingeniería mecánica, pero en 2022 estaba en Estados Unidos trabajando en procesamiento de lenguaje natural, justo cuando apareció ChatGPT. Mi interés inicial era modesto: quería integrar un modelo de lenguaje en mi código para clasificar contenidos educativos. De ahí en adelante me fui convirtiendo en un entusiasta, y he intentado mantenerme cerca de la punta de un desarrollo que avanza a una velocidad difícil de seguir. Lo que sigue es un intento de despejar el camino para quien no puede, ni debe, pasar el día entero pendiente de las novedades.

Usaré un solo caso como hilo conductor: una revisión bibliográfica en mecánica computacional, como las que hacemos en el semillero que dirijo. Lo elijo porque es un trabajo que todo académico conoce y teme. Pero el argumento vale para cualquier flujo de trabajo que se repite, sea una revisión de literatura, una pieza publicitaria o el análisis de una convocatoria.

## El texto plano como lengua franca

Antes de hablar de modelos conviene hablar de formato. La lengua en la que realmente nos comunicamos con estos sistemas es Markdown: texto plano con unas pocas marcas que indican jerarquía. Un numeral al inicio de la línea es un título de primer nivel, dos numerales un subtítulo, un par de asteriscos una negrilla. Con eso basta para escribir tablas, ecuaciones y bloques de código que luego se ven tan bien como en cualquier procesador de texto.

La razón de empezar por aquí es práctica. En la comunicación con un modelo importan dos cosas, el contenido y la jerarquía, y Markdown transmite ambas sin nada que estorbe. Las instrucciones de un proyecto, las habilidades y las fichas que produce un agente son, en el fondo, archivos de este tipo. Quien los sabe leer y escribir puede abrir cualquiera de las piezas que describo en este capítulo, entenderla y corregirla.

Hay además una ventaja de largo plazo. Un archivo de texto plano no depende de ninguna empresa ni de ningún programa. Yo llevo años guardando todo mi trabajo en un editor de notas en Markdown, con fecha y etiquetas, y eso me permite cumplir una regla que procuro seguir: no repetir las cosas y resolver familias de problemas en lugar de problemas uno por uno. Esa regla, como se verá, es también la lógica de una habilidad.

## Qué hace realmente un modelo

Un modelo de lenguaje es un modelo estadístico que predice la siguiente palabra. Así de simple y así de sorprendente. Cuando el modelo tiene una cantidad enorme de parámetros y ha visto una cantidad brutal de texto, deja de predecir solo la siguiente palabra y empieza a predecir el siguiente concepto. Eso no significa que sepa algo. Yo lo entiendo así: la respuesta de un modelo se parece al promedio de las respuestas a preguntas similares que encontró durante su entrenamiento. Un promedio puede ser muy bueno y aun así estar equivocado, y trae cocinados los sesgos de los datos de los que salió.

### Errores que se leen bien

El problema para quien trabaja en la academia es que estos modelos escriben muy bien, y sus errores son cada vez más sutiles. Eso los hace más peligrosos. Hay tres que encuentro una y otra vez:

- **Redondean.** Un orden de convergencia de 1,9 se convierte en «segundo orden».

- **Amplían el alcance.** Un resultado válido para un número de Reynolds de 100 termina presentado como válido para cualquier Reynolds.

- **Inventan referencias.** Cualquier profesor ha recibido ya un trabajo, de estudiantes o de no tan estudiantes, con una cita que no existe o que dice otra cosa.

Hay un cuarto problema, menos técnico y más inquietante: tienden a darnos la razón. Estos modelos son productos, y la empresa que los fabrica quiere que los usemos. Un producto que discute todo el tiempo con su usuario es un producto que nadie usa. Si uno está equivocado y el modelo asiente, uno sigue equivocado, ahora con más confianza. De ahí viene lo que se ha empezado a llamar psicosis por IA: personas que pierden contacto con la realidad después de una interacción prolongada con un sistema que confirma siempre su visión del mundo. El mecanismo se parece al de las redes sociales, y la combinación de ambos no ayuda.

### Cinco malentendidos

**«Es un buscador que lo sabe todo.»** No sabe nada: genera el texto más probable. Tiene además una fecha de corte, y sobre lo ocurrido después puede inventar con toda tranquilidad.

**«Si suena seguro, es correcto.»** Todo lo que dice lo dice con autoridad. Creerle por eso es un sesgo nuestro, no del modelo.

**«Hay que encontrar el prompt perfecto.»** Ya no. Lo que pesa es el contexto: la fuente, el lector, el formato, los ejemplos y las reglas que queremos que siga.

**«Para usarlo bien hay que saber programar.»** No, pero sí. No hace falta escribir código. Hace falta una visión programática de las propias tareas: saber dividir un trabajo en pasos pequeños que puedan transmitirse sin ambigüedad a otro. Quien sabe Python ya tiene ese esquema mental; quien no, puede desarrollarlo.

**«Me va a reemplazar.»** Cuanto más trabajo con estas herramientas, menos lo creo. Reemplazará a quien ya era reemplazable, como ha ocurrido en cada cambio tecnológico. Quien de verdad sabe hacer algo tendrá más oportunidades, aunque seguramente habrá menos puestos.

Queda la pregunta de la privacidad. Mi recomendación es prudente: lo que uno sube a internet deja de ser del todo suyo, y eso incluye lo que sube a un modelo comercial. Existen contratos empresariales que excluyen los datos del entrenamiento, y existen modelos locales, menos capaces pero completamente privados. Con datos de investigación sin publicar conviene saber exactamente en cuál de esos escenarios está uno.

### La ventana de contexto

Todo lo anterior lleva a la idea central del capítulo. El modelo conoce lo que uno le da. La ventana de contexto es su memoria de trabajo, el equivalente de la memoria RAM de un computador: lo que está procesando en este momento, a diferencia del disco duro donde vive la información de largo plazo. Es el único lugar donde tenemos injerencia real sobre lo que el modelo puede hacer.

Esa ventana se llena con instrucciones, documentos, ejemplos aprobados, herramientas y datos. Las habilidades y el arnés, de los que trata el resto del capítulo, no son otra cosa que formas ordenadas de llenarla: la habilidad aporta el procedimiento; el arnés, las herramientas y el flujo.

## Cuatro etapas: del amigo a la fábrica

Invito al lector a ubicarse en una de cuatro etapas. No son niveles de mérito. Quien está en la primera suele estarlo porque todavía no ha necesitado ir más allá. Y son acumulativas: cada una se suma a las anteriores, no las borra.

| Etapa            | Qué hace uno                                                                           | Lo que tiene                               |
|------------------|----------------------------------------------------------------------------------------|--------------------------------------------|
| 1\. Conversación | Pregunta de vez en cuando, discute ideas                                               | Un amigo que echa una mano                 |
| 2\. Contexto     | Sube documentos, explica lo que necesita e itera hasta obtenerlo                       | Un asistente que hace lo que se le pide    |
| 3\. Habilidades  | Guarda instrucciones y proyectos, y los reutiliza                                      | Un laboratorio con sus herramientas a mano |
| 4\. Orquestación | Diseña flujos que se ejecutan solos y se detienen donde hace falta una decisión humana | Una fábrica                                |

La mayoría de nosotros está en la segunda etapa, o en una mezcla de la segunda y la tercera. Armamos bien el contexto, pero de forma artesanal: cada proyecto empieza de cero. La tercera etapa nace de una pregunta sencilla, ¿por qué tengo que repetir una y otra vez la misma conversación?

La cuarta es el Santo Grial. En las dos primeras las capacidades se multiplican; en la cuarta la productividad estalla, porque ya no se produce un archivo sino un libro. Y bien hecho, que es el punto. El acceso a estas tecnologías permite generar muchísimo, y buena parte de lo que se genera es lo que en inglés llaman *slop*: volumen sin calidad. Producir mucho con buena calidad es el problema real.

### Cómo llegamos hasta aquí

Las etapas reproducen, en la biografía de cada usuario, la historia reciente de la tecnología. En 2022 la pregunta era simplemente qué se le podía preguntar a un chat. En 2023 vino la fiebre del *prompt engineering*: la búsqueda de la frase mágica, las hojas enteras de prompts, el «actúa como un profesor». Sigue funcionando, pero ya no es donde está la ventaja. Entre 2023 y 2024 empezamos a subir archivos y a preguntar por nuestra propia información. En 2024 los modelos comenzaron a razonar y a usar herramientas. En 2025 el oficio pasó a llamarse ingeniería de contexto: decidir qué sabe el modelo, en qué formato debe responder y en qué debe concentrarse.

Hoy la palabra es orquestación. Uno dirige un equipo que trabaja de forma autónoma hasta que hace falta decidir, verificar o aprobar algo. La pregunta ya no es qué preguntar, sino qué se delega, a quién, y quién lo verifica. La responsabilidad de lo producido sigue cayendo sobre nosotros.

El último año concentra varios hitos de ese cambio. Entre finales de 2025 y comienzos de 2026 se popularizó OpenClaw, un agente al que no se le conversaba: se le daba una tarea, la dividía en subtareas, las ejecutaba y entregaba el resultado. Así funcionan hoy casi todos estos sistemas, y el cambio fue casi imperceptible. En febrero hubo un ataque al mercado de habilidades de ese ecosistema, sobre el que vuelvo más adelante. Poco después apareció Hermes, un agente de código abierto que aprende del trabajo de su usuario. En abril, la cuarta versión de DeepSeek mostró que un modelo abierto podía acercarse a los de frontera a una fracción del costo, y sacudió la idea de una ventaja de diez años para los laboratorios estadounidenses. En septiembre llegaron las nuevas generaciones de Anthropic y OpenAI. Y en octubre los estándares de agentes quedaron bajo el paraguas de la Linux Foundation.

Me detengo en esta cronología por una razón pedagógica. Creo que hemos llegado a una meseta. No porque el desarrollo se detenga, sino porque los modelos se han vuelto comparables entre sí y los conceptos se han estabilizado. Durante años, quien preparaba un curso sobre el tema terminaba enseñando algo que ya había caducado. Hoy hay piezas, las habilidades, los agentes, el arnés, que van a durar lo suficiente como para que valga la pena enseñarlas.

## Anatomía de una habilidad

Una habilidad es una carpeta con información reutilizable. No hay nada mágico en ella. Para entender por qué es útil conviene ver de dónde sale, y para eso vuelvo al caso de la revisión bibliográfica.

### Del prompt al protocolo

Supongamos que tengo un artículo sobre el problema clásico de la cavidad con tapa móvil y le pido al modelo, sin más, un párrafo sobre la convergencia de malla. El resultado se lee bien y falla justo donde anticipé: generaliza rangos, redondea cifras y cita sin verificar. Como todo trabajo de investigación es adquisición, procesamiento, análisis y presentación de información, un error de veracidad en el primer paso inutiliza todos los demás.

El segundo intento es un *brief*: un conjunto de instrucciones que indica el archivo fuente, el lector, el formato de salida, un ejemplo y unas reglas. El cambio es notable. Las cifras se mantienen, se cita lo que hay que citar y se conservan las condiciones del análisis. Esto es un prompt bien hecho, y durante un tiempo creímos que el oficio consistía en eso.

Pero el *brief* tiene dos defectos. Hay que escribirlo en cada sesión, y depende de quien lo escribe. En un semillero con varios estudiantes, cada uno redacta el suyo: uno cambia el lector, otro prefiere cien palabras en vez de ciento cincuenta, a otro no le gustan las tablas. Aparece la variabilidad que justamente queríamos eliminar. Es el mismo problema de una agencia que maneja una marca y necesita que suene igual sin importar quién haga la pieza.

La solución no empieza en el modelo. Empieza en un protocolo de revisión bibliográfica, y ese protocolo solo lo puede escribir alguien que sepa de revisiones bibliográficas. Contiene la pregunta de investigación y para qué se usará la respuesta, quién responde por el resultado, las fuentes admitidas, las consultas, los criterios de inclusión y de exclusión, y qué se extrae de cada trabajo. Define también las salidas: una hoja de cálculo con el corpus, un archivo de bibliografía, una ficha por cada trabajo incluido, una matriz de evidencias, un borrador de síntesis, una tabla de verificación y, al final, una línea de firma para el investigador que revisó todo.

Nada de eso es un problema de inteligencia artificial. Es un problema de investigación. Por eso insisto en que estas herramientas no nos reemplazan: el protocolo es el conocimiento experto, y el modelo solo lo ejecuta.

Con el protocolo se redactan las instrucciones permanentes del proyecto. En ellas quedan el alcance, las carpetas donde el agente guardará fichas, síntesis y registros, las reglas que nunca se rompen y el flujo de trabajo:

1.  Adquirir.

2.  Analizar.

3.  Sintetizar.

4.  Firmar, es decir, aprobar.

Una instrucción típica es: corre el flujo completo del protocolo y detente después de la primera fase para que yo apruebe la lista.

### Qué hay dentro de la carpeta

La habilidad de búsqueda bibliográfica que uso en el semillero es un archivo de texto con seis partes: el nombre, una descripción de lo que hace, las entradas que necesita, el procedimiento paso a paso, el formato de salida y las reglas de precisión. Su propósito está escrito en una frase: convertir una pregunta en un corpus que otra persona podría reconstruir, sabiendo qué se buscó, dónde, cuándo, cuántos resultados hubo y por qué se incluyó o se excluyó cada trabajo. Dos de sus reglas resumen la actitud completa: nunca agregar un trabajo que no haya salido de una fuente consultada, y nunca escribir un DOI de memoria. No queremos que el modelo trabaje con su memoria. Queremos que actúe sobre el conocimiento que existe.

Junto al texto hay un *script* de Python que consulta el catálogo abierto OpenAlex. Ese programa no necesita inteligencia alguna; es una herramienta que la habilidad usa. Ahí está la diferencia con un prompt: una habilidad trae el procedimiento y también los medios para ejecutarlo.

Un buen procedimiento se reconoce porque una persona distinta podría seguirlo y llegar al mismo sitio. Debe decir qué hacer si falta una entrada, fijar el formato de salida, declarar qué no se modifica nunca, como cifras y unidades, e incluir una verificación propia. La heurística que más me ha servido es separar dos momentos: primero construir una ficha de hechos comprobados y después escribir solo a partir de esa ficha. Es lo que hacíamos antes con aquellas sábanas de Excel llenas de autores, métodos y hallazgos, que a más de uno todavía le producen pesadillas.

### La descripción decide

El detalle más importante es el menos vistoso. El modelo decide si usa una habilidad leyendo únicamente su nombre y su descripción; el resto se carga solo cuando hace falta. Por eso se pueden tener cincuenta o cien habilidades instaladas sin saturar el contexto. Y por eso, cuando una habilidad no se activa, el problema casi siempre está en la descripción. «Ayúdame con estos papers» no le dice nada al modelo. «Extrae de cada artículo una ficha con cifras, condiciones y su ubicación en la fuente» sí.

### Tres formas de escribirla

La primera es a mano, a partir de una plantilla. Recomiendo hacerlo al menos una vez, porque es la única manera de entender cómo funciona el sistema. La segunda es la más natural: se trabaja con el modelo hasta que el resultado es el esperado y entonces se le pide que convierta esa conversación en una habilidad. Así nació la mía, de una sesión que salió bien. La tercera es dejar que el agente la escriba por iniciativa propia; algunos, como Hermes, lo hacen por diseño y la refinan con el uso. En los tres casos hay que leer lo que quedó escrito.

Una habilidad es una receta y está sujeta a iteración permanente. Pero una receta bien hecha no resuelve un problema, resuelve una familia entera. Además el formato es portable: la misma carpeta, comprimida, se instala en plataformas distintas. Eso abre una posibilidad que me interesa mucho, un banco de habilidades de un departamento o de una facultad, que unifique procesos y nos ahorre reinventar la rueda.

### Código ajeno

La portabilidad tiene un costo. Una habilidad es un programa escrito en lenguaje natural, con todas sus imprecisiones, y puede traer código ejecutable. Instalar una desconocida equivale a ejecutar software desconocido en el propio computador. El ataque de febrero dejó cientos de habilidades maliciosas en un repositorio público, capaces de robar claves y entrar a bases de datos.

Antes de instalar una habilidad externa conviene revisar quién la publica, qué dice su descripción, si pide acceso a archivos o claves, qué requisitos tiene, si descarga algo y bajo qué licencia se distribuye. Y hay que leerla. Mi recomendación, siempre que sea posible, es escribir las propias o usar solo código que uno comprende en detalle.

## El arnés: todo lo que rodea al modelo

Hasta aquí he hablado como si uno conversara con el modelo. No es así. Lo que uno ve en pantalla, la interfaz, las herramientas, la memoria, es un arnés.

La mejor analogía es el computador. El procesador es el núcleo que realmente calcula, y es diminuto. Todo lo demás, el teclado, la carcasa, la refrigeración, el disco, la conexión a la red, es la estructura que hace posible usarlo. El nombre tampoco es casual: un arnés es lo que se le pone a un caballo para poder montarlo. Es toda la parafernalia que va alrededor de un modelo para volverlo útil.

La división de trabajo es estricta. El modelo propone y el arnés ejecuta. El modelo solo devuelve texto estructurado; el arnés lee ese texto, revisa los permisos, corre la herramienta y le devuelve el resultado. Si le pido a un agente que cree diez archivos en una carpeta de mi computador y los crea, eso lo hizo el arnés. Hace poco copiábamos y pegábamos desde la ventana del chat. Y cuando notamos que las nuevas versiones son más autónomas, casi siempre lo que mejoró fue el arnés: sus ciclos de reflexión, su manejo de herramientas, su memoria.

### Las piezas

Un arnés reúne ocho cosas: el ciclo, las herramientas, el contexto, las habilidades, los permisos, la memoria, la interfaz y el registro. Dos merecen comentario.

El ciclo es lo que distingue a un agente de una conversación. Es un programa que sigue funcionando. Puedo pedirle antes de dormir que procese las imágenes de los parciales de mis estudiantes y encuentre los errores más frecuentes. Mientras duermo divide el encargo: reconocer el texto, interpretar las figuras, sintetizar, armar el informe. Puede tardar una o dos horas. También puedo pedirle que a las nueve revise mis diapositivas de las diez contra la información más reciente.

Los permisos son la otra cara de esa potencia. El lenguaje natural es cómodo para quien no programa, pero los lenguajes de programación existen por una razón: son inequívocos. El lenguaje natural está lleno de ambigüedades. Si uno, cansado y de mal genio, le escribe a un agente con acceso irrestricto «olvídate de todo, me voy a dormir», puede amanecer sin archivos.

### Lo que ocurre en cada turno

El modelo existe con independencia del arnés. Se puede llamar desde unas pocas líneas de Python con una clave de acceso, lo que significa que cualquiera puede sacar el procesador y montarlo en su propia máquina. Ahí está la mayor potencia de estos sistemas, y también la mejor forma de entender qué pasa cuando presionamos Enter.

Cada llamada envía el modelo elegido, el máximo de *tokens*, las instrucciones, las herramientas disponibles y el historial completo. Vuelve el texto, el motivo por el que se detuvo y cuántos *tokens* se cobraron. Un *token* es un fragmento de palabra. Es la unidad con la que se mide la memoria del sistema y la unidad que se factura.

De ahí salen tres consecuencias prácticas. La primera es que el modelo no recuerda nada: en cada turno se envía toda la conversación, y toda se paga. La segunda es que las conversaciones largas se degradan, porque la ventana se va llenando. Los sistemas actuales admiten del orden de un millón de *tokens*, pero mi regla es no pasar de la mitad. Quien tiene la cabeza ocupada con diez mil libros no tiene espacio para pensar en ninguno. La tercera es el dinero. Abundan las historias de alguien que dejó un agente trabajando toda la noche y despertó con una deuda de miles de dólares.

El arnés administra esas tres cosas. Guarda en caché lo que se repite para no cobrarlo cada vez. Compacta el historial cuando crece demasiado, a riesgo de perder algún dato crucial. Carga las habilidades solo cuando se necesitan y recorta los resultados de las herramientas.

### Cerrado o abierto

Hoy hay tres clases de modelos. Los cerrados de frontera, de Anthropic, OpenAI y Google, son los más capaces. Los abiertos grandes, como DeepSeek, Kimi o GLM, cuestan entre diez y veinte veces menos y no son, ni de lejos, diez o veinte veces peores; con el contexto bien organizado puede que uno nunca eche de menos a los primeros. Y los abiertos locales, como Gemma o Qwen, corren en un computador personal. Son menos inteligentes, pero que funcionen ahí ya es asombroso, y abren toda una frontera de sistemas embebidos.

Mi advertencia es sobre la dependencia. Con los modelos cerrados pasa como con ciertos ecosistemas de hardware: todo funciona muy bien y uno queda condenado a vivir adentro. La suscripción mensual que pagamos probablemente no cubre el costo real de operar estos modelos. Si el mercado se corrige y el precio se multiplica, quien solo sabe trabajar en una plataforma, y tiene allí todas sus habilidades y proyectos, queda atrapado.

La defensa es sencilla. Escribir las habilidades en el formato abierto y guardarlas en una carpeta propia. Usarlas con un modelo cerrado si conviene. Y aprender a trabajar con modelos abiertos, que tienen más fricción y plataformas menos pulidas, pero no son tan distintos. Eso es lo que da independencia profesional.

La misma lógica aplica a los arneses. Hay agentes de trabajo, orientados a programar, y agentes personales, que funcionan de manera permanente, se comunican por mensajería y brillan en tareas recurrentes y en conectar aplicaciones. A quien no es desarrollador le recomiendo aprender a manejar uno personal. Yo uso Hermes, que es de código abierto, conectado a un modelo abierto y barato, y le escribo por Telegram.

## Agentes: independencia de juicio

Un agente es un arnés con su modelo: una sola línea de procesamiento con su propio contexto. La pregunta interesante es cuándo hacen falta varios.

La respuesta obvia es la velocidad. Si tengo cien artículos, el arnés puede crear cien procesos y cada uno lee un artículo. Pero la razón de fondo es otra: se separa en agentes cuando no se quiere que el juicio se degrade por compartir contexto.

En la revisión bibliográfica, un agente lee los artículos y los sintetiza. Otro, distinto, verifica esa síntesis. El primero tiene en su memoria todo el recorrido que lo llevó a sus conclusiones. Al segundo no deben importarle esas razones; debe juzgar únicamente lo que quedó escrito. Es la evaluación por pares de toda la vida, y es el mismo motivo por el que pedimos que un par de otra universidad revise nuestros procesos: no está contaminado por nuestras costumbres. Mi regla general es esa, un agente que analiza y sintetiza y otro independiente que verifica. Se puede lograr con algo tan simple como dos conversaciones separadas.

### Dónde se detiene la máquina

La orquestación no elimina a la persona; define en qué puntos entra. En el caso que he seguido, el reparto es claro. El *script* trae los datos, y eso es programa puro. La habilidad aplica los criterios que uno codificó, usando la capacidad del modelo. Y la persona decide si el resultado sirve.

El primer punto de control llega después del cribado. El sistema entrega una lista con cada artículo, su año, su título, el criterio que satisface y el nivel de lectura disponible, resumen o texto completo, y se detiene. Alguien del grupo tiene que sentarse, leerla y aprobarla. Solo entonces empieza el análisis. Después vienen las fichas, la matriz de evidencias, una primera síntesis, su verificación y una segunda síntesis que declara qué cambió, qué dice la evidencia, qué implica y dónde están sus vacíos.

El resultado final de mi ejemplo fue modesto y útil: de cinco soluciones de referencia, solo dos cubrían la condición que nos interesaba. Llegar a una frase así tomaba antes meses. Era el estudiante de doctorado quien leía cincuenta, cien o doscientos artículos y armaba las fichas durante uno o dos semestres. Hoy se hace en días, con una condición: que estemos dentro del ciclo. Las fichas se reparten entre los investigadores, cada uno verifica las suyas, y el trabajo humano se concentra donde vale.

Cuando le mostré este flujo a mi esposa, su comentario fue que aquello era simplemente el método científico. Tiene razón. Es dividir un problema en problemas más pequeños y ordenar el proceso para que otro pueda reproducirlo.

Creo que aquí está también el diagnóstico de lo que nos pasa con la inteligencia artificial en la universidad. El fallo no es que los estudiantes la usen. Es una falla catastrófica en los puntos de control, que ni ellos ni nosotros, como guardianes de la puerta, hemos establecido todavía. Esto es nuevo y aún no tenemos protocolo. Construirlo es la tarea. Mientras tanto, la ética es la guía para hacer las cosas cuando no hay protocolo.

## Una ventaja que caduca

Quienes hoy trabajamos con estas herramientas tenemos una ventaja competitiva. Generamos más volumen, analizamos más rápido, simulamos más en menos tiempo. Pero la tenemos solo porque podemos acoplar la tecnología con un conocimiento previo de nuestro campo, y es temporal.

Dentro de muy poco esto será como saber usar una hoja de cálculo. Hay magos de Excel, pero a nadie le dan un puesto de ingeniero mecánico por manejarlo; se da por supuesto. Hoy demostrar un uso avanzado de la inteligencia artificial distingue a un profesional. Mañana será el requisito mínimo, y ahí empieza la competencia de verdad.

Si yo estuviera empezando, o quisiera seguir siendo competitivo, cultivaría tres cosas.

**Comunicación precisa.** Poner en palabras el propio flujo de trabajo, de la manera más inequívoca posible. Con eso se programa a un agente. Es una capacidad escasa en una época en la que casi no se lee.

**Pensamiento estructurado.** Dividir un problema en pasos que se puedan delegar y verificar.

**Criterio.** Saber cuál es el método, cuáles las hipótesis y cuáles los modelos mentales que permiten juzgar un resultado y no pillarse los dedos. Eso solo lo da el conocimiento del campo. Es, en el fondo, lo que enseña una universidad.

Un colega me propuso una imagen que resume bien el cambio. Hace unos años, la maleta del ingeniero de diseño tenía tres cosas: los libros y manuales, algunos modelos ya resueltos y las famosas hojas de cálculo. Uno las llevaba en un disco a donde fuera. Ahora en esa maleta va a pesar más otra cosa: las habilidades propias, que de algún modo unifican las tres anteriores. Antes había que tener el tratado de mecánica de sólidos; ahora hay que tener la habilidad de análisis y la de búsqueda.

De ahí se sigue una obligación para los programas de formación, en pregrado y en posgrado. No basta con que los estudiantes usen habilidades ajenas. Lo que va a distinguir a un egresado es que aprendió a desarrollar las suyas y las lleva consigo a la empresa. Y lo que puede distinguir a un departamento es haber construido, con juicio, su propio banco.

No creo que esto sea el cataclismo de la profesión. Creo que es un renacimiento, para quienes de verdad son profesionales. El resto quedará en esa masa gris de los que producen cosas con inteligencia artificial sin mucho juicio, y eso ya se ve feo. El problema nunca fue la herramienta. El problema es usarla sin juicio, sin criterio y sin oficio.

La pregunta con la que conviene cerrar es la misma con la que conviene empezar a trabajar: de todo lo que hago, ¿qué repito?, ¿dónde me duele?, ¿qué puedo convertir en un protocolo con entradas definidas, salidas esperadas y un lugar preciso para mi firma?
