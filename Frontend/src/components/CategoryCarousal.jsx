import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from './ui/button'

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Graphic Designer",
    "System Engineer",
    "Data Scientist",
    "App Developer",
    "IOS Developer",
    "Testing Engineer",
    "Java Developer",
    "MERN Developer"
]

function CategoryCarousal() {
  return (
    <div>
        <Carousel className="w-full max-w-xl mx-auto my-20">
            <CarouselContent>
                {
                    category.map((cat, index) =>(
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <Button className="rounded-full" variant="outline">{cat}</Button>
                        </CarouselItem>
                    ))
                }
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
        </Carousel>
    </div>
  )
}

export default CategoryCarousal