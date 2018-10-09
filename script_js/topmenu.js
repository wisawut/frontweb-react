class Menu extends React.Component {
    render() {
        return (
            <div>
                <a href="home.html" className="dropdown-item">HOME</a>
                <a href="index.html" className="dropdown-item">INDEX</a>
                <a href="input.html" className="dropdown-item">FORM</a>
               
            </div>
    )
        
    }
    
}

ReactDOM.render(
    <Menu /> ,   document.getElementById('top-menu')
    
);
