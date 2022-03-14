import styles from './EditModule.module.scss';

const EditModule = () => {
    return (
        <>
            <div className={styles.overlay} />
            <div className={styles.moduleWrapper}>
                <input 
                    className={`${styles.field} ${styles.inputField}`}
                    placeholder="Task Header"
                    />
                <textarea 
                    className={`${styles.field} ${styles.textField}`}
                    placeholder="Task Info"
                    />
            </div>
        </>
    )
}

export default EditModule;