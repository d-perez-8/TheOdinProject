import PropTypes from 'prop-types'
import logo from '../images/nba-logo-transparent.png'

export default function Card({ name, src }) {
    return(<>
        <div className="card-container w-[250px] h-[350px] border-4 rounded-lg border-cyan-500 flex flex-col justify-center">
            <div className="card ">
                <img className='mb-5' src={ src } alt="" />
                <div className='flex justify-center items-end mt-5'>
                    { name }
                </div>
                <div className='card-back hidden'>
                    <img src={ logo } alt="NBA Logo" />
                </div>
            </div>
        </div>
    </>)
}

Card.propTypes = {
    name: PropTypes.string,
    src: PropTypes.string,
}