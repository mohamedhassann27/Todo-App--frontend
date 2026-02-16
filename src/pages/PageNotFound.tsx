
// function PageNotFound() {
//     return (
//         <div>
//             <h2>404: Page Not Found</h2>
//         </div>
//     )
// }

// export default PageNotFound






// -----------------------Update UI only with claud-----------------------



import { useNavigate } from 'react-router';
import Button from '../components/ui/Button';

function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-6 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '700ms'}}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1000ms'}}></div>
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-size-[48px_48px] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]"></div>

            {/* 404 Content */}
            <div className="relative z-10 text-center max-w-2xl">
                
                {/* 404 Number */}
                <div className="mb-8 relative">
                <div className="absolute inset-0 flex items-center justify-center blur-2xl opacity-50">
                    <span className="text-[200px] font-bold bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    404
                    </span>
                </div>
                <h1 className="relative text-[200px] font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-none">
                    404
                </h1>
                </div>

                {/* Icon */}
                <div className="flex items-center justify-center mb-6">
                <div className="relative">
                    <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 blur-xl opacity-50 rounded-full"></div>
                    <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-6 rounded-2xl">
                    <svg className="w-16 h-16 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    </div>
                </div>
                </div>

                {/* Text */}
                <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-4">
                Page Not Found
                </h2>
                <p className="text-slate-400 text-lg mb-8 max-w-md mx-auto">
                Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                {/* Go Back Button */}
                <Button
                    onClick={() => navigate(-1)}
                    className="group px-6 py-3 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-slate-600 rounded-lg text-slate-300 font-medium transition-all duration-200 flex items-center gap-2"
                >
                    <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Go Back
                </Button>

                {/* Home Button */}
                <Button
                    onClick={() => navigate('/')}
                    className="relative group"
                >
                    <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <div className="relative bg-linear-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-6 py-3 rounded-lg font-semibold text-white flex items-center gap-2 transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Back to Home
                    </div>
                </Button>
                </div>

            </div>
        </div>
    );
}

export default NotFound;