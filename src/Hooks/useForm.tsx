import { useState } from 'react'
import { type InitData } from '../models'

export function useForm (initialValues: InitData) {
  const [values, setValues] = useState<InitData>(initialValues)
  const handleChange = (e: any) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })
  }
  return {
    values,
    setValues,
    handleChange
  }
}
