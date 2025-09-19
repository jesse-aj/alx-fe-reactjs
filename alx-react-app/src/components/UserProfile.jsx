function UserProfile  (props)
{
    return (
         <div className="user-profile">
            <h1>{props.name}</h1>
            <p>Age :{props.age}</p>
            <p>{props.bio}</p>
         </div>
    );
} 


export default UserProfile;