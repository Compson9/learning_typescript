import { EmployeeProps } from '@/types/types'
import React from 'react'

export default function Employees({name,email,id,department}: EmployeeProps) {
  return (
    <div>
     <h2>name: {name}</h2>
     <h2>email: {email}</h2>
     <h2>ID: {id}</h2>
     <p>Department {department}</p>
    </div>
  )
}
