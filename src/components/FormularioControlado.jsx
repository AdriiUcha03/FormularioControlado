import {useEffect, useState} from "react"
import Swal from "sweetalert2"

const FormControlado = ({addTodo, edit}) => {

    //Estados por cada input
    // const [title,setTitle] = useState("")
    //const [description,setDescription] = useState("")
    //const [state,setState] = useState("pendiente")
    
    
    // Estado que sea un objeto
    const [todo, setTodo] = useState({
        title: "todo 01",
        description: "Description 01",
        state: "pendiente",
        priority: false        

    })

    const {title, description, priority, state} = todo 

    //Para comprobar reactivaemente el estado del boton de añadir, guardar cambios
    const [editingButton, setEditingButton] = useState(false);

    //Utilizo dos ternarios de los vistos en clase en vez de if else que toca ir acostumbrandose xd
    const handleButtonLabel = () => {
        return editingButton ? 'Guardar' : 'Añadir';
      };
    
      const handleButtonColor = () => {
        return editingButton ? 'btn-success' : 'btn-primary';
      };

    const handleSubmit = e =>{
        e.preventDefault()
        // Si algun campo esta vació salta un erro
        if (title.trim() === "" || description.trim() === ""){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
    
            console.log(`Enviando ${todo.title}, ${todo.description} y ${todo.state} al servidor...`)        
        }

        addTodo({
            ...todo,
            id:Date.now(), //Para poner una id en milisegundos y que tengan diferentes id
            //state: state === "completada"? true:false  //Coversión de boolean state
            state: state == "completada"? true:false
        }, setEditingButton(false))

        //Reseteamos el formulario
        setTodo({
            title: "",
            description: "",
            priority: false
        })
    }

    //Cuando el valor de edit to do cambie este lanzara el set todo para el formulario
    useEffect(() => {
        //Para evitar que de error porque edit es undefined al principio ya que se ejecuta al incio
        if(edit) { //Comprobamos que solo se ejecute cuando no sea undefined
            setEditingButton(true)
            setTodo(edit)
        }}, [edit]);
    
    const handlechange = e =>{
        const {name,type, checked, value} = e.target
        setTodo({
            ...todo,
            [name]:type === 'checkbox'? checked:value
        })
    }

    return (
        <>
            <p>Form Controlados</p>
            <form onSubmit={handleSubmit} id="formulario">
                <input 
                    name="title" 
                    placeholder="Nombre de la tarea" 
                    type="text"
                    className="form-control mb-2"
                    value={todo.title}
                    onChange={handlechange}
                />
                <textarea
                    name="description"
                    placeholder="Introduce la descripción de la tarea"
                    className="form-control mb-2"
                    value={todo.description}
                    onChange={handlechange}
                />
                <select
                    name="state"
                    className="form-control mb-2"
                    value={todo.state ? "completada" : "pendiente"}
                    onChange={handlechange}
                >
                    <option value="pendiente">Pendiente</option>
                    <option value="completada">Completada</option>box
                </select>

                <input 
                    name="priority"
                    id="priority"
                    type="checkbox" 
                    checked={todo.priority}
                    onChange={handlechange}
                />
                
                <label htmlFor="priority" className="form-check-label">Prioridad</label>

                <br></br>
                <br></br>

                <button type="submit" 
                className={`btn ${handleButtonColor()}`}
                >{handleButtonLabel()}
                </button>

                <br></br>
                <br></br>
            </form>

        </>
    );
}


export default FormControlado;