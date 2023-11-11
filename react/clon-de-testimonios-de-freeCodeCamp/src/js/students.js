const students = [
  {
    nombre: "Shawn Wang",
    pais: "Singapur",
    imagen: "../../public/images/testimonio-shawn.png",
    alternativo: "Foto de Shawn",
    cargo: "Ing. de software",
    empresa: "Amazon",
    testimonio:
      "Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.",
  },
  {
    nombre: "Sarah Chima",
    pais: "Nigeria",
    imagen: "../../public/images/testimonio-sarah.png",
    alternativo: "Foto de Sarah",
    cargo: "Ing. de software",
    empresa: "ChatDesk",
    testimonio:
      "freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.",
  },
  {
    nombre: "Emma Bostian",
    pais: "Suecia",
    imagen: "../../public/images/testimonio-emma.png",
    alternativo: "Foto de Emma",
    cargo: "Ing. de software",
    empresa: "Spotify",
    testimonio:
      "Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.",
  },
];

const nombresCompletos = students.map((student) => `${student.nombre}`)
const paisOrigen = students.map((student) => `${student.pais}`)
const imagenes = students.map((student) => `${student.imagen}`)
const imagenAlt = students.map((student) => `${student.alternativo}`)
const cargos = students.map((student) => `${student.cargo}`)
const empresas = students.map((student) => `${student.empresa}`)
const testimonios = students.map((student) => `${student.testimonio}`)


export {nombresCompletos, paisOrigen, imagenes, imagenAlt, cargos, empresas, testimonios}