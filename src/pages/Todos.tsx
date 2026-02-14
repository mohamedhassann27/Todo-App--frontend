import axios, { AxiosError } from "axios";
import Button from "../components/ui/Button";
// import { useQuery } from "@tanstack/react-query";
import useAuthenticatedQuery from "../hooks/useCustomQuery";
import ReactModal from "../components/ui/ReactModal";
import type { ITodo } from "../interfaces";
import TodosSkeleton from "../components/TodosSkeleton";
import Input from "../components/ui/Input";
import { useEffect, useState, type ChangeEvent, type ReactNode, type SubmitEvent } from "react";
import { faker } from '@faker-js/faker';


function Todos() {
    const host= `https://todo-app-backend-production-3bfc.up.railway.app/api`

    const loggedInUserString = localStorage.getItem("loggedInUser");
    const loggedInUser = loggedInUserString && JSON.parse(loggedInUserString);

  // const [todos, setTodos]= useState([])
  // const [isLoading, setIsLoading]= useState(true)

  // useEffect(()=>{
  //     (async()=>{
  //         try {
  //             const {data}= await axios.get('http://localhost:1337/api/users/me?populate=todos', {
  //                 headers:{Authorization: `Bearer ${loggedInUser.jwt}`}
  //             })
  //             console.log(data);
  //             setTodos(data.todos)
  //         } catch (error) {
  //             console.log(error);
  //         }finally{
  //             setIsLoading(false)
  //         }
  //     })()
  // },[loggedInUser.jwt])

  // if(isLoading) return <p>Loading....</p>

  // ------------------------React Query------------------

  // const { isPending, error, data } = useQuery({
  // queryKey: ['repoData'],
  // queryFn: async() =>{
  //         const {data}= await axios.get('http://localhost:1337/api/users/me?populate=todos', {headers:{Authorization: `Bearer ${loggedInUser.jwt}`}});
  //         return data
  //     }
  // })

    const [todoToEdit, setTodoToEdit]= useState<ITodo>({id:0, title: "", description: ""})
    const [todoToRemove, setTodoToRemove]= useState<ITodo>({id:0, title: "", description: ""})
    const [todoToPost, setTodoToPost]= useState<ITodo>({id:0, title: "", description: ""})
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
    const [isPostModalOpen, setIsPostModalOpen] = useState(false);
    const [isLoading, setIsLoading]= useState(false)
    const [isGenerateLoading, setIsGenerateLoading]= useState(false)
    const [queryVersion, setQueryVersion]= useState(1)


  // ------------------------Custom Hook Query------------------

    const { isPending, error, data } = useAuthenticatedQuery({
        //Custom Query Hook
        queryKey: ["todos", `${queryVersion}`],
        url: `${host}/users/me?populate=todos`,
        config: { headers: { Authorization: `Bearer ${loggedInUser.jwt}` } },
    });

    // ------------------------Modal------------------

    function openUpdateModal(todo: ITodo) {
        setIsUpdateModalOpen(true);
        setTodoToEdit(todo)
    }

    function closeUpdateModal() {
        setIsUpdateModalOpen(false);
        setTodoToEdit({
            title:'',
            description: ''
        })
    }

    function openRemoveModal(todo:ITodo){
        setIsRemoveModalOpen(true)
        setTodoToRemove(todo)
    }
    function closeRemoveModal(){
        setIsRemoveModalOpen(false)
    }

    function openPosteModal(){
        setIsPostModalOpen(true)
        // setTodoToRemove(todo)
    }
    function closePostModal(){
        setIsPostModalOpen(false)
        setTodoToPost({id:0, title: "", description: ""})
    }

    // ------------------------handler------------------
    
    const handleUpdateChange= (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        const {name, value}= e.target;
        setTodoToEdit({
            ...todoToEdit, 
            [name]:value
        })
    }

    const handlePostChange= (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        console.log(todoToPost);
        const {name, value}= e.target;
        setTodoToPost({
            ...todoToPost,
            [name]: value
        })
    }
    
    const submitRemoveHandler= async(todo:ITodo)=>{
        setTodoToRemove(todo)
        try {
            const res= await axios.delete(`${host}/todos/${todo.documentId}`, {headers:{Authorization:`Bearer ${loggedInUser.jwt}`}})
            console.log(res);
            setTodoToRemove({id:0, title: "", description: ""})
            setQueryVersion(prev=>prev+1)
        } catch (error) {
            console.log(error);
        }finally{
            closeRemoveModal()
            setTodoToRemove({id:0, title: "", description: ""})
        }
    }
    
    // console.log(todoToEdit);
    const submitUpdateHandler= async (e: SubmitEvent<HTMLFormElement>)=>{
        const {title, description}= todoToEdit
        e.preventDefault()
        setIsLoading(true)
        try {
            await axios.put(`${host}/todos/${todoToEdit.documentId}`, {data: {title, description}}, {headers: {Authorization: `Bearer ${loggedInUser.jwt}`}})
            setQueryVersion(prev=>prev+1)
        } catch (error) {
            const errorObj= error as AxiosError
            console.log(errorObj.response);
        }finally{
            setIsLoading(false)
            closeUpdateModal()
        }
    }

    const submitPostHandler= async(e:SubmitEvent<HTMLFormElement> , postTodo: ITodo)=>{
        e.preventDefault()
        const {title, description}= postTodo
        try {
            const res= await axios.post(`${host}/todos`, {data:{title, description, user:loggedInUser.user.id}} , {headers: {Authorization:`Bearer ${loggedInUser.jwt}`}})
            console.log(res);
            console.log(todoToPost);
            setQueryVersion(prev=>prev+1)
        } catch (error) {
            console.log(error);
        }finally{
            closePostModal()
        }
    }
    
    const GenerateTodos= async()=>{
        for(let i=0; i<10; i++){
            setIsGenerateLoading(true)
            try {
                await axios.post(`${host}/todos`, {data: {
                        title: faker.lorem.words(5),
                        description: faker.lorem.words(11),
                        user: loggedInUser.user.id
                    }}, {headers: {Authorization: `Bearer ${loggedInUser.jwt}`}}
                )
            } catch (error) {
                console.log(error);
            }finally{
                setIsGenerateLoading(false)
            }
        }
        setQueryVersion(prev=>prev+1)
    }


    if (isPending) return <TodosSkeleton/>;
    if (error) return "An error has occurred: " + error.message;
    return (
        <>
        <div>
            <div className="w-100 mx-auto mt-7 flex space-x-5">
                <Button onClick={openPosteModal} className="py-3">Create new todo</Button>
                <Button onClick={GenerateTodos} className="py-3">{isGenerateLoading? "Generating...": "Generate Fake todos"}</Button>
            </div>

            {data.todos.length ? (
            <ul className="py-5">
                {data.todos.map((todo: ITodo) => (
                <li
                    key={todo.id}
                    className="flex justify-between bg-white text-black my-3 text-center items-center px-5 py-3 rounded-lg"
                >
                    <p className="text-lg">{todo.title}</p>
                    <div className=" flex gap-5">
                    <Button onClick={()=>openUpdateModal(todo)} className="h-8">
                        Edit
                    </Button>
                    <Button onClick={()=>openRemoveModal(todo)} className="bg-red-600 h-8">Remove</Button>
                    </div>
                </li>
                ))}
            </ul>
            ) : (
            <h2 className="mt-10">No todos yet!</h2>
            )}
        </div>

{   /* update modal */}
        <ReactModal modalIsOpen={isUpdateModalOpen} closeModal={closeUpdateModal}>
            <p className="text-black px-10 mb-4 text-lg">Edit this todo:</p>

            <form className="px-10" onSubmit={submitUpdateHandler}>
                <Input placeholder="title..." className="text-black" value={todoToEdit.title} name="title" onChange={handleUpdateChange}/>

                <textarea placeholder="description..." className="text-black border h-30 w-full rounded-xl px-4 py-2 mb-4" value={todoToEdit.description} name="description"  onChange={handleUpdateChange}/>

                <div className="flex gap-6 w-100 mx-auto" >
                    <Button className="h-14">{isLoading? 'loading...': 'Update'}</Button>
                    <Button onClick={closeUpdateModal} className="bg-neutral-400 w-40 h-14">Cancel</Button>
                </div> 
            </form>    
        </ReactModal>

    {/* remove modal */}
        <ReactModal modalIsOpen={isRemoveModalOpen} closeModal={closeRemoveModal} >
            <div className="w-100">
                <p className="text-black mb-4 text-lg">Are you sure you want to remove this Todo from your Store?</p>   
                <p className="text-black mb-4 text-lg">Deleting this Todo will remove it permanently from your inventory. Please make sure this is the intended action.</p>
            </div>
            <div className="flex gap-6 w-80 mx-auto mt-4" >
                <Button onClick={()=>submitRemoveHandler(todoToRemove)} className="h-14 bg-red-500">{isLoading? 'loading...': 'Remove'}</Button>
                <Button onClick={closeRemoveModal} className="bg-neutral-400  w-40 h-14">Cancel</Button>
            </div> 
        </ReactModal>

    {   /* post modal */}
        <ReactModal modalIsOpen={isPostModalOpen} closeModal={closePostModal}>
            <p className="text-black px-10 mb-4 text-lg">create a new todo:</p>

            <form className="px-10" onSubmit={(e)=>submitPostHandler(e,todoToPost)}>
                <Input placeholder="title..." className="text-black" value={todoToPost.title} name="title" onChange={handlePostChange}/>

                <textarea placeholder="description..." className="text-black border h-30 w-full rounded-xl px-4 py-2 mb-4" value={todoToPost.description} name="description"  onChange={handlePostChange}/>

                <div className="flex gap-6 w-100 mx-auto" >
                    <Button className="h-14">{isLoading? 'loading...': 'Create'}</Button>
                    <Button onClick={closePostModal} className="bg-neutral-400 w-40 h-14">Cancel</Button>
                </div> 
            </form>    
        </ReactModal>

        </>

    );
}

export default Todos;
