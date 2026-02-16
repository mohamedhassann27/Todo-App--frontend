// import axios, { AxiosError } from "axios";
// import Button from "../components/ui/Button";
// // import { useQuery } from "@tanstack/react-query";
// import useAuthenticatedQuery from "../hooks/useCustomQuery";
// import ReactModal from "../components/ui/ReactModal";
// import type { ITodo } from "../interfaces";
// import TodosSkeleton from "../components/TodosSkeleton";
// import Input from "../components/ui/Input";
// import { useEffect, useState, type ChangeEvent, type ReactNode, type SubmitEvent } from "react";
// import { faker } from '@faker-js/faker';


// function Todos() {
//     const host= `https://todo-app-backend-production-3bfc.up.railway.app/api`

//     const loggedInUserString = localStorage.getItem("loggedInUser");
//     const loggedInUser = loggedInUserString && JSON.parse(loggedInUserString);

//   // const [todos, setTodos]= useState([])
//   // const [isLoading, setIsLoading]= useState(true)

//   // useEffect(()=>{
//   //     (async()=>{
//   //         try {
//   //             const {data}= await axios.get('http://localhost:1337/api/users/me?populate=todos', {
//   //                 headers:{Authorization: `Bearer ${loggedInUser.jwt}`}
//   //             })
//   //             console.log(data);
//   //             setTodos(data.todos)
//   //         } catch (error) {
//   //             console.log(error);
//   //         }finally{
//   //             setIsLoading(false)
//   //         }
//   //     })()
//   // },[loggedInUser.jwt])

//   // if(isLoading) return <p>Loading....</p>

//   // ------------------------React Query------------------

//   // const { isPending, error, data } = useQuery({
//   // queryKey: ['repoData'],
//   // queryFn: async() =>{
//   //         const {data}= await axios.get('http://localhost:1337/api/users/me?populate=todos', {headers:{Authorization: `Bearer ${loggedInUser.jwt}`}});
//   //         return data
//   //     }
//   // })

//     const [todoToEdit, setTodoToEdit]= useState<ITodo>({id:0, title: "", description: ""})
//     const [todoToRemove, setTodoToRemove]= useState<ITodo>({id:0, title: "", description: ""})
//     const [todoToPost, setTodoToPost]= useState<ITodo>({id:0, title: "", description: ""})
//     const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
//     const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
//     const [isPostModalOpen, setIsPostModalOpen] = useState(false);
//     const [isLoading, setIsLoading]= useState(false)
//     const [isGenerateLoading, setIsGenerateLoading]= useState(false)
//     const [queryVersion, setQueryVersion]= useState(1)


//   // ------------------------Custom Hook Query------------------

//     const { isPending, error, data } = useAuthenticatedQuery({
//         //Custom Query Hook
//         queryKey: ["todos", `${queryVersion}`],
//         url: `${host}/users/me?populate=todos`,
//         config: { headers: { Authorization: `Bearer ${loggedInUser.jwt}` } },
//     });

//     // ------------------------Modal------------------

//     function openUpdateModal(todo: ITodo) {
//         setIsUpdateModalOpen(true);
//         setTodoToEdit(todo)
//     }

//     function closeUpdateModal() {
//         setIsUpdateModalOpen(false);
//         setTodoToEdit({
//             title:'',
//             description: ''
//         })
//     }

//     function openRemoveModal(todo:ITodo){
//         setIsRemoveModalOpen(true)
//         setTodoToRemove(todo)
//     }
//     function closeRemoveModal(){
//         setIsRemoveModalOpen(false)
//     }

//     function openPosteModal(){
//         setIsPostModalOpen(true)
//         // setTodoToRemove(todo)
//     }
//     function closePostModal(){
//         setIsPostModalOpen(false)
//         setTodoToPost({id:0, title: "", description: ""})
//     }

//     // ------------------------handler------------------
    
//     const handleUpdateChange= (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
//         const {name, value}= e.target;
//         setTodoToEdit({
//             ...todoToEdit, 
//             [name]:value
//         })
//     }

//     const handlePostChange= (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
//         console.log(todoToPost);
//         const {name, value}= e.target;
//         setTodoToPost({
//             ...todoToPost,
//             [name]: value
//         })
//     }
    
