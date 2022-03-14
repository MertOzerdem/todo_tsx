import { motion } from "framer-motion";
import styles from "./AddTaskButton.module.scss";

interface Props {
	className: string,
	setIsEditModuleOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const AddTaskButton = ({ className, setIsEditModuleOpen }: Props) => {
	return (
		<motion.div 
            className={`${className} ${styles.addTaskButton}`}
            whileTap={{ scale: 0.9 }}
			onClick={() => setIsEditModuleOpen(prev => !prev)}    
        >
			<svg
				className={styles.plus}
				xmlns="http://www.w3.org/2000/svg"
			>
                <path d="M12 0L12 24" />
                <path d="M0 12H24" />
			</svg>
		</motion.div>
	);
};

export default AddTaskButton;
