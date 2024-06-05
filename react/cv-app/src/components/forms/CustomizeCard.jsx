import { useState } from 'react'
import { SaveButton } from '../SaveButton';

export const CustomizeCard = () => {
    const [fontValue, setFontValue] = useState('times-new-roman');

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'font') {
            setFontValue(value)
        }
    }

    return (
        <>
        <form className='m-2'>
            <label htmlFor="font">Font
                <select id="font" name='font' value={fontValue} onChange={handleChange}>
                    <option value="times-new-roman">Times New Roman</option>
                    <option value="helvetica">Helvetica</option>
                    <option value="ariel">Ariel</option>
                    <option value="cambria">Cambria</option>
                    <option value="georgia">Georgia</option>
                </select>
            </label>
            <p>{fontValue}</p>
        </form>
        <SaveButton />
        </>
    )
}

