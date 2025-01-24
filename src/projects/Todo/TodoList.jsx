
import { MdCheck,MdDeleteForever } from "react-icons/md";

export const TodoList=({key,data,onHandleDeleteTodo})=>{
    return(
        <li key={key} className="todo-item">
        <span>{data}</span>
        <button className="check-btn">
          <MdCheck />
        </button>
        <button className="delete-btn" onClick={()=>onHandleDeleteTodo(data)}>
          <MdDeleteForever />
        </button>
      </li>
    )
}