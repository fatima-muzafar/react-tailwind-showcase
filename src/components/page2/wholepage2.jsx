import Navbar from "./navbar";
import Top from "./top";
import Center from "./center";
import Footer from "./footer";

function Wholepage2() {
    return (
        <div className="bg-white min-h-screen w-full flex flex-col overflow-x-hidden">
         
            <Navbar />
         
            <div className="flex-1 flex flex-col w-full min-h-0">
                
                <Top />
            
                <Center />
                <Footer />
            </div>
        </div>
    )
}

export default Wholepage2;