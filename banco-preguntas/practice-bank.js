/* Estadística Abierta · Banco de práctica
   Contiene los bancos de Quiz, ¿Qué usarías? y Verdadero/Falso.
   Cárgalo antes del script principal de la página Práctica.
*/

window.questionBank = [


    /* =======================================================
       ESTADÍSTICA DESCRIPTIVA
    ======================================================== */


    {
      module:"descriptiva",
      moduleName:"Estadística descriptiva",
      topic:"Tipos de variables",
      level:"Básico",

      question:
        "Se registra el número de hermanos de cada estudiante. ¿Qué tipo de variable es?",

      options:[
        "Cualitativa nominal",
        "Cuantitativa discreta",
        "Cuantitativa continua",
        "Cualitativa ordinal"
      ],

      correct:1,

      explanations:[
        "No es nominal porque los valores representan cantidades numéricas, no categorías sin orden.",
        "Correcto. Es un conteo y solo puede tomar valores enteros como 0, 1, 2, 3, etc.",
        "No es continua porque no tendría sentido registrar, por ejemplo, 2.7 hermanos.",
        "No es ordinal porque no estamos clasificando personas en categorías ordenadas."
      ],

      concept:
        "Los conteos suelen ser variables cuantitativas discretas."
    },


    {
      module:"descriptiva",
      moduleName:"Estadística descriptiva",
      topic:"Escalas de medición",
      level:"Básico",

      question:
        "Una encuesta clasifica el servicio como malo, regular, bueno o excelente. ¿Qué escala corresponde?",

      options:[
        "Nominal",
        "Ordinal",
        "Intervalo",
        "Razón"
      ],

      correct:1,

      explanations:[
        "La escala nominal no posee un orden natural entre sus categorías.",
        "Correcto. Las categorías tienen un orden, pero las distancias entre ellas no son cuantificables.",
        "No es intervalo porque no existen distancias numéricas iguales entre las categorías.",
        "No es razón porque no existe un cero absoluto ni relaciones numéricas del tipo 'el doble'."
      ],

      concept:
        "Una escala ordinal clasifica categorías que sí poseen un orden."
    },


    {
      module:"descriptiva",
      moduleName:"Estadística descriptiva",
      topic:"Media y mediana",
      level:"Básico",

      question:
        "Los datos son 3, 5, 5, 7 y 10. ¿Cuál es la media?",

      options:[
        "5",
        "6",
        "7",
        "30"
      ],

      correct:1,

      explanations:[
        "5 es la mediana y también la moda, pero no la media.",
        "Correcto. La suma es 30 y 30 ÷ 5 = 6.",
        "7 es uno de los valores observados, pero no representa la media.",
        "30 es la suma de los datos; todavía falta dividirla entre 5 observaciones."
      ],

      concept:
        "Media = suma de los valores ÷ número de observaciones."
    },


    {
      module:"descriptiva",
      moduleName:"Estadística descriptiva",
      topic:"Medidas de centro",
      level:"Intermedio",

      question:
        "Una distribución presenta valores extremadamente altos. ¿Qué medida de centro suele ser más resistente?",

      options:[
        "Media",
        "Mediana",
        "Rango",
        "Varianza"
      ],

      correct:1,

      explanations:[
        "La media puede desplazarse considerablemente cuando existen valores extremos.",
        "Correcto. La mediana depende de la posición de los datos y es más resistente a extremos.",
        "El rango mide dispersión, no tendencia central.",
        "La varianza mide dispersión y además es sensible a valores extremos."
      ],

      concept:
        "La mediana es una medida robusta del centro frente a valores extremos."
    },


    {
      module:"descriptiva",
      moduleName:"Estadística descriptiva",
      topic:"Dispersión",
      level:"Intermedio",

      question:
        "Dos grupos tienen la misma media. A tiene desviación estándar 4 y B tiene desviación estándar 11. ¿Cuál es más homogéneo?",

      options:[
        "Grupo A",
        "Grupo B",
        "Son igual de homogéneos",
        "No puede compararse"
      ],

      correct:0,

      explanations:[
        "Correcto. Una menor desviación estándar implica menor dispersión alrededor de la media.",
        "B tiene mayor desviación estándar, por lo que sus datos están más dispersos.",
        "No son igual de homogéneos porque sus desviaciones estándar son muy diferentes.",
        "Como tienen la misma media y conocemos sus desviaciones estándar, sí podemos comparar la dispersión."
      ],

      concept:
        "Con medias comparables, una menor desviación estándar indica mayor homogeneidad."
    },


    {
      module:"descriptiva",
      moduleName:"Estadística descriptiva",
      topic:"Coeficiente de variación",
      level:"Intermedio",

      question:
        "¿Qué medida resulta especialmente útil para comparar variabilidad relativa entre grupos con medias de diferente magnitud?",

      options:[
        "Rango",
        "Coeficiente de variación",
        "Mediana",
        "Primer cuartil"
      ],

      correct:1,

      explanations:[
        "El rango es una medida absoluta y depende únicamente de los valores extremos.",
        "Correcto. El coeficiente de variación relaciona la desviación estándar con la media.",
        "La mediana describe posición central, no variabilidad relativa.",
        "El primer cuartil describe posición, no dispersión relativa."
      ],

      concept:
        "CV = desviación estándar / media, normalmente expresado en porcentaje."
    },


    {
      module:"descriptiva",
      moduleName:"Estadística descriptiva",
      topic:"Percentiles",
      level:"Intermedio",

      question:
        "Estar en el percentil 90 significa necesariamente haber obtenido una puntuación de 90.",

      options:[
        "Sí, siempre",
        "No",
        "Solo si la media es 90",
        "Solo en distribuciones normales"
      ],

      correct:1,

      explanations:[
        "Un percentil representa posición relativa, no necesariamente una puntuación con el mismo número.",
        "Correcto. Percentil 90 indica una posición relativa dentro de la distribución.",
        "La interpretación del percentil no depende de que la media sea 90.",
        "Los percentiles también existen en distribuciones que no son normales."
      ],

      concept:
        "Percentil y puntuación observada son conceptos diferentes."
    },


    {
      module:"descriptiva",
      moduleName:"Estadística descriptiva",
      topic:"Asimetría",
      level:"Intermedio",

      question:
        "Si una distribución tiene una cola larga hacia los valores altos, ¿qué tipo de asimetría presenta?",

      options:[
        "Negativa",
        "Positiva",
        "Simétrica",
        "No puede determinarse"
      ],

      correct:1,

      explanations:[
        "La asimetría negativa tiene la cola larga hacia valores bajos.",
        "Correcto. Una cola larga hacia la derecha corresponde a asimetría positiva.",
        "Una distribución simétrica tendría colas de comportamiento semejante en ambos lados.",
        "La dirección de la cola permite identificar el signo de la asimetría."
      ],

      concept:
        "Cola hacia la derecha = asimetría positiva."
    },


    {
      module:"descriptiva",
      moduleName:"Estadística descriptiva",
      topic:"Valores atípicos",
      level:"Avanzado",

      question:
        "Si Q1 = 10 y Q3 = 18, ¿cuál es el límite superior usando la regla de 1.5 IQR?",

      options:[
        "20",
        "26",
        "30",
        "32"
      ],

      correct:2,

      explanations:[
        "20 no incorpora correctamente 1.5 veces el rango intercuartílico.",
        "26 resultaría de sumar solo una vez el IQR, no 1.5 veces.",
        "Correcto. IQR = 8 y 18 + 1.5 × 8 = 30.",
        "32 supone un incremento incorrecto respecto de Q3."
      ],

      concept:
        "Límite superior = Q3 + 1.5 × IQR."
    },


    {
      module:"descriptiva",
      moduleName:"Estadística descriptiva",
      topic:"Interpretación",
      level:"Avanzado",

      question:
        "Con fuerte asimetría y valores extremos, ¿qué combinación suele ser más robusta para centro y dispersión?",

      options:[
        "Media y varianza",
        "Media y desviación estándar",
        "Mediana e IQR",
        "Moda y rango"
      ],

      correct:2,

      explanations:[
        "Media y varianza son sensibles a valores extremos.",
        "La desviación estándar y la media pueden verse alteradas por extremos.",
        "Correcto. Mediana e IQR son medidas resistentes y suelen describir mejor distribuciones muy asimétricas.",
        "La moda y el rango no constituyen la combinación robusta estándar para este objetivo."
      ],

      concept:
        "En distribuciones asimétricas suele preferirse mediana + IQR."
    },


    /* =======================================================
       PROBABILIDAD
    ======================================================== */


    {
      module:"probabilidad",
      moduleName:"Probabilidad",
      topic:"Espacio muestral",
      level:"Básico",

      question:
        "Al lanzar una moneda dos veces, ¿cuántos resultados elementales tiene el espacio muestral?",

      options:[
        "2",
        "3",
        "4",
        "8"
      ],

      correct:2,

      explanations:[
        "Dos es el número de resultados posibles en un lanzamiento, no en dos lanzamientos.",
        "Tres sería contar solo cantidades de caras, pero no los resultados elementales ordenados.",
        "Correcto: CC, CS, SC y SS.",
        "Ocho correspondería a tres lanzamientos de una moneda."
      ],

      concept:
        "Dos resultados por lanzamiento durante dos lanzamientos producen 2 × 2 = 4 resultados."
    },


    {
      module:"probabilidad",
      moduleName:"Probabilidad",
      topic:"Complemento",
      level:"Básico",

      question:
        "Si P(A) = 0.68, ¿cuánto vale P(Aᶜ)?",

      options:[
        "0.22",
        "0.32",
        "0.68",
        "1.68"
      ],

      correct:1,

      explanations:[
        "0.22 no completa la probabilidad total hasta 1.",
        "Correcto. P(Aᶜ) = 1 − 0.68 = 0.32.",
        "0.68 es P(A), no su complemento.",
        "Una probabilidad no puede ser mayor que 1."
      ],

      concept:
        "P(Aᶜ) = 1 − P(A)."
    },


    {
      module:"probabilidad",
      moduleName:"Probabilidad",
      topic:"Regla de adición",
      level:"Intermedio",

      question:
        "P(A)=0.50, P(B)=0.40 y P(A∩B)=0.15. ¿Cuánto vale P(A∪B)?",

      options:[
        "0.60",
        "0.75",
        "0.90",
        "1.05"
      ],

      correct:1,

      explanations:[
        "0.60 no resulta de aplicar correctamente la regla general de adición.",
        "Correcto. 0.50 + 0.40 − 0.15 = 0.75.",
        "0.90 suma A y B pero cuenta dos veces la intersección.",
        "1.05 aparece al sumar la intersección en vez de restarla y además excede 1."
      ],

      concept:
        "P(A∪B)=P(A)+P(B)−P(A∩B)."
    },


    {
      module:"probabilidad",
      moduleName:"Probabilidad",
      topic:"Probabilidad condicional",
      level:"Intermedio",

      question:
        "De 100 personas, 40 pertenecen a A y 20 pertenecen simultáneamente a A y B. ¿Cuánto vale P(B|A)?",

      options:[
        "0.20",
        "0.40",
        "0.50",
        "0.80"
      ],

      correct:2,

      explanations:[
        "0.20 usa el total de 100 como denominador, pero al condicionar por A el universo se reduce.",
        "0.40 es la proporción que pertenece a A, no la probabilidad de B condicionada a A.",
        "Correcto. P(B|A)=20/40=0.50.",
        "0.80 no corresponde a la proporción conjunta dentro del grupo A."
      ],

      concept:
        "En P(B|A), el denominador corresponde al evento A."
    },


    {
      module:"probabilidad",
      moduleName:"Probabilidad",
      topic:"Multiplicación",
      level:"Intermedio",

      question:
        "Una urna contiene 3 bolas rojas y 2 azules. Se extraen dos sin reemplazo. ¿Cuál es P(dos rojas)?",

      options:[
        "0.20",
        "0.30",
        "0.36",
        "0.60"
      ],

      correct:1,

      explanations:[
        "0.20 no representa el producto de las probabilidades de ambas extracciones.",
        "Correcto. (3/5) × (2/4) = 6/20 = 0.30.",
        "0.36 sería (3/5)² y correspondería al caso con reemplazo.",
        "0.60 es únicamente la probabilidad de obtener roja en la primera extracción."
      ],

      concept:
        "Sin reemplazo, la composición de la urna cambia después de la primera extracción."
    },


    {
      module:"probabilidad",
      moduleName:"Probabilidad",
      topic:"Independencia",
      level:"Intermedio",

      question:
        "Si P(A)=0.5, P(B)=0.4 y P(A∩B)=0.2, ¿son A y B independientes?",

      options:[
        "Sí",
        "No",
        "Solo si son mutuamente excluyentes",
        "No hay suficiente información"
      ],

      correct:0,

      explanations:[
        "Correcto. P(A)P(B)=0.5×0.4=0.2, que coincide con P(A∩B).",
        "Sí podemos comprobar la independencia porque conocemos las probabilidades necesarias.",
        "Eventos mutuamente excluyentes con probabilidad positiva no son independientes.",
        "La información sí es suficiente para comprobar P(A∩B)=P(A)P(B)."
      ],

      concept:
        "Independencia: P(A∩B)=P(A)P(B)."
    },


    {
      module:"probabilidad",
      moduleName:"Probabilidad",
      topic:"Probabilidad total",
      level:"Avanzado",

      question:
        "El 70 % proviene de A y 30 % de B. P(E|A)=0.05 y P(E|B)=0.10. ¿Cuánto vale P(E)?",

      options:[
        "0.050",
        "0.065",
        "0.075",
        "0.150"
      ],

      correct:1,

      explanations:[
        "0.050 utiliza únicamente la tasa condicional del grupo A.",
        "Correcto. 0.70×0.05 + 0.30×0.10 = 0.065.",
        "0.075 es el promedio simple de 0.05 y 0.10, pero los grupos no tienen el mismo peso.",
        "0.150 suma las tasas condicionales sin ponderarlas por el tamaño de cada grupo."
      ],

      concept:
        "La probabilidad total es un promedio ponderado de probabilidades condicionales."
    },


    {
      module:"probabilidad",
      moduleName:"Probabilidad",
      topic:"Bayes",
      level:"Avanzado",

      question:
        "Se sabe que P(B)=0.30, P(E|B)=0.10 y P(E)=0.065. ¿Cuánto vale aproximadamente P(B|E)?",

      options:[
        "0.30",
        "0.462",
        "0.650",
        "0.769"
      ],

      correct:1,

      explanations:[
        "0.30 es P(B), la probabilidad previa, no la probabilidad posterior dada E.",
        "Correcto. P(B|E)=0.30×0.10 / 0.065 ≈ 0.462.",
        "0.650 confunde la probabilidad total de E con la probabilidad posterior.",
        "0.769 no resulta de aplicar correctamente el numerador de Bayes."
      ],

      concept:
        "Bayes actualiza la probabilidad previa utilizando la evidencia observada."
    },


    {
      module:"probabilidad",
      moduleName:"Probabilidad",
      topic:"Conteo",
      level:"Intermedio",

      question:
        "Se eligen 3 personas de un grupo de 8 para formar un comité sin cargos distintos. ¿Cuántos comités existen?",

      options:[
        "24",
        "56",
        "336",
        "512"
      ],

      correct:1,

      explanations:[
        "24 no corresponde al número de combinaciones posibles de 8 elementos tomados de 3.",
        "Correcto. C(8,3)=56.",
        "336 corresponde a una selección donde el orden sí importa: 8×7×6.",
        "512 es 8³ y permitiría repeticiones además de considerar posiciones."
      ],

      concept:
        "Si el orden no importa, utilizamos combinaciones."
    },


    {
      module:"probabilidad",
      moduleName:"Probabilidad",
      topic:"Conceptos",
      level:"Avanzado",

      question:
        "Dos eventos con probabilidades positivas son mutuamente excluyentes. ¿Pueden ser independientes?",

      options:[
        "Sí, siempre",
        "Sí, si tienen la misma probabilidad",
        "No",
        "Solo si P(A)+P(B)=1"
      ],

      correct:2,

      explanations:[
        "Si son mutuamente excluyentes, su intersección tiene probabilidad 0, lo que normalmente contradice la independencia.",
        "Tener la misma probabilidad no convierte eventos mutuamente excluyentes en independientes.",
        "Correcto. Si ambos tienen probabilidad positiva, P(A)P(B)>0 pero P(A∩B)=0.",
        "Que sus probabilidades sumen 1 no resuelve la contradicción con la condición de independencia."
      ],

      concept:
        "Mutuamente excluyente e independiente son conceptos distintos."
    },

    /* =======================================================
       AMPLIACIÓN DEL BANCO · 30 PREGUNTAS NUEVAS POR MÓDULO
       Total: 40 Descriptiva + 40 Probabilidad
    ======================================================== */

{
        "module": "descriptiva",
        "moduleName": "Estadística descriptiva",
        "topic": "Población y muestra",
        "level": "Básico",
        "question": "Una universidad desea estudiar a todos sus 8 000 estudiantes, pero encuesta a 500. ¿Qué representan los 8 000 estudiantes?",
        "options": [
            "La muestra",
            "La población",
            "La variable",
            "El estadístico"
        ],
        "correct": 1,
        "explanations": [
            "La muestra son únicamente los 500 estudiantes encuestados.",
            "Correcto. La población es el conjunto total sobre el que se desea estudiar.",
            "La variable es la característica que se registra en cada estudiante.",
            "Un estadístico es una medida calculada usando la muestra."
        ],
        "concept": "Población = conjunto total de unidades de interés; muestra = subconjunto observado."
    },
    {
        "module": "descriptiva",
        "moduleName": "Estadística descriptiva",
        "topic": "Unidad de análisis",
        "level": "Básico",
        "question": "En un estudio sobre el consumo eléctrico mensual de 300 viviendas, ¿cuál es la unidad de análisis?",
        "options": [
            "Cada vivienda",
            "Cada kilovatio-hora",
            "Las 300 viviendas juntas",
            "El consumo promedio"
        ],
        "correct": 0,
        "explanations": [
            "Correcto. Cada vivienda es la unidad sobre la cual se observa la variable.",
            "El kilovatio-hora es una unidad de medida, no la unidad de análisis.",
            "Las 300 viviendas forman la muestra, no una unidad individual.",
            "El consumo promedio es un resumen estadístico."
        ],
        "concept": "La unidad de análisis es el elemento individual sobre el que se registra información."
    },
    {
        "module": "descriptiva",
        "moduleName": "Estadística descriptiva",
        "topic": "Tipos de variables",
        "level": "Básico",
        "question": "La temperatura corporal medida en grados Celsius se considera normalmente una variable:",
        "options": [
            "Cualitativa nominal",
            "Cuantitativa discreta",
            "Cuantitativa continua",
            "Cualitativa ordinal"
        ],
        "correct": 2,
        "explanations": [
            "No describe categorías sin orden.",
            "No es un conteo restringido a valores enteros.",
            "Correcto. Puede tomar valores dentro de un intervalo con precisión arbitraria.",
            "No clasifica categorías ordenadas."
        ],
        "concept": "Las mediciones como temperatura, longitud o peso suelen modelarse como variables continuas."
    },
    {
        "module": "descriptiva",
        "moduleName": "Estadística descriptiva",
        "topic": "Escalas de medición",
        "level": "Básico",
        "question": "El tipo de sangre A, B, AB u O corresponde a una escala:",
        "options": [
            "Nominal",
            "Ordinal",
            "Intervalo",
            "Razón"
        ],
        "correct": 0,
        "explanations": [
            "Correcto. Son categorías sin un orden natural.",
            "No existe un orden inherente entre A, B, AB y O.",
            "No hay distancias numéricas iguales entre categorías.",
            "No existe cero absoluto ni cocientes numéricos interpretables."
        ],
        "concept": "La escala nominal clasifica sin establecer orden."
    },
    {
        "module": "descriptiva",
        "moduleName": "Estadística descriptiva",
        "topic": "Escalas de medición",
        "level": "Intermedio",
        "question": "¿Cuál de estas variables está en escala de razón?",
        "options": [
            "Temperatura en °C",
            "Año calendario",
            "Peso en kilogramos",
            "Nivel de satisfacción"
        ],
        "correct": 2,
        "explanations": [
            "En °C el cero no representa ausencia de temperatura.",
            "El año calendario tiene diferencias interpretables, pero no un cero absoluto natural.",
            "Correcto. El peso tiene cero significativo y permite comparar proporciones.",
            "El nivel de satisfacción suele ser ordinal."
        ],
        "concept": "En una escala de razón, el cero representa ausencia de la magnitud y los cocientes son interpretables."
    },
    {
        "module": "descriptiva",
        "moduleName": "Estadística descriptiva",
        "topic": "Frecuencias",
        "level": "Básico",
        "question": "Si una categoría aparece 18 veces en una muestra de 60 observaciones, ¿cuál es su frecuencia relativa?",
        "options": [
            "0.18",
            "0.30",
            "0.42",
            "3.33"
        ],
        "correct": 1,
        "explanations": [
            "0.18 confunde frecuencia absoluta con proporción.",
            "Correcto. 18/60 = 0.30.",
            "0.42 no corresponde al cociente 18/60.",
            "Una frecuencia relativa debe estar entre 0 y 1."
        ],
        "concept": "Frecuencia relativa = frecuencia absoluta / total de observaciones."
    },
    {
        "module": "descriptiva",
        "moduleName": "Estadística descriptiva",
        "topic": "Frecuencias",
        "level": "Intermedio",
        "question": "En una tabla de frecuencias, las frecuencias relativas de todas las categorías deben sumar:",
        "options": [
            "0",
            "1",
            "El tamaño de la muestra",
            "100 solo si son porcentajes"
        ],
        "correct": 1,
        "explanations": [
            "No pueden sumar 0 salvo que no existieran observaciones.",
            "Correcto. En forma proporcional deben sumar 1.",
            "Las frecuencias absolutas, no las relativas, suman el tamaño muestral.",
            "Si se expresan como porcentajes suman 100 %, equivalente a 1 en proporciones."
        ],
        "concept": "Las frecuencias relativas cubren toda la distribución y suman 1."
    },
    {
        "module": "descriptiva",
        "moduleName": "Estadística descriptiva",
        "topic": "Gráficos estadísticos",
        "level": "Básico",
        "question": "¿Qué gráfico es especialmente adecuado para mostrar la distribución de una variable cuantitativa continua agrupada en intervalos?",
        "options": [
            "Gráfico circular",
            "Histograma",
            "Diagrama de barras de categorías",
            "Diagrama de sectores"
        ],
        "correct": 1,
        "explanations": [
            "El gráfico circular se usa principalmente para categorías.",
            "Correcto. El histograma representa frecuencias sobre intervalos de una variable cuantitativa.",
            "Las barras separadas son más naturales para categorías o valores discretos.",
            "Un diagrama de sectores muestra composición categórica."
        ],
        "concept": "El histograma permite observar forma, concentración y dispersión de datos cuantitativos."
    },
    {
        "module": "descriptiva",
        "moduleName": "Estadística descriptiva",
        "topic": "Gráficos estadísticos",
        "level": "Intermedio",
        "question": "¿Cuál es la principal diferencia visual entre un histograma y un gráfico de barras categórico?",
        "options": [
            "El histograma siempre usa porcentajes",
            "Las barras del histograma representan intervalos contiguos",
            "El gráfico de barras nunca puede ordenar categorías",
            "No existe diferencia"
        ],
        "correct": 1,
        "explanations": [
            "Un histograma puede mostrar frecuencias absolutas o relativas.",
            "Correcto. Sus barras suelen tocarse porque representan intervalos contiguos de una escala numérica.",
            "Las categorías sí pueden ordenarse cuando tiene sentido.",
            "Son gráficos distintos con propósitos diferentes."
        ],
        "concept": "Histograma: variable cuantitativa por intervalos; barras: categorías o valores discretos."
    },
    {
        "module": "descriptiva",
        "moduleName": "Estadística descriptiva",
        "topic": "Media",
        "level": "Intermedio",
        "question": "Si todos los valores de un conjunto aumentan en 5 unidades, ¿qué ocurre con la media?",
        "options": [
            "No cambia",
            "Aumenta en 5",
            "Se multiplica por 5",
            "Aumenta en 25"
        ],
        "correct": 1,
        "explanations": [
            "La media sí cambia cuando todos los datos se desplazan.",
            "Correcto. Sumar una constante a todos los datos suma esa constante a la media.",
            "Multiplicar por 5 sería otra transformación diferente.",
            "No existe razón para aumentar en 25."
        ],
        "concept": "Una transformación X+c desplaza la media en c."
    },
    {
        "module": "descriptiva",
        "moduleName": "Estadística descriptiva",
        "topic": "Mediana",
        "level": "Intermedio",
        "question": "Los datos ordenados son 2, 4, 7, 9, 13 y 20. ¿Cuál es la mediana?",
        "options": [
            "7",
            "8",
            "9",
            "9.5"
        ],
        "correct": 1,
        "explanations": [
            "7 es el tercer valor, pero hay un número par de observaciones.",
            "Correcto. La mediana es (7+9)/2 = 8.",
            "9 es el cuarto valor, no el promedio de los dos centrales.",
            "9.5 no corresponde al promedio de 7 y 9."
        ],
        "concept": "Con n par, la mediana es el promedio de los dos valores centrales."
    },
    {
        "module": "descriptiva",
        "moduleName": "Estadística descriptiva",
        "topic": "Moda",
        "level": "Básico",
        "question": "En los datos 2, 3, 3, 4, 4, 4, 7, ¿cuál es la moda?",
        "options": [
            "3",
            "4",
            "5",
            "No existe"
        ],
        "correct": 1,
        "explanations": [
            "3 aparece dos veces, pero 4 aparece tres.",
            "Correcto. 4 es el valor con mayor frecuencia.",
            "5 ni siquiera aparece en los datos.",
            "Sí existe una moda claramente definida."
        ],
        "concept": "Moda = valor o categoría con mayor frecuencia."
    },
    {
        "module": "descriptiva",
        "moduleName": "Estadística descriptiva",
        "topic": "Media, mediana y moda",
        "level": "Avanzado",
        "question": "En una distribución con fuerte asimetría positiva, ¿qué relación suele observarse entre media y mediana?",
        "options": [
            "Media < mediana",
            "Media ≈ 0",
            "Media > mediana",
            "Siempre son iguales"
        ],
        "correct": 2,
        "explanations": [
            "Eso es más compatible con asimetría negativa.",
            "La asimetría no implica que la media sea cercana a cero.",
            "Correcto. Valores altos extremos suelen arrastrar la media hacia la derecha.",
            "Solo en distribuciones simétricas pueden coincidir con mayor frecuencia."
        ],
        "concept": "Con asimetría positiva, la media suele quedar por encima de la mediana."
    },
    {
        "module": "descriptiva",
        "moduleName": "Estadística descriptiva",
        "topic": "Cuartiles",
        "level": "Intermedio",
        "question": "Si Q1 = 15 y Q3 = 27, ¿cuánto vale el rango intercuartílico?",
        "options": [
            "12",
            "21",
            "42",
            "1.8"
        ],
        "correct": 0,
        "explanations": [
            "Correcto. IQR = Q3 − Q1 = 12.",
            "21 no es la diferencia entre los cuartiles.",
            "42 corresponde a una suma, no al IQR.",
            "1.8 es un cociente que no define el IQR."
        ],
        "concept": "IQR = Q3 − Q1 y mide la amplitud del 50 % central de los datos."
    },
    {
        "module": "descriptiva",
        "moduleName": "Estadística descriptiva",
        "topic": "Percentiles",
        "level": "Intermedio",
        "question": "El percentil 25 coincide conceptualmente con:",
        "options": [
            "La media",
            "El primer cuartil",
            "El tercer cuartil",
            "La moda"
        ],
        "correct": 1,
        "explanations": [
            "La media no es una medida de posición percentilar.",
            "Correcto. P25 corresponde al primer cuartil Q1.",
            "Q3 corresponde aproximadamente al percentil 75.",
            "La moda se basa en frecuencia, no en posición acumulada."
        ],
        "concept": "Q1 ≈ P25, Q2 = mediana ≈ P50 y Q3 ≈ P75."
    },
    {
        "module": "descriptiva",
        "moduleName": "Estadística descriptiva",
        "topic": "Rango",
        "level": "Básico",
        "question": "Para los datos 8, 11, 14, 19 y 25, ¿cuál es el rango?",
        "options": [
            "14",
            "17",
            "25",
            "33"
        ],
        "correct": 1,
        "explanations": [
            "14 no es la diferencia entre máximo y mínimo.",
            "Correcto. 25 − 8 = 17.",
            "25 es únicamente el máximo.",
            "33 es la suma del mínimo y el máximo."
        ],
        "concept": "Rango = valor máximo − valor mínimo."
    },
    {
        "module": "descriptiva",
        "moduleName": "Estadística descriptiva",
        "topic": "Varianza",
        "level": "Intermedio",
        "question": "¿Por qué la varianza nunca puede ser negativa?",
        "options": [
            "Porque la media siempre es positiva",
            "Porque suma desviaciones al cuadrado",
            "Porque usa valores absolutos",
            "Porque divide entre n"
        ],
        "correct": 1,
        "explanations": [
            "La media puede ser negativa.",
            "Correcto. Las desviaciones respecto de la media se elevan al cuadrado antes de agregarse.",
            "La definición usual de varianza no usa valores absolutos.",
            "Dividir entre n no evita por sí mismo valores negativos."
        ],
        "concept": "La varianza promedia desviaciones cuadráticas respecto de la media."
    },
    {
        "module": "descriptiva",
        "moduleName": "Estadística descriptiva",
        "topic": "Varianza muestral",
        "level": "Avanzado",
        "question": "En la varianza muestral usual, ¿por qué se divide entre n−1 en lugar de n?",
        "options": [
            "Para hacer el resultado más pequeño",
            "Por la corrección de Bessel al estimar la varianza poblacional",
            "Porque n nunca puede usarse",
            "Para eliminar valores atípicos"
        ],
        "correct": 1,
        "explanations": [
            "Dividir entre n−1 suele aumentar, no reducir, el valor respecto de dividir entre n.",
            "Correcto. La corrección compensa el sesgo asociado a estimar la media con la misma muestra.",
            "n sí se usa en la varianza poblacional y en otros contextos.",
            "La corrección no elimina observaciones atípicas."
        ],
        "concept": "La corrección de Bessel usa n−1 para obtener un estimador insesgado de la varianza poblacional bajo condiciones estándar."
    },
    {
        "module": "descriptiva",
        "moduleName": "Estadística descriptiva",
        "topic": "Desviación estándar",
        "level": "Intermedio",
        "question": "Si la varianza es 49, ¿cuál es la desviación estándar?",
        "options": [
            "7",
            "24.5",
            "49",
            "98"
        ],
        "correct": 0,
        "explanations": [
            "Correcto. La desviación estándar es la raíz cuadrada de la varianza.",
            "24.5 no es √49.",
            "49 es la varianza, no su raíz.",
            "98 duplica la varianza y no corresponde a la definición."
        ],
        "concept": "Desviación estándar = √varianza."
    },
    {
        "module": "descriptiva",
        "moduleName": "Estadística descriptiva",
        "topic": "Transformaciones",
        "level": "Avanzado",
        "question": "Si todos los datos se multiplican por 3, ¿qué ocurre con la desviación estándar?",
        "options": [
            "No cambia",
            "Se multiplica por 3",
            "Se multiplica por 9",
            "Aumenta exactamente 3 unidades"
        ],
        "correct": 1,
        "explanations": [
            "La escala de los datos sí afecta la desviación estándar.",
            "Correcto. Multiplicar X por 3 multiplica su desviación estándar por |3|.",
            "La varianza se multiplica por 9, no la desviación estándar.",
            "El cambio es multiplicativo, no una suma fija."
        ],
        "concept": "Para Y=aX+b, SD(Y)=|a|SD(X)."
    },
    {
        "module": "descriptiva",
        "moduleName": "Estadística descriptiva",
        "topic": "Coeficiente de variación",
        "level": "Avanzado",
        "question": "¿En cuál situación debe usarse con especial cautela el coeficiente de variación?",
        "options": [
            "Cuando la media está cerca de cero",
            "Cuando la muestra es grande",
            "Cuando la desviación estándar es positiva",
            "Cuando los datos tienen unidades"
        ],
        "correct": 0,
        "explanations": [
            "Correcto. Dividir por una media cercana a cero puede producir valores enormes o inestables.",
            "Un tamaño grande no invalida por sí mismo el CV.",
            "La desviación estándar suele ser no negativa; eso no es el principal problema.",
            "Justamente el CV elimina unidades al formar un cociente."
        ],
        "concept": "El CV puede ser poco interpretable cuando la media es cero o muy cercana a cero."
    },
    {
        "module": "descriptiva",
        "moduleName": "Estadística descriptiva",
        "topic": "Asimetría",
        "level": "Intermedio",
        "question": "Una distribución aproximadamente simétrica debería tener un coeficiente de asimetría cercano a:",
        "options": [
            "−3",
            "0",
            "1",
            "3"
        ],
        "correct": 1,
        "explanations": [
            "−3 indicaría una asimetría negativa marcada en muchas escalas.",
            "Correcto. La simetría se asocia con asimetría cercana a cero.",
            "1 suele sugerir asimetría positiva apreciable, según el estimador.",
            "3 indicaría una asimetría muy marcada."
        ],
        "concept": "Asimetría cercana a 0 sugiere una distribución aproximadamente simétrica."
    },
    {
        "module": "descriptiva",
        "moduleName": "Estadística descriptiva",
        "topic": "Curtosis",
        "level": "Avanzado",
        "question": "Cuando se usa exceso de curtosis, la distribución normal tiene valor teórico:",
        "options": [
            "−3",
            "0",
            "1",
            "3"
        ],
        "correct": 1,
        "explanations": [
            "−3 no es el exceso de curtosis normal.",
            "Correcto. El exceso de curtosis resta 3 a la curtosis convencional.",
            "1 no es el valor de referencia normal.",
            "3 es la curtosis convencional de la normal, no su exceso."
        ],
        "concept": "Curtosis normal = 3; exceso de curtosis normal = 0."
    },
    {
        "module": "descriptiva",
        "moduleName": "Estadística descriptiva",
        "topic": "Boxplot",
        "level": "Intermedio",
        "question": "En un boxplot, la línea dentro de la caja representa normalmente:",
        "options": [
            "La media",
            "La mediana",
            "El máximo",
            "La desviación estándar"
        ],
        "correct": 1,
        "explanations": [
            "Algunos gráficos pueden marcar la media aparte, pero no es la línea central estándar de la caja.",
            "Correcto. La línea dentro de la caja representa la mediana.",
            "El máximo se relaciona con el extremo del bigote o con puntos externos según el caso.",
            "La desviación estándar no se representa como esa línea."
        ],
        "concept": "La caja va de Q1 a Q3 y la línea interior marca la mediana."
    },
    {
        "module": "descriptiva",
        "moduleName": "Estadística descriptiva",
        "topic": "Valores atípicos",
        "level": "Avanzado",
        "question": "Si un dato supera Q3 + 1.5·IQR, ¿qué afirmación es correcta?",
        "options": [
            "Debe eliminarse automáticamente",
            "Es señalado como potencial atípico por esa regla",
            "Es necesariamente un error de medición",
            "La media deja de existir"
        ],
        "correct": 1,
        "explanations": [
            "La regla no ordena eliminar datos automáticamente.",
            "Correcto. Es una señal para revisar la observación, no una sentencia sobre su validez.",
            "Puede ser legítimo; no implica necesariamente error.",
            "La presencia de un atípico no impide calcular la media."
        ],
        "concept": "La regla 1.5·IQR identifica observaciones potencialmente atípicas que deben investigarse."
    },
    {
        "module": "descriptiva",
        "moduleName": "Estadística descriptiva",
        "topic": "Interpretación",
        "level": "Avanzado",
        "question": "Dos conjuntos tienen la misma media y desviación estándar. ¿Significa eso que tienen necesariamente la misma distribución?",
        "options": [
            "Sí",
            "No",
            "Solo si n es igual",
            "Solo si la media es positiva"
        ],
        "correct": 1,
        "explanations": [
            "Media y desviación estándar no describen por completo la forma de una distribución.",
            "Correcto. Pueden diferir en asimetría, colas, multimodalidad u otros rasgos.",
            "Tener igual tamaño muestral tampoco garantiza igual distribución.",
            "El signo de la media no resuelve el problema."
        ],
        "concept": "Los mismos resúmenes pueden corresponder a distribuciones con formas distintas."
    },
    {
        "module": "descriptiva",
        "moduleName": "Estadística descriptiva",
        "topic": "Gráficos e interpretación",
        "level": "Avanzado",
        "question": "¿Qué combinación aporta más información sobre forma y valores atípicos de una variable cuantitativa?",
        "options": [
            "Solo la media",
            "Histograma y boxplot",
            "Solo una tabla con n",
            "Gráfico circular"
        ],
        "correct": 1,
        "explanations": [
            "La media resume centro, pero oculta forma y extremos.",
            "Correcto. El histograma muestra forma y el boxplot facilita ver posición, dispersión y posibles atípicos.",
            "El tamaño muestral no describe la forma.",
            "El gráfico circular no es apropiado para esta finalidad cuantitativa."
        ],
        "concept": "Usar gráficos complementarios mejora la interpretación descriptiva."
    },
    {
        "module": "descriptiva",
        "moduleName": "Estadística descriptiva",
        "topic": "Frecuencias acumuladas",
        "level": "Intermedio",
        "question": "Una frecuencia relativa acumulada de 0.72 hasta cierto valor significa que:",
        "options": [
            "72 % de las observaciones están en o por debajo de ese punto",
            "72 observaciones exactamente tienen ese valor",
            "La media es 0.72",
            "El 28 % está necesariamente por debajo"
        ],
        "correct": 0,
        "explanations": [
            "Correcto. La frecuencia acumulada agrega todas las observaciones hasta ese punto.",
            "No significa que todas tengan exactamente el mismo valor.",
            "No es una medida de tendencia central.",
            "El complemento 28 % está por encima, no necesariamente por debajo."
        ],
        "concept": "La frecuencia acumulada indica la proporción que no supera un valor o categoría ordenada."
    },
    {
        "module": "descriptiva",
        "moduleName": "Estadística descriptiva",
        "topic": "Media ponderada",
        "level": "Avanzado",
        "question": "Un curso tiene dos evaluaciones: una vale 40 % con nota 15 y otra 60 % con nota 18. ¿Cuál es la media ponderada?",
        "options": [
            "16.2",
            "16.5",
            "16.8",
            "17.0"
        ],
        "correct": 2,
        "explanations": [
            "16.2 no aplica correctamente los pesos.",
            "16.5 sería el promedio simple de 15 y 18.",
            "Correcto. 0.4·15 + 0.6·18 = 16.8.",
            "17.0 no coincide con la combinación ponderada."
        ],
        "concept": "Media ponderada = suma de cada valor multiplicado por su peso."
    },
    {
        "module": "descriptiva",
        "moduleName": "Estadística descriptiva",
        "topic": "Práctica integral",
        "level": "Avanzado",
        "question": "Una variable tiene media 50, mediana 42, gran dispersión y varios valores altos extremos. ¿Qué diagnóstico descriptivo es más coherente?",
        "options": [
            "Asimetría negativa",
            "Asimetría positiva",
            "Simetría perfecta",
            "Ausencia de valores extremos"
        ],
        "correct": 1,
        "explanations": [
            "Con cola izquierda suele esperarse media por debajo de la mediana.",
            "Correcto. Los valores altos extremos pueden arrastrar la media por encima de la mediana.",
            "La diferencia grande entre media y mediana contradice una simetría perfecta.",
            "El enunciado menciona explícitamente valores extremos altos."
        ],
        "concept": "Media claramente mayor que mediana y extremos altos son compatibles con asimetría positiva."
    },
    {
        "module": "probabilidad",
        "moduleName": "Probabilidad",
        "topic": "Experimentos aleatorios",
        "level": "Básico",
        "question": "¿Cuál de estas situaciones es un experimento aleatorio?",
        "options": [
            "Calcular 2+2",
            "Lanzar un dado y observar el resultado",
            "Medir una regla que siempre mide 30 cm exactos por definición",
            "Ordenar alfabéticamente una lista"
        ],
        "correct": 1,
        "explanations": [
            "El resultado de 2+2 está determinado.",
            "Correcto. Se conocen los resultados posibles, pero no cuál ocurrirá antes del lanzamiento.",
            "La descripción dada no incorpora incertidumbre aleatoria.",
            "Ordenar alfabéticamente sigue una regla determinista."
        ],
        "concept": "Un experimento aleatorio tiene resultados posibles conocidos pero resultado particular incierto."
    },
    {
        "module": "probabilidad",
        "moduleName": "Probabilidad",
        "topic": "Eventos",
        "level": "Básico",
        "question": "Al lanzar un dado, A={2,4,6}. ¿Cómo se describe A?",
        "options": [
            "Obtener un número impar",
            "Obtener un número par",
            "Obtener un número mayor que 4",
            "Obtener exactamente 2"
        ],
        "correct": 1,
        "explanations": [
            "Los impares serían {1,3,5}.",
            "Correcto. 2, 4 y 6 son los resultados pares.",
            "Mayores que 4 serían {5,6}.",
            "El evento contiene tres resultados, no uno."
        ],
        "concept": "Un evento es un subconjunto del espacio muestral."
    },
    {
        "module": "probabilidad",
        "moduleName": "Probabilidad",
        "topic": "Operaciones con eventos",
        "level": "Básico",
        "question": "¿Qué representa A∩B?",
        "options": [
            "Ocurre A o B o ambos",
            "Ocurren A y B simultáneamente",
            "No ocurre A",
            "No ocurre ni A ni B"
        ],
        "correct": 1,
        "explanations": [
            "Eso corresponde a la unión A∪B.",
            "Correcto. La intersección contiene los resultados comunes a A y B.",
            "Eso corresponde al complemento Aᶜ.",
            "Eso corresponde al complemento de la unión."
        ],
        "concept": "A∩B representa la ocurrencia simultánea de ambos eventos."
    },
    {
        "module": "probabilidad",
        "moduleName": "Probabilidad",
        "topic": "Operaciones con eventos",
        "level": "Básico",
        "question": "¿Qué representa A∪B?",
        "options": [
            "Ocurre al menos uno de los eventos",
            "Ocurren ambos necesariamente",
            "No ocurre ninguno",
            "Ocurre A pero nunca B"
        ],
        "correct": 0,
        "explanations": [
            "Correcto. La unión incluye A, B y su intersección.",
            "La ocurrencia simultánea corresponde a A∩B.",
            "No ocurre ninguno corresponde a (A∪B)ᶜ.",
            "La unión no excluye que B ocurra."
        ],
        "concept": "A∪B significa A o B o ambos."
    },
    {
        "module": "probabilidad",
        "moduleName": "Probabilidad",
        "topic": "Complemento",
        "level": "Básico",
        "question": "Si la probabilidad de que llueva es 0.25, ¿cuál es la probabilidad de que no llueva?",
        "options": [
            "0.25",
            "0.50",
            "0.75",
            "1.25"
        ],
        "correct": 2,
        "explanations": [
            "0.25 es la probabilidad del evento original.",
            "0.50 no completa el total a 1.",
            "Correcto. 1−0.25=0.75.",
            "Una probabilidad no puede exceder 1."
        ],
        "concept": "Evento y complemento suman probabilidad 1."
    },
    {
        "module": "probabilidad",
        "moduleName": "Probabilidad",
        "topic": "Propiedades básicas",
        "level": "Intermedio",
        "question": "Si A⊆B, ¿qué relación debe cumplirse?",
        "options": [
            "P(A)≥P(B)",
            "P(A)≤P(B)",
            "P(A)=1−P(B)",
            "P(A∩B)=0"
        ],
        "correct": 1,
        "explanations": [
            "Un subconjunto no puede tener mayor probabilidad que el conjunto que lo contiene.",
            "Correcto. La monotonicidad implica P(A)≤P(B).",
            "Esa igualdad solo corresponde a complementos, no a subconjuntos en general.",
            "Si A⊆B, la intersección A∩B es A, no necesariamente vacía."
        ],
        "concept": "Si A está contenido en B, su probabilidad no puede superar la de B."
    },
    {
        "module": "probabilidad",
        "moduleName": "Probabilidad",
        "topic": "Regla de adición",
        "level": "Intermedio",
        "question": "Si A y B son mutuamente excluyentes, P(A)=0.35 y P(B)=0.25. ¿Cuánto vale P(A∪B)?",
        "options": [
            "0.10",
            "0.60",
            "0.0875",
            "1.00"
        ],
        "correct": 1,
        "explanations": [
            "0.10 resta probabilidades sin motivo.",
            "Correcto. Como A∩B=0, la unión vale 0.35+0.25=0.60.",
            "0.0875 es el producto, no la suma para eventos excluyentes.",
            "No necesariamente cubren todo el espacio muestral."
        ],
        "concept": "Para eventos mutuamente excluyentes, P(A∪B)=P(A)+P(B)."
    },
    {
        "module": "probabilidad",
        "moduleName": "Probabilidad",
        "topic": "Regla de adición",
        "level": "Avanzado",
        "question": "P(A)=0.6, P(B)=0.5 y P(A∪B)=0.8. ¿Cuánto vale P(A∩B)?",
        "options": [
            "0.1",
            "0.2",
            "0.3",
            "0.8"
        ],
        "correct": 2,
        "explanations": [
            "0.1 no satisface la fórmula de adición.",
            "Con 0.2 la unión sería 0.9.",
            "Correcto. 0.6+0.5−0.8=0.3.",
            "La intersección no puede deducirse como igual a la unión."
        ],
        "concept": "Reordenando la regla: P(A∩B)=P(A)+P(B)−P(A∪B)."
    },
    {
        "module": "probabilidad",
        "moduleName": "Probabilidad",
        "topic": "Probabilidad condicional",
        "level": "Intermedio",
        "question": "Si P(A∩B)=0.12 y P(B)=0.30, ¿cuánto vale P(A|B)?",
        "options": [
            "0.12",
            "0.30",
            "0.40",
            "2.50"
        ],
        "correct": 2,
        "explanations": [
            "0.12 es la probabilidad conjunta, no la condicional.",
            "0.30 es P(B).",
            "Correcto. 0.12/0.30=0.40.",
            "Una probabilidad no puede ser 2.50."
        ],
        "concept": "P(A|B)=P(A∩B)/P(B), siempre que P(B)>0."
    },
    {
        "module": "probabilidad",
        "moduleName": "Probabilidad",
        "topic": "Probabilidad condicional",
        "level": "Avanzado",
        "question": "¿Por qué P(A|B) y P(B|A) no suelen ser iguales?",
        "options": [
            "Porque usan denominadores distintos",
            "Porque una siempre es mayor que 1",
            "Porque Bayes lo prohíbe",
            "Porque A y B nunca pueden ocurrir juntos"
        ],
        "correct": 0,
        "explanations": [
            "Correcto. Cada condicional restringe el universo a un evento diferente.",
            "Ambas deben estar entre 0 y 1.",
            "Bayes relaciona ambas condicionales; no las prohíbe.",
            "A y B sí pueden ocurrir simultáneamente."
        ],
        "concept": "Invertir la condición cambia el evento de referencia y, por tanto, el denominador."
    },
    {
        "module": "probabilidad",
        "moduleName": "Probabilidad",
        "topic": "Regla de multiplicación",
        "level": "Intermedio",
        "question": "Si P(A)=0.4 y P(B|A)=0.5, ¿cuánto vale P(A∩B)?",
        "options": [
            "0.20",
            "0.40",
            "0.50",
            "0.90"
        ],
        "correct": 0,
        "explanations": [
            "Correcto. 0.4×0.5=0.20.",
            "0.40 es P(A), falta incorporar la probabilidad condicional.",
            "0.50 es P(B|A), no la conjunta.",
            "0.90 suma probabilidades que deben multiplicarse en esta regla."
        ],
        "concept": "P(A∩B)=P(A)P(B|A)."
    },
    {
        "module": "probabilidad",
        "moduleName": "Probabilidad",
        "topic": "Sin reemplazo",
        "level": "Intermedio",
        "question": "Una bolsa tiene 4 bolas verdes y 1 amarilla. Se extraen dos sin reemplazo. ¿P(dos verdes)?",
        "options": [
            "0.48",
            "0.60",
            "0.64",
            "0.80"
        ],
        "correct": 1,
        "explanations": [
            "0.48 no corresponde al producto correcto sin reemplazo.",
            "Correcto. (4/5)×(3/4)=3/5=0.60.",
            "0.64 sería (4/5)², como si hubiera reemplazo.",
            "0.80 es solo la probabilidad de verde en la primera extracción."
        ],
        "concept": "Sin reemplazo, la segunda probabilidad cambia después de la primera extracción."
    },
    {
        "module": "probabilidad",
        "moduleName": "Probabilidad",
        "topic": "Independencia",
        "level": "Intermedio",
        "question": "Si A y B son independientes, P(A)=0.3 y P(B)=0.6. ¿Cuánto vale P(A∩B)?",
        "options": [
            "0.18",
            "0.30",
            "0.60",
            "0.90"
        ],
        "correct": 0,
        "explanations": [
            "Correcto. 0.3×0.6=0.18.",
            "0.30 es solo P(A).",
            "0.60 es solo P(B).",
            "0.90 es la suma, no la intersección de eventos independientes."
        ],
        "concept": "Para eventos independientes, P(A∩B)=P(A)P(B)."
    },
    {
        "module": "probabilidad",
        "moduleName": "Probabilidad",
        "topic": "Independencia",
        "level": "Avanzado",
        "question": "Si P(A|B)=P(A) y P(B)>0, ¿qué sugiere esta igualdad?",
        "options": [
            "A y B son mutuamente excluyentes",
            "A y B son independientes",
            "B es complemento de A",
            "P(A)=0 necesariamente"
        ],
        "correct": 1,
        "explanations": [
            "Exclusión mutua y probabilidad positiva suelen generar dependencia.",
            "Correcto. Conocer B no modifica la probabilidad de A.",
            "Un complemento tendría una relación diferente.",
            "A puede tener cualquier probabilidad compatible con el espacio."
        ],
        "concept": "Una caracterización de independencia es P(A|B)=P(A)."
    },
    {
        "module": "probabilidad",
        "moduleName": "Probabilidad",
        "topic": "Árboles de probabilidad",
        "level": "Intermedio",
        "question": "En un diagrama de árbol, ¿cómo se obtiene la probabilidad de una ruta completa?",
        "options": [
            "Sumando las probabilidades de sus ramas",
            "Multiplicando las probabilidades de sus ramas",
            "Restando la última rama",
            "Tomando solo la primera rama"
        ],
        "correct": 1,
        "explanations": [
            "La suma se usa normalmente para combinar rutas alternativas.",
            "Correcto. Las probabilidades sucesivas a lo largo de una ruta se multiplican.",
            "No existe una regla general de restar la última rama.",
            "Ignorar ramas posteriores pierde información condicional."
        ],
        "concept": "Regla del árbol: multiplicar a lo largo de una ruta; sumar rutas mutuamente excluyentes."
    },
    {
        "module": "probabilidad",
        "moduleName": "Probabilidad",
        "topic": "Tablas de contingencia",
        "level": "Intermedio",
        "question": "En una tabla de contingencia, ¿qué representa una frecuencia marginal?",
        "options": [
            "El total de una fila o columna",
            "Una sola celda interior",
            "Una probabilidad necesariamente condicional",
            "La intersección vacía"
        ],
        "correct": 0,
        "explanations": [
            "Correcto. Los márgenes resumen una categoría ignorando temporalmente la otra variable.",
            "Una celda interior suele representar una frecuencia conjunta.",
            "Un margen puede convertirse en probabilidad marginal, no necesariamente condicional.",
            "No describe por definición una intersección vacía."
        ],
        "concept": "Los totales marginales aparecen en los bordes de una tabla de contingencia."
    },
    {
        "module": "probabilidad",
        "moduleName": "Probabilidad",
        "topic": "Probabilidad total",
        "level": "Intermedio",
        "question": "Dos grupos cubren toda la población: P(A)=0.4 y P(B)=0.6. Si P(E|A)=0.2 y P(E|B)=0.5, ¿cuánto vale P(E)?",
        "options": [
            "0.28",
            "0.38",
            "0.42",
            "0.70"
        ],
        "correct": 1,
        "explanations": [
            "0.28 pondera incorrectamente los grupos.",
            "Correcto. 0.4×0.2 + 0.6×0.5 = 0.38.",
            "0.42 no coincide con la suma ponderada.",
            "0.70 suma condicionales sin ponderar."
        ],
        "concept": "La probabilidad total combina probabilidades condicionales ponderadas por la probabilidad de cada grupo."
    },
    {
        "module": "probabilidad",
        "moduleName": "Probabilidad",
        "topic": "Probabilidad total",
        "level": "Avanzado",
        "question": "Si una partición tiene tres grupos con probabilidades 0.2, 0.5 y 0.3, y P(E|grupo) es 0.1, 0.2 y 0.4, ¿cuánto vale P(E)?",
        "options": [
            "0.20",
            "0.24",
            "0.30",
            "0.70"
        ],
        "correct": 1,
        "explanations": [
            "0.20 omite parte de la ponderación.",
            "Correcto. 0.2×0.1 + 0.5×0.2 + 0.3×0.4 = 0.24.",
            "0.30 es uno de los pesos, no el resultado.",
            "0.70 surge de sumar tasas sin ponderar adecuadamente."
        ],
        "concept": "Con una partición A_i: P(E)=Σ P(E|A_i)P(A_i)."
    },
    {
        "module": "probabilidad",
        "moduleName": "Probabilidad",
        "topic": "Bayes",
        "level": "Intermedio",
        "question": "¿Qué cantidad aparece en el numerador de P(A|B) según Bayes?",
        "options": [
            "P(A)P(B|A)",
            "P(A)+P(B)",
            "P(B)−P(A)",
            "P(A∪B)"
        ],
        "correct": 0,
        "explanations": [
            "Correcto. El numerador es la probabilidad conjunta expresada como P(B|A)P(A).",
            "Bayes no usa una suma simple en el numerador.",
            "Una diferencia de probabilidades no corresponde.",
            "La unión no es el numerador de Bayes."
        ],
        "concept": "P(A|B)=P(B|A)P(A)/P(B)."
    },
    {
        "module": "probabilidad",
        "moduleName": "Probabilidad",
        "topic": "Bayes",
        "level": "Avanzado",
        "question": "Una condición afecta al 1 % de una población. Una prueba detecta el 90 % de los casos y da positivo al 5 % de quienes no tienen la condición. ¿Por qué un positivo no implica 90 % de probabilidad de tenerla?",
        "options": [
            "Porque debe considerarse también la prevalencia y los falsos positivos",
            "Porque 90 % nunca es una probabilidad",
            "Porque Bayes solo sirve con dados",
            "Porque la prueba no puede detectar casos"
        ],
        "correct": 0,
        "explanations": [
            "Correcto. La probabilidad posterior depende de la tasa base y de ambas tasas de la prueba.",
            "90 % sí puede ser una probabilidad condicional válida.",
            "Bayes se aplica ampliamente fuera de juegos de azar.",
            "El enunciado dice que detecta el 90 % de los casos."
        ],
        "concept": "La tasa base puede cambiar fuertemente la interpretación de un resultado positivo."
    },
    {
        "module": "probabilidad",
        "moduleName": "Probabilidad",
        "topic": "Conteo",
        "level": "Básico",
        "question": "Una contraseña de 3 dígitos permite repetición y cada posición puede ser 0–9. ¿Cuántas contraseñas hay?",
        "options": [
            "30",
            "100",
            "720",
            "1000"
        ],
        "correct": 3,
        "explanations": [
            "30 suma opciones en vez de multiplicarlas.",
            "100 correspondería a solo dos posiciones.",
            "720 se relaciona con permutaciones sin repetición de 10 tomados de 3.",
            "Correcto. 10×10×10=1000."
        ],
        "concept": "Con repetición y r posiciones con n opciones cada una, hay n^r resultados."
    },
    {
        "module": "probabilidad",
        "moduleName": "Probabilidad",
        "topic": "Permutaciones",
        "level": "Intermedio",
        "question": "¿Cuántas formas hay de ordenar 5 libros distintos en una repisa?",
        "options": [
            "5",
            "10",
            "25",
            "120"
        ],
        "correct": 3,
        "explanations": [
            "5 ignora la variedad de posiciones.",
            "10 corresponde a C(5,2), no a ordenar los cinco.",
            "25 no es la regla de permutación.",
            "Correcto. 5! = 120."
        ],
        "concept": "Ordenar n objetos distintos usa n! permutaciones."
    },
    {
        "module": "probabilidad",
        "moduleName": "Probabilidad",
        "topic": "Combinaciones",
        "level": "Intermedio",
        "question": "De 6 sabores distintos se eligen 2 sin importar el orden. ¿Cuántas selecciones diferentes hay?",
        "options": [
            "12",
            "15",
            "30",
            "36"
        ],
        "correct": 1,
        "explanations": [
            "12 no corresponde a C(6,2).",
            "Correcto. C(6,2)=15.",
            "30 corresponde a 6×5 cuando el orden importa.",
            "36 permitiría dos elecciones con repetición y orden."
        ],
        "concept": "Cuando el orden no importa y no hay repetición, se usan combinaciones."
    },
    {
        "module": "probabilidad",
        "moduleName": "Probabilidad",
        "topic": "Conteo",
        "level": "Avanzado",
        "question": "¿Cuántas ordenaciones distintas tiene la palabra CASA?",
        "options": [
            "4",
            "6",
            "12",
            "24"
        ],
        "correct": 2,
        "explanations": [
            "4 es solo el número de letras.",
            "6 no ajusta correctamente la repetición de A.",
            "Correcto. 4!/2! = 12 porque A aparece dos veces.",
            "24 contaría como distintas las dos letras A."
        ],
        "concept": "Con elementos repetidos: n!/(n1! n2! ...)."
    },
    {
        "module": "probabilidad",
        "moduleName": "Probabilidad",
        "topic": "De Morgan",
        "level": "Avanzado",
        "question": "¿Cuál es equivalente al complemento de A∪B?",
        "options": [
            "Aᶜ∪Bᶜ",
            "Aᶜ∩Bᶜ",
            "A∩B",
            "Aᶜ∩B"
        ],
        "correct": 1,
        "explanations": [
            "Eso corresponde al complemento de A∩B.",
            "Correcto. Por De Morgan, (A∪B)ᶜ=Aᶜ∩Bᶜ.",
            "A∩B no es el complemento de la unión.",
            "Esa expresión excluye solo una parte de los resultados."
        ],
        "concept": "Leyes de De Morgan: (A∪B)ᶜ=Aᶜ∩Bᶜ y (A∩B)ᶜ=Aᶜ∪Bᶜ."
    },
    {
        "module": "probabilidad",
        "moduleName": "Probabilidad",
        "topic": "Mutua exclusión",
        "level": "Intermedio",
        "question": "Si A y B son mutuamente excluyentes y P(A)>0, P(B)>0, ¿cuánto vale P(A∩B)?",
        "options": [
            "0",
            "P(A)P(B)",
            "1",
            "P(A)+P(B)"
        ],
        "correct": 0,
        "explanations": [
            "Correcto. No pueden ocurrir simultáneamente.",
            "Ese producto caracterizaría independencia, no exclusión mutua positiva.",
            "Una intersección vacía no tiene probabilidad 1.",
            "La suma puede aparecer en la unión, no en la intersección."
        ],
        "concept": "Eventos mutuamente excluyentes tienen intersección vacía."
    },
    {
        "module": "probabilidad",
        "moduleName": "Probabilidad",
        "topic": "Probabilidad empírica",
        "level": "Básico",
        "question": "En 200 repeticiones de un experimento, un evento ocurre 46 veces. ¿Cuál es su frecuencia relativa observada?",
        "options": [
            "0.23",
            "0.46",
            "2.30",
            "46"
        ],
        "correct": 0,
        "explanations": [
            "Correcto. 46/200=0.23.",
            "0.46 sería 46 % y no corresponde al cociente.",
            "2.30 excede 1 y no puede ser frecuencia relativa.",
            "46 es la frecuencia absoluta."
        ],
        "concept": "Frecuencia relativa observada = número de ocurrencias / número de ensayos."
    },
    {
        "module": "probabilidad",
        "moduleName": "Probabilidad",
        "topic": "Propiedades básicas",
        "level": "Intermedio",
        "question": "¿Cuál de estas afirmaciones debe cumplirse para cualquier evento A?",
        "options": [
            "P(A)<0",
            "0≤P(A)≤1",
            "P(A)>1",
            "P(A)=0.5"
        ],
        "correct": 1,
        "explanations": [
            "Las probabilidades no pueden ser negativas.",
            "Correcto. Toda probabilidad está entre 0 y 1 inclusive.",
            "No puede superar 1.",
            "Un evento no tiene por qué tener probabilidad 0.5."
        ],
        "concept": "Axioma básico: 0≤P(A)≤1."
    },
    {
        "module": "probabilidad",
        "moduleName": "Probabilidad",
        "topic": "Práctica integral",
        "level": "Avanzado",
        "question": "Una fábrica tiene máquinas M1 y M2. M1 produce 70 % con 2 % de defectos y M2 produce 30 % con 6 %. Si aparece un defecto, ¿qué herramientas se necesitan para hallar de qué máquina probablemente vino?",
        "options": [
            "Solo complemento",
            "Probabilidad total y Bayes",
            "Solo regla de adición para excluyentes",
            "Solo combinaciones"
        ],
        "correct": 1,
        "explanations": [
            "El complemento no identifica el origen de un defecto.",
            "Correcto. Primero se calcula P(defecto) y luego se invierte la condición con Bayes.",
            "La regla de adición por sí sola no resuelve la probabilidad posterior.",
            "No es un problema de conteo combinatorio."
        ],
        "concept": "Muchos problemas de diagnóstico usan probabilidad total seguida de Bayes."
    },
    {
        "module": "probabilidad",
        "moduleName": "Probabilidad",
        "topic": "Diagramas de árbol",
        "level": "Avanzado",
        "question": "En un árbol de probabilidad hay dos rutas mutuamente excluyentes que llevan al mismo evento E, con probabilidades 0.18 y 0.12. ¿Cuál es P(E)?",
        "options": [
            "0.06",
            "0.18",
            "0.30",
            "0.216"
        ],
        "correct": 2,
        "explanations": [
            "0.06 resta las rutas, pero son caminos alternativos hacia el mismo evento.",
            "0.18 considera solo una de las rutas.",
            "Correcto. Como las rutas son mutuamente excluyentes, se suman: 0.18 + 0.12 = 0.30.",
            "0.216 multiplica rutas alternativas, lo que no corresponde en este caso."
        ],
        "concept": "En un árbol, se multiplican probabilidades a lo largo de una ruta y se suman rutas alternativas mutuamente excluyentes."
    }

  ];

