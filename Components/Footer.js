import React, {Component} from 'react'

class Footer extends Component{
    render(){

        return(
            <div>

                <div class="container-fluid footer-container">
                    <div class="container-fluid footer">
                        <div class="row">
                            
                            <div class="col-xs-12 col-sm-12 col-12 col-md-12 footer-socials">
                                <center>
                                    <a href="https://github.com/rmartinez213" class='icon-css'><i class="fa fa-github-square footer-social-item"></i></a>
                                    <a href="https://www.linkedin.com/in/robert-martinez-75bb90132/" class='icon-css'><i class="fa fa-linkedin-square footer-social-item"></i></a>
                                    <a href="https://www.instagram.com/iamrobertmartinez/" class='icon-css'><i class='fa fa-instagram footer-social-item'></i></a>
                                </center>
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-12 col-md-12 footer-title">
                                    © 2019 Robert Martinez
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;