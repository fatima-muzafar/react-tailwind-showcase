function Footer() {
    return (
  <footer className="bg-[#1d2330] py-10 px-6 flex flex-col items-center gap-5">
    <div className="text-center">
      <h2 className="text-[#f0ece4] text-xl font-medium">Fatima Muzafar Ali</h2>
      <p className="text-[#8a8fa8] text-xs tracking-widest uppercase mt-1">
        Frontend Developer · React · Tailwind CSS
      </p>
    </div> 
    <div className="flex gap-3 flex-wrap justify-center"> 
        <span className="inline-block  text-white px-3 py-2 rounded-full mx-2 border-white border text-xs font-semibold tracking-wide ">
      <a href="https://github.com/YOUR_USERNAME" className="footer-link">GitHub</a>
       </span>
         <span className="inline-block  text-white px-3 py-2 rounded-full mx-2 border-white border text-xs font-semibold tracking-wide ">
      <a href="https://www.linkedin.com/in/fatima-muzafar-ali-900a172a0" className="footer-link">LinkedIn</a>
         </span>
    </div>
    <p className="text-[#555a6e] text-xs">Built with React and Tailwind CSS · 2026</p>
  </footer>

    )
}
export default Footer;