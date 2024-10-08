import "./services.scss"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    },
}

const Services = () => {

    const ref = useRef()
    const isInView = useRef(ref, { margin: "-100px" })
    return (
        <motion.div className="services" variants={variants} initial="initial" ref={ref}
         animate={"animate"}
         
        >

            <motion.div className="textContainer" variants={variants}>
            <p>I am a dedicated Front End developer
            <br />focused on continuously gaining knowledge and advancing my skills.</p>
            <hr/>
            </motion.div>

            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}>Overview</motion.b>
                    </h1>
                </div>

                
                <div className="title">
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>
                    </h1>
                    <button>My Services</button>
                </div>
            </motion.div>

            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Web App Developement</h2>
                    <p>Building scalable and efficient web applications tailored to meet your business needs, with a focus on cutting-edge technology and best practices.</p>
                    <button>Go</button>
                </motion.div>

                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Website Design</h2>
                    <p>Crafting visually appealing and user-friendly websites that resonate with your brand identity and provide an exceptional user experience.</p>
                    <button>Go</button>
                </motion.div>

                {/* <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>UI/UX</h2>
                    <p>Designing intuitive interfaces that prioritize user experience, ensuring your digital products are not only functional but also a pleasure to use.</p>
                    <button>Go</button>
                </motion.div> */}
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                <h2>Backend Development</h2>
                <p>Building robust and scalable server-side architectures that ensure seamless data management,secure transactions, and efficient API integration, enabling your applications to perform flawlessly.</p>
                <button>Go</button>
                </motion.div>
                
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Responsive Website</h2>
                    <p>Developing responsive websites that adapt seamlessly across devices, providing a consistent and engaging experience for all users.</p>
                    <button>Go</button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Services
