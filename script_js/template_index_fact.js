class Index extends React.Component {
      constructor(props){
      super(props);
      this.state = {
          news : null,
      };
}
    
 componentDidMount(){
      if(this.state.news == null){        
         let fact_data = {
         method :'GET',
         headers: new Headers()
        }
     
        fetch('',fact_data)
       // fetch('https://randomuser.me/api/?results=5',fact_data)
        .then((response) => response.json())
        .then((result)=>{  
            return  this.setState({news:result});
        })     
  
     }
 }
    
 componentWillUnmount(){
    
 }
    
render() {
    return (
       <Content  news={this.state.news} />
    )
        
    
    
}
    
    
    
}


function Content(props){
    let data = props.news;  
        if(data == null){                
            return (    
                <li> no data </li> 
                )
        }else{
        const  list =  data.result.profiles.map((number) =>
        <li key={number.id}> {number.email}</li> 
        )                    

        return (
           
            <ul>
            {list}
            </ul>
           
        )


        }

}



ReactDOM.render(
    <Index /> ,   document.getElementById('app')
    
);


    