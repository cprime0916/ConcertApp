import ErrorSvg from "../assets/ErrorSvg";
const Error: React.FC = () => {
    return (
        <div>
            <ErrorSvg /> <p>The site you are trying to access right now cannot be found. To troubleshoot your issue, you may use <a className="anchor" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">this guide</a> to assist you.</p>
        </div>
    );
};

export default Error;