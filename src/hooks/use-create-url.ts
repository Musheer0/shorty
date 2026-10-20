"use client"
import React from 'react'
import {useMutation} from "convex/react"
import { api } from '../../convex/_generated/api'
const useCreateUrl = () => {
  return useMutation(api.url.createUrl)
}

export default useCreateUrl