//     const submitRemoveHandler= async(todo:ITodo)=>{
//         setTodoToRemove(todo)
//         try {
//             const res= await axios.delete(`${host}/todos/${todo.documentId}`, {headers:{Authorization:`Bearer ${loggedInUser.jwt}`}})
//             console.log(res);
//             setTodoToRemove({id:0, title: "", description: ""})
//             setQueryVersion(prev=>prev+1)
//         } catch (error) {
//             console.log(error);
//         }finally{
//             closeRemoveModal()
//             setTodoToRemove({id:0, title: "", description: ""})
//         }
//     }
    
//     // console.log(todoToEdit);
//     const submitUpdateHandler= async (e: SubmitEvent<HTMLFormElement>)=>{
//         const {title, description}= todoToEdit
//         e.preventDefault()
//         setIsLoading(true)
//         try {
//             await axios.put(`${host}/todos/${todoToEdit.documentId}`, {data: {title, description}}, {headers: {Authorization: `Bearer ${loggedInUser.jwt}`}})
//             setQueryVersion(prev=>prev+1)
//         } catch (error) {
//             const errorObj= error as AxiosError
//             console.log(errorObj.response);
//         }finally{
//             setIsLoading(false)
//             closeUpdateModal()
//         }
//     }

//     const submitPostHandler= async(e:SubmitEvent<HTMLFormElement> , postTodo: ITodo)=>{
//         e.preventDefault()
//         const {title, description}= postTodo
//         try {
//             const res= await axios.post(`${host}/todos`, {data:{title, description, user:loggedInUser.user.id}} , {headers: {Authorization:`Bearer ${loggedInUser.jwt}`}})
//             console.log(res);
//             console.log(todoToPost);
//             setQueryVersion(prev=>prev+1)
//         } catch (error) {
//             console.log(error);
//         }finally{
//             closePostModal()
//         }
//     }
    
//     const GenerateTodos= async()=>{
//         for(let i=0; i<10; i++){
//             setIsGenerateLoading(true)
//             try {
//                 await axios.post(`${host}/todos`, {data: {
//                         title: faker.lorem.words(5),
//                         description: faker.lorem.words(11),
//                         user: loggedInUser.user.id
//                     }}, {headers: {Authorization: `Bearer ${loggedInUser.jwt}`}}
//                 )
//             } catch (error) {
//                 console.log(error);
//             }finally{
//                 setIsGenerateLoading(false)
//             }
//         }
//         setQueryVersion(prev=>prev+1)
//     }


//     if (isPending) return <TodosSkeleton/>;
//     if (error) return "An error has occurred: " + error.message;
//     return (
//         <>
//         <div>
//             <div className="w-100 mx-auto mt-7 flex space-x-5">
//                 <Button onClick={openPosteModal} className="py-3">Create new todo</Button>
//                 <Button onClick={GenerateTodos} className="py-3">{isGenerateLoading? "Generating...": "Generate Fake todos"}</Button>
//             </div>

//             {data.todos.length ? (
//             <ul className="py-5">
//                 {data.todos.map((todo: ITodo) => (
//                 <li
//                     key={todo.id}
//                     className="flex justify-between bg-white text-black my-3 text-center items-center px-5 py-3 rounded-lg"
//                 >
//                     <p className="text-lg">{todo.title}</p>
//                     <div className=" flex gap-5">
//                     <Button onClick={()=>openUpdateModal(todo)} className="h-8">
//                         Edit
//                     </Button>
//                     <Button onClick={()=>openRemoveModal(todo)} className="bg-red-600 h-8">Remove</Button>
//                     </div>
//                 </li>
//                 ))}
//             </ul>
//             ) : (
//             <h2 className="mt-10">No todos yet!</h2>
//             )}
//         </div>

// {   /* update modal */}
//         <ReactModal modalIsOpen={isUpdateModalOpen} closeModal={closeUpdateModal}>
//             <p className="text-black px-10 mb-4 text-lg">Edit this todo:</p>

//             <form className="px-10" onSubmit={submitUpdateHandler}>
//                 <Input placeholder="title..." className="text-black" value={todoToEdit.title} name="title" onChange={handleUpdateChange}/>

//                 <textarea placeholder="description..." className="text-black border h-30 w-full rounded-xl px-4 py-2 mb-4" value={todoToEdit.description} name="description"  onChange={handleUpdateChange}/>

//                 <div className="flex gap-6 w-100 mx-auto" >
//                     <Button className="h-14">{isLoading? 'loading...': 'Update'}</Button>
//                     <Button onClick={closeUpdateModal} className="bg-neutral-400 w-40 h-14">Cancel</Button>
//                 </div> 
//             </form>    
//         </ReactModal>

