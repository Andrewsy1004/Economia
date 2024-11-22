

import { useState } from 'react'

import { motion, AnimatePresence } from "framer-motion";
import { Book, Zap, Server, TestTube, BarChart, DollarSign } from 'lucide-react'

import { NavBar, SectionInt, Progress, Footer, AboutApp } from './components'


const cortesData = [
  {
    id: 1,
    nombre: "Fundamentos de economía",
    temas: [
      {
        id: 1,
        titulo: "Los 10 Principios de la Economía",
        descripcion: "Conoce los principios fundamentales que rigen la economía y las decisiones económicas.",
        infoGeneral: [
          "1. Las personas enfrentan disyuntivas.",
          "2. El costo de una cosa es aquello a lo que se renuncia para obtenerla.",
          "3. Las personas racionales piensan en términos marginales.",
          "4. Las personas responden a incentivos.",
          "5. El comercio puede mejorar el bienestar de todos.",
          "6. Los mercados normalmente son un buen mecanismo para organizar la actividad económica.",
          "7. El gobierno puede mejorar a veces los resultados del mercado.",
          "8. El nivel de vida de un país depende de su capacidad para producir bienes y servicios.",
          "9. Los precios suben cuando el gobierno imprime demasiado dinero.",
          "10. La sociedad enfrenta una disyuntiva a corto plazo entre inflación y desempleo."
        ],
        icon: <Book className="w-6 h-6" />,

      },
      {
        id: 2,
        titulo: "Frontera de Posibilidad de Producción",
        descripcion: "Comprende las limitaciones de producción y cómo optimizar los recursos disponibles.",
        infoGeneral: [
          "La FPP representa las combinaciones máximas de bienes que una economía puede producir, dados sus recursos y tecnología.",
          "Sirve para mostrar la eficiencia, el costo de oportunidad y las diferencias entre eficiencia productiva y asignativa.",
          "Un punto dentro de la curva indica ineficiencia, mientras que un punto fuera no es alcanzable con los recursos actuales."
        ],
        icon: <BarChart className="w-6 h-6" />,
      },
      {
        id: 3,
        titulo: "Costo de Oportunidad y Marginal",
        descripcion: "Explora cómo consumidores y empresas valoran las alternativas y toman decisiones racionales.",
        infoGeneral: [
          "El costo de oportunidad mide el valor de la alternativa no elegida.",
          "Es esencial para la toma de decisiones porque ayuda a evaluar el verdadero costo de una opción.",
          "El costo marginal, por otro lado, es el costo de producir una unidad adicional, y es crucial para decisiones empresariales sobre producción y precios."
        ],
        icon: <DollarSign className="w-6 h-6" />,
      },
      {
        id: 4,
        titulo: "Sistemas Económicos e Ideologías",
        descripcion: "Conoce los diferentes sistemas económicos y cómo influyen en la organización de la sociedad.",
        infoGeneral: [
          "El capitalismo se basa en la propiedad privada y la libre competencia, buscando maximizar el beneficio individual.",
          "El socialismo enfatiza la propiedad colectiva y la distribución equitativa de los recursos, priorizando el bienestar común.",
          "El comunismo busca eliminar las clases sociales mediante la propiedad común de los medios de producción.",
          "El liberalismo económico apoya la mínima intervención del gobierno en los mercados.",
          "El intervencionismo propone que el gobierno juegue un papel activo para corregir las desigualdades del mercado."
        ],
        icon: <Zap className="w-6 h-6" />
      }
    ]
  },

  {
    id: 2,
    nombre: "Microeconomia",
    temas: [
      {
        id: 1,
        titulo: "Demanda vs Oferta",
        descripcion: "Descubre los principios fundamentales que rigen la economía, la interacción entre compradores y vendedores, y cómo se toman decisiones económicas.",
        infoGeneral: [
          "1. La demanda representa la cantidad de bienes o servicios que los consumidores están dispuestos y pueden comprar a diferentes precios.",
          "2. La oferta representa la cantidad de bienes o servicios que los productores están dispuestos y pueden vender a diferentes precios.",
          "3. El equilibrio de mercado ocurre cuando la cantidad demandada es igual a la cantidad ofrecida, determinando el precio de equilibrio.",
          "4. Un aumento en el precio generalmente reduce la cantidad demandada (Ley de la demanda).",
          "5. Un aumento en el precio generalmente incrementa la cantidad ofrecida (Ley de la oferta).",
          "6. Los cambios en factores externos, como ingresos, gustos, precios de bienes relacionados, costos de producción o tecnología, pueden desplazar la curva de demanda o oferta.",
        ],
        icon: <Book className="w-6 h-6" />,

      },
      {
        id: 2,
        titulo: "Elasticidad",
        descripcion: "Comprende cómo responden la demanda y la oferta ante cambios en precios, ingresos u otros factores.",
        infoGeneral: [
          "1. La elasticidad precio de la demanda mide cómo varía la cantidad demandada de un bien ante un cambio en su precio.",
          "2. La elasticidad precio de la oferta mide cómo varía la cantidad ofrecida de un bien ante un cambio en su precio.",
          "3. Una demanda elástica significa que un pequeño cambio en el precio genera un cambio significativo en la cantidad demandada.",
          "4. Una demanda inelástica implica que los cambios en el precio tienen un efecto menor en la cantidad demandada.",
          "5. La elasticidad ingreso de la demanda mide cómo varía la demanda de un bien ante cambios en el ingreso de los consumidores.",
          "6. Los bienes normales tienen elasticidad ingreso positiva, mientras que los bienes inferiores tienen elasticidad ingreso negativa.",
          "7. La elasticidad cruzada de la demanda mide cómo varía la demanda de un bien ante cambios en el precio de otro bien.",
          "8. Bienes complementarios tienen elasticidad cruzada negativa, mientras que los bienes sustitutivos tienen elasticidad cruzada positiva.",
          "9. La elasticidad es clave para entender cómo afectan los impuestos y subsidios a los mercados.",
          "10. Conocer la elasticidad ayuda a optimizar estrategias de precios y maximizar ingresos o beneficios."
        ],
        icon: <BarChart className="w-6 h-6" />,
      },
      {
        id: 3,
        titulo: "Subsidio e Impuesto",
        descripcion: "Explora cómo los subsidios y los impuestos influyen en las decisiones de consumidores y empresas, y en el equilibrio del mercado.",
        infoGeneral: [
          "1. Los subsidios son ayudas financieras del gobierno destinadas a reducir los costos de producción o consumo, incentivando ciertas actividades económicas.",
          "2. Los impuestos son cargos obligatorios que aumentan el costo de los bienes o servicios, desincentivando su consumo o producción.",
          "3. Los subsidios pueden aumentar la cantidad ofrecida o demandada de un bien al reducir su precio efectivo.",
          "4. Los impuestos suelen reducir la cantidad transada de un bien al aumentar su precio efectivo para consumidores y reducir los ingresos netos para productores.",
          "5. La incidencia de un impuesto o subsidio depende de la elasticidad precio de la demanda y la oferta.",
          "6. En mercados con demanda inelástica, los consumidores tienden a asumir la mayor parte del costo de los impuestos.",
          "7. En mercados con oferta inelástica, los productores tienden a asumir la mayor parte del costo de los impuestos.",
          "8. Los impuestos y subsidios generan pérdidas de eficiencia llamadas 'pérdidas irrecuperables' o 'deadweight loss' en mercados competitivos.",
          "9. Los gobiernos utilizan subsidios e impuestos para corregir fallos de mercado, como externalidades negativas o positivas.",
          "10. Comprender el impacto de subsidios e impuestos es crucial para diseñar políticas públicas eficientes y equitativas."
        ],
        icon: <DollarSign className="w-6 h-6" />,
      },
      {
        id: 4,
        titulo: "Excedente del cosumidor y vendedor ",
        descripcion: "Descubre cómo el excedente del consumidor y el productor miden el bienestar económico generado en los mercados.",
        infoGeneral: [
          "1. El excedente del consumidor es la diferencia entre lo que los consumidores están dispuestos a pagar por un bien y lo que realmente pagan.",
          "2. Representa el beneficio que los consumidores obtienen al participar en el mercado.",
          "3. El excedente del productor es la diferencia entre el precio al que los productores están dispuestos a vender y el precio que realmente reciben.",
          "4. Representa el beneficio que los productores obtienen al participar en el mercado.",
          "5. El excedente total es la suma del excedente del consumidor y el productor, y mide el bienestar económico total en un mercado.",
          "6. El equilibrio de mercado maximiza el excedente total en un mercado competitivo y sin intervenciones externas.",
          "7. Los impuestos, subsidios o controles de precios pueden reducir el excedente total, generando pérdidas de eficiencia o 'deadweight loss'.",
          "8. El análisis del excedente es clave para evaluar políticas económicas y su impacto en el bienestar social.",
          "9. Los cambios en la elasticidad de la oferta y la demanda pueden alterar significativamente el tamaño del excedente del consumidor y del productor.",
          "10. Comprender el excedente ayuda a analizar los beneficios de la especialización y el comercio internacional."
        ],
        icon: <Zap className="w-6 h-6" />
      }
    ]
  },

  {
    id: 3,
    nombre: "Macroeconomia",
    temas: [
      {
        id: 1,
        titulo: "Objetivos de la Macroeconomia",
        descripcion: "Explora los principales objetivos de la macroeconomía y cómo influyen en las políticas económicas.",
        infoGeneral: [
          "1. Crecimiento económico: Incrementar la capacidad productiva de la economía a lo largo del tiempo.",
          "2. Estabilidad de precios: Controlar la inflación y evitar deflaciones perjudiciales.",
          "3. Pleno empleo: Reducir el desempleo y mantener una alta tasa de ocupación laboral.",
          "4. Equilibrio en la balanza de pagos: Garantizar que las importaciones y exportaciones estén equilibradas para una economía sostenible.",
          "5. Distribución equitativa del ingreso: Promover una distribución más justa de la riqueza entre los ciudadanos.",
          "6. Estabilidad financiera: Mantener el buen funcionamiento del sistema financiero y evitar crisis económicas.",
          "7. Bienestar social: Mejorar las condiciones de vida y el acceso a servicios básicos para toda la población.",
          "8. Política fiscal y monetaria: Implementar estrategias gubernamentales para alcanzar los objetivos económicos.",
          "9. Coordinación global: Participar en acuerdos internacionales para enfrentar problemas económicos globales, como el cambio climático o las crisis financieras.",
          "10. Sostenibilidad económica: Asegurar un crecimiento que no comprometa los recursos de las generaciones futuras."
        ],
        icon: <Book className="w-6 h-6" />,
      },
      {
        id: 2,
        titulo: "Indicadores como PIB, IPB",
        descripcion: "Explora los principales indicadores económicos que reflejan el desempeño y la salud de una economía.",
        infoGeneral: [
          "1. Producto Interno Bruto (PIB): Representa el valor total de los bienes y servicios producidos en un país durante un período determinado.",
          "2. El PIB puede medirse de tres maneras: enfoque del gasto, enfoque de la producción y enfoque del ingreso.",
          "3. El PIB nominal mide el valor de la producción a precios de mercado actuales, mientras que el PIB real ajusta por inflación para reflejar valores constantes.",
          "4. Índice de Precios al Consumidor (IPC): Mide los cambios en el nivel general de precios de una cesta representativa de bienes y servicios.",
          "5. El IPC se utiliza para calcular la inflación y medir cómo cambia el poder adquisitivo de los consumidores.",
          "6. Producto Nacional Bruto (PNB): Incluye el PIB más los ingresos obtenidos por los residentes en el extranjero menos los ingresos obtenidos por extranjeros en el país.",
          "7. Tasa de desempleo: Mide el porcentaje de personas en la fuerza laboral que están buscando empleo activamente pero no lo encuentran.",
        ],
        icon: <BarChart className="w-6 h-6" />,
      },
      {
        id: 3,
        titulo: "Inflación",
        descripcion: "Explora qué es la inflación, sus causas, efectos y cómo influye en la economía.",
        infoGeneral: [
          "1. La inflación es el aumento sostenido y generalizado de los precios de bienes y servicios en una economía durante un período de tiempo.",
          "2. Se mide comúnmente a través del Índice de Precios al Consumidor (IPC) o el Índice de Precios al Productor (IPP).",
          "3. Las principales causas de la inflación son: inflación por demanda, inflación por costos y expectativas inflacionarias.",
          "4. La inflación por demanda ocurre cuando la demanda supera la capacidad productiva de la economía.",
          "5. La inflación por costos se genera cuando aumentan los costos de producción, como salarios o materias primas.",
          "6. Una inflación moderada es considerada normal y puede ser señal de una economía en crecimiento.",
          "7. La hiperinflación es un aumento descontrolado de precios que destruye el valor de la moneda y la estabilidad económica.",
          "8. La deflación es lo opuesto a la inflación y puede ser perjudicial al desincentivar el consumo y la inversión.",
          "9. Los bancos centrales utilizan políticas monetarias, como el control de tasas de interés, para mantener la inflación dentro de niveles saludables.",
          "10. Comprender la inflación es crucial para planificar decisiones financieras, tanto a nivel individual como empresarial."
        ],
        icon: <DollarSign className="w-6 h-6" />,
      },
      {
        id: 4,
        titulo: "Mercados Financieros",
        descripcion: "Explora el papel de los mercados financieros en la asignación eficiente de recursos y el crecimiento económico.",
        infoGeneral: [
          "1. Los mercados financieros son plataformas donde se negocian activos como acciones, bonos, divisas y derivados.",
          "2. Facilitan la transferencia de recursos entre ahorradores e inversores, promoviendo la eficiencia económica.",
          "3. Los mercados de capital incluyen la bolsa de valores, donde se negocian acciones y bonos a largo plazo.",
          "4. Los mercados de dinero permiten la negociación de instrumentos financieros a corto plazo, como letras del tesoro y certificados de depósito.",
          "5. Las tasas de interés desempeñan un papel clave al influir en los costos de financiamiento y los rendimientos de inversión.",
          "6. Los intermediarios financieros, como bancos y fondos de inversión, facilitan las transacciones en los mercados financieros.",
          "7. La globalización ha conectado los mercados financieros, aumentando la liquidez pero también el riesgo sistémico.",
          "8. La regulación financiera es crucial para prevenir abusos, reducir riesgos y mantener la estabilidad del sistema financiero.",
          "9. Indicadores como el índice bursátil y el tipo de cambio reflejan la salud y las expectativas del mercado.",
          "10. Comprender los mercados financieros es esencial para tomar decisiones informadas de inversión y financiamiento."
        ],
        icon: <Zap className="w-6 h-6" />
      }
    ]
  },
]

