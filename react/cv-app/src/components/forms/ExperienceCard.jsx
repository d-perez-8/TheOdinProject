import PropTypes from 'prop-types';
import CardFooter from '../CardFooter';

export const ExperienceCard = ({
        company, 
        setCompany, 
        location,
        setLocation,
        positionValue, 
        setPositionValue, 
        startValue, 
        setStartValue, 
        endValue, 
        setEndValue, 
        descriptionValue, 
        setDescriptionValue}) => {

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'company') {
            setCompany(value)
        } else if (name === 'position') {
            setPositionValue(value)
        } else if  (name === 'location') {
            setLocation(value)
        } else if (name === 'start') {
            setStartValue(value)
        } else if (name === 'end') {
            setEndValue(value)
        } else if (name === 'description') {
            setDescriptionValue(value)
        }
    }

    return (
        <>
        <form className='mx-5'>
            <div className='grid w-full items-center gap-4'>
                <div className='flex flex-col space-y-1.5'>
                    <label htmlFor='comapany' className='m-1 flex w-full'>Comapany</label>
                    <input name='company' id="company" type='text' value={company} onChange={handleChange} />
                </div>
                <div className='flex flex-col space-y-1.5'>
                    <label htmlFor="location" className='m-1 flex w-full'>Location</label>
                    <input name='location' id="location" type="text" value={location} onChange={handleChange} />
                </div>
                <div className='flex flex-col space-y-1.5'>
                    <label htmlFor='position' className='m-1 flex w-full'>Position Title</label>
                    <input name='position' id="position" type='text' value={positionValue} onChange={handleChange}/>
                </div>
            
                <div className='flex flex-col space-y-1.5'>
                    <label htmlFor='startValue' className='m-1 flex w-full'>Start Date</label>
                    <input name='start' type='text' id="startValue" value={startValue} onChange={handleChange}/>
                </div>
                <div className='flex flex-col space-y-1.5'>
                    <label htmlFor='endValue' className='m-1 flex w-full'>End Date</label>
                    <input name='end' id="endValue" type="text" value={endValue} onChange={handleChange}/>
                </div>
                <div className='flex flex-col space-y-1.5'>
                    <label className='m-1 flex w-full' htmlFor='description'>Description</label>
                    <textarea name='description' id='description' type='textbox' value={descriptionValue} onChange={handleChange}></textarea>
                </div>
            </div>
        </form>
        <CardFooter />
        </>
    )
}

ExperienceCard.propTypes = {
    company: PropTypes.string, 
    setCompany: PropTypes.func, 
    positionValue: PropTypes.string, 
    setPositionValue: PropTypes.func,
    location: PropTypes.string,
    setLocation: PropTypes.func, 
    startValue: PropTypes.string, 
    setStartValue: PropTypes.func, 
    endValue: PropTypes.string, 
    setEndValue: PropTypes.func, 
    descriptionValue: PropTypes.string, 
    setDescriptionValue: PropTypes.func,
}