const questions = [
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
  {
    question: "¿Qué alimentos son ricos en proteínas?",
    choice1: "Frutas",
    choice2: "Verduras",
    choice3: "Carnes y legumbres",
    choice4: "Lácteos",
    answer: 3,
  },
  {
    question:
      "¿Qué enfermedades se pueden prevenir mediante una dieta saludable y ejercicio regular?",
    choice1: "Diabetes y enfermedades del corazón",
    choice2: "Cáncer y enfermedades respiratorias",
    choice3: "Enfermedades de transmisión sexual",
    choice4: "Todas las anteriores",
    answer: 1,
  },
  {
    question: "¿Qué tipo de ejercicio ayuda a fortalecer los huesos?",
    choice1: "Yoga",
    choice2: "Pilates",
    choice3: "Levantamiento de pesas",
    choice4: "Estiramientos",
    answer: 3,
  },
  {
    question:
      "¿Cuántas veces a la semana se recomienda realizar ejercicios de fortalecimiento muscular?",
    choice1: "1-2 veces",
    choice2: "3-4 veces",
    choice3: "5-7 veces",
    choice4: "No se recomienda",
    answer: 2,
  },
  {
    question: "¿Qué beneficios tiene el consumo de omega-3 para la salud?",
    choice1: "Mejora la salud cardiovascular",
    choice2: "Fortalece los huesos",
    choice3: "Reduce el estrés",
    choice4: "Quita los gorditos",
    answer: 1,
  },
  {
    question:
      "¿Cuál es el tiempo mínimo recomendado para una sesión de ejercicio cardiovascular?",
    choice1: "15 minutos",
    choice2: "30 minutos",
    choice3: "60 minutos",
    choice4: "120 minutos",
    answer: 2,
  },
  {
    question:
      "¿Cuántas porciones de carnes rojas se recomienda consumir por semana?",
    choice1: "1-2 porciones",
    choice2: "3-4 porciones",
    choice3: "5 o más porciones",
    choice4: "10 o más porciones",
    answer: 1,
  },
  {
    question:
      "¿Qué nutrientes son esenciales para el buen funcionamiento del cerebro?",
    choice1: "Proteínas",
    choice2: "Carbohidratos",
    choice3: "Grasas saludables",
    choice4: "Azúcares",
    answer: 3,
  },
  {
    question: "¿Qué porcentaje de nuestro cuerpo está compuesto por agua?",
    choice1: "40-50%",
    choice2: "60-70%",
    choice3: "80-90%",
    choice4: "10%-30%",
    answer: 2,
  },
  {
    question:
      "¿Qué beneficios tiene el consumo de frutas y verduras para la salud?",
    choice1: "Ayudan a prevenir enfermedades",
    choice2: "Aumentan la energía",
    choice3: "Mejoran el sueño",
    choice4: "Quita el sueño",
    answer: 1,
  },
  {
    question: "¿Qué alimentos contienen grasas saturadas?",
    choice1: "Frutas y verduras",
    choice2: "Carnes rojas y lácteos enteros",
    choice3: "Legumbres y frutos secos",
    choice4: "Huevos",
    answer: 2,
  },
  {
    question: "¿Qué es el colesterol y por qué es importante controlarlo?",
    choice1: "Es una sustancia que ayuda al cuerpo a absorber vitaminas",
    choice2:
      "Es una sustancia que puede acumularse en las arterias y aumentar el riesgo de enfermedades del corazón",
    choice3: "Es una sustancia que ayuda a fortalecer los huesos",
    choice4: "Todas las reuniones",
    answer: 2,
  },
  {
    question:
      "¿Cuál es el principal factor de riesgo para enfermedades del corazón?",
    choice1: "Consumo excesivo de azúcar",
    choice2: "Sedentarismo",
    choice3: "Consumo de grasas saludables",
    choice4: "Ejercicio diario",
    answer: 2,
  },
  {
    question:
      "¿Cuáles son los principales beneficios de realizar actividad física de forma regular?",
    choice1: "Fortalecimiento muscular y aumento de la energía",
    choice2: "Reducción del estrés y mejoras en la salud mental",
    choice3:
      "Prevención de enfermedades crónicas y mejora de la salud cardiovascular",
    choice4: "Todas las anteriores",
    answer: 3,
  },
  {
    question: "¿Qué son los antioxidantes y cuál es su función en el cuerpo?",
    choice1: "Son sustancias que ayudan a prevenir enfermedades",
    choice2:
      "Son sustancias que ayudan a neutralizar los radicales libres y proteger las células del daño",
    choice3: "Son sustancias que ayudan a fortalecer los huesos",
    choice4: "Todas las anteriores",
    answer: 2,
  },
  {
    question:
      "¿Cuáles son los principales beneficios de una dieta rica en frutas y verduras?",
    choice1: "Aumento de la energía y mejoras en la salud mental",
    choice2:
      "Prevención de enfermedades crónicas y mejora de la salud cardiovascular",
    choice3: "Fortalecimiento muscular y reducción del estrés",
    choice4: "Todas las anteriores",
    answer: 2,
  },
  {
    question: "¿Qué alimentos contienen carbohidratos complejos?",
    choice1: "Frutas y verduras",
    choice2: "Cereales integrales y legumbres",
    choice3: "Carnes y lácteos",
    choice4: "Huevos y quesos",
    answer: 2,
  },
  {
    question: "¿Cuáles son los principales beneficios de la meditación?",
    choice1: "Reducción del estrés y mejora en la concentración",
    choice2: "Aumento de la energía y fortalecimiento muscular",
    choice3:
      "Prevención de enfermedades crónicas y mejora de la salud cardiovascular",
    choice4: "Todas las anteriores",
    answer: 1,
  },
  {
    question: "¿Cuál es la mejor manera de reducir el consumo de azúcar?",
    choice1: "Evitar los alimentos procesados",
    choice2:
      "Reemplazar los productos azucarados por edulcorantes artificiales",
    choice3: "Consumir azúcar solo en pequeñas cantidades",
    choice4: "Consumir solo un tipo de azúcar",
    answer: 1,
  },
  {
    question:
      "¿Qué son los ácidos grasos omega-3 y por qué son importantes para la salud?",
    choice1: "Son grasas que aumentan el colesterol malo",
    choice2:
      "Son grasas que ayudan a reducir la inflamación y proteger la salud cardiovascular",
    choice3: "Son grasas que se encuentran en alimentos procesados",
    choice4: "Todas las anteriores",
    answer: 2,
  },
  {
    question:
      "¿Cuál es la mejor manera de aumentar la ingesta de fibra en la dieta?",
    choice1: "Consumir frutas y verduras frescas en todas las comidas",
    choice2:
      "Comer alimentos ricos en fibra como los cereales integrales y las legumbres",
    choice3: "Tomar suplementos de fibra diariamente",
    choice4: "Todas las anteriores",
    answer: 2,
  },
  {
    question:
      "¿Cuál es la mejor manera de reducir el consumo de grasas saturadas?",
    choice1: "Evitar los alimentos procesados",
    choice2: "Reemplazar la carne roja por carnes blancas",
    choice3: "Consumir solo productos lácteos bajos en grasas",
    choice4: "Todas las anteriores",
    answer: 1,
  },
  {
    question: "¿Qué es la vitamina D y por qué es importante para la salud?",
    choice1:
      "Es una vitamina que se encuentra en frutas y verduras y ayuda a fortalecer el sistema inmunológico",
    choice2:
      "Es una vitamina que se encuentra en los alimentos ricos en grasas",
    choice3:
      "Es una vitamina que ayuda al cuerpo a absorber el calcio y fortalecer los huesos",
    choice4: "Es la vitamina que ayuda al cerebro con sus procesos",
    answer: 3,
  },
  {
    question: "¿Qué son los radicales libres y cómo afectan la salud?",
    choice1: "Son sustancias que ayudan a proteger el cuerpo de enfermedades",
    choice2:
      "Son sustancias que pueden dañar las células y aumentar el riesgo de enfermedades",
    choice3: "Son sustancias que ayudan a fortalecer los huesos",
    choice4: "Todas las anteriores",
    answer: 2,
  },
  {
    question: "¿Cuál es la mejor manera de reducir el consumo de alcohol?",
    choice1: "Consumir solo bebidas alcohólicas de baja graduación",
    choice2: "Consumir solo bebidas alcohólicas en eventos sociales",
    choice3: "Consumir alcohol solo en moderación o evitarlo por completo",
    choice4: "Consumir solo un día a la semana",
    answer: 3,
  },
  {
    question: "¿Cuál es la mejor manera de mantener una buena salud mental?",
    choice1:
      "Mantener relaciones sociales saludables y practicar la meditación",
    choice2: "Evitar el estrés y el trabajo excesivo",
    choice3: "Dormir suficientes horas diariamente",
    choice4: "El aislamiento",
    answer: 1,
  },
  {
    question:
      "¿Cuál es la mejor manera de prevenir enfermedades cardiovasculares?",
    choice1: "Seguir una dieta equilibrada y hacer ejercicio regularmente",
    choice2: "Evitar fumar y consumir alcohol en exceso",
    choice3: "Todas las opciones son correctas",
    choice4: "Ninguna opción es correcta",
    answer: 3,
  },
  {
    question:
      "¿Cuál es la mejor manera de reducir el riesgo de desarrollar diabetes tipo 2?",
    choice1: "Mantener un peso saludable y llevar una dieta equilibrada",
    choice2: "Evitar el consumo de carbohidratos por completo",
    choice3: "Tomar suplementos de insulina diariamente",
    choice4: "Ninguna opción es correcta",
    answer: 1,
  },
  {
    question: "¿Cuál es la mejor manera de prevenir la osteoporosis?",
    choice1:
      "Consumir suficiente calcio y vitamina D y hacer ejercicio regularmente",
    choice2: "Evitar hacer ejercicio para no desgastar los huesos",
    choice3: "Tomar suplementos de calcio diariamente",
    choice4: "Todas las anteriores",
    answer: 1,
  },
  {
    question:
      "¿Cuál es la mejor manera de reducir el consumo de carbohidratos refinados?",
    choice1: "Evitar los alimentos procesados",
    choice2:
      "Consumir solo carbohidratos complejos como los que se encuentran en los cereales integrales",
    choice3:
      "Consumir solo carbohidratos simples como los que se encuentran en las frutas",
    choice4: "Consumir carnes rojas y huevos",
    answer: 2,
  },
  {
    question: "¿Cuál es la mejor manera de reducir el consumo de cafeína?",
    choice1: "Beber café descafeinado",
    choice2: "Evitar por completo el consumo de café",
    choice3: "Consumir solo una taza de café al día",
    choice4: "Ninguna opción es correcta",
    answer: 1,
  },
  {
    question: "¿Cuál es la mejor manera de prevenir la gripe y los resfriados?",
    choice1:
      "Lavarse las manos con frecuencia y evitar el contacto con personas enfermas",
    choice2: "Tomar antibióticos regularmente",
    choice3: "Dormir suficientes horas diariamente",
    choice4: "Ninguna de las anteriores",
    answer: 1,
  },
  {
    question: "¿Qué alimentos deberías comer antes de hacer ejercicio?",
    choice1: "Alimentos ricos en proteínas",
    choice2: "Alimentos ricos en carbohidratos",
    choice3: "Alimentos ricos en grasas",
    choice4: "Alimentos ricos en azúcar",
    answer: 2,
  },
  {
    question: "¿Cuál es la mejor manera de reducir el estrés?",
    choice1: "Hacer ejercicio regularmente",
    choice2: "Practicar técnicas de relajación como la meditación o el yoga",
    choice3: "Tomar bebidas energéticas",
    choice4: "Consumir medicamentos somníferos",
    answer: 2,
  },
  {
    question: "¿Cuál es la mejor manera de prevenir la osteoporosis?",
    choice1: "Consumir alimentos ricos en calcio y vitamina D",
    choice2: "Tomar suplementos de calcio y vitamina D diariamente",
    choice3:
      "Evitar el consumo de alimentos ricos en calcio y vitamina D para evitar la sobrecarga de calcio en el cuerpo",
    choice4: "Todas las anteriores",
    answer: 1,
  },
  {
    question: "¿Cuál es la mejor manera de prevenir la hipertensión arterial?",
    choice1: "Mantener una dieta saludable y baja en sodio",
    choice2: "Hacer ejercicio regularmente",
    choice3: "Ambas opciones son correctas",
    choice4: "Ninguna opción es correcta",
    answer: 3,
  },
  {
    question: "¿Cuál es la mejor manera de prevenir la obesidad?",
    choice1: "Mantener una dieta equilibrada y hacer ejercicio regularmente",
    choice2: "Tomar suplementos para la pérdida de peso",
    choice3: "Ambas opciones son correctas",
    choice4: "Ninguna opción es correcta",
    answer: 1,
  },
  {
    question: "¿Cuál es la mejor manera de prevenir el insomnio?",
    choice1: "Mantener un horario de sueño regular",
    choice2: "Evitar el consumo de cafeína y alcohol antes de dormir",
    choice3: "Ambas opciones son correctas",
    choice4: "Ninguna opción es correcta",
    answer: 3,
  },
  {
    question: "¿Cuál es la mejor manera de prevenir la caries dental?",
    choice1:
      "Cepillarse los dientes dos veces al día con una pasta dental con flúor",
    choice2: "Limitar el consumo de alimentos y bebidas azucaradas",
    choice3: "Ambas opciones son correctas",
    choice4: "Ninguna opción es correcta",
    answer: 3,
  },
  {
    question: "¿Cuál es la mejor manera de prevenir la enfermedad cardíaca?",
    choice1: "Mantener una dieta saludable y hacer ejercicio regularmente",
    choice2: "Evitar el consumo de tabaco y alcohol",
    choice3: "Todas las opciones son correctas",
    choice4: "Ninguna opción es correcta",
    answer: 3,
  },
  {
    question: "¿Cuál es la mejor manera de prevenir la depresión?",
    choice1: "Mantener una dieta equilibrada y hacer ejercicio regularmente",
    choice2:
      "Mantener una red de apoyo social y buscar ayuda profesional si es necesario",
    choice3: "Ambas opciones son correctas",
    choice4: "Ninguna opción es correcta",
    answer: 3,
  },
  {
    question:
      "¿Cuál es la mejor manera de prevenir la enfermedad renal crónica?",
    choice1: "Mantener una dieta saludable y baja en sodio",
    choice2: "Controlar la presión arterial y el azúcar en la sangre",
    choice3: "Ambas opciones son correctas",
    choice4: "Ninguna opción es correcta",
    answer: 3,
  },
  {
    question:
      "¿Qué hábitos son importantes para tener una buena higiene dental?",
    choice1: "Cepillarse los dientes al menos dos veces al día",
    choice2: "Usar hilo dental regularmente",
    choice3: "Ambas opciones son correctas",
    choice4: "Ninguna opción es correcta",
    answer: 3,
  },
  {
    question: "¿Cuál es la mejor manera de mantener una buena salud mental?",
    choice1: "Hacer ejercicio regularmente",
    choice2: "Dormir lo suficiente",
    choice3: "Ambas opciones son correctas",
    choice4: "Ninguna opción es correcta",
    answer: 3,
  },
  {
    question:
      "¿Cómo puedes reducir el riesgo de desarrollar enfermedades cardíacas?",
    choice1: "Mantener una dieta saludable",
    choice2: "Hacer ejercicio regularmente",
    choice3: "Ambas opciones son correctas",
    choice4: "Ninguna opción es correcta",
    answer: 3,
  },
  {
    question: "¿Cuáles son algunos beneficios de hacer ejercicio regularmente?",
    choice1: "Mejora el estado de ánimo",
    choice2: "Aumenta la energía",
    choice3: "Fortalece los músculos y huesos",
    choice4: "Todas las opciones son correctas",
    answer: 4,
  },
  {
    question: "¿Cómo puedes reducir el riesgo de desarrollar cáncer?",
    choice1: "Mantener una dieta saludable",
    choice2: "Evitar el tabaco y el alcohol",
    choice3: "Hacer ejercicio regularmente",
    choice4: "Todas las opciones son correctas",
    answer: 4,
  },
  {
    question: "¿Cuál es la mejor manera de prevenir la anemia?",
    choice1: "Consumir suficiente hierro y vitamina B12 en la dieta",
    choice2: "Tomar suplementos de hierro y vitamina B12",
    choice3: "Evitar el consumo de alimentos ricos en hierro y vitamina B12",
    choice4: "Todas las opciones son correctas",
    answer: 1,
  },
  {
    question: "¿Cuáles son algunos beneficios de dormir lo suficiente?",
    choice1: "Mejora el estado de ánimo",
    choice2: "Mejora la memoria y el aprendizaje",
    choice3: "Fortalece el sistema inmunológico",
    choice4: "Todas las opciones son correctas",
    answer: 4,
  },
  {
    question:
      "¿Cómo puedes reducir el riesgo de desarrollar enfermedades respiratorias?",
    choice1: "Evitar la exposición al humo de tabaco",
    choice2: "Hacer ejercicio regularmente",
    choice3: "Mantener una buena higiene personal",
    choice4: "Todas las opciones son correctas",
    answer: 4,
  },
  {
    question:
      "¿Cuáles son algunos beneficios de mantener una buena salud mental?",
    choice1: "Mejora el bienestar emocional",
    choice2: "Mejora la capacidad de manejar el estrés",
    choice3: "Mejora las relaciones interpersonales",
    choice4: "Todas las opciones son correctas",
    answer: 4,
  },
  {
    question: "¿Cuáles son los beneficios de tener una dieta rica en fibra?",
    choice1: "Mejora la digestión",
    choice2: "Ayuda a controlar el peso",
    choice3: "Reduce el riesgo de enfermedades crónicas",
    choice4: "Todas las opciones son correctas",
    answer: 4,
  },
  {
    question: "¿Cuáles son algunos alimentos ricos en grasas saludables?",
    choice1: "Aguacates",
    choice2: "Nueces",
    choice3: "Aceite de oliva",
    choice4: "Todos los anteriores",
    answer: 4,
  },
  {
    question:
      "¿Cómo puedes reducir el riesgo de desarrollar enfermedades renales?",
    choice1: "Mantener una presión arterial saludable",
    choice2: "Mantener un nivel de azúcar en la sangre saludable",
    choice3: "Limitar el consumo de sal",
    choice4: "Todas las opciones son correctas",
    answer: 4,
  },
  {
    question: "¿Cuáles son algunos beneficios de limitar el consumo de azúcar?",
    choice1: "Mejora la salud dental",
    choice2: "Ayuda a controlar el peso",
    choice3: "Reduce el riesgo de enfermedades crónicas",
    choice4: "Todas las opciones son correctas",
    answer: 4,
  },
  {
    question:
      "¿Cómo puedes reducir el riesgo de desarrollar enfermedades de transmisión sexual?",
    choice1: "Usar preservativos correctamente y de manera consistente",
    choice2: "Limitar la cantidad de parejas sexuales",
    choice3: "Ambas opciones son correctas",
    choice4: "Ninguna opción es correcta",
    answer: 3,
  },
  {
    question: "¿Cuál es la mejor manera de prevenir la deshidratación?",
    choice1: "Beber suficiente agua y líquidos",
    choice2: "Evitar el consumo de alcohol y cafeína",
    choice3: "Ambas opciones son correctas",
    choice4: "Ninguna opción es correcta",
    answer: 1,
  },
  {
    question: "¿Cuáles son algunos beneficios de mantener una buena postura?",
    choice1: "Previene el dolor de espalda",
    choice2: "Mejora la respiración",
    choice3: "Mejora la confianza",
    choice4: "Todas las opciones son correctas",
    answer: 4,
  },
  {
    question: "¿Cómo puedes reducir el riesgo de desarrollar osteoporosis?",
    choice1: "Consumir suficiente calcio y vitamina D en la dieta",
    choice2: "Hacer ejercicio regularmente",
    choice3: "Ambas opciones son correctas",
    choice4: "Ninguna opción es correcta",
    answer: 3,
  },
  {
    question:
      "¿Cuál es la mejor manera de prevenir lesiones al hacer ejercicio?",
    choice1: "Hacer estiramientos adecuados antes y después del ejercicio",
    choice2: "Usar equipo adecuado para el ejercicio",
    choice3: "Escuchar a tu cuerpo y no exceder tus límites",
    choice4: "Todas las opciones son correctas",
    answer: 4,
  },
  {
    question:
      "¿Cómo puedes reducir el riesgo de desarrollar enfermedades oculares?",
    choice1: "Hacer chequeos regulares con el oftalmólogo",
    choice2: "Usar lentes de sol para proteger tus ojos del sol",
    choice3: "Limitar el tiempo de pantalla",
    choice4: "Todas las opciones son correctas",
    answer: 4,
  },
  {
    question:
      "¿Qué es más importante para una alimentación saludable, la cantidad o la calidad de los alimentos?",
    choice1: "El sabor de los alimentos.",
    choice2: "El precio",
    choice3: "La calidad",
    choice4: "La marca",
    answer: 3,
  },
  {
    question: "¿Qué alimentos son ricos en fibra?",
    choice1: "La carne roja es rica en fibra.",
    choice2: "Frutas, verduras, legumbres, cereales integrales",
    choice3: "Los alimentos procesados y ultraprocesados son ricos en fibra.",
    choice4: "Las bebidas azucaradas contienen altos niveles de fibra.",
    answer: 2,
  },
  {
    question: "¿Cuál es la forma más saludable de cocinar los alimentos?",
    choice1:
      "Freír los alimentos en aceite abundante es la forma más saludable de cocinarlos.",
    choice2:
      "Cocinar los alimentos en el microondas es la forma más saludable, ya que no requiere el uso de grasas adicionales.",
    choice3: "Al vapor, a la parrilla, al horno, hervidos",
    choice4: "Asar los alimentos a altas temperaturas",
    answer: 3,
  },
  {
    question: "¿Qué efectos tiene el estrés crónico en el cuerpo?",
    choice1:
      "Aumento de la presión arterial, debilitamiento del sistema inmunitario, problemas digestivos",
    choice2:
      "Fortalece el sistema inmunológico, haciendo que el cuerpo sea más resistente a enfermedades.",
    choice3: "Mejora la memoria y la capacidad cognitiva.",
    choice4:
      "Promueve la pérdida de peso y ayuda a mantener un cuerpo saludable.",
    answer: 1,
  },
  {
    question: "¿Qué tipos de ejercicios son más efectivos para quemar grasa?",
    choice1:
      "Ejercicios de estiramientos suaves es más efectivo para quemar grasa que el ejercicio cardiovascular o de fuerza.",
    choice2:
      "Ejercicios solo en el área abdominal, como los abdominales, es suficiente para quemar grasa en todo el cuerpo.",
    choice3: "Ninguna de las opciones es correcta",
    choice4: "Ejercicios aeróbicos (cardio)",
    answer: 4,
  },
  {
    question: "¿Qué es el índice de masa corporal (IMC)?",
    choice1:
      "Es una medida de la cantidad de grasa corporal en relación con el peso.",
    choice2:
      "Es una medida de la salud general de una persona basada en su apariencia física.",
    choice3:
      "Una medida de la relación entre el peso y la estatura de una persona",
    choice4: "Ninguna opción es correcta",
    answer: 3,
  },
  {
    question: "¿Qué es el colesterol?",
    choice1:
      "Un tipo de vitamina esencial para el funcionamiento adecuado del cuerpo.",
    choice2:
      "Una sustancia cerosa que se encuentra en todas las células del cuerpo",
    choice3:
      "Una sustancia producida por las plantas y se encuentra principalmente en frutas y verduras",
    choice4:
      "Una hormona responsable de regular el equilibrio de azúcar en la sangre.",
    answer: 2,
  },
  {
    question: "¿Qué tipo de colesterol se considera 'bueno' para la salud?",
    choice1:
      "LDL (lipoproteína de baja densidad) se considera 'bueno' para la salud.",
    choice2: "El colesterol total se considera 'bueno' para la salud.",
    choice3:
      "VLDL (lipoproteína de muy baja densidad) se considera 'bueno' para la salud.",
    choice4: "HDL (lipoproteína de alta densidad)",
    answer: 4,
  },
  {
    question: "¿Qué tipo de colesterol se considera 'malo' para la salud?",
    choice1: "LDL (lipoproteína de baja densidad)",
    choice2:
      "HDL (lipoproteína de alta densidad) se considera 'malo' para la salud.",
    choice3:
      "VLDL (lipoproteína de muy baja densidad) se considera 'malo' para la salud.",
    choice4: "Todas las anteriores",
    answer: 1,
  },
  {
    question: "¿Qué es la presión arterial?",
    choice1:
      "Es la cantidad de sangre que el corazón puede bombear en un minuto.",
    choice2:
      "La fuerza que ejerce la sangre contra las paredes de las arterias",
    choice3:
      "Es la resistencia que encuentra la sangre al circular por los vasos sanguíneos.",
    choice4: "Todas las anteriores",
    answer: 2,
  },
  {
    question: "¿Qué es la glucemia?",
    choice1: "Es la cantidad de grasa presente en la sangre.",
    choice2: "Es la medida del nivel de vitaminas en el organismo.",
    choice3: "El nivel de azúcar en la sangre",
    choice4:
      "Es la capacidad de los pulmones para retener y liberar oxígeno durante la respiración.",
    answer: 3,
  },
  {
    question: "¿Qué es la osteoporosis?",
    choice1:
      "Una enfermedad que debilita los huesos y los hace más propensos a fracturas",
    choice2: "Es una enfermedad causada por el exceso de calcio en los huesos.",
    choice3:
      "Es una condición en la que los huesos se vuelven más fuertes y densos con el tiempo.",
    choice4:
      "Es una afección en la que los huesos se vuelven flexibles y elásticos.",
    answer: 1,
  },
  {
    question: "¿Qué es el cáncer?",
    choice1:
      "Es una enfermedad viral causada por la exposición excesiva al sol.",
    choice2:
      "Un conjunto de enfermedades que se caracterizan por el crecimiento anormal y descontrolado de células",
    choice3: "Es una condición hereditaria que se transmite de padres a hijos.",
    choice4:
      "Es una enfermedad que afecta únicamente a personas mayores de 65 años.",
    answer: 2,
  },
  {
    question: "¿Qué se puede hacer para reducir el riesgo de cáncer?",
    choice1:
      "Fumar cigarrillos regularmente puede ayudar a reducir el riesgo de cáncer.",
    choice2:
      "Exponerse regularmente a radiación nuclear puede disminuir el riesgo de cáncer.",
    choice3: "Ninguna de las opciones es correcta",
    choice4: "Evitar el consumo de tabaco, limitar el consumo de alcohol",
    answer: 4,
  },
  {
    question: "¿Cuál es el mejor momento para hacer ejercicio?",
    choice1: "Por la mañana",
    choice2: "Por la tarde",
    choice3: "Por la noche",
    choice4: "Todo el día",
    answer: 1,
  },
  {
    question: "¿Cuál es el mejor tipo de proteína para una dieta saludable?",
    choice1: "Carne roja",
    choice2: "Pollo",
    choice3: "Pescado",
    choice4: "Pescado",
    answer: 3,
  },
  {
    question: "¿Cuál es la mejor forma de evitar el aumento de peso?",
    choice1: "Comer alimentos procesados",
    choice2: "Hacer ejercicio regularmente",
    choice3: "Saltarse las comidas",
    choice4: "Hacer ejercicio regularmente",
    answer: 2,
  },
  {
    question:
      "¿Cuál es el mejor tipo de carbohidrato para una dieta saludable?",
    choice1: "Azúcares refinados",
    choice2: "Frutas y verduras",
    choice3: "Papas fritas",
    choice4: "Frutas y verduras",
    answer: 2,
  },
  {
    question:
      "¿Cuál es la mejor forma de reducir el colesterol malo en el cuerpo?",
    choice1: "Comer muchos alimentos fritos",
    choice2: "Comer más frutas y verduras",
    choice3: "No hacer nada",
    choice4: "Comer más frutas y verduras",
    answer: 2,
  },
  {
    question:
      "¿Cuál de los siguientes alimentos es una buena fuente de proteína vegetal?",
    choice1: "Pollo",
    choice2: "Carne de res",
    choice3: "Tofu",
    choice4: "Jamón",
    answer: 3,
  },
  {
    question:
      "¿Cuál de las siguientes es una estrategia efectiva para reducir el estrés?",
    choice1: "Fumar",
    choice2: "Beber alcohol",
    choice3: "Hacer ejercicio regularmente",
    choice4: "Ver televisión todo el día",
    answer: 3,
  },
  {
    question:
      "¿Cuál de los siguientes hábitos puede ayudar a mejorar la calidad del sueño?",
    choice1: "Tomar siestas largas durante el día",
    choice2: "Usar dispositivos electrónicos en la cama",
    choice3: "Tener un horario regular de sueño",
    choice4: "Comer una comida pesada antes de acostarse",
    answer: 3,
  },
  {
    question:
      "¿Cuál de las siguientes actividades físicas se considera de intensidad moderada?",
    choice1: "Correr a alta velocidad",
    choice2: "Caminar a paso rápido",
    choice3: "Levantamiento de pesas",
    choice4: "Saltar la cuerda",
    answer: 2,
  },
  {
    question: "¿Cuál de los siguientes alimentos es una buena fuente de fibra?",
    choice1: "Pan blanco",
    choice2: "Arroz blanco",
    choice3: "Frijoles negros",
    choice4: "Papas fritas",
    answer: 3,
  },
  {
    question: "¿Cuál de los siguientes alimentos es más rico en proteínas?",
    choice1: "Manzanas",
    choice2: "Espárragos",
    choice3: "Pescado",
    choice4: "Huevos",
    answer: 3,
  },
  {
    question: "¿Qué es la fructosa?",
    choice1: "Un edulcorante artificial",
    choice2: "Un tipo de azúcar natural",
    choice3: "Un tipo de grasa",
    choice4: "Una vitamina",
    answer: 2,
  },
  {
    question: "¿Qué alimento es rico en vitamina C?",
    choice1: "Fresas",
    choice2: "Arroz",
    choice3: "Leche",
    choice4: "Carne de cerdo",
    answer: 1,
  },
  {
    question:
      "¿Cuál es la mejor manera de reducir la ingesta de sodio en la dieta?",
    choice1: "Consumir menos alimentos procesados",
    choice2: "Añadir más sal a las comidas",
    choice3: "Comer más carne roja",
    choice4: "Añadir más azúcar a las comidas",
    answer: 1,
  },
  {
    question: "¿Qué alimento es rico en fibra?",
    choice1: "Pizza",
    choice2: "Lentejas",
    choice3: "Galletas",
    choice4: "Mandarina",
    answer: 2,
  },
];
