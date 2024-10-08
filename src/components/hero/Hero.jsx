import "./Hero.scss"
import { motion } from "framer-motion"
import img from '../../Assets/img-2.png'


const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        }
    }
}

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            duration: 20,
            repeat: Infinity,
            repeatType:"mirror",
        },
    },
}


const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">

                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>Ankita Srivastava</motion.h2>
                    <motion.h1 variants={textVariants}>Front End Developer</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button variants={textVariants}>See the latest works</motion.button>
                        <motion.button variants={textVariants}>Contact me</motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
                </motion.div>
            </div>
            <motion.div className="slidingContainer" variants={sliderVariants} initial="initial" animate="animate">
                Web Developer
            </motion.div>
            <div className="imageContainer">
                {/* <img src={img} alt="" /> */}
            </div>
        </div>
    )
}

export default Hero
