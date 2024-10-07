import React, { useEffect, useState } from 'react';
import axiosApi from '../utility/axios';
import { get_user_details } from '../const/api';
import InputField from '../components/New/InputField';
import { FaUser } from 'react-icons/fa';

const Profile = () =>{
    const [name, setName] = useState("")
    const letterColors = {
        A: '#FF5733',  // Red-Orange
        B: '#33FF57',  // Green
        C: '#3357FF',  // Blue
        D: '#FF33A1',  // Pink
        E: '#FFD133',  // Yellow
        F: '#33FFF7',  // Aqua
        G: '#FF5733',  // Red-Orange
        H: '#33FF57',  // Green
        I: '#3357FF',  // Blue
        J: '#FF33A1',  // Pink
        K: '#FFD133',  // Yellow
        L: '#33FFF7',  // Aqua
        M: '#FF5733',  // Red-Orange
        N: '#33FF57',  // Green
        O: '#3357FF',  // Blue
        P: '#FF33A1',  // Pink
        Q: '#FFD133',  // Yellow
        R: '#33FFF7',  // Aqua
        S: '#FF5733',  // Red-Orange
        T: '#33FF57',  // Green
        U: '#3357FF',  // Blue
        V: '#FF33A1',  // Pink
        W: '#FFD133',  // Yellow
        X: '#33FFF7',  // Aqua
        Y: '#FF5733',  // Red-Orange
        Z: '#33FF57'   // Green
      };
    useEffect(()=>{
        axiosApi(get_user_details,"POST",null,(data)=>{ 
            setName(data.data.user[0] )
             console.log("------>",data.data.user[0])
         })
    },[])
    return (
        <div style={{display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'center', backgroundColor:'#F3F3F3'}}>
            {name?(
                <div style={{width:600, justifyContent:'center',display:'flex',flexDirection:'column',alignItems:'center'}}>
                <div style={{ fontWeight:"500",color:'white',width:120,height:120,display:'flex',borderRadius:120,backgroundColor:letterColors[(name.username.charAt(0)).toUpperCase()], justifyContent:'center',alignItems:'center',fontSize:60}}>{(name.username.charAt(0)).toUpperCase()}</div>
               
                <div style={{width:350, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', height:48, margin:20,padding:12}}>
                   {name.username}
                </div>
                <div style={{width:350, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', height:48, margin:20,padding:12}}>
                   {name.email}
                </div>
                <div style={{width:350, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', height:120, margin:20,padding:12}}>
                   {"Bio"}
                </div>
                </div>
            ):(
                <div>Loading...</div>
            )}
        </div>
    )
}

export default Profile;  
    
 