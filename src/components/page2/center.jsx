import { Component, Palette } from "lucide-react"
import Card2 from "./card2"

function Center() {
    const userEffect = [
        {
            id: 1,
            symbol: <Component size={28} color="gray"/>,
            heading: "React",
            text: [
                "Virtual DOM for blazing fast updates",
                "Reusable component architecture",
                "Massive ecosystem & community",
                "Hooks for clean state management"
            ],
        },
        {
            id: 2,
            symbol: <Palette size={28} color="gray" />,
            heading: "Tailwind CSS",
            text: [
                "No custom CSS files needed",
                "Consistent design system built in",
                "Responsive design made easy",
                "Smaller CSS bundle in production"
            ]
        }
    ]

    return (
        <div className="bg-[#D5E5E5] w-full p-6 md:p-12 h-auto my-8  ">
        
            <div className="max-w-6xl mx-auto w-full flex flex-col gap-8  ">
                
                <h1 className="text-gray-800 text-3xl md:text-4xl font-extrabold tracking-tight text-left">
                    React meets Tailwind
                </h1>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg text-left">
                    Two technologies, one powerful workflow.
                </p>
                    
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full flex-1 mt-4"> 
                   {userEffect.map(function(item) {
                        return (
                            <Card2  
                                key={item.id} 
                                symbol={item.symbol} 
                                heading={item.heading} 
                                text={item.text}
                            />
                        )
                   })}
                </div>

            </div>
        </div>
    )
}

export default Center;