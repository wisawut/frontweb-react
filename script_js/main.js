class Clock extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          date: new Date() ,
          user: props.profiles.profile,
          description : props.profiles.detail,
          feeddata:props.profiles.feed,
          news:null
      };    
  }
    
 componentDidMount(){
    this.timerId = setInterval(()=>this.tick(),1000);
     
     
     if(this.state.news == null){        
         let fact_data = {
         method :'GET',
         headers: new Headers()
        }
     
        fetch('https://api-member.mello.me/get_all_profile?from=0&size=10&email_verify=0',fact_data)
       // fetch('https://randomuser.me/api/?results=5',fact_data)
        .then((response) => response.json())
        .then((result)=>{  

            return  this.setState({news:result});

        })
      
  
     }
     
    

 }
    
 componentWillUnmount(){
     clearInterval(this.timerId);
 }

    
    
tick(){
     this.setState({date:new Date()});
} 
    
render() {
     
 //console.log(this.state.news);
    return (
      <div>
   
        <h1>Hello</h1><FormatDate date={this.state.date } />
        <Profile user={this.state.user} />        
        <Boxdetails text={this.state.description }  />        
        
      </div>
    );
  }
}





function Profile(props){
    const user =props.user;
    const userlist = user.map((user)=>                              
        <div className="col-md-6 col-lg-3 mb-5 mb-lg-0" key={user.id} >
            <div className="px-4">
              <img src={user.src}  className="rounded-circle img-center img-fluid shadow shadow-lg--hover"></img>
              <div claclassNamess="pt-4 text-center">
                <h5 className="title">
                  <span className="d-block mb-1">{user.name } </span>
                  <small className="h6 text-muted"> {user.lastname}</small>
                </h5>
                
              </div>
            </div> 
           </div>
         
    )
    
  
    
    return (
        <div className="row">
        {userlist}
        </div>
    );
}

function FormatDate(props){
    return (
        <h2>Time : { props.date.toLocaleTimeString() }</h2>
    );
}

function Boxdetails(props){
    return (
           <div className="card shadow">
                <div className="card-body "> 
                    <div className="tab-content fade show active" > 
        {props.text}
     
                    </div>
                   
                </div> 
        </div> 
        
    );
}


function Button_test(){
    function test(e){
        e.preventDefault();
        console.log('The link was test.');
    }
    
    return (       
        <a  href="#" onClick={test} >
        buttclickon
        </a>
      
    );
    
    
}

const users = { 
    profile:[    
        {id:1,name:"User Number1",lastname:" Men",src:"assets/img/theme/men.jpg" },   
        {id:2,name:"User Number2",lastname:" Women",src:"assets/img/theme/women.jpg"}
         ],
    detail:"Extracting components might seem like grunt work at first, but having a palette of reusable components pays off in larger apps. A good rule of thumb is that if a part of your UI is used several times (Button, Panel, Avatar), or is complex enough on its own (App, FeedStory",
    feed:'https://jsonfeed.org/feed.json'    
} 



function mainHTml() {
  ReactDOM.render(
    <Clock  profiles={users}  />,
    document.getElementById('app-test')
  );
}


setInterval(mainHTml, 1000);





