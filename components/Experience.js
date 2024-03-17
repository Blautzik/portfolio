import React from 'react'
import ExperienceCard from './ExperienceCard'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Card, CardContent } from './ui/card'
import { CarouselApi } from "@/components/ui/carousel"

const Experience = () => {
  const [api, setApi] = React.useState()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
 
  React.useEffect(() => {
    if (!api) {
      return
    }
 
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])
 
  return (
    <div className='h-screen  flex flex-col md:flex-row relative items-center justify-center'>
      <h1 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text2xl' >experience</h1>

      <div className='flex flex-col items-center justify-center w-full max-w-md'>
        <Carousel setApi={setApi} className="max-w-[280px]   md:max-w-md">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-[9/16] md:aspect-[4/5] items-center justify-center p-6">
                      <span className="text-4xl font-semibold text-white">{index + 1}</span>
                      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToRj0-nJVij0MB2gAr3oOleR8J-yRoGrsiwA&usqp=CAU'/>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="flex justify-center mt-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <span
              key={index}
              className={`inline-block transition-all duration-500 ease h-3 rounded-full mx-1 ${index + 1 === current ? "bg-gray-50 w-6" : "bg-gray-600 w-3"
                }`}
              onClick={() => api && api.scrollTo(index)}
            />
          ))}
        </div>
      </div>

    </div>
  )
}

export default Experience