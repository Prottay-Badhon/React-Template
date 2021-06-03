import React, { Component } from 'react';
import { motion } from "framer-motion";
import "../css/Features.css"
class Features extends Component {
   
    render() {
        const loaderVariants={
            loading:{
                x:[-20,20],
                y:[0,-30],
                transition:{
                   x:{
                    duration: .5,
                    yoyo: Infinity
                   },
                   y:{
                    duration: .25,
                    yoyo: Infinity,
                    ease: 'easeOut'
                   }

                }
                

            }
        }
        const buttonProperty={
            hover:{
                scale: 1.1,
                textShadow: '0px 0px 8px rgb(255,255,255)',
                boxShadow: '0px 0px 8px rgb(255,255,255)',
                transition:{
                    delay: .1,
                    yoyo: Infinity
                }
            },
            visible:{
                x: [0,-20,20,-20,20,0]
            }
        }
        
        const headerVariant={

            hidden:{
                opacity: 0,
                y: '-100vw'
            },
            visible:{
                opacity: 1,
                y: 0,
                transition:{
                    type: 'spring',
                    delay: .5,
                }
            }
        }


        const constVariant ={

            hidden:{
                opacity: 0,
                x: '100vw'
            },
            visible:{
                opacity: 1,
                x: 0,
                transition:{
                    type: 'spring',
                    mass: .4,
                    damping: 8,
                    when: 'beforeChildren',
                    staggerChildren: 1
                }
            }
        }
        const childVariant ={
            hidden:{
                opacity: 0
            },
            visible:{
                opacity: 1
            }
        }
       
        return (
            <>
                <div class="" 
                 style={{height: "500px",width: "100%",background: "purple",color: "white"}}>
                <motion.div class=" container py-5">
                    <motion.h2
                    variants={headerVariant}
                    initial='hidden'
                    animate='visible'
                    >Pizza Joint</motion.h2>
                    <hr class="bg-light"></hr>
                
                   <motion.div class="text-center py-4"
                     variants={constVariant}
                     initial='hidden'
                     animate='visible'
                   >
                        <motion.h4>Thank you for your Order :)</motion.h4>
                        <motion.p variants={childVariant} style={{color: "#d6d2d2"}}>your order Pizza with:</motion.p>
                        <motion.p variants={childVariant} style={{color: "#d6d2d2"}}>Onion</motion.p>
                        <motion.p variants={childVariant} style={{color: "#d6d2d2"}}>Peppers</motion.p>
                   </motion.div>

                <motion.button class="order" variants={buttonProperty}
                whileHover='hover'
                animate='visible'
                drag
                dragConstraints={{left:0,right:0,top:0,bottom:0}}
                >
                Order
                </motion.button>
                </motion.div>
                <motion.div class="loader"
                variants={loaderVariants}
                animate='loading'
                >

                </motion.div>
                </div>
            </>
        );
    }
}

export default Features;