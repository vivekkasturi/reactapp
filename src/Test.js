import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
export default function Test() {
    return (
        <div className="TodoApp">
            <h1>
                ToDo List Demo App</h1>
            <button type="button" className="btn btn-primary">Add Task</button>
            <i class="fa-solid fa-pen-to-square"></i>
 
                 
                   <i class="fa-solid fa-pen-to-square"></i>
                   <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
            {/* Add more icons as needed */}

            <table className="table">
                <thead>
                    <tr>
                        <th>Sl No.</th>
                        <th>Task Details</th>
                        <th>Options</th></tr>
                       
                                   </thead>
                <tbody>
                    <tr><th>Task 1</th>
                    <th>  Task Details</th>
                    <th> <FontAwesomeIcon icon="fa-solid fa-trash" /></th>
                    </tr>
                    <tr><th>Task 1</th>
                    <th>Task Details </th>
                    <th>  <FontAwesomeIcon icon="fa-solid fa-pen-to-square" /></th>
                                       </tr>
                    </tbody>
            </table>
            
            
                 </div>
    );
};
library.add(fab, fas, far)
