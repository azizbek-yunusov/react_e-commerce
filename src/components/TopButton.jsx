import React, {useState, useEffect} from 'react'

const TopButton = () => {
  const [showTopBtn, setShowTopBtn] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 250) {
        setShowTopBtn(true)
      }
      else {
        setShowTopBtn(false)
      }
    })
  
  }, [])
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  return (
    <div onClick={goToTop} className="fixed lg:bottom-8 bottom-24 lg:left-8 cursor-pointer">
      {" "}
      {showTopBtn && <div className="p-3 rounded-full bg-zinc-600 topBtn hover:scale-110 hover:bg-amber-400 ease-in duration-200 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
        </svg>
      </div> } {" "}
    </div>
  )
}

export default TopButton