window.toolBank = [
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Centro y dispersión",
    "level": "Intermedio",
    "question": "Una distribución tiene fuerte asimetría positiva y varios valores extremos altos. ¿Qué combinación usarías para describir centro y dispersión?",
    "context": "Quieres resumir el comportamiento típico sin dejar que unos pocos valores extremos dominen el análisis.",
    "options": [
      "Media + desviación estándar",
      "Mediana + IQR",
      "Moda + rango",
      "Media + varianza"
    ],
    "correct": 1,
    "explanations": [
      "La media y la desviación estándar son sensibles a valores extremos y pueden representar mal una distribución muy asimétrica.",
      "Correcto. La mediana y el rango intercuartílico son medidas resistentes a valores extremos.",
      "La moda puede ser útil en ciertos contextos, pero el rango depende solo de los extremos y es poco robusto.",
      "La media y la varianza son ambas sensibles a observaciones extremas."
    ],
    "concept": "Con asimetría fuerte y atípicos, suele preferirse mediana + IQR."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Gráficos",
    "level": "Básico",
    "question": "Quieres observar la forma de la distribución de una variable continua. ¿Qué gráfico usarías primero?",
    "context": "Te interesa detectar concentración, asimetría, posibles modas y comportamiento general de la distribución.",
    "options": [
      "Histograma",
      "Gráfico circular",
      "Tabla de una sola cifra",
      "Gráfico de sectores"
    ],
    "correct": 0,
    "explanations": [
      "Correcto. El histograma permite observar la forma de una variable cuantitativa agrupada en intervalos.",
      "El gráfico circular se utiliza principalmente con variables categóricas.",
      "Una sola cifra no muestra la forma de la distribución.",
      "El gráfico de sectores representa composición categórica, no forma de una variable continua."
    ],
    "concept": "Histograma = herramienta básica para explorar la forma de una distribución cuantitativa."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Comparación relativa",
    "level": "Intermedio",
    "question": "Dos grupos tienen medias de magnitudes muy distintas y deseas comparar su variabilidad relativa. ¿Qué medida usarías?",
    "context": "Un grupo tiene media 20 y otro media 500, por lo que comparar solo desviaciones estándar puede ser engañoso.",
    "options": [
      "Rango",
      "Coeficiente de variación",
      "Mediana",
      "Primer cuartil"
    ],
    "correct": 1,
    "explanations": [
      "El rango es una medida absoluta y depende de los extremos.",
      "Correcto. El coeficiente de variación relaciona la desviación estándar con la media.",
      "La mediana mide posición central, no variabilidad relativa.",
      "El primer cuartil es una medida de posición."
    ],
    "concept": "El coeficiente de variación permite comparar dispersión relativa cuando su uso es apropiado."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Valores atípicos",
    "level": "Intermedio",
    "question": "Quieres identificar observaciones potencialmente atípicas sin asumir normalidad. ¿Qué herramienta usarías?",
    "context": "Dispones de Q1 y Q3 y quieres aplicar una regla sencilla basada en posiciones.",
    "options": [
      "Regla de 1.5 IQR",
      "Solo la media",
      "Coeficiente de variación",
      "Moda"
    ],
    "correct": 0,
    "explanations": [
      "Correcto. La regla de 1.5 IQR utiliza los cuartiles para señalar posibles valores atípicos.",
      "La media por sí sola no establece límites para identificar atípicos.",
      "El coeficiente de variación compara dispersión relativa, no detecta observaciones individuales.",
      "La moda identifica valores frecuentes, no valores extremos."
    ],
    "concept": "La regla de 1.5 IQR es una herramienta descriptiva para señalar potenciales atípicos."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Posición",
    "level": "Básico",
    "question": "Quieres saber qué valor deja aproximadamente al 75 % de las observaciones por debajo. ¿Qué medida buscarías?",
    "context": "La pregunta se refiere a una posición dentro de los datos ordenados, no a un promedio.",
    "options": [
      "Q1",
      "Q2",
      "Q3",
      "Media"
    ],
    "correct": 2,
    "explanations": [
      "Q1 corresponde aproximadamente al percentil 25.",
      "Q2 corresponde a la mediana o percentil 50.",
      "Correcto. Q3 corresponde aproximadamente al percentil 75.",
      "La media no representa directamente esa posición acumulada."
    ],
    "concept": "Q3 ≈ P75."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Tendencia central",
    "level": "Básico",
    "question": "Quieres identificar la categoría más frecuente de una variable cualitativa nominal. ¿Qué medida usarías?",
    "context": "Las categorías no tienen una escala numérica que permita calcular una media significativa.",
    "options": [
      "Media",
      "Mediana",
      "Moda",
      "Varianza"
    ],
    "correct": 2,
    "explanations": [
      "La media requiere una variable cuantitativa con operaciones numéricas significativas.",
      "La mediana requiere al menos un orden entre categorías.",
      "Correcto. La moda identifica la categoría con mayor frecuencia.",
      "La varianza es una medida cuantitativa de dispersión."
    ],
    "concept": "La moda puede utilizarse con variables nominales."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Dispersión",
    "level": "Básico",
    "question": "Quieres una medida de dispersión expresada en las mismas unidades que la variable original. ¿Qué usarías?",
    "context": "La variable está medida en centímetros y deseas interpretar la dispersión también en centímetros.",
    "options": [
      "Varianza",
      "Desviación estándar",
      "Asimetría",
      "Frecuencia relativa"
    ],
    "correct": 1,
    "explanations": [
      "La varianza queda expresada en unidades al cuadrado.",
      "Correcto. La desviación estándar vuelve a las unidades originales de la variable.",
      "La asimetría describe forma, no dispersión en unidades originales.",
      "La frecuencia relativa mide proporciones."
    ],
    "concept": "La desviación estándar está en las mismas unidades que los datos."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Frecuencias",
    "level": "Básico",
    "question": "Quieres comparar la frecuencia de una categoría entre dos muestras de tamaños distintos. ¿Qué usarías?",
    "context": "Una muestra tiene 50 observaciones y la otra 500, por lo que las frecuencias absolutas no son directamente comparables.",
    "options": [
      "Frecuencia absoluta",
      "Frecuencia relativa",
      "Rango",
      "Media"
    ],
    "correct": 1,
    "explanations": [
      "Las frecuencias absolutas dependen del tamaño total de cada muestra.",
      "Correcto. La frecuencia relativa convierte el conteo en proporción.",
      "El rango mide amplitud de una variable cuantitativa.",
      "La media no compara la presencia relativa de una categoría."
    ],
    "concept": "Las proporciones facilitan comparaciones entre muestras de tamaños distintos."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Escalas",
    "level": "Intermedio",
    "question": "Tienes categorías ordenadas como bajo, medio y alto. ¿Qué escala usarías para describir su nivel de medición?",
    "context": "Existe un orden natural, pero no puedes asegurar que la distancia entre bajo y medio sea igual a la distancia entre medio y alto.",
    "options": [
      "Nominal",
      "Ordinal",
      "Intervalo",
      "Razón"
    ],
    "correct": 1,
    "explanations": [
      "La escala nominal no incorpora orden.",
      "Correcto. La escala ordinal reconoce el orden sin asumir distancias iguales.",
      "La escala de intervalo requiere diferencias numéricas comparables.",
      "La escala de razón además requiere un cero absoluto significativo."
    ],
    "concept": "Ordinal = categorías ordenadas sin distancias cuantitativas necesariamente iguales."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Forma",
    "level": "Intermedio",
    "question": "Quieres cuantificar si una distribución presenta una cola más larga hacia un lado. ¿Qué medida usarías?",
    "context": "No buscas medir dispersión ni posición central, sino la falta de simetría.",
    "options": [
      "Asimetría",
      "Curtosis",
      "Varianza",
      "Percentil 50"
    ],
    "correct": 0,
    "explanations": [
      "Correcto. La asimetría mide la falta de simetría y su dirección.",
      "La curtosis se relaciona con la forma de las colas y concentración, pero no es la medida principal de dirección de la asimetría.",
      "La varianza mide dispersión.",
      "El percentil 50 corresponde a la mediana."
    ],
    "concept": "La asimetría describe dirección y grado de falta de simetría."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Forma",
    "level": "Avanzado",
    "question": "Quieres estudiar si una distribución presenta colas relativamente pesadas respecto de una referencia normal. ¿Qué medida considerarías?",
    "context": "Ya analizaste centro, dispersión y asimetría; ahora te interesa otro aspecto de la forma.",
    "options": [
      "Curtosis",
      "Media",
      "Moda",
      "Frecuencia absoluta"
    ],
    "correct": 0,
    "explanations": [
      "Correcto. La curtosis aporta información sobre la forma y comportamiento de las colas, según la definición utilizada.",
      "La media describe centro.",
      "La moda describe el valor más frecuente.",
      "La frecuencia absoluta no resume la forma de las colas."
    ],
    "concept": "La curtosis debe interpretarse con cuidado y especificando si se usa curtosis o exceso de curtosis."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Resumen gráfico",
    "level": "Intermedio",
    "question": "Quieres mostrar mediana, cuartiles, dispersión central y posibles atípicos en un solo gráfico. ¿Qué usarías?",
    "context": "Buscas un resumen compacto de posición y dispersión.",
    "options": [
      "Boxplot",
      "Gráfico circular",
      "Diagrama de barras categóricas",
      "Solo una tabla de frecuencias"
    ],
    "correct": 0,
    "explanations": [
      "Correcto. El boxplot muestra Q1, mediana, Q3, bigotes y posibles atípicos.",
      "El gráfico circular representa proporciones categóricas.",
      "Las barras categóricas no resumen cuartiles.",
      "Una tabla puede contener información, pero no ofrece ese resumen visual compacto."
    ],
    "concept": "El boxplot es especialmente útil para comparar distribuciones y detectar posibles atípicos."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Media ponderada",
    "level": "Intermedio",
    "question": "Varias calificaciones tienen pesos distintos en la nota final. ¿Qué medida usarías para obtener el resultado global?",
    "context": "Una evaluación pesa 20 %, otra 30 % y otra 50 %.",
    "options": [
      "Media simple",
      "Media ponderada",
      "Mediana",
      "Rango"
    ],
    "correct": 1,
    "explanations": [
      "La media simple trataría a todas las evaluaciones como igualmente importantes.",
      "Correcto. La media ponderada incorpora el peso de cada componente.",
      "La mediana no incorpora los pesos asignados.",
      "El rango mide dispersión."
    ],
    "concept": "Cuando las observaciones tienen importancias distintas, puede corresponder una media ponderada."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Comparación de grupos",
    "level": "Avanzado",
    "question": "Quieres comparar visualmente la distribución de la misma variable en cuatro grupos y detectar diferencias en mediana y atípicos. ¿Qué usarías?",
    "context": "Necesitas un gráfico compacto que permita colocar varios grupos lado a lado.",
    "options": [
      "Boxplots comparativos",
      "Cuatro medias sin gráfico",
      "Un único gráfico circular",
      "Solo el rango de cada grupo"
    ],
    "correct": 0,
    "explanations": [
      "Correcto. Los boxplots lado a lado facilitan comparar mediana, IQR y posibles atípicos.",
      "Las medias solas pueden ocultar diferencias importantes de forma y dispersión.",
      "Un gráfico circular no es adecuado para comparar distribuciones cuantitativas.",
      "El rango usa solo dos observaciones y pierde mucha información."
    ],
    "concept": "Los boxplots comparativos permiten contrastar distribuciones entre grupos."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Centro",
    "level": "Intermedio",
    "question": "Una distribución es aproximadamente simétrica y no presenta valores extremos importantes. ¿Qué medida usarías normalmente para resumir el centro?",
    "context": "Los datos no muestran una razón evidente para preferir una medida robusta frente a la media.",
    "options": [
      "Media",
      "Rango",
      "Varianza",
      "IQR"
    ],
    "correct": 0,
    "explanations": [
      "Correcto. En una distribución aproximadamente simétrica sin extremos severos, la media suele ser una buena medida del centro.",
      "El rango mide dispersión.",
      "La varianza mide dispersión.",
      "El IQR mide dispersión del 50 % central."
    ],
    "concept": "La elección del centro depende de la forma y de la presencia de valores extremos."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Datos categóricos",
    "level": "Básico",
    "question": "Quieres mostrar cuántas observaciones pertenecen a cada categoría nominal. ¿Qué recurso usarías?",
    "context": "La variable contiene categorías como rojo, azul, verde y amarillo.",
    "options": [
      "Tabla de frecuencias",
      "Varianza",
      "Histograma continuo",
      "Desviación estándar"
    ],
    "correct": 0,
    "explanations": [
      "Correcto. Una tabla de frecuencias resume cuántas observaciones hay en cada categoría.",
      "La varianza no es apropiada para categorías nominales.",
      "Un histograma se utiliza para variables cuantitativas.",
      "La desviación estándar requiere valores numéricos significativos."
    ],
    "concept": "Las tablas de frecuencia son una herramienta básica para variables categóricas."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Atípicos",
    "level": "Avanzado",
    "question": "Detectaste un valor potencialmente atípico. ¿Qué harías antes de eliminarlo?",
    "context": "El valor es extremo, pero podría representar un caso real o un error de registro.",
    "options": [
      "Eliminarlo automáticamente",
      "Investigar su origen y validez",
      "Sustituirlo siempre por la media",
      "Ignorarlo sin documentarlo"
    ],
    "correct": 1,
    "explanations": [
      "Una regla estadística no justifica por sí sola eliminar una observación.",
      "Correcto. Primero debe revisarse si es error, caso legítimo o dato que requiere tratamiento especial.",
      "Reemplazarlo automáticamente por la media puede introducir sesgo.",
      "Ignorarlo sin documentar impide un análisis transparente."
    ],
    "concept": "La detección de atípicos es una señal para investigar, no una orden automática de eliminación."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Frecuencia acumulada",
    "level": "Intermedio",
    "question": "Quieres saber qué proporción de observaciones no supera cierto valor. ¿Qué usarías?",
    "context": "La variable es cuantitativa u ordinal y los valores están ordenados.",
    "options": [
      "Frecuencia relativa acumulada",
      "Moda",
      "Varianza",
      "Curtosis"
    ],
    "correct": 0,
    "explanations": [
      "Correcto. La frecuencia acumulada reúne todas las observaciones hasta el punto considerado.",
      "La moda identifica el valor más frecuente.",
      "La varianza mide dispersión.",
      "La curtosis describe un aspecto de la forma."
    ],
    "concept": "La frecuencia acumulada responde preguntas del tipo 'hasta este valor'."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Diagnóstico gráfico",
    "level": "Avanzado",
    "question": "La media y la mediana son similares, pero quieres comprobar visualmente si la distribución es realmente simétrica. ¿Qué usarías?",
    "context": "Una sola igualdad entre medidas de centro no demuestra la forma completa de la distribución.",
    "options": [
      "Histograma o gráfico de distribución",
      "Solo la media",
      "Solo la mediana",
      "Coeficiente de variación exclusivamente"
    ],
    "correct": 0,
    "explanations": [
      "Correcto. Un gráfico permite evaluar directamente la forma, colas y posibles irregularidades.",
      "La media sola no revela la forma.",
      "La mediana sola tampoco revela la forma.",
      "El coeficiente de variación mide dispersión relativa, no simetría."
    ],
    "concept": "Los resúmenes numéricos deben complementarse con gráficos cuando interesa la forma."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Interpretación integral",
    "level": "Avanzado",
    "question": "Quieres presentar un resumen completo de una variable cuantitativa con fuerte asimetría. ¿Qué combinación usarías?",
    "context": "Necesitas comunicar centro, dispersión y forma sin depender únicamente de una medida.",
    "options": [
      "Mediana + IQR + histograma o boxplot",
      "Solo media",
      "Solo varianza",
      "Solo máximo y mínimo"
    ],
    "correct": 0,
    "explanations": [
      "Correcto. Combina medidas robustas con una representación visual de la forma.",
      "La media sola pierde información sobre dispersión y forma.",
      "La varianza sola no describe centro ni forma.",
      "Máximo y mínimo usan solo dos observaciones."
    ],
    "concept": "Un buen análisis descriptivo combina medidas numéricas y gráficos apropiados."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Complemento",
    "level": "Básico",
    "question": "Quieres calcular la probabilidad de que ocurra al menos una vez un evento en varios intentos. ¿Qué estrategia suele ser especialmente útil?",
    "context": "Calcular directamente todas las formas de obtener uno o más éxitos sería más largo que estudiar el caso contrario.",
    "options": [
      "Usar el complemento de 'ninguna vez'",
      "Usar siempre Bayes",
      "Calcular una mediana",
      "Usar IQR"
    ],
    "correct": 0,
    "explanations": [
      "Correcto. Muchas probabilidades de 'al menos uno' se simplifican como 1 menos la probabilidad de ninguno.",
      "Bayes se usa para invertir probabilidades condicionales, no por defecto en este problema.",
      "La mediana no es una herramienta de probabilidad elemental para este objetivo.",
      "El IQR es una medida descriptiva de dispersión."
    ],
    "concept": "P(al menos uno)=1−P(ninguno), cuando el complemento es más fácil de calcular."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Regla de adición",
    "level": "Intermedio",
    "question": "Quieres calcular la probabilidad de A o B y los eventos pueden ocurrir simultáneamente. ¿Qué usarías?",
    "context": "La intersección no es vacía y no quieres contar dos veces los casos comunes.",
    "options": [
      "Regla general de adición",
      "Solo sumar P(A)+P(B)",
      "Regla de Bayes",
      "Combinaciones"
    ],
    "correct": 0,
    "explanations": [
      "Correcto. La regla general resta la intersección una vez.",
      "Sumar sin corregir contaría dos veces los resultados comunes.",
      "Bayes responde otro tipo de pregunta condicional.",
      "Las combinaciones son una herramienta de conteo."
    ],
    "concept": "P(A∪B)=P(A)+P(B)−P(A∩B)."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Probabilidad condicional",
    "level": "Intermedio",
    "question": "Sabes que ocurrió B y quieres calcular la probabilidad de A dentro de esos casos. ¿Qué usarías?",
    "context": "La información 'ocurrió B' cambia el universo de referencia.",
    "options": [
      "P(A|B)",
      "P(A∪B)",
      "P(Aᶜ)",
      "Solo P(A)"
    ],
    "correct": 0,
    "explanations": [
      "Correcto. P(A|B) restringe el análisis a los casos donde B ocurrió.",
      "La unión responde a que ocurra al menos uno de los eventos.",
      "El complemento responde a que A no ocurra.",
      "P(A) ignora la nueva información aportada por B."
    ],
    "concept": "La probabilidad condicional incorpora información adicional."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Regla de multiplicación",
    "level": "Intermedio",
    "question": "Quieres calcular la probabilidad de que ocurra A y luego B, conociendo P(A) y P(B|A). ¿Qué usarías?",
    "context": "La segunda probabilidad depende de que el primer evento haya ocurrido.",
    "options": [
      "P(A)·P(B|A)",
      "P(A)+P(B|A)",
      "P(A)−P(B|A)",
      "P(A)/P(B|A)"
    ],
    "correct": 0,
    "explanations": [
      "Correcto. Esa es la regla de multiplicación para la intersección.",
      "Sumar no corresponde a una secuencia conjunta.",
      "Restar no representa la probabilidad de ambos eventos.",
      "Dividir tampoco corresponde a la regla de multiplicación."
    ],
    "concept": "P(A∩B)=P(A)P(B|A)."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Independencia",
    "level": "Intermedio",
    "question": "Quieres comprobar si dos eventos son independientes y conoces P(A), P(B) y P(A∩B). ¿Qué compararías?",
    "context": "Buscas determinar si la ocurrencia conjunta coincide con lo esperado bajo independencia.",
    "options": [
      "P(A∩B) con P(A)P(B)",
      "P(A)+P(B) con 1",
      "P(A) con P(B) solamente",
      "P(A∪B) con 0"
    ],
    "correct": 0,
    "explanations": [
      "Correcto. La igualdad P(A∩B)=P(A)P(B) caracteriza independencia.",
      "Que las probabilidades sumen 1 no define independencia.",
      "Dos eventos pueden tener probabilidades diferentes y ser independientes.",
      "La unión no debe ser 0 para eventos independientes."
    ],
    "concept": "Independencia se comprueba mediante la probabilidad conjunta o una condición equivalente."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Árboles",
    "level": "Intermedio",
    "question": "Un proceso ocurre en varias etapas y cada etapa cambia las probabilidades siguientes. ¿Qué representación usarías?",
    "context": "Quieres visualizar rutas sucesivas y probabilidades condicionales.",
    "options": [
      "Diagrama de árbol",
      "Boxplot",
      "Histograma",
      "Gráfico circular"
    ],
    "correct": 0,
    "explanations": [
      "Correcto. El árbol organiza secuencias y probabilidades condicionales por ramas.",
      "El boxplot resume una variable cuantitativa.",
      "El histograma muestra una distribución cuantitativa.",
      "El gráfico circular muestra composición categórica."
    ],
    "concept": "Los árboles son especialmente útiles en procesos probabilísticos secuenciales."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Tablas de contingencia",
    "level": "Intermedio",
    "question": "Tienes dos variables categóricas observadas en las mismas personas y quieres estudiar frecuencias conjuntas y condicionales. ¿Qué usarías?",
    "context": "Necesitas organizar cruces entre categorías de ambas variables.",
    "options": [
      "Tabla de contingencia",
      "Histograma",
      "Media ponderada",
      "Curtosis"
    ],
    "correct": 0,
    "explanations": [
      "Correcto. Una tabla de contingencia organiza frecuencias conjuntas y marginales.",
      "Un histograma es para una variable cuantitativa.",
      "La media ponderada resume valores numéricos con pesos.",
      "La curtosis describe forma de una distribución cuantitativa."
    ],
    "concept": "Las tablas de contingencia son útiles para probabilidades conjuntas, marginales y condicionales."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Probabilidad total",
    "level": "Avanzado",
    "question": "Un evento puede producirse a través de varios grupos mutuamente excluyentes y conoces la tasa del evento dentro de cada grupo. ¿Qué usarías para hallar su probabilidad global?",
    "context": "Los grupos forman una partición y tienen tamaños distintos.",
    "options": [
      "Teorema de la probabilidad total",
      "Solo sumar las tasas condicionales",
      "Complemento",
      "Permutaciones"
    ],
    "correct": 0,
    "explanations": [
      "Correcto. La probabilidad total pondera cada tasa condicional por el peso del grupo.",
      "Sumar tasas sin ponderar ignora el tamaño relativo de los grupos.",
      "El complemento no integra varias rutas por sí solo.",
      "Las permutaciones cuentan ordenaciones."
    ],
    "concept": "P(B)=ΣP(B|A_i)P(A_i)."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Bayes",
    "level": "Avanzado",
    "question": "Conoces la probabilidad de un resultado dentro de cada grupo y, después de observar el resultado, quieres estimar de qué grupo provino. ¿Qué usarías?",
    "context": "Necesitas invertir la dirección de una probabilidad condicional.",
    "options": [
      "Teorema de Bayes",
      "Solo complemento",
      "Rango",
      "Regla de adición para excluyentes únicamente"
    ],
    "correct": 0,
    "explanations": [
      "Correcto. Bayes permite pasar de P(resultado|grupo) a P(grupo|resultado).",
      "El complemento no invierte condicionales.",
      "El rango es una medida descriptiva.",
      "La regla de adición puede participar en el denominador, pero no resuelve por sí sola la inversión."
    ],
    "concept": "Bayes actualiza probabilidades previas usando evidencia."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Conteo",
    "level": "Intermedio",
    "question": "Debes elegir 4 personas de un grupo de 12 y todas tendrán el mismo rol. ¿Qué técnica usarías?",
    "context": "Solo importa quiénes son elegidos, no el orden en que se seleccionan.",
    "options": [
      "Combinaciones",
      "Permutaciones de 12",
      "Principio del complemento",
      "Bayes"
    ],
    "correct": 0,
    "explanations": [
      "Correcto. Cuando el orden no importa se utilizan combinaciones.",
      "Las permutaciones contarían ordenaciones que aquí representan el mismo grupo.",
      "El complemento no es la herramienta natural para contar este tipo de selecciones.",
      "Bayes trata probabilidades condicionales."
    ],
    "concept": "Combinación = selección sin importar el orden."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Conteo",
    "level": "Intermedio",
    "question": "Debes asignar presidente, vicepresidente y secretario entre 10 personas. ¿Qué técnica usarías?",
    "context": "Las mismas tres personas en cargos diferentes representan resultados diferentes.",
    "options": [
      "Selección ordenada o permutación parcial",
      "Combinación simple",
      "Frecuencia relativa",
      "IQR"
    ],
    "correct": 0,
    "explanations": [
      "Correcto. El orden o cargo importa, por lo que deben contarse selecciones ordenadas.",
      "Una combinación ignoraría qué cargo ocupa cada persona.",
      "La frecuencia relativa no cuenta arreglos posibles.",
      "El IQR es una medida descriptiva."
    ],
    "concept": "Si el rol o posición importa, el orden importa."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Complemento",
    "level": "Intermedio",
    "question": "Quieres hallar la probabilidad de 'ningún defecto' sabiendo la probabilidad de 'al menos un defecto'. ¿Qué usarías?",
    "context": "Los dos eventos son complementarios.",
    "options": [
      "Regla del complemento",
      "Bayes",
      "Combinaciones",
      "Probabilidad total necesariamente"
    ],
    "correct": 0,
    "explanations": [
      "Correcto. P(ninguno)=1−P(al menos uno).",
      "Bayes no es necesario para eventos complementarios.",
      "Las combinaciones pueden aparecer en otros cálculos, pero no son necesarias para esta relación.",
      "La probabilidad total no es necesaria si ya tienes la probabilidad complementaria."
    ],
    "concept": "Los eventos complementarios suman 1."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Sin reemplazo",
    "level": "Intermedio",
    "question": "Extraes objetos uno a uno sin reemplazo y quieres calcular la probabilidad de una secuencia específica. ¿Qué usarías?",
    "context": "La composición del conjunto cambia después de cada extracción.",
    "options": [
      "Multiplicar probabilidades condicionales sucesivas",
      "Elevar siempre la primera probabilidad al número de extracciones",
      "Sumar las probabilidades de cada extracción",
      "Usar solo la media"
    ],
    "correct": 0,
    "explanations": [
      "Correcto. Cada factor debe actualizarse según lo ocurrido antes.",
      "Eso sería válido solo en situaciones específicas con probabilidades constantes e independencia.",
      "Las probabilidades de una misma ruta se multiplican, no se suman.",
      "La media no resuelve una secuencia de eventos."
    ],
    "concept": "Sin reemplazo suele requerir probabilidades condicionales sucesivas."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Eventos excluyentes",
    "level": "Básico",
    "question": "Dos resultados no pueden ocurrir simultáneamente y quieres calcular la probabilidad de que ocurra uno u otro. ¿Qué usarías?",
    "context": "La intersección de los eventos es vacía.",
    "options": [
      "Sumar sus probabilidades",
      "Multiplicar sus probabilidades",
      "Bayes",
      "Restar ambas probabilidades de 1"
    ],
    "correct": 0,
    "explanations": [
      "Correcto. Para eventos mutuamente excluyentes, la unión es la suma de sus probabilidades.",
      "Multiplicar no corresponde a una unión de eventos excluyentes.",
      "Bayes no es necesario.",
      "Restar ambas de 1 daría la probabilidad de ninguno si además cubren adecuadamente el espacio."
    ],
    "concept": "Si A∩B es vacío, P(A∪B)=P(A)+P(B)."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Frecuencia empírica",
    "level": "Básico",
    "question": "Quieres estimar experimentalmente una probabilidad repitiendo muchas veces un experimento. ¿Qué usarías?",
    "context": "No partes de un modelo teórico completo y dispones de resultados observados.",
    "options": [
      "Frecuencia relativa del evento",
      "Mediana de los resultados únicamente",
      "Rango",
      "Curtosis"
    ],
    "correct": 0,
    "explanations": [
      "Correcto. La frecuencia relativa observada aproxima la probabilidad conforme aumenta el número de repeticiones bajo condiciones adecuadas.",
      "La mediana no estima directamente la probabilidad de un evento.",
      "El rango es una medida descriptiva de amplitud.",
      "La curtosis no estima una probabilidad de ocurrencia."
    ],
    "concept": "Probabilidad empírica ≈ frecuencia relativa en muchas repeticiones."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "De Morgan",
    "level": "Avanzado",
    "question": "Quieres expresar 'no ocurre A ni ocurre B' mediante complementos. ¿Qué usarías?",
    "context": "Necesitas transformar el complemento de una unión.",
    "options": [
      "Aᶜ ∩ Bᶜ",
      "Aᶜ ∪ Bᶜ",
      "A ∩ B",
      "A ∪ B"
    ],
    "correct": 0,
    "explanations": [
      "Correcto. Por De Morgan, (A∪B)ᶜ=Aᶜ∩Bᶜ.",
      "Aᶜ∪Bᶜ corresponde al complemento de A∩B.",
      "A∩B significa que ocurren ambos.",
      "A∪B significa que ocurre al menos uno."
    ],
    "concept": "Las leyes de De Morgan permiten transformar complementos de uniones e intersecciones."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Árboles",
    "level": "Avanzado",
    "question": "Dos rutas distintas y mutuamente excluyentes de un árbol conducen al mismo evento final. ¿Qué harías para obtener la probabilidad total del evento?",
    "context": "Ya calculaste la probabilidad completa de cada ruta.",
    "options": [
      "Sumar las probabilidades de las rutas",
      "Multiplicar las rutas entre sí",
      "Restar una ruta de la otra",
      "Usar solo la ruta más probable"
    ],
    "correct": 0,
    "explanations": [
      "Correcto. Las rutas alternativas mutuamente excluyentes que producen el mismo evento se suman.",
      "Multiplicar las rutas no representa alternativas.",
      "Restarlas no tiene justificación probabilística.",
      "Ignorar rutas perdería parte de la probabilidad del evento."
    ],
    "concept": "En un árbol: multiplicar dentro de una ruta y sumar rutas alternativas pertinentes."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Independencia",
    "level": "Avanzado",
    "question": "Quieres saber si observar B cambia la probabilidad de A. ¿Qué compararías?",
    "context": "Buscas una interpretación directa de independencia basada en probabilidades condicionales.",
    "options": [
      "P(A|B) con P(A)",
      "P(A∪B) con P(A∩B)",
      "P(A) con 1−P(A)",
      "P(B) con 0"
    ],
    "correct": 0,
    "explanations": [
      "Correcto. Si P(A|B)=P(A), conocer B no cambia la probabilidad de A.",
      "La unión y la intersección no ofrecen por sí solas esa interpretación directa.",
      "Comparar un evento con su complemento no comprueba independencia.",
      "P(B) no necesita ser 0."
    ],
    "concept": "Independencia significa que conocer un evento no modifica la probabilidad del otro."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Diagnóstico",
    "level": "Avanzado",
    "question": "Una prueba tiene alta sensibilidad, pero la condición es muy rara. Quieres interpretar correctamente un resultado positivo. ¿Qué herramienta usarías?",
    "context": "Necesitas incorporar tanto el desempeño de la prueba como la prevalencia de la condición.",
    "options": [
      "Teorema de Bayes",
      "Solo la sensibilidad",
      "Solo la especificidad",
      "Media aritmética de las tasas"
    ],
    "correct": 0,
    "explanations": [
      "Correcto. Bayes combina la tasa base con la evidencia de la prueba.",
      "La sensibilidad sola es P(positivo|condición), no P(condición|positivo).",
      "La especificidad sola tampoco determina la probabilidad posterior.",
      "Promediar tasas no respeta la estructura condicional del problema."
    ],
    "concept": "En problemas de diagnóstico, la tasa base puede ser decisiva."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Selección de método",
    "level": "Avanzado",
    "question": "Quieres resolver un problema complejo con varias etapas, grupos de origen y una observación final que obliga a invertir la condición. ¿Qué secuencia de herramientas usarías?",
    "context": "Primero necesitas integrar las rutas posibles hacia la evidencia y después identificar el origen más probable.",
    "options": [
      "Probabilidad total y luego Bayes",
      "Solo complemento",
      "Solo combinaciones",
      "Media y desviación estándar"
    ],
    "correct": 0,
    "explanations": [
      "Correcto. La probabilidad total obtiene la evidencia global y Bayes actualiza la probabilidad de cada origen.",
      "El complemento no integra por sí solo múltiples orígenes ni invierte condiciones.",
      "Las combinaciones sirven para conteo, no para actualizar probabilidades de origen.",
      "Media y desviación estándar pertenecen a estadística descriptiva."
    ],
    "concept": "Muchos problemas de clasificación probabilística combinan probabilidad total y Bayes."
  }
];

