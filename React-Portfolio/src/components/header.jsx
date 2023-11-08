import Nav from './nav'
import './header.css'

function Header({currentPage,handlePageChange}) {
    return (
            <header>
                <img src="./profilepic.jpg"></img>
                <h1>Chuyi Lee</h1>
                <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
            </header>
    )
}

export default Header