import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { ITodo } from "../interfaces";
import Paginator from "../components/Paginator";
import { useState, type ChangeEvent } from "react";
import AllTodosSkeleton from "../components/AllTodosSkeleton";

function AllTodos() {

    const host= `https://todo-app-backend-production-3bfc.up.railway.app/api`

    const loggedInUserString = localStorage.getItem("loggedInUser");
    const loggedInUser = loggedInUserString && JSON.parse(loggedInUserString);

    const [page, setPage]= useState<number>(1)
    const [pageSize, setPageSize]= useState<number>(8)
    const [sortBy, setSortBy]= useState<string>("asc")

    const { isPending, error, data } = useQuery({
        queryKey: ["allTodos", page, pageSize, sortBy],
        queryFn: async () => {
            let { data } = await axios.get(`${host}/todos?pagination[pageSize]=${pageSize}&pagination[page]=${page}&sort[createdAt]=asc`, {headers: {Authorization: `Bearer ${loggedInUser.jwt}`}});
            console.log(data);
            
            return data;
        },
    });

    const onChangePageSize= (e: ChangeEvent<HTMLSelectElement>)=>{
        setPageSize(+e.target.value)
    }

    const onChangeSort= (e: ChangeEvent<HTMLSelectElement>)=>{
        setSortBy(e.target.value)
    }


    // if (isPending) return <h2 className="mt-10">Loading...</h2>;
    if (isPending) return <AllTodosSkeleton/>
    if (error) return <h2>An error has occurred: {error.message}</h2>

    return (
        <>
        {/* <AllTodosSkeleton/> */}
            <div className="mt-2 flex justify-end gap-3 pr-3">
                <select name="sorting" value={sortBy} onChange={onChangeSort} className="border px-4 py-2 rounded-md text-black bg-white">
                    <option selected disabled value="pageSize">Sort by</option>
                    <option value="asc">Oldest</option>
                    <option value="desc">Latest</option>
                </select>

                <select name="pageSize" value={pageSize} onChange={onChangePageSize} className="border px-4 py-2 rounded-md text-black bg-white">
                    <option selected disabled value="pageSize">Page Size</option>
                    <option value="8">5</option>
                    <option value="30">10</option>
                    <option value="50">20</option>
                    <option value="100">50</option>
                </select>
            </div>

            <div>
            {data.data.length ? (
                <ul className="py-.5">
                {data.data.map((todo: ITodo) => (
                    <li
                    key={todo.id}
                    className="flex justify-between bg-white text-black my-3 text-center items-center px-5 py-3 rounded-lg"
                    >
                    <p className="text-lg">{todo.title}</p>
                    {/* <div className=" flex gap-5">
                        <Button  className="h-8">
                        Edit
                        </Button>
                        <Button className="bg-red-600 h-8">
                        Remove
                        </Button>
                    </div> */}
                    </li>
                ))}
                </ul>
            ) : (
                "No todos yet!"
            )}
            </div>
            <Paginator page={page} setPage={setPage} pageCount={data.meta.pagination.pageCount} total={data.meta.pagination.total}/>
        </>
    );
}

export default AllTodos;
