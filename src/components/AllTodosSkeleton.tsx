
// function AllTodosSkeleton() {
//     return (
//         <div role="status" className="max-w-full rounded-base shadow-xs animate-pulse py-2">

//             <div className="flex gap-4 justify-end px-2">
//                 <div className="h-2.5 w-25 bg-default rounded-lg bg-white py-4.5 px-9" />
//                 <div className="h-2.5 w-25 bg-default rounded-lg bg-white py-4.5 px-9" />
//             </div>

//             <div className="flex items-center justify-between pb-4 border p-4 rounded-lg my-4">
//                 <div>
//                     {/* <div className="h-2.5 bg-neutral-quaternary rounded-full w-24 mb-2.5 bg-white"></div> */}
//                     <div className="w-80 px-5 py-2 bg-neutral-quaternary rounded-full bg-white"></div>
//                 </div>
//             </div>

//             <div className="flex items-center justify-between py-4 border p-4 rounded-lg my-4">
//                 <div>
//                     {/* <div className="h-2.5 bg-neutral-quaternary rounded-full w-24 mb-2.5"></div> */}
//                     <div className="w-80 px-5 py-2 bg-neutral-quaternary rounded-full bg-white"></div>
//                 </div>
//             </div>

//             <div className="flex items-center justify-between py-4 border p-4 rounded-lg">
//                 <div>
//                     {/* <div className="h-2.5 bg-neutral-quaternary rounded-full w-24 mb-2.5"></div> */}
//                     <div className="w-80 px-5 py-2 bg-neutral-quaternary rounded-full bg-white"></div>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default AllTodosSkeleton








// -----------------------Update UI only with claud-----------------------



function AllTodosSkeleton() {
    return (
        <div className="min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 relative">
        <div className="relative max-w-6xl mx-auto px-6 py-12">
            
            {/* Header Skeleton */}
            <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
                <div className="h-10 w-48 bg-slate-800/50 rounded-lg mb-2 animate-pulse"></div>
                <div className="h-5 w-64 bg-slate-800/30 rounded-lg animate-pulse"></div>
            </div>
            
            <div className="flex gap-3">
                <div className="h-11 w-36 bg-slate-800/50 rounded-lg animate-pulse"></div>
                <div className="h-11 w-36 bg-slate-800/50 rounded-lg animate-pulse"></div>
            </div>
            </div>

            {/* Todo Items Skeleton */}
            <div className="grid gap-4 mb-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div
                key={i}
                className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 animate-pulse"
                style={{ animationDelay: `${i * 50}ms` }}
                >
                <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-2">
                    <div className="h-6 bg-slate-700/50 rounded w-2/3"></div>
                    <div className="h-4 bg-slate-700/30 rounded w-full"></div>
                    </div>
                    <div className="h-4 w-20 bg-slate-700/30 rounded"></div>
                </div>
                </div>
            ))}
            </div>

            {/* Pagination Skeleton */}
            <div className="flex items-center justify-center gap-6 py-8">
            <div className="h-11 w-28 bg-slate-800/50 rounded-lg animate-pulse"></div>
            <div className="flex items-center gap-2">
                <div className="h-8 w-16 bg-slate-800/50 rounded-lg animate-pulse"></div>
                <div className="h-8 w-16 bg-slate-800/50 rounded-lg animate-pulse"></div>
            </div>
            <div className="h-11 w-28 bg-slate-800/50 rounded-lg animate-pulse"></div>
            </div>
        </div>
        </div>
    );
}

export default AllTodosSkeleton;