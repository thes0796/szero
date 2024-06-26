import './Header.css'
import { header } from '../../staticData'
import Navbar from '../Navbar/Navbar'


const Header = () => {
    const { homepage, title } = header

    return (
      <header className='header center'>
        <h3>
          {homepage ? (
            <a href={homepage} className='link'>
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        <Navbar />
      </header>
    )
  }
  
  export default Header
  