//     {/* remove modal */}
//         <ReactModal modalIsOpen={isRemoveModalOpen} closeModal={closeRemoveModal} >
//             <div className="w-100">
//                 <p className="text-black mb-4 text-lg">Are you sure you want to remove this Todo from your Store?</p>   
//                 <p className="text-black mb-4 text-lg">Deleting this Todo will remove it permanently from your inventory. Please make sure this is the intended action.</p>
//             </div>
//             <div className="flex gap-6 w-80 mx-auto mt-4" >
//                 <Button onClick={()=>submitRemoveHandler(todoToRemove)} className="h-14 bg-red-500">{isLoading? 'loading...': 'Remove'}</Button>
//                 <Button onClick={closeRemoveModal} className="bg-neutral-400  w-40 h-14">Cancel</Button>
//             </div> 
//         </ReactModal>

//     {   /* post modal */}
//         <ReactModal modalIsOpen={isPostModalOpen} closeModal={closePostModal}>
//             <p className="text-black px-10 mb-4 text-lg">create a new todo:</p>

//             <form className="px-10" onSubmit={(e)=>submitPostHandler(e,todoToPost)}>
//                 <Input placeholder="title..." className="text-black" value={todoToPost.title} name="title" onChange={handlePostChange}/>

//                 <textarea placeholder="description..." className="text-black border h-30 w-full rounded-xl px-4 py-2 mb-4" value={todoToPost.description} name="description"  onChange={handlePostChange}/>

//                 <div className="flex gap-6 w-100 mx-auto" >
//                     <Button className="h-14">{isLoading? 'loading...': 'Create'}</Button>
//                     <Button onClick={closePostModal} className="bg-neutral-400 w-40 h-14">Cancel</Button>
//                 </div> 
//             </form>    
//         </ReactModal>

//         </>

//     );
// }

// export default Todos;





// -----------------------Update UI only with claud-----------------------


import axios, { AxiosError } from 'axios';
import useAuthenticatedQuery from '../hooks/useCustomQuery';
import ReactModal from '../components/ui/ReactModal';
import type { ITodo } from '../interfaces';
import TodosSkeleton from '../components/TodosSkeleton';
import { useState, type ChangeEvent, type SubmitEvent } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import Button from '../components/ui/Button';

