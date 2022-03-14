import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Task.module.scss";
import scssVariables from "../../variables.module.scss";

interface Task {
	id: number;
	text: string;
}

const transition = {
    type: 'tween',
    duration: 0.5
}

const Task = ({ id, text }: Task) => {
	const [isCompleted, setIsCompleted] = useState(false);

	return (
		<div className={styles.taskWrapper}>
            <motion.div 
                className={styles.overlay}
                initial={false}
                animate={{width: isCompleted ? "100%" : "0%", transition}}
            />
			<svg
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={styles.checkbox}
				onClick={() => {
					setIsCompleted(!isCompleted);
				}}
			>
				<motion.rect
					rx="6"
					className={styles.rect}
					initial={{ fill: scssVariables.defaultColor }}
					animate={{
						fill: isCompleted ? scssVariables.successColor : scssVariables.defaultColor,
						transition
					}}
				/>
                <AnimatePresence>
                    {isCompleted && 
                        <motion.path
                            d="M7 12.5L9.71429 15L16.5 9.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={styles.tick}
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1, transition }}
                            exit={{ pathLength: 0, transition }}
                        />
                    }
                </AnimatePresence>
			</svg>

			<div className={styles.checkBox}></div>
			<div className={styles.text}>{text}</div>
		</div>
	);
};

export default Task;
