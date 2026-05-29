import image from "../../assets/p2.png"

function Top({ className = "" }){
    return(
       
       <div className={`bg-[#fad6d5] w-full p-6 md:p-10 shadow-md h-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-4 items-center rounded-lg ${className}`}>
           
           
           <div className="flex flex-col items-start w-full justify-center">
                <h1 className="text-slate-800 text-3xl md:text-4xl font-extrabold leading-tight mb-4">
                    React is growing faster than ever
                </h1>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    From startups to Fortune 500s, React powers the world's most used web applications. 
                    Paired with Tailwind CSS, it's the fastest way to ship production-ready UIs.
                </p>
           </div>

        
        
           <div className="bg-white/40 rounded-xl flex items-center justify-center shadow-inner overflow-hidden p-2">
                <img 
                    src={image} 
                    alt="React Illustration" 
                    className="w-full max-w-[450px] h-auto object-contain" 
                />
           </div>

       </div> 
    )
}
export default Top;