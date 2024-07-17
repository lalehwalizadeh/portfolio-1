import { motion } from "framer-motion";

const animations = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
};

export const Animation = ({ children }) => {
    return (
        <motion.div
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{duration:1}}
        >
            {children}
            
        </motion.div>
    );
};

const Pageanimations = {
    initial: { opacity: 0},
    animate: { opacity: 1 },
    exit: { opacity: 0},
};

export const PageAnimation = ({ children }) => {
    return (
        <motion.div
            variants={Pageanimations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5}}
        >
            {children}

        </motion.div>
    );
};