import PropTypes from 'prop-types';

export default function Card({ title, children, isActive, onCardClick }) {
    return (
        <div className="bg-slate-900 text-white m-3 p-4">
            {isActive ? (
                <>
                    <h2 id="dropdown" className='text-2xl' onClick={() => onCardClick(title)}>{title} &#8964;</h2>
                    <div className='text-2xl'>{children}</div>
                </>
            ) : (
                <h2 id="dropdown" className='text-2xl' onClick={() => onCardClick(title)}>{title} &#8963;</h2>
            )}
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.object,
    isActive: PropTypes.bool,
    onCardClick: PropTypes.func,
};