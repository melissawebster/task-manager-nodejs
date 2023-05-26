/*by default, components are named capitalized*/
export default function Task(props) {
  return (
      <li>
          <div>
              <input 
                  type="hidden" 
                  id={`task-${props.task.id}`}
                  onChange={() => props.toggleDone(props.task.id)}
              />
              <label 
                  htmlFor={`task-${props.task.id}`}
              >
                  {props.task.name}
              </label>
          
              <button onClick={() => props.removeTask(props.task.id)}
              >
                  done
              </button>
          </div>
      </li>
  )
}