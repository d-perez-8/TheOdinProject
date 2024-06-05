import PropTypes from 'prop-types';
import CardFooter from '../CardFooter';

export const EducationCard = ({
    schoolValue,
    setSchoolValue,
    degreeValue,
    setDegreeValue,
    start,
    setStart,
    end,
    setEnd,
    locationValue,
    setLocationValue,
    description,
    setDescription
}) => {

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'school') {
            setSchoolValue(value)
        } else if (name === 'degree') {
            setDegreeValue(value)
        } else if (name === 'start') {
            setStart(value)
        } else if (name === 'end') {
            setEnd(value)
        } else if (name === 'location') {
            setLocationValue(value)
        } else if (name === 'description') {
            setDescription(value)
        }
    }

    return (
        <>
        <form className='mx-5'>
            <div className='grid w-full items-center gap-4'>
                <div className="flex flex-col space-y-1.5">
                    <label htmlFor='school' className='mb-1 flex w-full'>School</label>
                    <input id="school" name='school' type='text' value={schoolValue} onChange={handleChange}/>
                </div>
                <div  className="flex flex-col space-y-1.5">
                    <label htmlFor="degree"  className='mb-1 flex w-full'>Degree </label>
                    <input id="degree" name='degree' type='text' value={degreeValue} onChange={handleChange}/>
                </div>
                <div  className="flex flex-col space-y-1.5">
                    <label htmlFor="start"  className='mb-1 flex w-full'>Start Date </label>
                    <input id='start' name='start' type='text' value={start} onChange={handleChange}/>
                </div>
                <div  className="flex flex-col space-y-1.5">
                    <label htmlFor='end'className='mb-1 flex w-full'>End Date </label>
                    <input name='end' id='end'  type="text" value={end} onChange={handleChange}/>
                </div>
                <div  className="flex flex-col space-y-1.5">
                    <label htmlFor="location" className='mb-1 flex w-full'>Location </label>
                    <input id='location' name='location' type='text' value={locationValue} onChange={handleChange} />
                </div>
                <div className="flex flex-col space-y-1.5">
                    <label htmlFor='description' className='mb-1 flex w-full'>Description</label>
                    <input id='descritpion' name="description" type='textbox' value={description} onChange={handleChange} />
                </div>
            </div>
        </form>

        <CardFooter />
        </>
    )
}

EducationCard.propTypes = {
    schoolValue: PropTypes.string,
    setSchoolValue: PropTypes.func,
    degreeValue: PropTypes.string,
    setDegreeValue: PropTypes.func,
    start: PropTypes.string,
    setStart: PropTypes.func,
    end: PropTypes.string,
    setEnd: PropTypes.func,
    locationValue: PropTypes.string,
    setLocationValue: PropTypes.func,
    description: PropTypes.string,
    setDescription: PropTypes.func,
}