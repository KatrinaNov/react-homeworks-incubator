import React, {useState} from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = "high" | "middle" | "low" // need to fix any
export type AffairType = {
  _id: number
  name: string
  priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [
  {_id: 1, name: 'React', priority: 'high'},
  {_id: 2, name: 'anime', priority: 'low'},
  {_id: 3, name: 'games', priority: 'low'},
  {_id: 4, name: 'work', priority: 'high'},
  {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
// export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {
//   if (filter === 'high') return affairs.filter(a => a.priority === "high")
//   else if (filter === 'middle') return affairs.filter(a => a.priority === "middle")
//   else if (filter === 'low') return affairs.filter(a => a.priority === "low")
//   else return affairs
// }
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => filter === 'all' ? affairs : affairs.filter(a => a.priority === filter)

export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => affairs.filter(a => a._id !== _id)

function HW2() {
  const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // need to fix any
  const [filter, setFilter] = useState<FilterType>('all')

  const filteredAffairs = filterAffairs(affairs, filter)
  const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

  return (
    <div>
      <h3>homeworks 2</h3>

      {/*should work (должно работать)*/}
      <Affairs
        data={filteredAffairs}
        setFilter={setFilter}
        deleteAffairCallback={deleteAffairCallback}
      />

      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeAffairs/>*/}
    </div>
  )
}

export default HW2
