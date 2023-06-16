let questions = [
  {
    question:
      "¿Cuál de las siguientes opciones es una buena forma de reducir el estrés?",
    choice1: "Comer en exceso",
    choice2: "Hacer ejercicio",
    choice3: "Ver televisión todo el día",
    choice4: "Dormir todo el día",
    answer: 2,
  },
  {
    question: "¿Cuántas horas de sueño se recomiendan para adultos?",
    choice1: "4-5 horas",
    choice2: "6-7 horas",
    choice3: "8-9 horas",
    choice4: "12-26 horas",
    answer: 3,
  },
  {
    question:
      "¿Qué porcentaje de la dieta diaria debe consistir en frutas y verduras?",
    choice1: "10%",
    choice2: "25%",
    choice3: "50%",
    choice4: "75%",
    answer: 3,
  },
  {
    question:
      "¿Cuál de las siguientes opciones no es una buena forma de mantener una buena higiene bucal?",
    choice1: "Cepillarse los dientes después de cada comida",
    choice2: "Usar hilo dental",
    choice3: "No cepillarse los dientes",
    choice4: "Usar enjuague bucal",
    answer: 3,
  },
  {
    question: "¿Cuántos vasos de agua se recomienda beber al día?",
    choice1: "1-2 vasos",
    choice2: "6-8 vasos",
    choice3: "10-12 vasos",
    choice4: "Ninguno",
    answer: 2,
  },
  {
    question:
      "¿Qué porcentaje de la dieta diaria debe consistir en carbohidratos complejos?",
    choice1: "10%",
    choice2: "25%",
    choice3: "50%",
    choice4: "5%",
    answer: 3,
  },
  {
    question:
      "¿Cuál de las siguientes opciones es una buena forma de prevenir lesiones deportivas?",
    choice1: "Estirar adecuadamente antes de hacer ejercicio",
    choice2: "Hacer ejercicio sin calentar primero",
    choice3: "Comer alimentos pesados antes de hacer ejercicio",
    choice4: "Dormir todo el día",
    answer: 1,
  },
  {
    question: "¿Cuánto tiempo se recomienda hacer ejercicio al día?",
    choice1: "10-15 minutos",
    choice2: "30-60 minutos",
    choice3: "2-3 horas",
    choice4: "5-8 minutos",
    answer: 2,
  },
  {
    question:
      "¿Cuál de las siguientes opciones es una buena forma de mantener un peso saludable?",
    choice1: "Comer en exceso",
    choice2: "Hacer ejercicio regularmente",
    choice3: "No hacer nada",
    choice4: "Ver televisión todo el día",
    answer: 2,
  },
  {
    question: "¿Cuántas veces a la semana se recomienda hacer ejercicio?",
    choice1: "1-2 veces",
    choice2: "3-4 veces",
    choice3: "5-7 veces",
    choice4: "1 vez",
    answer: 2,
  },
  {
    question: "¿Qué porcentaje de la dieta diaria debe consistir en proteínas?",
    choice1: "10%",
    choice2: "25%",
    choice3: "50%",
    choice4: "90%",
    answer: 2,
  },
  {
    question:
      "¿Cuál de las siguientes opciones es una buena forma de prevenir enfermedades del corazón?",
    choice1: "Fumar regularmente",
    choice2: "Comer alimentos con alto contenido de grasa",
    choice3: "Hacer ejercicio regularmente",
    choice4: "Comer muchos dulces",
    answer: 3,
  },
  {
    question:
      "¿Cuántas horas de actividad física se recomienda hacer a la semana para mantener un estilo de vida saludable?",
    choice1: "1-2 horas",
    choice2: "1-2 horas",
    choice3: "5 horas o más",
    choice4: "12-26 horas",
    answer: 3,
  },
  {
    question:
      "¿Cuál es la cantidad recomendada de azúcar añadido que se debe consumir al día?",
    choice1: "Menos de 10% de las calorías diarias",
    choice2: "Menos de 25% de las calorías diarias",
    choice3: "No hay recomendación",
    choice4: "Menos de 75% de las calorías diarias",
    answer: 1,
  },
  {
    question:
      "¿Qué alimentos son considerados como una buena fuente de proteína?",
    choice1: "Verduras",
    choice2: "Frutas",
    choice3: "Carne",
    choice4: "Golosinas",
    answer: 3,
  },
  {
    question:
      "¿Cuánto tiempo se recomienda que una persona adulta esté sentada en un día?",
    choice1: "Menos de 1 hora",
    choice2: "Entre 1-2 horas",
    choice3: "Menos de 4 horas",
    choice4: "Todo el día",
    answer: 3,
  },
  {
    question:
      "¿Cuántos días a la semana se recomienda hacer ejercicios de fuerza?",
    choice1: "1-2 días",
    choice2: "3-4 días",
    choice3: "5-7 días",
    choice4: "1 día",
    answer: 2,
  },
  {
    question: "¿Qué alimentos se recomienda consumir antes de hacer ejercicio?",
    choice1: "Alimentos con alto contenido de grasa",
    choice2: "Alimentos con alto contenido de azúcar",
    choice3: "Alimentos con carbohidratos complejos",
    choice4: "Todos los anteriores",
    answer: 3,
  },
  {
    question:
      "¿Cuántos minutos se recomienda estirar antes de hacer ejercicio?",
    choice1: "Menos de 5 minutos",
    choice2: "Entre 5-10 minutos",
    choice3: "Entre 10-20 minutos",
    choice4: "La mitad de la rutina de ejercicio",
    answer: 2,
  },
  {
    question:
      "¿Cuántos minutos se recomienda estirar después de hacer ejercicio?",
    choice1: "Menos de 5 minutos",
    choice2: "Entre 5-10 minutos",
    choice3: "Entre 10-20 minutos",
    choice4: "No es necesario estirar",
    answer: 3,
  },
  {
    question: "¿Qué es la frecuencia cardíaca máxima?",
    choice1:
      "La cantidad de veces que el corazón late por minuto mientras se hace ejercicio",
    choice2: "La cantidad de veces que el corazón late por minuto en reposo",
    choice3: "La cantidad de veces que el corazón puede latir por minuto",
    choice4: "Todas las anteriores",
    answer: 3,
  },
  {
    question: "¿Qué es la frecuencia cardíaca en reposo?",
    choice1:
      "La cantidad de veces que el corazón late por minuto mientras se hace ejercicio",
    choice2: "La cantidad de veces que el corazón late por minuto en reposo",
    choice3: "La cantidad de veces que el corazón puede latir por minuto",
    choice4: "Todas las anteriores",
    answer: 2,
  },
  {
    question:
      "¿Cuántas horas de sueño se recomienda tener cada noche para mantener un estilo de vida saludable?",
    choice1: "4-5 horas",
    choice2: "6-8 horas",
    choice3: "9-10 horas",
    choice4: "2-3 horas",
    answer: 2,
  },
  {
    question:
      "¿Cuál de las siguientes opciones es una fuente saludable de grasas?",
    choice1: "Comida rápida",
    choice2: "Aguacate",
    choice3: "Dulces",
    choice4: "Carnes de res",
    answer: 2,
  },
  {
    question:
      "¿Cuál es la cantidad recomendada de frutas y verduras que se debe consumir al día?",
    choice1: "2-3 porciones",
    choice2: "4-5 porciones",
    choice3: "6 o más porciones",
    choice4: "1 porción",
    answer: 3,
  },
  {
    question:
      "¿Cuántas veces a la semana se recomienda hacer ejercicios cardiovasculares?",
    choice1: "1-2 veces",
    choice2: "3-4 veces",
    choice3: "5-7 veces",
    choice4: "1 vez",
    answer: 2,
  },
  {
    question:
      "¿Cuál es la cantidad recomendada de agua que se debe beber al día?",
    choice1: "1 litro",
    choice2: "2-3 litros",
    choice3: "4-5 litros",
    choice4: "1/2 litro",
    answer: 2,
  },
  {
    question:
      "¿Cuánto tiempo se recomienda que una persona se cepille los dientes cada vez?",
    choice1: "30 segundos",
    choice2: "1 minuto",
    choice3: "2 minutos",
    choice4: "60minutos",
    answer: 3,
  },
  {
    question: "¿Qué tipo de grasas se deben evitar en una dieta saludable?",
    choice1: "Grasas saturadas",
    choice2: "Grasas insaturadas",
    choice3: "Grasas trans",
    choice4: "Todas las anteriores",
    answer: 3,
  },
  {
    question: "¿Cuántas calorías se queman al correr durante 30 minutos?",
    choice1: "100-200 calorías",
    choice2: "300-400 calorías",
    choice3: "500-600 calorías",
    choice4: "50-70 calorías",
    answer: 2,
  },
  {
    question: "¿Cuántas porciones de lácteos se recomienda consumir al día?",
    choice1: "1-2 porciones",
    choice2: "3-4 porciones",
    choice3: "5 o más porciones",
    choice4: "1/2 porción",
    answer: 1,
  },
  {
    question:
      "¿Cuál es la cantidad recomendada de fibra que se debe consumir al día?",
    choice1: "Menos de 10 gramos",
    choice2: "Entre 10-25 gramos",
    choice3: "Más de 25 gramos",
    choice4: "Más de 60 gramos",
    answer: 3,
  },
];
