"use client"

import { useEffect, useState } from "react"

export const News = () => {
  const [news,setNews] = useState([]);
  const [num,setNum] = useState(4);  

  useEffect(() => {
    fetch("https://saurav.tech/NewsAPI/top-headlines/category/business/us.json")
    .then((res) => res.json())
    .then((data) => {
      setNews(data.articles)
    }
    
  )




  },[])

 // console.log(news)
 

  return (
    <div className="mt-2  space-y-4">
      {
         news && news.slice(0,num).map((article) => (
          <div key={article.url} className="bg-[#131619] p-[10px]  text-gray-300  rounded-xl">
              <a href={article.url} target="_blank">
                <div className=" flex items-center justify-between">
                      <div className="space-y-1">
                          <h3 className="font-bold text-sm"> {article.title} </h3>
                          <p className="text-gray-500"> {article.source.name} </p>
                      </div>
                  <img src={article.urlToImage} alt="" width={70} 
                    className="rounded-full"
                  />

                </div>


              </a>

          </div>
         ))
      }
    <button className="btn w-full text-white font-semibold" 
      onClick={() => setNum(num +3)}
    >

      Load more
    </button>
    </div>
  )
}
