import { Dispatch, SetStateAction } from "react"

export interface BlogContextInterface {
  message: string
  setMessage: Dispatch<SetStateAction<string>>
}