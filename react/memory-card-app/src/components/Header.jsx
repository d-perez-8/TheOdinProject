import PropTypes from 'prop-types';

export default function Header({ title, subtitle, score, personal }) {
    return (<div className='flex'>
        <div className='flex flex-col flex-1 w-1/2'>
            <h1 className='text-3xl m-5'>{title}</h1>
            <h2 className='text-xl m-5'>{subtitle}</h2>
        </div>
        <div className='flex items-center gap-10'>
            <p>Score: {Number(score)}</p>
            <p className='mr-5'>Personal Best: {Number(personal)}</p>
        </div>
    </div>)
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    score: PropTypes.number,
    personal: PropTypes.number,
}