import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'

const Business = () => {
  return (
    <div className='flex flex-col items-center justify-center relative mt-10 gap-5'>
      <div className="text-center relative">
        <p className='mb-4 text-4xl font-bold tracking-[0.5rem] uppercase'>business</p>
        <div className="leading-8">다양한 솔루션과 고객맞춤형 서비스를 제공합니다.</div>
      </div>

      <div className='flex flex-row gap-10 mx-4'>
        <Card>
          <CardHeader>
            <CardTitle className='text-center'>ICT Consulting</CardTitle>
            <CardDescription>Lorem ipsum dolor sit amet consectetur</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className='text-center'>Big Data</CardTitle>
            <CardDescription>Lorem ipsum dolor sit amet consectetur </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className='text-center'>Artificial Intelligent</CardTitle>
            <CardDescription>Lorem ipsum dolor sit amet consectetur</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>

    </div>

  )
}

export default Business