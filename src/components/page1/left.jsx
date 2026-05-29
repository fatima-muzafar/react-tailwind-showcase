import screenshot from '../../assets/p1.png'

function Left() {
  return (
   
   <div className="bg-[#F7CBCA] w-full lg:w-[500px] p-6 md:p-8 shadow-md h-full flex flex-col gap-6">

      <span className="inline-block bg-gray-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-6">
        Modern web development
      </span>

      <h1 className="text-3xl md:text-4xl font-extrabold leading-normal text-gray-700 mb-6">
        Build faster with
        <span className="inline-block bg-gray-700 text-white px-2 py-0.5 rounded-md mx-2">
          React 
        </span>
        & Tailwind CSS
      </h1>
      
      <p className="text-gray-600 text-sm leading-relaxed mb-8">
        The most powerful duo in modern frontend development.
        Component-based architecture meets utility-first styling
        — ship beautiful UIs in record time.
      </p>

      <div className="grid grid-cols-3 gap-4 w-full border-t border-gray-200 pt-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-800">21M+</h3>
          <p className="text-xs text-gray-500 mt-1">Downloads</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-800">94%</h3>
          <p className="text-xs text-gray-500 mt-1">Developer satisfaction</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-800">3.8M</h3>
          <p className="text-xs text-gray-500 mt-1">GitHub stars</p>
        </div>
      </div>
<div className="bg-white w-full rounded-2xl p-3 shadow-inner overflow-hidden">
  <img className="w-full rounded-xl" src={screenshot} alt="Project screenshot" />
</div>
       

    </div>
  )
}

export default Left;