import React from 'react';

import styles from './style.module.css'

type SelectOption = {
  label: string,
  value: string
}

type SelectProps = {
  options: SelectOption[]
  value?: SelectOption
  onChange: (value: SelectOption | undefined) => void
}

export default function SelectPage({ value, onChange, options }: SelectProps) {
  return (

    <div className={styles.container}>
      <span className={styles.value}> Value </span>
    </div>
    
  )
}
