class Footer extends React.Component {
    
    render(){
        return (      
        <div className="container">
                  <div className="row row-grid align-items-center mb-5">
        <div className="col-lg-6">
          <h3 className="text-primary font-weight-light mb-2">Thank you for supporting us!</h3>
          <h4 className="mb-0 font-weight-light">Let's get in touch on any of these platforms.</h4>
        </div>
        <div className="col-lg-6 text-lg-center btn-wrapper">
          <a target="_blank" href="https://twitter.com/creativetim" className="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg" data-toggle="tooltip" data-original-title="Follow us">
            <i className="fa fa-twitter"></i>
          </a>
          <a target="_blank" href="https://www.facebook.com/creativetim" className="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg" data-toggle="tooltip" data-original-title="Like us">
            <i className="fa fa-facebook-square"></i>
          </a>
          <a target="_blank" href="https://dribbble.com/creativetim" className="btn btn-neutral btn-icon-only btn-dribbble btn-lg btn-round" data-toggle="tooltip" data-original-title="Follow us">
            <i className="fa fa-dribbble"></i>
          </a>
          <a target="_blank" href="https://github.com/creativetimofficial" className="btn btn-neutral btn-icon-only btn-github btn-round btn-lg" data-toggle="tooltip" data-original-title="Star on Github">
            <i className="fa fa-github"></i>
          </a>
        </div>
      </div>
              <hr/>
            
            
                  <div className="row align-items-center justify-content-md-between">
        <div className="col-md-6">
          <div className="copyright">
            &copy; 2018
            <a href="https://www.creative-tim.com" target="_blank">Creative Tim</a>.
          </div>
        </div>
        <div className="col-md-6">
          <ul className="nav nav-footer justify-content-end">
            <li className="nav-item">
              <a href="https://www.creative-tim.com" className="nav-link" target="_blank">Creative Tim</a>
            </li>
            <li className="nav-item">
              <a href="https://www.creative-tim.com/presentation" className="nav-link" target="_blank">About Us</a>
            </li>
            <li className="nav-item">
              <a href="http://blog.creative-tim.com" className="nav-link" target="_blank">Blog</a>
            </li>
            <li className="nav-item">
              <a href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md" className="nav-link" target="_blank">MIT License</a>
            </li>
          </ul>
        </div>
      </div>
            
            
            
            
        </div>
            
     
   
   
          

        )
    }
    
    
}

ReactDOM.render(
    <Footer /> , document.getElementById("app-footer")
);

