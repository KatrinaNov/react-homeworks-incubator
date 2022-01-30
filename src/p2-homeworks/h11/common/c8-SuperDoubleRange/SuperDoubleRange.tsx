import React from 'react'
import {Slider} from "@mui/material";
import styled from "@emotion/styled";

const SuperDoubleRangeElem = styled(Slider)({
  maxWidth: '400px',
  margin: '5px 20px',
  color: 'var(--main-color)',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#05828e',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

type SuperDoubleRangePropsType = {
  onChangeRange?: (value: [number, number]) => void
  value?: [number, number]
  min?: number
  max?: number
  step?: number
  disabled?: boolean
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
  {
    onChangeRange, value,
    min, max, step, disabled
  }
) => {
  // сделать самому, можно подключать библиотеки
  const handleChange = (event: Event, newValue: number | number[]) => {
    onChangeRange && onChangeRange(newValue as [number, number]);
  };

  return (
      <SuperDoubleRangeElem
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        step={step}
        min={min}
        max={max}
        disabled={disabled}

        // getAriaValueText={valuetext}
      />
  )
}

export default SuperDoubleRange