export const App = () => {
  const [selectedCorte, setSelectedCorte] = useState(null)
  const [selectedTema, setSelectedTema] = useState(null)

  const progress = selectedCorte ? (selectedCorte / cortesData.length) * 100 : 0

  return (
    <div className={" flex flex-col min-h-screen bg-gray-900 text-white "}>
      <NavBar />

      <main className="flex-1">
        <SectionInt />

        <section id="cortes" className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Cortes</h2>
            <div className="flex justify-between items-center mb-8">
              <Progress value={progress} />
            </div>

            <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
              {cortesData.map((corte) => (
                <button
                  key={corte.id}
                  onClick={() => setSelectedCorte(corte.id)}
                  className={`px-4 py-2 rounded-full ${selectedCorte === corte.id ? 'bg-blue-500 text-white' : 'bg-white text-gray-800'}`}
                >
                  {corte.nombre}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {selectedCorte ? (
                <motion.div
                  key={selectedCorte}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                  {cortesData
                    .find((c) => c.id === selectedCorte)
                    .temas.map((tema) => (
                      <motion.div
                        key={tema.id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl dark:hover:shadow-blue-900/30"
                      >
                        <div className="p-6">
                          <div className="flex items-center mb-4">
                            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full">
                              {tema.icon}
                            </div>
                            <h3 className="text-xl font-semibold ml-3 text-gray-800 dark:text-white">
                              {tema.titulo}
                            </h3>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 mb-4">
                            {tema.descripcion}
                          </p>
                          <button
                            onClick={() => setSelectedTema(tema)}
                            className="px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded-full hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors duration-300"
                          >
                            Ver más
                          </button>
                        </div>
                      </motion.div>
                    ))}
                </motion.div>
              ) : (
                <div className="grid md:grid-cols-3 gap-8">
                  {cortesData.map((corte) => (
                    <div
                      key={corte.id}
                      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl dark:hover:shadow-blue-900/30"
                    >
                      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                          {corte.nombre}
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400">Corte {corte.id}</p>
                      </div>
                      <div className="p-4">
                        <ul className="space-y-4">
                          {corte.temas.map((tema) => (
                            <li key={tema.id}>
                              <h3 className="text-lg font-semibold">{tema.titulo}</h3>
                              <p className="text-gray-600 dark:text-gray-300">
                                {tema.descripcion}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </AnimatePresence>

            {/* Modal de detalle del tema seleccionado */}
            {selectedTema && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 flex items-center justify-center p-4 z-50"
                onClick={() => setSelectedTema(null)}
              >
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-lg w-full shadow-2xl relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Botón para cerrar */}
                  <button
                    onClick={() => setSelectedTema(null)}
                    className="absolute top-2 right-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    aria-label="Cerrar"
                  >
                    ✕
                  </button>

                  <div className="flex items-center mb-4">
                    <div className="w-5 h-5 bg-blue-100 dark:bg-blue-900 rounded-full"></div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white ml-2">
                      {selectedTema.titulo}
                    </h2>
                  </div>

                  <div>
                    {selectedTema.infoGeneral.map((principio, index) => (
                      <p key={index} className="text-gray-700 dark:text-gray-200 mb-2">
                        {principio}
                      </p>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}


          </div>
        </section>

        <AboutApp />

      </main>

      <Footer />

    </div>

  )
}
