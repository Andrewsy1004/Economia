import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { ChevronRight } from 'lucide-react';

export const SectionInt = () => {
    const [isHovered, setIsHovered] = useState(false);

    const containerVariants = {
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
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-12 md:py-24 overflow-hidden"
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <motion.div variants={itemVariants} className="space-y-6">
                        <motion.h1 
                            variants={itemVariants}
                            className="text-4xl font-bold text-white tracking-tight"
                        >
                            Bienvenido a Economía
                        </motion.h1>

                        <motion.p 
                            variants={itemVariants}
                            className="text-lg text-white/90 leading-relaxed"
                        >
                            Explora y aprende los conceptos clave de la economía de una manera 
                            clara y accesible. Esta plataforma te guiará paso a paso a través 
                            de los fundamentos, con ejemplos prácticos que harán que comprender 
                            temas complejos sea{' '}
                            <span className="font-bold text-white">
                                <Typewriter
                                    words={[' fácil', ' sencillo', ' rápido', ' amigable']}
                                    loop={true}
                                    cursor
                                    cursorStyle="_"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </motion.p>

                        <motion.div 
                            variants={itemVariants}
                            className="flex items-center space-x-4"
                        >
                            <motion.a
                                href="#cortes"
                                onHoverStart={() => setIsHovered(true)}
                                onHoverEnd={() => setIsHovered(false)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center justify-center rounded-full 
                                    px-6 py-3 bg-white text-cyan-950 
                                    hover:bg-slate-100 transition-all duration-300 
                                    shadow-lg hover:shadow-xl group"
                            >
                                <span className="mr-2">Comenzar</span>
                                <ChevronRight 
                                    className={`transition-transform duration-300 
                                        ${isHovered ? 'translate-x-1' : ''}`} 
                                />
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    <motion.div 
                        variants={itemVariants}
                        className="hidden md:block"
                    >
                        <motion.img
                            src="/EconomiaInt.jpg"
                            alt="Explorando conceptos económicos con claridad"
                            width={500}
                            height={500}
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
                </div>
            </div>
        </motion.section>
    );
};
