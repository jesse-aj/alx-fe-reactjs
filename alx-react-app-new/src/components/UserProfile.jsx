function UserProfile  (props)
{
    return (
         <div className="user-profile" style= {{
           backgroundColor: "white",
           padding: "10px",
           border: "3px solid aqua",
           margin: "10px"
         }}>
            <h2 style = {{color:"blue"}}>{props.name}</h2>
            <p> <span style={{fontWeight: "bold", color:"blue" , fontSize:"20px"}}>Age : {props.age}</span></p>
            <p> <span style={{fontSize: "19px", fontWeight: "bold", color:"blue"}}>Bio :{props.bio}</span></p>
         </div>
    );
} 


export default UserProfile;