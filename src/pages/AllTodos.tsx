// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import type { ITodo } from "../interfaces";
// import Paginator from "../components/Paginator";
// import { useState, type ChangeEvent } from "react";
// import AllTodosSkeleton from "../components/AllTodosSkeleton";

// function AllTodos() {

//     const host= `https://todo-app-backend-production-3bfc.up.railway.app/api`

//     const loggedInUserString = localStorage.getItem("loggedInUser");
//     const loggedInUser = loggedInUserString && JSON.parse(loggedInUserString);

//     const [page, setPage]= useState<number>(1)
//     const [pageSize, setPageSize]= useState<number>(8)
//     const [sortBy, setSortBy]= useState<string>("asc")

//     const { isPending, error, data } = useQuery({
//         queryKey: ["allTodos", page, pageSize, sortBy],
//         queryFn: async () => {
//             let { data } = await axios.get(`${host}/todos?pagination[pageSize]=${pageSize}&pagination[page]=${page}&sort[createdAt]=asc`, {headers: {Authorization: `Bearer ${loggedInUser.jwt}`}});
//             console.log(data);
            
//             return data;
//         },
//     });

//     const onChangePageSize= (e: ChangeEvent<HTMLSelectElement>)=>{
//         setPageSize(+e.target.value)
//     }

//     const onChangeSort= (e: ChangeEvent<HTMLSelectElement>)=>{
//         setSortBy(e.target.value)
//     }


//     // if (isPending) return <h2 className="mt-10">Loading...</h2>;
//     if (isPending) return <AllTodosSkeleton/>
//     if (error) return <h2>An error has occurred: {error.message}</h2>

//     return (
//         <>
//         {/* <AllTodosSkeleton/> */}
//             <div className="mt-2 flex justify-end gap-3 pr-3">
//                 <select name="sorting" value={sortBy} onChange={onChangeSort} className="border px-4 py-2 rounded-md text-black bg-white">
//                     <option selected disabled value="pageSize">Sort by</option>
//                     <option value="asc">Oldest</option>
//                     <option value="desc">Latest</option>
//                 </select>

//                 <select name="pageSize" value={pageSize} onChange={onChangePageSize} className="border px-4 py-2 rounded-md text-black bg-white">
//                     <option selected disabled value="pageSize">Page Size</option>
//                     <option value="5">5</option>
//                     <option value="10">10</option>
//                     <option value="20">20</option>
//                     <option value="50">50</option>
//                 </select>
//             </div>

//             <div>
//             {data.data.length ? (
//                 <ul className="py-.5">
//                 {data.data.map((todo: ITodo) => (
//                     <li
//                     key={todo.id}
//                     className="flex justify-between bg-white text-black my-3 text-center items-center px-5 py-3 rounded-lg"
//                     >
//                     <p className="text-lg">{todo.title}</p>
//                     {/* <div className=" flex gap-5">
//                         <Button  className="h-8">
//                         Edit
//                         </Button>
//                         <Button className="bg-red-600 h-8">
//                         Remove
//                         </Button>
//                     </div> */}
//                     </li>
//                 ))}
//                 </ul>
//             ) : (
//                 "No todos yet!"
//             )}
//             </div>
//             <Paginator page={page} setPage={setPage} pageCount={data.meta.pagination.pageCount} total={data.meta.pagination.total}/>
//         </>
//     );
// }

// export default AllTodos;








// -----------------------Update UI only with claud-----------------------



import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import type { ITodo } from '../interfaces';
import Paginator from '../components/Paginator';
import { useState, type ChangeEvent } from 'react';
import AllTodosSkeleton from '../components/AllTodosSkeleton';

function AllTodos() {
    const host = `https://todo-app-backend-production-3bfc.up.railway.app/api`;
    const loggedInUserString = localStorage.getItem('loggedInUser');
    const loggedInUser = loggedInUserString && JSON.parse(loggedInUserString);

    const [page, setPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(5);
    const [sortBy, setSortBy] = useState<string>('asc');

    const { isPending, error, data } = useQuery({
        queryKey: ['allTodos', page, pageSize, sortBy],
        queryFn: async () => {
        const { data } = await axios.get(
            `${host}/todos?pagination[pageSize]=${pageSize}&pagination[page]=${page}&sort[createdAt]=${sortBy}`,
            { headers: { Authorization: `Bearer ${loggedInUser.jwt}` } }
        );
        return data;
        },
    });

    const onChangePageSize = (e: ChangeEvent<HTMLSelectElement>) => {
        setPageSize(+e.target.value);
    };

    const onChangeSort = (e: ChangeEvent<HTMLSelectElement>) => {
        setSortBy(e.target.value);
    };

    if (isPending) return <AllTodosSkeleton />;
    if (error) return <div className="text-center text-red-400 mt-10">An error occurred: {error.message}</div>;

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 relative">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-12">
            
            {/* Header */}
            <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
                <h1 className="text-4xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                All Todos
                </h1>
                <p className="text-slate-400">Browse all tasks from the community</p>
            </div>

            {/* Filters */}
            <div className="flex gap-3">
                <select
                value={sortBy}
                onChange={onChangeSort}
                className="bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2.5 text-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all cursor-pointer"
                >
                <option value="asc">Oldest First</option>
                <option value="desc">Newest First</option>
                </select>
                
                <select
                value={pageSize}
                onChange={onChangePageSize}
                className="bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2.5 text-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all cursor-pointer"
                >
                <option value="5">5 per page</option>
                <option value="10">10 per page</option>
                <option value="20">20 per page</option>
                <option value="50">50 per page</option>
                </select>
            </div>
            </div>

            {/* Todos Grid */}
            {data.data.length ? (
            <>
                <div className="grid gap-4 mb-8">
                {data.data.map((todo: ITodo, index: number) => (
                    <div
                    key={todo.id}
                    className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-5 hover:border-slate-600 hover:bg-slate-800/60 transition-all duration-200"
                    style={{ animationDelay: `${index * 30}ms` }}
                    >
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                        <h3 className="text-lg font-semibold text-slate-200 mb-1">
                            {todo.title}
                        </h3>
                        {todo.description && (
                            <p className="text-slate-400 text-sm line-clamp-2">
                            {todo.description}
                            </p>
                        )}
                        </div>
                        
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
                
                <Paginator
                page={page}
                setPage={setPage}
                pageCount={data.meta.pagination.pageCount}
                total={data.meta.pagination.total}
                />
            </>
            ) : (
            <div className="text-center py-20">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-800/50 rounded-full mb-4">
                <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-400 mb-2">No todos found</h3>
                <p className="text-slate-500">Try adjusting your filters</p>
            </div>
            )}
        </div>
        </div>
    );
}

export default AllTodos;