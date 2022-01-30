import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(100)

  const onChangeValue1 = (value: number) => setValue1(value)
  const onChangeTwoValues = (value: [number, number]) => {
    setValue1(value[0])
    setValue2(value[1])
  }

  return (
    <div>
      <h3>homeworks 11</h3>

      {/*should work (должно работать)*/}
      <div>
        <span>{value1}</span>
        <SuperRange
          onChangeRange={onChangeValue1}
          value={value1}
          // сделать так чтоб value1 изменялось
        />
      </div>

      <div>
        <span>{value1}</span>
        <SuperDoubleRange
          value={[value1, value2]}
          onChangeRange={onChangeTwoValues}
          // step={2}
          // max={1000}
          // сделать так чтоб value1 и value2 изменялось
        />
        <span>{value2}</span>
      </div>

    </div>
  )
}

export default HW11
