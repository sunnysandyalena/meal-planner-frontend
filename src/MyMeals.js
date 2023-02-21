import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

const MyMeals = ({ text, updatingInInput, deleteMeal }) => {
    return (
        <div className='container-planner'>
            <div>
                <p>{text}</p>
            </div>
            <div>
                <AiFillEdit className='icon' onClick={updatingInInput}/>
                <AiFillDelete className='icon' onClick={deleteMeal}/>
            </div>
            
        </div>
    )
}

export default MyMeals;