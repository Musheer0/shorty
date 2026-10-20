"use client"
import useCreateUrl from '@/hooks/use-create-url';
import { Input } from '@base-ui/react';
import React, { useState } from 'react'
import { Button } from '../ui/button';

const CreateURL = () => {
    const [url ,setURL] = useState("");
    const mutation = useCreateUrl()
    const [isLoading ,setIsLoading] = useState(false)
    const handleSubmit = async()=>{
        //validate url
        setIsLoading(true)
         await mutation({url})
         setIsLoading(false)
    }
  return (
    <div className="flex items-center justify-center  gap-4"> 
      <Input value={url} onChange={(e)=>setURL(e.target.value)} placeholder='Enter URL' />
      <Button onClick={handleSubmit} disabled={isLoading}>Create URL</Button>
    </div>
  )
}

export default CreateURL