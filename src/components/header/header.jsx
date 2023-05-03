import Navbar from './navbar'
import Button from 'react-bootstrap/Button';
function Header({title}) {
    return (
        <div class="header">
            <Navbar/>
            <div class="main container">
                <div class="row">
                <div class="col-md-12">
                    <h1>Intent Foreign Education and Project Consultancy</h1>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
                    qui repellendus vero itaque quidem magnam, maxime repudiandae
                    </p>
                    <button><a href="#">Learn More</a></button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Header;