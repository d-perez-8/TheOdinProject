import PropTypes from "prop-types";
import SaveResume from "./SaveResume";

export const Form = ({ children }) => {

    return (
        <div className="h-svh bg-slate-700 col-span-1 text-center">
            <h1 className="text-5xl text-white text-start p-3 my-5">Resume Builder</h1>
            <SaveResume />
            <div>{children}</div>
        </div>
    )
}

Form.propTypes = {
    children: PropTypes.array,
}
