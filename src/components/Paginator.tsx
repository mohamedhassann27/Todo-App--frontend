// interface IProps{
//     page: number;
//     setPage: (prev:number)=> void
//     pageCount: number
//     total: number
// }

import Button from "./ui/Button";

// function Paginator({page, setPage, pageCount, total}: IProps) {

//     //handler
//     const onPrevHandler= ()=>{
//         setPage(prev=> prev-1)
//     }

//     const onNextHandler= ()=>{
//         setPage(prev=> prev+1)
//     }

//     return (
//         <div className="flex space-x-2 justify-center items-center">
//         <span className="text-sm text-body mr-5">Page <span className="font-semibold text-heading">{page}</span> to <span className="font-semibold text-heading">{pageCount}</span>   of <span className="font-semibold text-heading">{total}</span> Records</span>

//             {/* Previous Button */}
//             <button onClick={onPrevHandler} className="inline-flex items-center text-body bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none rounded-md bg-white text-black cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-500" disabled={page==1}>
//                 <svg className="w-4 h-4 me-1.5 -ms-0.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12l4-4m-4 4 4 4" /></svg>
//                 Previous
//             </button>
//             {/* Next Button */}
//             <button onClick={onNextHandler} className="inline-flex items-center text-body bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none rounded-md bg-white text-black cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-500" disabled={page==pageCount}>
//                 Next
//                 <svg className="w-4 h-4 ms-1.5 -me-0.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m14 0-4 4m4-4-4-4" /></svg>
//             </button>
//         </div>
//     )
// }

// export default Paginator







// -----------------------Update UI only with claud-----------------------



interface IProps {
    page: number;
    setPage: (page: number) => void;
    pageCount: number;
    total: number;
    }

function Paginator({ page, setPage, pageCount, total }: IProps) {
    const onPrevHandler = () => setPage(page - 1);
    const onNextHandler = () => setPage(page + 1);

    return (
        <div className="flex items-center justify-center gap-6 py-8">
        
        <Button
            onClick={onPrevHandler}
            disabled={page === 1}
            className="group flex items-center gap-2 px-4 py-2.5 bg-slate-800/50 border border-slate-700 hover:border-slate-600 rounded-lg text-slate-300 hover:text-slate-200 font-medium text-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed"
        >
            <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous
        </Button>

        <div className="flex items-center gap-2 text-sm">
            <span className="text-slate-400">Page</span>
            <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400 font-semibold">
            {page}
            </span>
            <span className="text-slate-400">of</span>
            <span className="px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-300 font-semibold">
            {pageCount}
            </span>
            <span className="text-slate-500 ml-2">{total} total</span>
        </div>

        <Button
            onClick={onNextHandler}
            disabled={page === pageCount}
            className="group flex items-center gap-2 px-4 py-2.5 bg-slate-800/50 border border-slate-700 hover:border-slate-600 rounded-lg text-slate-300 hover:text-slate-200 font-medium text-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed"
        >
            Next
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
        </Button>

        </div>
    );
}

export default Paginator;