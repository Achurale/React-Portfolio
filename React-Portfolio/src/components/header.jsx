import Nav from './nav'

function Header({currentPage,handlePageChange}) {
    return (
        <>
            <header>
                <h1>Chuyi Lee's Portfolio</h1>
                <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
            </header>
        </>
    )
}

export default Header