class Form extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value: null
        }
        this.handleChange = this.handelChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
   handelChange(event){
      // console.log(event.target.value);
        this.state({value:event.target.value} );
        
    }
   handleSubmit(event){
       console.log(event);
   }
   
    render(){
        return (
            <div>
            <h4>Input Form</h4>
           <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
            </div>
        )
    }
}


function Rowfrm(props){
    return (
        <div className="form-group">
                    <div className="input-group input-group-alternative mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><i className="ni ni-hat-3"></i></span>
                      </div>
               
                    </div>
        </div>
    )
}

ReactDOM.render(
<Form /> , document.getElementById("app-form")
);