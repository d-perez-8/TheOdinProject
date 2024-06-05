import PropTypes from 'prop-types';

export default function Section ({ subheading, company, location, position, start, end, description }) {

    return (
       <section className='max-w-full'>
            <h2 className="border-b-2 border-black mt-2 font-semibold text-lg">
                { subheading }
            </h2>
            <div className='flex justify-between'>
                <h3 className='font-bold'>{ company }</h3>
                <span>{ location }</span> 
            </div>
            <div className='flex justify-between'>
                <h4 className='italic'>{ position }</h4>
                <span className='text-sm'>{ start } - { end }</span>
            </div>
            { description && <div className="whitespace-pre-line max-w-fit"> { description } </div>} 
       </section>
    )
}

Section.propTypes = {
    subheading: PropTypes.string.isRequired,
    company: PropTypes.string,
    location: PropTypes.string,
    position: PropTypes.string,
    start: PropTypes.string,
    end: PropTypes.string,
    description: PropTypes.string,
}