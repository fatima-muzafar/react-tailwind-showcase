function Card2({ symbol, heading, text }) {
    return (
        <div className="bg-white/40 p-6 md:p-8 shadow-md h-auto flex flex-col gap-6 items-start rounded-lg w-full">
           
            <h2 className="text-gray-700 text-xl md:text-2xl font-bold flex flex-row items-center gap-2"> 
                {symbol}
                {heading}
            </h2>

            <ul className="list-disc pl-5 space-y-3 text-gray-600"> 
         
                {text.map(function(point, index) {
                    return <li key={index}>{point}</li>
                })}
            </ul>
        </div>
    )
}

export default Card2;