
import { useNavigate } from "react-router-dom";
const Route = (url, data = undefined) => {
    const navigate = useNavigate();
    return () => {
        navigate(url, { state: { data } });
    }
};
export default Route;
