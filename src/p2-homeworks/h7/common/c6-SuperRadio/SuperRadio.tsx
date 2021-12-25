import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(e)
      onChangeOption && onChangeOption(e.currentTarget.value)
        // onChange, onChangeOption
    }

// map options with key
    const mappedOptions: any[] = options ? options.map((o, i) => {
      return (
        <label key={name + '-' + i} >
          <input
            type={'radio'}
            name={name}
            value={o}
            onChange={onChangeCallback}
            checked={o === value}
            className={s.radio}
          />
          <span className={s.check}>{o}</span>
        </label>
      )
    }) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
