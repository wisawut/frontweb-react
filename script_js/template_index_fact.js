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
     
        fetch('https://newsapi.org/v2/top-headlines?country=th&apiKey=21899f4621bd4e2ba9ebb83cde890b2a',fact_data)
       // fetch('https://randomuser.me/api/?results=5',fact_data)
        .then((response) => response.json())
        .then((result)=>{  
           console.log(result);
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
          
        let  list =  data.articles.map((news) =>    
                              
                        <div className="col-md-6 col-lg-3 mb-5 mb-lg-0" key={news.url} >
                        <div className="px-4">
                        <img src={news.urlToImage } className=" img-center img-fluid shadow shadow-lg--hover"  />
                        <div className="pt-4 text-center">
                        <h5 className="title">
                        <span className="d-block mb-1">{news.title}</span>
                        <small className="h6 text-muted">{ news.publishedAt}</small>
                        </h5>
                  
                        </div>
                        </div>
                        </div>
                                   
                                     
                    )   
      
            
        return (           
            <div className="row justify-content-center text-center mb-lg " >
            {list}
            </div>           
        )


        }

}
function Userprolist(props){
    console.log(props.data);
  
}



ReactDOM.render(
    <Index /> ,   document.getElementById('app')
    
);


    