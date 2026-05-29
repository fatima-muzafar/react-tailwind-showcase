import { ArrowRight } from "lucide-react";

function Card({ icon, heading, description, link, linkUrl }) {
  const href = linkUrl || link;
  return (
    <div className="bg-white/40 w-full h-full rounded-2xl flex flex-col gap-4 p-6 shadow-md border border-white/40">

      <div className="bg-gray-400 h-[60px] w-[60px] rounded-2xl flex justify-center items-center">
        {icon}
      </div>

      <h2 className="text-gray-600 text-xl font-semibold pt-4">
        {heading}
      </h2>

      <p className="text-gray-500 text-sm md:text-md leading-relaxed pt-3 mb-4">
        {description}
      </p>

      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-gray-600 text-xl font-semibold flex items-center gap-2 mt-auto hover:text-blue-600 transition-colors cursor-pointer"
      >
        Learn more
        <ArrowRight size={20} />
      </a>

    </div>
  );
}

export default Card;