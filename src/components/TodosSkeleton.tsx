
function TodosSkeleton() {
    return (
        <div role="status" className="max-w-full mt-2 p-4 rounded-base shadow-xs animate-pulse md:p-6">

            <div className="flex justify-center gap-5">
                <div className="h-2.5 w-50  bg-default rounded-lg bg-white py-5.5 px-9" />
                <div className="h-2.5 w-50  bg-default rounded-lg bg-white py-5.5 px-9" />
            </div>

            <div className="flex items-center justify-between pb-4 border p-4 rounded-lg my-4">
                <div>
                    {/* <div className="h-2.5 bg-neutral-quaternary rounded-full w-24 mb-2.5 bg-white"></div> */}
                    <div className="w-50 px-5 py-2 bg-neutral-quaternary rounded-full bg-white"></div>
                </div>
                <div className="flex gap-4">
                    <div className="h-2.5 w-15 bg-default rounded-lg bg-white py-4 px-9" />
                    <div className="h-2.5 w-15 bg-default rounded-lg bg-white py-4 px-9" />
                </div>
            </div>

            <div className="flex items-center justify-between py-4 border p-4 rounded-lg my-4">
                <div>
                    {/* <div className="h-2.5 bg-neutral-quaternary rounded-full w-24 mb-2.5"></div> */}
                    <div className="w-50 px-5 py-2 bg-neutral-quaternary rounded-full bg-white"></div>
                </div>
                <div className="flex gap-4">
                    <div className="h-2.5 w-15 bg-default rounded-lg bg-white py-4 px-9" />
                    <div className="h-2.5 w-15 bg-default rounded-lg bg-white py-4 px-9" />
                </div>
            </div>

            <div className="flex items-center justify-between py-4 border p-4 rounded-lg">
                <div>
                    {/* <div className="h-2.5 bg-neutral-quaternary rounded-full w-24 mb-2.5"></div> */}
                    <div className="w-50 px-5 py-2 bg-neutral-quaternary rounded-full bg-white"></div>
                </div>
                <div className="flex gap-4">
                    <div className="h-2.5 w-15 bg-default rounded-lg bg-white py-4 px-9" />
                    <div className="h-2.5 w-15 bg-default rounded-lg bg-white py-4 px-9" />
                </div>
            </div>

        </div>
    )
}

export default TodosSkeleton