window.trueFalseBank = [
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Población y muestra",
    "level": "Básico",
    "statement": "Una muestra es un subconjunto de la población que se observa para obtener información sobre ella.",
    "answer": true,
    "explanation": "Correcto. La muestra contiene las unidades efectivamente observadas y se utiliza para estudiar características de la población.",
    "concept": "Población = conjunto de interés; muestra = subconjunto observado."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Unidad de análisis",
    "level": "Básico",
    "statement": "La unidad de análisis siempre es una variable numérica.",
    "answer": false,
    "explanation": "Falso. La unidad de análisis es el elemento sobre el que se recopila información, por ejemplo una persona, empresa, hogar u objeto.",
    "concept": "No confundas unidad de análisis con variable."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Tipos de variables",
    "level": "Básico",
    "statement": "El número de llamadas recibidas durante una hora es una variable cuantitativa discreta.",
    "answer": true,
    "explanation": "Correcto. Es un conteo que toma normalmente valores enteros no negativos.",
    "concept": "Los conteos suelen modelarse como variables discretas."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Tipos de variables",
    "level": "Básico",
    "statement": "La estatura de una persona es una variable cualitativa ordinal.",
    "answer": false,
    "explanation": "Falso. La estatura es una medición numérica y se trata normalmente como variable cuantitativa continua.",
    "concept": "Las mediciones de longitud suelen ser continuas."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Escalas de medición",
    "level": "Intermedio",
    "statement": "En una escala nominal, las categorías tienen necesariamente un orden natural.",
    "answer": false,
    "explanation": "Falso. La escala nominal clasifica categorías sin establecer un orden inherente.",
    "concept": "Nominal = categorías sin orden; ordinal = categorías con orden."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Frecuencias",
    "level": "Básico",
    "statement": "Las frecuencias relativas de todas las categorías deben sumar 1 cuando se expresan como proporciones.",
    "answer": true,
    "explanation": "Correcto. Las proporciones cubren la totalidad de las observaciones y por ello suman 1.",
    "concept": "En porcentajes, el equivalente es 100 %."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Gráficos estadísticos",
    "level": "Intermedio",
    "statement": "Un histograma es apropiado para representar la distribución de una variable cuantitativa continua.",
    "answer": true,
    "explanation": "Correcto. Agrupa valores en intervalos y permite observar la forma de la distribución.",
    "concept": "Histograma y gráfico de barras categórico tienen propósitos distintos."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Media",
    "level": "Intermedio",
    "statement": "La media es resistente a valores extremos.",
    "answer": false,
    "explanation": "Falso. Valores muy altos o muy bajos pueden desplazar considerablemente la media.",
    "concept": "La mediana suele ser más resistente a valores extremos."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Mediana",
    "level": "Básico",
    "statement": "La mediana divide los datos ordenados en dos partes aproximadamente iguales.",
    "answer": true,
    "explanation": "Correcto. Aproximadamente la mitad de las observaciones queda a cada lado de la mediana.",
    "concept": "La mediana es una medida de posición central."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Moda",
    "level": "Intermedio",
    "statement": "Todo conjunto de datos tiene exactamente una moda.",
    "answer": false,
    "explanation": "Falso. Puede no haber moda o existir más de una moda si varias categorías o valores comparten la frecuencia máxima.",
    "concept": "Una distribución puede ser amodal, unimodal o multimodal."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Varianza",
    "level": "Intermedio",
    "statement": "La varianza se expresa en las mismas unidades originales de la variable.",
    "answer": false,
    "explanation": "Falso. La varianza queda expresada en unidades al cuadrado porque utiliza desviaciones cuadráticas.",
    "concept": "La desviación estándar recupera las unidades originales."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Desviación estándar",
    "level": "Intermedio",
    "statement": "Una desviación estándar mayor indica, en general, mayor dispersión alrededor de la media.",
    "answer": true,
    "explanation": "Correcto. Manteniendo comparable la escala, valores mayores reflejan mayor separación respecto de la media.",
    "concept": "La desviación estándar es una medida de dispersión."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Coeficiente de variación",
    "level": "Avanzado",
    "statement": "El coeficiente de variación puede ser problemático cuando la media está muy cerca de cero.",
    "answer": true,
    "explanation": "Correcto. Al dividir entre una media cercana a cero, el cociente puede volverse enorme o inestable.",
    "concept": "El CV requiere una media que haga razonable una comparación relativa."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Percentiles",
    "level": "Intermedio",
    "statement": "Estar en el percentil 80 significa necesariamente haber obtenido una puntuación de 80.",
    "answer": false,
    "explanation": "Falso. El percentil describe una posición relativa dentro de la distribución, no el valor numérico de la observación.",
    "concept": "Percentil y puntuación son conceptos diferentes."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Cuartiles",
    "level": "Básico",
    "statement": "El segundo cuartil coincide con la mediana.",
    "answer": true,
    "explanation": "Correcto. Q2 corresponde a la posición central de la distribución ordenada.",
    "concept": "Q1≈P25, Q2≈P50 y Q3≈P75."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Asimetría",
    "level": "Intermedio",
    "statement": "Una cola larga hacia la derecha es característica de asimetría positiva.",
    "answer": true,
    "explanation": "Correcto. La dirección de la cola larga determina el signo de la asimetría.",
    "concept": "Derecha = positiva; izquierda = negativa."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Curtosis",
    "level": "Avanzado",
    "statement": "Cuando se utiliza exceso de curtosis, la distribución normal tiene valor de referencia 0.",
    "answer": true,
    "explanation": "Correcto. La curtosis convencional de la normal es 3 y el exceso de curtosis resta ese 3.",
    "concept": "No confundas curtosis convencional con exceso de curtosis."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Boxplot",
    "level": "Intermedio",
    "statement": "En un boxplot estándar, la línea dentro de la caja representa la mediana.",
    "answer": true,
    "explanation": "Correcto. La caja se extiende de Q1 a Q3 y la línea interior marca Q2 o mediana.",
    "concept": "El boxplot resume posición, dispersión y posibles atípicos."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Valores atípicos",
    "level": "Avanzado",
    "statement": "Todo valor señalado como atípico por la regla de 1.5 IQR debe eliminarse del análisis.",
    "answer": false,
    "explanation": "Falso. La regla señala observaciones que deben investigarse; no demuestra que sean errores ni obliga a eliminarlas.",
    "concept": "Detectar un atípico no equivale a justificar su eliminación."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Interpretación",
    "level": "Avanzado",
    "statement": "Dos conjuntos con la misma media y desviación estándar tienen necesariamente la misma forma de distribución.",
    "answer": false,
    "explanation": "Falso. Pueden diferir en asimetría, colas, multimodalidad y otros rasgos aunque compartan esos dos resúmenes.",
    "concept": "Los resúmenes numéricos no sustituyen el análisis de la forma."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Experimentos aleatorios",
    "level": "Básico",
    "statement": "En un experimento aleatorio se conocen los resultados posibles, pero no necesariamente cuál ocurrirá antes de realizarlo.",
    "answer": true,
    "explanation": "Correcto. La incertidumbre sobre el resultado particular es parte esencial del experimento aleatorio.",
    "concept": "Aleatorio no significa que los resultados posibles sean desconocidos."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Eventos",
    "level": "Básico",
    "statement": "Un evento es un subconjunto del espacio muestral.",
    "answer": true,
    "explanation": "Correcto. Un evento reúne uno o más resultados del experimento.",
    "concept": "El evento seguro coincide con todo el espacio muestral."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Unión e intersección",
    "level": "Básico",
    "statement": "A∩B representa que ocurre al menos uno de los eventos A o B.",
    "answer": false,
    "explanation": "Falso. A∩B representa que ocurren ambos; 'al menos uno' corresponde a A∪B.",
    "concept": "Intersección = ambos; unión = A o B o ambos."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Complemento",
    "level": "Básico",
    "statement": "Para cualquier evento A, P(A)+P(Aᶜ)=1.",
    "answer": true,
    "explanation": "Correcto. Un evento y su complemento cubren todo el espacio muestral sin superponerse.",
    "concept": "P(Aᶜ)=1−P(A)."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Propiedades básicas",
    "level": "Básico",
    "statement": "Una probabilidad válida puede tomar el valor 1.2 si el evento es muy frecuente.",
    "answer": false,
    "explanation": "Falso. Toda probabilidad debe estar entre 0 y 1 inclusive.",
    "concept": "0≤P(A)≤1."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Regla de adición",
    "level": "Intermedio",
    "statement": "Al calcular P(A∪B) en el caso general, se resta P(A∩B) para evitar contar dos veces la intersección.",
    "answer": true,
    "explanation": "Correcto. P(A)+P(B) incluye dos veces los resultados comunes, por eso se resta una vez la intersección.",
    "concept": "P(A∪B)=P(A)+P(B)−P(A∩B)."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Mutua exclusión",
    "level": "Intermedio",
    "statement": "Dos eventos mutuamente excluyentes con probabilidad positiva son también independientes.",
    "answer": false,
    "explanation": "Falso. Si son excluyentes, P(A∩B)=0; si ambos tienen probabilidad positiva, P(A)P(B)>0, por lo que no son independientes.",
    "concept": "Mutua exclusión e independencia son conceptos diferentes."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Probabilidad condicional",
    "level": "Intermedio",
    "statement": "En P(A|B), el evento B define el nuevo universo de referencia.",
    "answer": true,
    "explanation": "Correcto. Al condicionar por B, consideramos únicamente los casos en los que B ocurrió.",
    "concept": "P(A|B)=P(A∩B)/P(B), con P(B)>0."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Probabilidad condicional",
    "level": "Avanzado",
    "statement": "P(A|B) es siempre igual a P(B|A).",
    "answer": false,
    "explanation": "Falso. Invertir la condición cambia el evento de referencia y normalmente cambia el valor de la probabilidad.",
    "concept": "No confundas una condicional con su inversa."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Regla de multiplicación",
    "level": "Intermedio",
    "statement": "P(A∩B)=P(A)P(B|A) es una forma de la regla de multiplicación.",
    "answer": true,
    "explanation": "Correcto. La probabilidad conjunta puede expresarse como probabilidad inicial por probabilidad condicional.",
    "concept": "La regla funciona también como P(B)P(A|B)."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Sin reemplazo",
    "level": "Intermedio",
    "statement": "En una extracción sin reemplazo, las probabilidades de las extracciones posteriores pueden cambiar.",
    "answer": true,
    "explanation": "Correcto. Al no devolver el objeto, cambia la composición del conjunto disponible.",
    "concept": "Sin reemplazo suele generar dependencia entre extracciones."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Independencia",
    "level": "Intermedio",
    "statement": "Si A y B son independientes, entonces P(A∩B)=P(A)P(B).",
    "answer": true,
    "explanation": "Correcto. Es una de las condiciones fundamentales para comprobar independencia.",
    "concept": "La independencia significa que conocer un evento no modifica la probabilidad del otro."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Árboles de probabilidad",
    "level": "Intermedio",
    "statement": "En un árbol de probabilidad, las probabilidades a lo largo de una ruta se suman.",
    "answer": false,
    "explanation": "Falso. A lo largo de una ruta se multiplican; rutas alternativas mutuamente excluyentes se suman.",
    "concept": "Árbol: multiplicar por ruta, sumar entre rutas pertinentes."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Tablas de contingencia",
    "level": "Intermedio",
    "statement": "Una celda interior de una tabla de contingencia puede representar una frecuencia conjunta de dos categorías.",
    "answer": true,
    "explanation": "Correcto. Cada celda cruza una categoría de una variable con una categoría de otra.",
    "concept": "Los márgenes contienen frecuencias marginales."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Probabilidad total",
    "level": "Avanzado",
    "statement": "La probabilidad total combina probabilidades condicionales ponderadas por la probabilidad de los grupos que forman una partición.",
    "answer": true,
    "explanation": "Correcto. Cada ruta hacia el evento se pondera por la probabilidad de pertenecer al grupo correspondiente.",
    "concept": "P(B)=ΣP(B|Aᵢ)P(Aᵢ)."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Bayes",
    "level": "Avanzado",
    "statement": "El teorema de Bayes permite invertir una probabilidad condicional incorporando una probabilidad previa y la evidencia observada.",
    "answer": true,
    "explanation": "Correcto. Bayes transforma información del tipo P(B|A) en P(A|B) utilizando las probabilidades pertinentes.",
    "concept": "Posterior ∝ verosimilitud × probabilidad previa."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Bayes",
    "level": "Avanzado",
    "statement": "Si una prueba tiene sensibilidad de 95 %, entonces una persona con resultado positivo tiene necesariamente 95 % de probabilidad de presentar la condición.",
    "answer": false,
    "explanation": "Falso. La probabilidad posterior también depende de la prevalencia y de la tasa de falsos positivos.",
    "concept": "Sensibilidad y probabilidad posterior no son lo mismo."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Conteo",
    "level": "Intermedio",
    "statement": "Si el orden de selección importa, una combinación suele ser la herramienta apropiada.",
    "answer": false,
    "explanation": "Falso. Las combinaciones se usan cuando el orden no importa; cuando importa se usan arreglos, variaciones o permutaciones según el caso.",
    "concept": "Primero decide si el orden importa."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Permutaciones",
    "level": "Básico",
    "statement": "El número de formas de ordenar n objetos distintos es n!.",
    "answer": true,
    "explanation": "Correcto. Para la primera posición hay n opciones, luego n−1, y así sucesivamente.",
    "concept": "n! = n(n−1)(n−2)…1."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "De Morgan",
    "level": "Avanzado",
    "statement": "El complemento de A∪B es Aᶜ∩Bᶜ.",
    "answer": true,
    "explanation": "Correcto. Para que no ocurra A ni B, deben ocurrir simultáneamente ambos complementos.",
    "concept": "(A∪B)ᶜ=Aᶜ∩Bᶜ."
  }
];

