import React,{useState,useEffect} from "react";
import { ReactDOM } from "react-dom";

function Post(){
    const [error,setError]=useState(null);
    const [isLoaded,SetIsLoaded]=useState(false);
    const [postlist,SetPostList]=useState([]);

    useEffect(()=>{
        fetch("/users")
        .then(res=>res.json())
        .then(
            (result)=>{
                SetIsLoaded(true);
                SetPostList(result)
            }
        ,
        (error)=>{
            SetIsLoaded(true);
            setError(error);
        }
        )
    },[])

    if(error){
        return <div>   Error!   </div>;
    }
    else if(!isLoaded){
        return<div>  Loading... </div>;
    }
    else{
        return(
            <ul>
                {postlist.map(post=>(
                    <li> 
                        {post.title} {post.text}
                    </li>
                ))}
            </ul>
        );
    }
}
export default Post;