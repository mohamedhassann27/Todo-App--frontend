
function AllTodosSkeleton() {
    return (
        <div role="status" className="max-w-full rounded-base shadow-xs animate-pulse py-2">

            <div className="flex gap-4 justify-end px-2">
                <div className="h-2.5 w-25 bg-default rounded-lg bg-white py-4.5 px-9" />
                <div className="h-2.5 w-25 bg-default rounded-lg bg-white py-4.5 px-9" />
            </div>

            <div className="flex items-center justify-between pb-4 border p-4 rounded-lg my-4">
                <div>
                    {/* <div className="h-2.5 bg-neutral-quaternary rounded-full w-24 mb-2.5 bg-white"></div> */}
                    <div className="w-80 px-5 py-2 bg-neutral-quaternary rounded-full bg-white"></div>
                </div>
            </div>

            <div className="flex items-center justify-between py-4 border p-4 rounded-lg my-4">
                <div>
                    {/* <div className="h-2.5 bg-neutral-quaternary rounded-full w-24 mb-2.5"></div> */}
                    <div className="w-80 px-5 py-2 bg-neutral-quaternary rounded-full bg-white"></div>
                </div>
            </div>

            <div className="flex items-center justify-between py-4 border p-4 rounded-lg">
                <div>
                    {/* <div className="h-2.5 bg-neutral-quaternary rounded-full w-24 mb-2.5"></div> */}
                    <div className="w-80 px-5 py-2 bg-neutral-quaternary rounded-full bg-white"></div>
                </div>
            </div>

        </div>
    )
}

export default AllTodosSkeleton
