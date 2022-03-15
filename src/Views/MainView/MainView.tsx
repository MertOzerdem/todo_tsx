import { useState } from 'react';
import AddTaskButton from '../../Components/AddTaskButton/AddTaskButton';
import EditModule from '../../Components/EditModule/EditModule';
import Task from '../../Components/Task/Task';
import styles from './MainView.module.scss';

const tasks = ['A', 'B', 'C'];

const MainView = () => {
    const [isEditModuleOpen, setIsEditModuleOpen] = useState(false);

    return (
        <div className={styles.mainViewWrapper}>
            {isEditModuleOpen && <EditModule />}
            {tasks.map((task, index) => <Task key={index} id={index} text={task}/>)}
            <AddTaskButton 
                className={styles.addTaskButton} 
                setIsEditModuleOpen={setIsEditModuleOpen}
                isEditModuleOpen={isEditModuleOpen}
            />
        </div>
    );   
}

export default MainView;