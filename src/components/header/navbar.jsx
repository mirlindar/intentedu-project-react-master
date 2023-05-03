import logo from "../../img/intentedu.png"
import Image from "react-bootstrap/Image"
function Navbar(){
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="container">
            <Image src={logo} alt="logo" class="responsive" className="w" id="logo" fluid={true}/>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item fs-2"><a class="nav-link active" aria-current="page" href="#">Home</a></li>
                    <li class="nav-item fs-2"><a class="nav-link active" aria-current="page" href="#">About</a></li>
                    <li class="nav-item fs-2"><a class="nav-link active" aria-current="page" href="#">Services</a></li>
                    <li class="nav-item fs-2"><a class="nav-link active" aria-current="page" href="#">Pricing</a></li>
                    <li class="nav-item fs-2"><a class="nav-link active" aria-current="page" href="#">Contact</a></li>
                </ul>
            </div>
            </div>
        </nav>
    );
}

export default Navbar;