window.flashcardBank = [
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Población y muestra",
    "level": "Básico",
    "prompt": "¿Cuál es la diferencia entre población y muestra?",
    "answer": "La población es el conjunto total de interés; la muestra es el subconjunto que se observa.",
    "detail": "La muestra se utiliza para describir o inferir características de la población."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Unidad de análisis",
    "level": "Básico",
    "prompt": "¿Qué es la unidad de análisis?",
    "answer": "Es el elemento individual sobre el que se registra información.",
    "detail": "Puede ser una persona, hogar, empresa, objeto, evento u otra unidad definida por el estudio."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Tipos de variables",
    "level": "Básico",
    "prompt": "¿Cuándo una variable cuantitativa es discreta?",
    "answer": "Cuando toma valores separados y contables, normalmente producto de un conteo.",
    "detail": "Ejemplos: número de hijos, llamadas recibidas o defectos observados."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Tipos de variables",
    "level": "Básico",
    "prompt": "¿Cuándo una variable cuantitativa es continua?",
    "answer": "Cuando puede tomar valores dentro de un intervalo con la precisión permitida por la medición.",
    "detail": "Ejemplos: peso, tiempo, longitud o temperatura."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Escalas de medición",
    "level": "Intermedio",
    "prompt": "¿Qué distingue una escala ordinal de una nominal?",
    "answer": "La escala ordinal tiene un orden natural entre categorías; la nominal no.",
    "detail": "El orden ordinal no implica que las distancias entre categorías sean iguales."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Frecuencias",
    "level": "Básico",
    "prompt": "¿Cómo se calcula la frecuencia relativa?",
    "answer": "Frecuencia relativa = frecuencia absoluta / número total de observaciones.",
    "detail": "Expresada como proporción, todas las frecuencias relativas suman 1."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Gráficos",
    "level": "Básico",
    "prompt": "¿Para qué sirve principalmente un histograma?",
    "answer": "Para visualizar la forma de la distribución de una variable cuantitativa.",
    "detail": "Permite apreciar concentración, asimetría, posibles modas y dispersión."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Media",
    "level": "Básico",
    "prompt": "¿Qué representa la media aritmética?",
    "answer": "El promedio obtenido al sumar todos los valores y dividir entre el número de observaciones.",
    "detail": "Es sensible a valores extremos."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Mediana",
    "level": "Básico",
    "prompt": "¿Qué representa la mediana?",
    "answer": "El valor central de los datos ordenados.",
    "detail": "Aproximadamente la mitad de las observaciones queda por debajo y la otra mitad por encima."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Moda",
    "level": "Básico",
    "prompt": "¿Qué es la moda?",
    "answer": "El valor o categoría que aparece con mayor frecuencia.",
    "detail": "Puede existir una moda, varias modas o ninguna moda claramente definida."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Cuartiles",
    "level": "Intermedio",
    "prompt": "¿Qué porcentaje aproximado de observaciones queda por debajo de Q3?",
    "answer": "75 %.",
    "detail": "Q1 ≈ P25, Q2 ≈ P50 y Q3 ≈ P75."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "IQR",
    "level": "Intermedio",
    "prompt": "¿Cómo se calcula el rango intercuartílico?",
    "answer": "IQR = Q3 − Q1.",
    "detail": "Mide la amplitud del 50 % central de los datos."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Rango",
    "level": "Básico",
    "prompt": "¿Cómo se calcula el rango?",
    "answer": "Máximo − mínimo.",
    "detail": "Es sencillo, pero depende únicamente de los dos valores extremos."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Varianza",
    "level": "Intermedio",
    "prompt": "¿Qué mide la varianza?",
    "answer": "La dispersión promedio cuadrática de los valores respecto de la media.",
    "detail": "Queda expresada en unidades al cuadrado."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Desviación estándar",
    "level": "Intermedio",
    "prompt": "¿Cómo se relacionan varianza y desviación estándar?",
    "answer": "La desviación estándar es la raíz cuadrada de la varianza.",
    "detail": "Por eso vuelve a expresarse en las unidades originales de la variable."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Coeficiente de variación",
    "level": "Avanzado",
    "prompt": "¿Para qué se usa el coeficiente de variación?",
    "answer": "Para comparar dispersión relativa respecto de la media.",
    "detail": "Debe interpretarse con cautela cuando la media es cero o muy cercana a cero."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Asimetría",
    "level": "Intermedio",
    "prompt": "¿Qué indica una asimetría positiva?",
    "answer": "Una distribución con cola más larga hacia la derecha.",
    "detail": "Valores altos extremos suelen empujar la media hacia la derecha."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Curtosis",
    "level": "Avanzado",
    "prompt": "¿Cuál es el exceso de curtosis teórico de una distribución normal?",
    "answer": "0.",
    "detail": "La curtosis convencional de la normal es 3; el exceso resta 3."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Boxplot",
    "level": "Intermedio",
    "prompt": "¿Qué elementos resume un boxplot?",
    "answer": "Cuartiles, mediana, dispersión central, bigotes y posibles valores atípicos.",
    "detail": "Es especialmente útil para comparar distribuciones entre grupos."
  },
  {
    "module": "descriptiva",
    "moduleName": "Estadística descriptiva",
    "topic": "Valores atípicos",
    "level": "Avanzado",
    "prompt": "¿Un valor señalado por la regla de 1.5 IQR debe eliminarse automáticamente?",
    "answer": "No.",
    "detail": "Debe investigarse primero: puede ser un error, pero también una observación legítima e informativa."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Experimento aleatorio",
    "level": "Básico",
    "prompt": "¿Qué caracteriza a un experimento aleatorio?",
    "answer": "Se conocen los resultados posibles, pero no cuál ocurrirá antes de realizarlo.",
    "detail": "Ejemplos típicos son lanzar un dado o seleccionar aleatoriamente un elemento."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Espacio muestral",
    "level": "Básico",
    "prompt": "¿Qué es el espacio muestral?",
    "answer": "El conjunto de todos los resultados posibles de un experimento aleatorio.",
    "detail": "Suele representarse con S o Ω."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Eventos",
    "level": "Básico",
    "prompt": "¿Qué es un evento?",
    "answer": "Un subconjunto del espacio muestral.",
    "detail": "Puede contener uno, varios o todos los resultados posibles."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Unión",
    "level": "Básico",
    "prompt": "¿Qué significa A∪B?",
    "answer": "Que ocurre A, B o ambos.",
    "detail": "La unión representa 'al menos uno de los dos eventos'."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Intersección",
    "level": "Básico",
    "prompt": "¿Qué significa A∩B?",
    "answer": "Que ocurren A y B simultáneamente.",
    "detail": "Contiene los resultados comunes a ambos eventos."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Complemento",
    "level": "Básico",
    "prompt": "¿Cómo se calcula la probabilidad del complemento de A?",
    "answer": "P(Aᶜ) = 1 − P(A).",
    "detail": "A y su complemento cubren todo el espacio muestral sin superponerse."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Regla de adición",
    "level": "Intermedio",
    "prompt": "¿Cuál es la regla general de adición para dos eventos?",
    "answer": "P(A∪B) = P(A) + P(B) − P(A∩B).",
    "detail": "Se resta la intersección porque fue contada dos veces."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Probabilidad condicional",
    "level": "Intermedio",
    "prompt": "¿Cómo se define P(A|B)?",
    "answer": "P(A|B) = P(A∩B) / P(B), siempre que P(B) > 0.",
    "detail": "La condición B redefine el universo de referencia."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Regla de multiplicación",
    "level": "Intermedio",
    "prompt": "¿Cuál es una forma de la regla de multiplicación?",
    "answer": "P(A∩B) = P(A)·P(B|A).",
    "detail": "También puede escribirse P(B)·P(A|B)."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Independencia",
    "level": "Intermedio",
    "prompt": "¿Cuál es una condición para que A y B sean independientes?",
    "answer": "P(A∩B) = P(A)P(B).",
    "detail": "Equivalentemente, si P(B)>0, P(A|B)=P(A)."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Mutua exclusión",
    "level": "Intermedio",
    "prompt": "¿Qué significa que A y B sean mutuamente excluyentes?",
    "answer": "Que no pueden ocurrir simultáneamente.",
    "detail": "Por tanto, A∩B es vacío y P(A∩B)=0."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Árboles",
    "level": "Intermedio",
    "prompt": "¿Cuál es la regla básica para trabajar con un árbol de probabilidad?",
    "answer": "Multiplicar a lo largo de una ruta y sumar rutas alternativas pertinentes.",
    "detail": "Las ramas permiten representar probabilidades condicionales sucesivas."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Tablas de contingencia",
    "level": "Intermedio",
    "prompt": "¿Qué información muestra una celda interior de una tabla de contingencia?",
    "answer": "Una frecuencia o probabilidad conjunta de dos categorías.",
    "detail": "Los totales de fila y columna son frecuencias marginales."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Probabilidad total",
    "level": "Avanzado",
    "prompt": "¿Para qué sirve el teorema de la probabilidad total?",
    "answer": "Para calcular la probabilidad global de un evento combinando varias rutas o grupos.",
    "detail": "P(B)=ΣP(B|Aᵢ)P(Aᵢ) cuando los Aᵢ forman una partición."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Bayes",
    "level": "Avanzado",
    "prompt": "¿Para qué sirve el teorema de Bayes?",
    "answer": "Para actualizar o invertir probabilidades condicionales usando evidencia.",
    "detail": "Relaciona P(A|B) con P(B|A), la probabilidad previa de A y la evidencia B."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Conteo",
    "level": "Intermedio",
    "prompt": "¿Cuándo se usan combinaciones?",
    "answer": "Cuando se seleccionan elementos y el orden no importa.",
    "detail": "Por ejemplo, formar un comité de 3 personas entre 10."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Conteo",
    "level": "Intermedio",
    "prompt": "¿Cuándo importa una permutación o selección ordenada?",
    "answer": "Cuando cambiar el orden o la posición produce un resultado diferente.",
    "detail": "Por ejemplo, asignar presidente, vicepresidente y secretario."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Sin reemplazo",
    "level": "Intermedio",
    "prompt": "¿Por qué las extracciones sin reemplazo suelen ser dependientes?",
    "answer": "Porque cada extracción modifica la composición disponible para las siguientes.",
    "detail": "Las probabilidades posteriores deben actualizarse según lo ocurrido antes."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "De Morgan",
    "level": "Avanzado",
    "prompt": "¿Cuál es el complemento de A∪B según De Morgan?",
    "answer": "Aᶜ∩Bᶜ.",
    "detail": "No ocurre A ni B significa que ocurren ambos complementos."
  },
  {
    "module": "probabilidad",
    "moduleName": "Probabilidad",
    "topic": "Bayes y diagnóstico",
    "level": "Avanzado",
    "prompt": "¿Por qué una alta sensibilidad no equivale a una alta probabilidad de tener la condición después de un positivo?",
    "answer": "Porque la probabilidad posterior también depende de la prevalencia y de los falsos positivos.",
    "detail": "La tasa base es fundamental en la interpretación de pruebas diagnósticas."
  }
];
