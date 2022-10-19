import React, { FunctionComponent, useState, useEffect } from 'react'
import { VariationDto } from '../../DTOs/VariationDto'
import { VarOption } from '../../DTOs/VarOptionDto'
import { VarOptionService } from '../../Services/VarOptionService'


type Props = {
    id: number
    handleOptions?:(e:React.ChangeEvent<HTMLSelectElement>) => void,
    name?: string
}

const Select:FunctionComponent<Props> = ({id, handleOptions, name}) => {
    const [varOptions,setVarOptions] = useState<VarOption[]|null>()

   const fetchVarOptions = async (variationId:number) => {
    const response = await VarOptionService.getVarOptionByVarId(variationId);
    setVarOptions(response)
   }
    useEffect(() => {
     fetchVarOptions(id);
    },[id])
  return (
    <select id={name} onChange={handleOptions}>
      {
        varOptions?.map((option,index) => (
            <option  key={index}   value={option.value}>{option.value}</option>
        ))
      }
    </select>
  )
}

export default Select
