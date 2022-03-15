import { motion, useAnimation } from "framer-motion";
import styles from "./AddTaskButton.module.scss";
import { useEffect, useRef, useState } from "react";

interface Props {
	className: string,
	setIsEditModuleOpen: React.Dispatch<React.SetStateAction<boolean>>,
	isEditModuleOpen: boolean,
}

const variants = {
	open: {
		top: `calc(${styles.popUpHeight} - ${styles.addButtonHeight} + ${styles.popUpTop})`,
	},
	explode: {
		top: styles.popUpTop,
		width: styles.popUpWidth,
		height: styles.popUpHeight,
		borderRadius: styles.popUpBorderRadius,
		backgroundColor: styles.popUpBackgroundColor,
		opacity: 0
	},
	hide: {
		display: "none",
	},
	show: {
		display: "flex",
	},
	closed: {
		top: 'auto',
	},
	implode: {
		width: styles.addButtonWidth,
		height: styles.addButtonHeight,
		borderRadius: styles.addButtonBorderRadius,
		backgroundColor: styles.successColor,
		opacity: 1
	}
}

const AddTaskButton = ({ className, setIsEditModuleOpen, isEditModuleOpen }: Props) => {
	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef(false);
	const control = useAnimation();

	// console.log('styles', styles)
	const squenceStartAnimation = async () => {
		console.log('squenceStartAnimation')
		setIsEditModuleOpen(!isEditModuleOpen);

		await control.start(variants.open);
		await control.start(variants.explode);
		await control.start(variants.hide);
	}

	const squenceEndAnimation = async () => {
		console.log('squenceEndAnimation')
		setIsEditModuleOpen(!isEditModuleOpen);

		await control.start(variants.show);
		await control.start(variants.implode);
		await control.start(variants.closed);
	}

	useEffect(() => {
		if(ref.current) {
			if (isOpen) {
				squenceStartAnimation();
			} else {
				squenceEndAnimation();
			}
		} else {
			ref.current = true;
		}
	}, [isOpen])

	return (
		<motion.div 
            className={`${className} ${styles.addTaskButton}`}
			onClick={() => setIsOpen(prev => !prev)}
			transition={{ type: "tween", duration: 2 }}
			// variants={variants}
			// initial={false}
			// animate={isEditModuleOpen ? "open" : "closed"}
			// onAnimationEnd={() => console.log('sad')}
			animate={control}
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
