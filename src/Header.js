import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';
import useWindowSize from "./hooks/useWindowSize";

const Header = ({ title }) => {
    const { width } = useWindowSize()

    return (
        <header className='Header'>
            <h1>{title}</h1>
            {/*Show a different icon when the window size changes*/}
            {width < 768 ? <FaMobileAlt /> : width < 992 ? <FaTabletAlt /> : <FaLaptop />}
        </header>
    )
}

export default Header;