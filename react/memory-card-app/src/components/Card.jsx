import PropTypes from 'prop-types';
import logo from '../images/nba-logo-transparent.png';

export default function Card({ name, src, flipped }) {
    return(<>
    <div className={ `card ${flipped ? 'flipped' : ''}` } >
        <div className="card-inner">
            <div className="card-front">
                <img className='mb-5' src={ src } alt="" />
                <div className='flex justify-center items-end mt-5'>
                    { name }
                </div>
            </div>
            <div className='card-back'>
                    <img src={ logo } alt="NBA Logo" className='m-auto w-1/2'/>
                </div>
        </div>
    </div>
    </>)
}

Card.propTypes = {
    name: PropTypes.string,
    src: PropTypes.string,
    flipped: PropTypes.string,
}