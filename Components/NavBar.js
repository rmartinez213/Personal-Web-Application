import react, {Component} from 'react'
import Link from 'next/link'

class NavBar extends Component{
    render(){

        return(
            <nav class="navbar navbar-expand-md navbar-light NavigationBar">
                <div class="container-fluid">
                    <img src="../static/TransparentLogoEdit.png" width="100px" height="100px"/>

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto">
                            <li class="navbar-item active">
                                <Link href='/index'><a class="nav-link">Home</a></Link>
                            </li>
                            
                            <li class="navbar-item">
                                <Link href='/Portfolio'><a class="nav-link">Portfolio</a></Link>
                            </li>
                            
                            <li class="navbar-item">
                                <a href="../static/RobertMartinezResume.docx" class="nav-link" download>Resume</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        )
    }
}

export default NavBar