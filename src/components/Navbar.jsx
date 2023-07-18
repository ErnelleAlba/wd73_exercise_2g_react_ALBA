import Pokedex_logo from "../assets/Pokedex_logo.png"

function Navbar (){
  return(
    <>
      <nav className="navbar bg-light">
        <div className="container justify-content-center">
          <a className="navbar-brand" href="#">
            <img src="https://archives.bulbagarden.net/media/upload/4/4b/Pokédex_logo.png" width='350px'/>
          </a>
        </div>
      </nav>
    </>
  )
}

export default Navbar