import { FaTrash, FaCheck } from 'react-icons/fa';
import './TodoIcon.css';

const iconComponents = {
    delete: FaTrash,
    completed: FaCheck
};

function TodoIcon({ iconName }) {
    const SpecificIcon = iconComponents[iconName]; 

    return (
        <span className={'MyIcon'}>
            <SpecificIcon />
        </span>
    );
}

export { TodoIcon };