const CSS = _ => (
    <div>
        {/* CSS for home page */}
        <style global style jsx>
            {`
            html{
                height: 100%;
            }
            
            body{
                margin: 0;
                padding: 0;
                min-height: 100vh;
                background-color: #800020 !important;
            }
            
            a{
                text-decoration: none;
                color: black;
            }
            
            .home-wrapper{
                display: flex;
            }
            
            .Header{
                font-family: fantasy;
                color: #800020;
                padding-left: 2%;
            }
            
            .NavigationBar{
                background-color: white;
            }
            
            .Subheader{
                display: flex;
                margin-top: auto;
                margin-bottom: auto;
                padding-top: 16px;
                padding-left: 0.5%;
                color: #800020;
            }
            
            .HeaderFlex{
                display:flex;
                background-color: white !important;
            }
            
            .Homebody{
                padding-bottom: 2%;
                margin-top: 10%;
                margin-bottom: 10%;
                background-color: white;
                transition-duration: 1s;
                flex: 10;
            }
            
            .Homebodyheader h1{
                text-align: center;
                color: #800020;
            }
            
            .Homebodytext{
                margin-left: 2%;
                margin-right: 2%;
                font-size: 20px;
            }
            
            .svg-container{
                display: inline-block;
                position: absolute;
                width: 100%;
                height: auto;
                vertical-align: middle;
                overflow: hidden;
                margin 0 auto;
            }
            
            .self-picture{
                width: 250px;
                height: 350px;
                display: block;
                margin: auto;
                border: 5px solid white;
                margin-top: 4%;
                margin-bottom: 11%;
            }
            
            .third-container{
                padding-bottom: 4%;
            }

            @media only screen and (min-width: 576px) and (max-width: 2000px){
                .self-picture{
                    width: 350px;
                    height: 500px;
                    display: block;
                    margin: auto;
                    border: 5px solid white;
                    margin-top: 20%;
                    margin-bottom: 11%;
                }

                .Homebody{
                    padding-bottom: 5%;
                    margin-top: 20%;
                    margin-bottom: 15%;
                    background-color: white;
                    transition-duration: 1s;
                    flex: 10;
                }
            }

            @media only screen and (min-width: 576px) and (max-width: 992px){
                .Homebody{
                    padding-bottom: 2%;
                    margin-top: 10%;
                    margin-bottom: 10%;
                    background-color: white;
                    transition-duration: 1s;
                    
                }
            }

            `}
        </style>

        {/* CSS for home portfolio page */}
        <style global style jsx>
            {`
            .project-container{
                text-decoration: none;
                flex-direction: column;
                display: block;
                height: 100%;
            }
            
            .items-container{
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                padding-top: 20px;
                -webkit-margin-before: 0;
                -webkit-margin-after: 0;
                padding: 0;
                list-style-type: none;
                height: 500px;
            }
            
            .bad{
                background-image: url(../static/BAD.png);
                background-size: cover;
                background-position: center;
            }
            
            .raspberrypi{
                background-image: url(../static/Raspberrypi%20Project.png);
                background-position: center;
                background-size: 100% 100%;
            }
            
            .ftfty{
                background-image: url(../static/FTFTY.png);
                background-position: center;
                background-size: 100% 100%;
            }
            


            @media only screen and (min-width: 600px) and (max-width: 2000px){
                .item-container{
                    position: relative;
                    overflow: hidden;
                    min-width: 50%;
                    max-width: 200%;
                    
                }
            }
            
            
            .item-container:hover::before{
                transform: translateY(0);
                opacity: 1;
            }
            
            
            
            .item-container::before {
                content: '';
                background: linear-gradient(to bottom, #fff 100%, #ed2124 100%);
                width: 100%;
                height: 100%;
                opacity: 1;
                position: absolute;
                top: 0;
                left: 0;
                z-index: 1;
                pointer-events: none;
                transform: translateY(100%);
                transition-property: transform, opacity;
                transition-duration: 0.3s;
            }
            
            
            .text-container{
                position: relative;
                bottom: 0;
                padding-bottom: 48px;
                padding-left: 48px;
                width: 100%;
                z-index: 2;
                margin: 0;
                flex-wrap: wrap;
            }
            
            .title-box{
                font-family: 'FFDINWebProMedium';
                text-transform: uppercase;
                font-size: 0.875rem;
                font-weight: 700;
                color:#900820;
                margin-bottom: 4px;
                margin-top: 0;
                padding-top: 65%;
                
                opacity: 1;
                transform: translateY(250px);
                transition-property: transform, opacity;
                transition-duration: 400ms;
                transition-delay: 0s;
            }
            
            .title-box:hover{
                transition-property: transform, opacity;
                transform: translateY(0);
            }
            
            .title-box,
            .description-box {
                opacity: 1;
                transform: translateY(300px);
                transition-property: transform, opacity;

            }
            
            .item-container:hover .title-box,
            .item-container:hover .description-box {
                transition-property: transform, opacity;
                transform: translateY(0);
                opacity: 1;
                -webkit-animation: text-animation 0.1s linear;
            }
            
            .item-container:hover .description-box{
                font-family: 'FFDINWebProMedium';
                transition-delay: 100ms;
                transition-duration: 400ms;
            }

            .item-container .description-box{
                font-family: 'FFDINWebProMedium';
                transition-delay: 0s;
                transition-duration: 200ms;
            }
            
            a{
                font-style: none !important;
                text-decoration: none !important;
                color: black !important;
            }

            .footer-space{
                height: 415px;
            }

            @media only screen and (max-width: 575px) {
                .footer-space{
                    height: 400px;
                }

                .bad{
                    background-image: url(../static/BAD.png);
                    background-position: center;
                    background-size: 100% 100%;
                }
                
                .raspberrypi{
                    background-image: url(../static/Raspberrypi%20Project.png);
                    background-position: center;
                    background-size: 100% 100%;
                }
                
                .ftfty{
                    background-image: url(../static/FTFTY.png);
                    background-position: center;
                    background-size: 100% 100%;
                }
                
                .item-container{
                    position: relative;
                    overflow: hidden;
                    min-width: 50%;
                    max-width: 200%;
                    height: 300px;
                }

                .title-box{
                    font-family: 'FFDINWebProMedium';
                    text-transform: uppercase;
                    font-size: 0.875rem;
                    font-weight: 700;
                    color:#900820;
                    margin-bottom: 4px;
                    margin-top: 0;
                    padding-top: 45%;
                    
                    opacity: 1;
                    transform: translateY(250px);
                    transition-property: transform, opacity;
                    transition-duration: 400ms;
                    transition-delay: 0s;
                }

                .item-container:active .title-box,
                .item-container:active .description-box {
                    transition-property: transform, opacity;
                    transform: translateY(0);
                    opacity: 1;
                    -webkit-animation: text-animation 0.1s linear;
                }
                
                .item-container:active .description-box{
                    font-family: 'FFDINWebProMedium';
                    transition-delay: 100ms;
                    transition-duration: 400ms;
                }

                .item-container:active::before{
                    transform: translateY(0);
                    opacity: 1;
                }

                .title-box:active{
                    transition-property: transform, opacity;
                    transform: translateY(0);
                }
            }
            
            `}


        </style>
            <style global style jsx>
                {`
                /* width */
                ::-webkit-scrollbar {
                  width: 7px;
                }
                
                /* Track */
                ::-webkit-scrollbar-track {
                  background: white; 
                }
                
                /* Handle */
                ::-webkit-scrollbar-thumb {
                  background: #800020; 
                }
                
                /* Handle on hover */
                ::-webkit-scrollbar-thumb:hover {
                  background: #555; 
                }
                `}
        </style>
        

        <style global style jsx>
            {`
                .icon-css:hover{
                    color: #800020 !important;
                    transition-duration: 0.3s;
                }

                .footer-container{
                    margin: 0;
                    padding: 0;
                }
                
                .footer{
                    height: 150px;
                    width: 100%;
                    background-color: white;
                    display: block;
                    padding-top: 40px;
                    margin: 0 auto;
                    padding: 0 auto;
                }
                
                .footer-social-item{
                    margin-left: 10px;
                    font-size:48px;
                }
                
                .footer-socials{
                    margin-top: 20px;
                }
                
                .footer-title{
                    text-align: center;
                    margin-top: 20px;
                    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                }
                
                    /* width */
                ::-webkit-scrollbar {
                width: 7px;
                }
                
                    /* Track */
                ::-webkit-scrollbar-track {
                background: white; 
                }
                
                    /* Handle */
                ::-webkit-scrollbar-thumb {
                background: #800020; 
                }
                
                    /* Handle on hover */
                ::-webkit-scrollbar-thumb:hover {
                background: #555; 
                }
                
                /* Remove uncesseary preseted css from bootstrap */
                .container-fluid{
                    padding: 0 !important;
                    margin: 0 !important;
                }
                .row{
                    margin: 0 !important;
                }
                .col, .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-auto, .col-lg, .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-auto, .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-auto, .col-sm, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-auto, .col-xl, .col-xl-1, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-auto{
                    padding-left: 0px;
                    padding-right: 0px;
                }

                @media only screen and (min-width: 600px) and (max-width: 2000px){
                    .footer{
                        position: fixed;
                        margin: 0;
                        padding: 0;
                        bottom: 0;
                    }
                }
                
                @media only screen and (max-width: 600px) {
                    .footer{
                        height: 150px;
                        background-color: white;
                        display: block;
                        padding-top: 30px;
                        margin: 0 auto;
                        padding-right: 0 auto; 
                    }
                
                    .footer-title{
                        text-align: center;
                        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                    }
                
                    .footer-social-item{
                        margin-left: 10px;
                        font-size: 48px;
                    }
                }

            `}
        </style>
    </div>
)

export default CSS