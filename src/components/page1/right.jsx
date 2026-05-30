import Card from './card'
import { Box, Zap, MonitorSmartphone, Layers, Users, Rocket } from 'lucide-react';
function Right() {

  const userdata = [
    {
      icon: <Box size={32} color="white" />,
      heading: "Component-based",
      description: "Build encapsulated components that manage their own state. Think of them like LEGO blocks — independent, reusable, and composable. Less repetition, easier debugging, and teams can work on different components simultaneously.",
      link: "https://react.dev"
    },
    {
      icon: <Zap size={32} color="white" />,
      heading: "Utility-first CSS",
      description: "Tailwind's utility classes mean you style directly in your markup — no context switching, no separate CSS files. Write className='p-4 rounded-lg' directly in your component. Faster to write, easier to read, simpler to maintain.",
      link: "https://tailwindcss.com"
    },
    {
      icon: <MonitorSmartphone size={32} color="white" />,
      heading: "Fully responsive",
      description: "Tailwind's responsive prefixes make mobile-first layouts intuitive. With sm:, md:, lg: prefixes you control exactly how your UI looks on every screen size — no media queries needed. Write once, look great everywhere.",
      link: "https://tailwindcss.com/docs/responsive-design"
    },
   {
  icon: <Layers size={32} color="white" />,
  heading: "Fast performance",
  description: "React's virtual DOM ensures only the changed parts of your UI re-render. Combined with Tailwind's purged CSS in production, your app loads blazing fast — minimal bundle size, maximum speed.",
  link: "https://react.dev/learn/render-and-commit"
},
{
  icon: <Users size={32} color="white" />,
  heading: "Huge community",
  description: "React has one of the largest developer communities in the world. Thousands of libraries, tutorials, and open-source projects — if you're stuck, someone has already solved it.",
  link: "https://react.dev/community"
},
{
  icon: <Rocket size={32} color="white" />,
  heading: "Production ready",
  description: "From startups to Fortune 500s — Netflix, Meta, Airbnb all use React. Paired with Tailwind, you can ship a polished, scalable UI faster than any other stack.",
  link: "https://tailwindcss.com/showcase"
},
  ]

  return (
    <div className="bg-[#F7CBCA] w-full flex-1 gap-6 p-4 md:p-6 shadow-md flex flex-col rounded-2xl">

      <div className="bg-gray-600 w-full flex justify-center items-center rounded-xl py-5">
        <h1 className="text-white text-lg md:text-xl font-bold text-center px-4">
          Why developers love this stack
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-stretch flex flex-wrap">
        {userdata.map(function (elem, index) {
          return (
            <Card
              key={index}
              icon={elem.icon}
              heading={elem.heading}
              description={elem.description}
              linkUrl={elem.link}
            />
          )
        })}
      </div>

    </div>
  )
}

export default Right;