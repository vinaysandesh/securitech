import React, { useEffect, useState } from 'react';
import axiosApi from '../../utility/axios';
import { get_user_details } from '../../const/api';

const HeaderBar = (props)=>{
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
            console.log(data.data.user[0].username  ) 
            setName(data.data.user[0].username)
             
         })
    },[])
    return(
        <div style={{display:"flex",justifyContent:'space-between',alignItems:"space-between",padding:20, backgroundColor:'#F3F3F3'}}>
        <span style={{fontWeight:"bold", fontSize:28}}>{props.title}</span>
        {props.title!="Profile"&&(
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
                    <div style={{fontWeight:"bold",color:'white',width:48,height:48,display:'flex',borderRadius:48,backgroundColor:letterColors[(name.charAt(0)).toUpperCase()], justifyContent:'center',alignItems:'center'}}>{(name.charAt(0)).toUpperCase()}</div>
                    <span style={{fontWeight:"600", fontSize:24,marginLeft:12}}>{name}</span>
                    </div>
        )}
        </div>
    )
}

export default HeaderBar;