import React, {useState, useEffect} from 'react'
import './SwiperNews.css'
import NewsCard from '../NewsCard/NewsCard'
import SliderNews from '../SliderNews/SliderNews'

const SwiperNews = () => {

  const newsData=  [
    {id: 1, type: 'RELEASES', title: 'IT\'S PISTACCHIO TIME', body: 'Introducing our new Pistacchio Alfajores & Conitos. Made with Avella Pistacchio and real Belgian chocolate, they\'re already a hit at our stores and online shop.', url: 'imgi_106_file-1753987723007'},
    {id: 2, type: 'OPENINGS', title: 'LUCCIANO\'S LANDS IN CHILE', body: 'Introducing our new Pistacchio Alfajores & Conitos. Made with Avella Pistacchio and real Belgian chocolate, they\'re already a hit at our stores and online shop.', url: 'imgi_107_file-1753988287101'},
    {id: 3, type: 'OPENINGS', title: 'LUCCIANO\'S ARRIVES IN GRANADA', body: 'Lucciano’s continues its expansion in Europe with a new store in Granada — a space that blends local essence with the premium Lucciano’s experience. Artisanal gelato in a one-of-a-kind setting.', url: 'imgi_108_file-1753988538316'}
  ]

  const [isSliderActive,setIsSliderActive] = useState(false)

  useEffect(()=>{
    const checkSize =()=>{
      const  containerWidth = window.innerWidth
      setIsSliderActive(containerWidth < 1000)
    }

    checkSize()
  })

  if(!isSliderActive){
    return <>
        {newsData.map((news)=>(
          <NewsCard item={news} />
        ))}
    </>
  }

  return (
    <>
        <SliderNews items={newsData} />
    </>
  )
}

export default SwiperNews