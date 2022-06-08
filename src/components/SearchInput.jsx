import { createBrowserHistory } from 'history'
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { productData } from '../dataBase/productData'
import MobileSearchList from './MobileSearchList'


const SearchInput = () => {
  const [filteredData, setFilteredData] = useState([])
  const [term, setTerm] = useState("")
  const [showSearch, setShowSearch ] = useState(false)
  const history = createBrowserHistory()
  const {pathname, search} = useLocation()
  const navigate = useNavigate()
  // const [filterdCatalog, setFilterdCatalog] = useState([])
  
  const handleAutoComplete = (e) => {
    const searchTerm = e.target.value;
    setTerm(searchTerm);
    console.log(searchTerm);
    const newFilterAutoComplete = productData.filter((value) => {
      return (
        value.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })
    
    if (searchTerm === "") {
      setFilteredData([])
    }
    else {
      setFilteredData(newFilterAutoComplete)
    }

  }
  const clearFilter = () => {
    setFilteredData([]);
    setTerm("");
  }
  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSubmit()
    }
  }
  const handleSubmit = () => {
    // callback(term)
  }
  const submitAction = (e) => {
  const searchTerm = e.target.value;
    e.preventDefault();
    history.push({
      pathname,
      search: `search?q=${searchTerm}`

    })
    navigate(`/search?q=${searchTerm}`)
  }
  const toggleMobileSearchBar = () => {
    setShowSearch(!showSearch)
  }
  return (
    <div className='relative'>
      <form onClick={toggleMobileSearchBar} onSubmit={submitAction} className="flex items-center border-2 border-yellow-400 justify-between rounded-lg bg-white max-h-12 lg:w-auto w-full" >
        <input type="text"
          // onClick={showSearchPage()}
          className='lg:w-[550px] w-full px-4 rounded-2xl bg-none'
          placeholder='Поиск товаров'
          value={term}
          onChange={handleAutoComplete}
        />
          <button
          // onClick={handleSubmit}
            type='submit'
            className='lg:py-2 py-[4px] lg:px-5 px-2 rounded-r-md bg-yellow-400'
          >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </form>
      {filteredData.length !== 0 && (
        <div className="block lg:w-[605px] mt-[2px] rounded-xl shadow-md text-left overflow-hidden z-20 max-h-96 overflow-y-scroll absolute left-0 bg-slate-50">
          {filteredData.slice(0, 20).map((value, key) => {
            return (
              <Link to={`/product/detail/${value.id}`} onClick={clearFilter} className='cursor-pointer py-4 w-full px-5 hover:bg-yellow-100 flex text-left' key={key}>
                <img src={value.imgUrl[0]} alt={value.title} width="40" height="40" />
                <p className="ml-5">{value.title}</p>
              </Link>
            )
          }) }
        </div>
      )}
      {showSearch && <MobileSearchList filteredData={filteredData} clearFilter={clearFilter} term={term} handleAutoComplete={handleAutoComplete} toggleMobileSearchBar={toggleMobileSearchBar} />}
    </div>
  )
}

export default SearchInput