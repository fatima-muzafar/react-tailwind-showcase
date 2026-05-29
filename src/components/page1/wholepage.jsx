import Header from './header'
import Left from './left'
import Right from './right'

function WholePage() {

    return (
     
        <div className="min-h-screen w-full flex flex-col bg-white overflow-x-hidden">

            <Header />

          
            
           <div className="flex-1 grid grid-cols-1 lg:grid-cols-[500px_1fr] p-4 gap-6 min-h-0">

                <Left />

                <Right />

            </div>

        </div>
    )
}

export default WholePage;