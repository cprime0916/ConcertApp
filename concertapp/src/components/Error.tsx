import ErrorSvg from "../assets/Error.svg";
const Error: React.FC = () => {
    return (
        <div className="main container">
            <ErrorSvg />
            <h6 className="error-text">Sorry! The resource you are trying to search is unavailable, to troubleshoot this issue, you may use <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="anchor">this guide</a> to assist you.</h6>
        </div>
    );
};

export default Error;