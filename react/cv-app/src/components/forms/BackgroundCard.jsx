import PropTypes from "prop-types";
import CardFooter from "../CardFooter";

export const BackgroundCard = ({ name, setName, address, setAddress, email, setEmail, phone, setPhone }) => {

    const handleChange = (event) => {
        const {name, value} = event.target;

        if (name === 'name') {
            setName(value);
        } else if (name === 'address') {
            setAddress(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'phone') {
            setPhone(value);
        }
    }
    
    return (
        <>
        <form className="mx-5">
            <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                    <label htmlFor="name" className='mb-1 flex w-full'>Name</label>
                    <input value={name} id='name' name='name' type='text' onChange={handleChange} />
                </div>
                <div className="flex flex-col space-y-1.5">
                    <label htmlFor="address" className='mb-1 flex w-full'>Address</label>
                    <input name='address' id='address' type='text' value={address} onChange={handleChange} />
                </div>
                <div className="flex flex-col space-y-1.5">
                    <label htmlFor="email" className="mb-1 flex w-full">Email</label>
                    <input name='email' id='email' type='email' value={email} onChange={handleChange} />
                </div>
                <div className="flex flex-col space-y-1.5">
                    <label htmlFor="phone" className="mb-1 flex w-full">Phone</label>
                    <input name='phone' id='phone' type='tel' value={phone} onChange={handleChange} />
                </div>
            </div>
        </form>
        <CardFooter />
        </>
    )
}

BackgroundCard.propTypes = {
    name: PropTypes.string,
    setName: PropTypes.func,
    address: PropTypes.string,
    setAddress: PropTypes.func,
    email: PropTypes.string,
    setEmail: PropTypes.func,
    phone: PropTypes.string,
    setPhone: PropTypes.func,
}