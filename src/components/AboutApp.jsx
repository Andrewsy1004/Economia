import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, HeartHandshake } from 'lucide-react';

export const AboutApp = () => {
    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <motion.section 
            id="about"
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            className="bg-muted py-12 md:py-24 overflow-hidden"
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <motion.div variants={itemVariants}>
                        <motion.img
                            src="/Aprende_ecoonomia.jpeg"
                            width={500}
                            height={500}
                            alt="Aplicación de Aprendizaje Económico"
                            className="mx-auto rounded-2xl shadow-2xl"
                            style={{ 
                                aspectRatio: "500/500", 
                                objectFit: "cover",
                                transform: "perspective(1000px) rotateY(-10deg)"
                            }}
                            whileHover={{ 
                                scale: 1.05,
                                rotateY: 0
                            }}
                        />
                    </motion.div>
                    <motion.div variants={itemVariants} className="space-y-6">
                        <motion.h2 
                            variants={itemVariants}
                            className="text-3xl font-bold text-primary tracking-tight"
                        >
                            Acerca de esta aplicación
                        </motion.h2>
                        
                        <motion.div 
                            variants={itemVariants}
                            className="space-y-4"
                        >
                            <div className="flex items-start space-x-4 bg-white/10 p-4 rounded-lg">
                                <BookOpen className="text-primary w-10 h-10" />
                                <div>
                                    <h3 className="font-semibold text-lg">Estructura del Contenido</h3>
                                    <p className="text-muted-foreground">
                                        Dividida en tres cortes, te guiará a través de los fundamentos, 
                                        Microeconmia y Macroeconomía.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 bg-white/10 p-4 rounded-lg">
                                <Target className="text-primary w-10 h-10" />
                                <div>
                                    <h3 className="font-semibold text-lg">Objetivo de Aprendizaje</h3>
                                    <p className="text-muted-foreground">
                                        Hacer que el aprendizaje de la economía sea accesible y ameno, 
                                        con una interfaz intuitiva y contenido conciso.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 bg-white/10 p-4 rounded-lg">
                                <HeartHandshake className="text-primary w-10 h-10" />
                                <div>
                                    <h3 className="font-semibold text-lg">Experiencia de Usuario</h3>
                                    <p className="text-muted-foreground">
                                        Desarrollar una comprensión sólida de conceptos económicos 
                                        de manera entretenida e interactiva.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};