function Todos() {
    const host = `https://todo-app-backend-production-3bfc.up.railway.app/api`;
    const loggedInUserString = localStorage.getItem('loggedInUser');
    const loggedInUser = loggedInUserString && JSON.parse(loggedInUserString);

    const [todoToEdit, setTodoToEdit] = useState<ITodo>({ id: 0, title: '', description: '' });
    const [todoToRemove, setTodoToRemove] = useState<ITodo>({ id: 0, title: '', description: '' });
    const [todoToPost, setTodoToPost] = useState<ITodo>({ id: 0, title: '', description: '' });
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
    const [isPostModalOpen, setIsPostModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isGenerateLoading, setIsGenerateLoading] = useState(false);
    const [queryVersion, setQueryVersion] = useState(1);

    const { isPending, error, data } = useAuthenticatedQuery({
        queryKey: ['todos', `${queryVersion}`],
        url: `${host}/users/me?populate=todos`,
        config: { headers: { Authorization: `Bearer ${loggedInUser.jwt}` } },
    });

    // Modal handlers
    function openUpdateModal(todo: ITodo) {
        setIsUpdateModalOpen(true);
        setTodoToEdit(todo);
    }

    function closeUpdateModal() {
        setIsUpdateModalOpen(false);
        setTodoToEdit({ id: 0, title: '', description: '' });
    }

    function openRemoveModal(todo: ITodo) {
        setIsRemoveModalOpen(true);
        setTodoToRemove(todo);
    }

    function closeRemoveModal() {
        setIsRemoveModalOpen(false);
        setTodoToRemove({ id: 0, title: '', description: '' });
    }

    function openPostModal() {
        setIsPostModalOpen(true);
    }

    function closePostModal() {
        setIsPostModalOpen(false);
        setTodoToPost({ id: 0, title: '', description: '' });
    }

    // Change handlers
    const handleUpdateChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setTodoToEdit({ ...todoToEdit, [name]: value });
    };

    const handlePostChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setTodoToPost({ ...todoToPost, [name]: value });
    };

    // Submit handlers
    const submitRemoveHandler = async (todo: ITodo) => {
        setIsLoading(true);
        try {
        await axios.delete(`${host}/todos/${todo.documentId}`, {
            headers: { Authorization: `Bearer ${loggedInUser.jwt}` },
        });
        toast.success('Todo deleted successfully');
        setQueryVersion((prev) => prev + 1);
        } catch (error) {
        toast.error('Failed to delete todo');
        console.log(error);
        } finally {
        setIsLoading(false);
        closeRemoveModal();
        }
    };

    const submitUpdateHandler = async (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { title, description } = todoToEdit;
        setIsLoading(true);
        try {
        await axios.put(
            `${host}/todos/${todoToEdit.documentId}`,
            { data: { title, description } },
            { headers: { Authorization: `Bearer ${loggedInUser.jwt}` } }
        );
        toast.success('Todo updated successfully');
        setQueryVersion((prev) => prev + 1);
        closeUpdateModal();
        } catch (error) {
            const errorObj= error as AxiosError 
        toast.error(errorObj.message);
        //   console.log(error);
        } finally {
        setIsLoading(false);
        }
    };

    const submitPostHandler = async (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { title, description } = todoToPost;
        setIsLoading(true);
        try {
        await axios.post(
            `${host}/todos`,
            { data: { title, description, user: loggedInUser.user.id } },
            { headers: { Authorization: `Bearer ${loggedInUser.jwt}` } }
        );
        toast.success('Todo created successfully');
        setQueryVersion((prev) => prev + 1);
        closePostModal();
        } catch (error) {
        toast.error('Failed to create todo');
        console.log(error);
        } finally {
        setIsLoading(false);
        }
    };

    const GenerateTodos = async () => {
        setIsGenerateLoading(true);
        try {
        for (let i = 0; i < 10; i++) {
            await axios.post(
            `${host}/todos`,
            {
                data: {
                title: faker.lorem.words(5),
                description: faker.lorem.words(11),
                user: loggedInUser.user.id,
                },
            },
            { headers: { Authorization: `Bearer ${loggedInUser.jwt}` } }
            );
        }
        toast.success('10 fake todos generated');
        setQueryVersion((prev) => prev + 1);
        } catch (error) {
        toast.error('Failed to generate todos');
        console.log(error);
        } finally {
        setIsGenerateLoading(false);
        }
    };

    if (isPending) return <TodosSkeleton />;
    if (error) return <div className="text-center text-red-400 mt-10">An error occurred: {error.message}</div>;

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 relative">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-6 py-12">
            
            {/* Header */}
            <div className="mb-8">
            <h1 className="text-4xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                My Todos
            </h1>
            <p className="text-slate-400">Manage your tasks and stay organized</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
            <Button
                onClick={openPostModal}
                className="relative group"
            >
                <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-linear-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-lg font-medium text-white flex items-center gap-2 transition-transform group-hover:scale-105">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                New Todo
                </div>
            </Button>

            <Button
                onClick={GenerateTodos}
                disabled={isGenerateLoading}
                className="px-6 py-3 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 rounded-lg font-medium text-slate-300 transition-all duration-200 flex items-center gap-2 disabled:opacity-50"
            >
                {isGenerateLoading ? (
                <>
                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating...
                </>
                ) : (
                <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Generate Fake Todos
                </>
                )}
            </Button>
            </div>

            {/* Todos List */}
            {data.todos.length ? (
            <div className="space-y-3">
                {data.todos.map((todo: ITodo, index: number) => (
                <div
                    key={todo.id}
                    className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-5 hover:border-slate-600 transition-all duration-200 group"
                    style={{ animationDelay: `${index * 50}ms` }}
                >
                    <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold text-slate-200 mb-1 group-hover:text-blue-400 transition-colors">
                        {todo.title}
                        </h3>
                        {todo.description && (
                        <p className="text-slate-400 text-sm line-clamp-2">
                            {todo.description}
                        </p>
                        )}
                    </div>
                    
                    <div className="flex items-center gap-2">
                        <Button
                        onClick={() => openUpdateModal(todo)}
                        className="px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 rounded-lg transition-all duration-200 flex items-center gap-1.5 text-sm font-medium"
                        >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        Edit
                        </Button>
                        <Button
                        onClick={() => openRemoveModal(todo)}
                        className="px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg transition-all duration-200 flex items-center gap-1.5 text-sm font-medium"
                        >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Delete
                        </Button>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            ) : (
            <div className="text-center py-20">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-800/50 rounded-full mb-4">
                <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-400 mb-2">No todos yet</h3>
                <p className="text-slate-500 mb-6">Create your first todo to get started</p>
                <button
                onClick={openPostModal}
                className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all"
                >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Create Todo
                </button>
            </div>
            )}
        </div>

        {/* Create Modal */}
        <ReactModal modalIsOpen={isPostModalOpen} closeModal={closePostModal}>
            <div className="bg-slate-800 rounded-2xl p-6 max-w-md w-full">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-200">Create New Todo</h2>
                <button
                onClick={closePostModal}
                className="text-slate-400 hover:text-slate-200 transition-colors"
                >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
            </div>
            
            <form onSubmit={submitPostHandler} className="space-y-4">
                <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Title</label>
                <input
                    type="text"
                    name="title"
                    value={todoToPost.title}
                    onChange={handlePostChange}
                    placeholder="Enter todo title..."
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                />
                </div>
                
                <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Description</label>
                <textarea
                    name="description"
                    value={todoToPost.description}
                    onChange={handlePostChange}
                    placeholder="Enter description..."
                    rows={4}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                />
                </div>

                <div className="flex gap-3 pt-4">
                <button
                    type="submit"
                    disabled={isLoading}
                    className="flex-1 relative group"
                >
                    <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <div className="relative bg-linear-to-r from-blue-500 to-purple-500 py-3 rounded-lg font-semibold text-white flex items-center justify-center gap-2">
                    {isLoading ? (
                        <>
                        <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Creating...
                        </>
                    ) : (
                        'Create Todo'
                    )}
                    </div>
                </button>
                <button
                    type="button"
                    onClick={closePostModal}
                    className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg font-semibold transition-colors"
                >
                    Cancel
                </button>
                </div>
            </form>
            </div>
        </ReactModal>

        {/* Update Modal */}
        <ReactModal modalIsOpen={isUpdateModalOpen} closeModal={closeUpdateModal}>
            <div className="bg-slate-800 rounded-2xl p-6 max-w-md w-full">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-200">Edit Todo</h2>
                <button
                onClick={closeUpdateModal}
                className="text-slate-400 hover:text-slate-200 transition-colors"
                >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
            </div>
            
            <form onSubmit={submitUpdateHandler} className="space-y-4">
                <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Title</label>
                <input
                    type="text"
                    name="title"
                    value={todoToEdit.title}
                    onChange={handleUpdateChange}
                    placeholder="Enter todo title..."
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                />
                </div>
                
                <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Description</label>
                <textarea
                    name="description"
                    value={todoToEdit.description}
                    onChange={handleUpdateChange}
                    placeholder="Enter description..."
                    rows={4}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                />
                </div>

                <div className="flex gap-3 pt-4">
                <button
                    type="submit"
                    disabled={isLoading}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 py-3 rounded-lg font-semibold text-white transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                    {isLoading ? (
                    <>
                        <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Saving...
                    </>
                    ) : (
                    'Save Changes'
                    )}
                </button>
                <button
                    type="button"
                    onClick={closeUpdateModal}
                    className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg font-semibold transition-colors"
                >
                    Cancel
                </button>
                </div>
            </form>
            </div>
        </ReactModal>

        {/* Delete Modal */}
        <ReactModal modalIsOpen={isRemoveModalOpen} closeModal={closeRemoveModal}>
            <div className="bg-slate-800 rounded-2xl p-6 max-w-md w-full">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-red-400">Delete Todo</h2>
                <button
                onClick={closeRemoveModal}
                className="text-slate-400 hover:text-slate-200 transition-colors"
                >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
            </div>

            <div className="mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-red-500/10 rounded-full mb-4">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                </div>
                <p className="text-slate-300 text-lg">
                Are you sure you want to delete <span className="font-semibold text-slate-200">"{todoToRemove.title}"</span>?
                </p>
                <p className="text-slate-400 text-sm mt-2">
                This action cannot be undone.
                </p>
            </div>

            <div className="flex gap-3">
                <button
                onClick={() => submitRemoveHandler(todoToRemove)}
                disabled={isLoading}
                className="flex-1 bg-red-500 hover:bg-red-600 py-3 rounded-lg font-semibold text-white transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                {isLoading ? (
                    <>
                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Deleting...
                    </>
                ) : (
                    'Delete Todo'
                )}
                </button>
                <button
                onClick={closeRemoveModal}
                className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg font-semibold transition-colors"
                >
                Cancel
                </button>
            </div>
            </div>
        </ReactModal>
        </div>
    );
}

export default Todos;