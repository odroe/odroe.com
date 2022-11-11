import heroBackground from "../../assets/developer-hero-bg.jpg"

export default () => {
  return (
   <div className="relative w-full">
      <div className="container mx-auto aspect-square max-h-screen max-w-screen">
        <div className="w-full h-full bg-no-repeat bg-center bg-contain" style={{backgroundImage: `url("/technology_stack.svg")`}} />
      </div>
      <div className="absolute bg-gradient-to-tr from-indigo-500 to-pink-500 inset-0 transition-all blur-[112px] duration-[2000ms] opacity-60 -z-10" />
   </div>
  )
}