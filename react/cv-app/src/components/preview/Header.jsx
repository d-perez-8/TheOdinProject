import PropTypes from 'prop-types';

export default function Header({ name, address, email, phone }) {
   
    return (
        <div>
            <h1 className="text-center text-2xl font-bold m-2" >{name}</h1>
            <div className='text-center text-xs mb-4'>
                {address && <span>{address} </span>}
                {email && <span> | {email}</span>}
                {phone && <span> | {phone}</span>}
            </div>
        </div>
    )
}

Header.propTypes = {
    name: PropTypes.string,
    address: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
}