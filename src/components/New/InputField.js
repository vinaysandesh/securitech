import React from 'react';
import './comp_styles.css';

const InputField = (props) =>{
    console.log("====",props)
    return(
      <div   className={`inputfield_container `}>
        <div class="icon_inputfield">
            {props.icon}
        </div>
          <input 
          
          disabled={props.disabled}
          value={props.value}
          onChange={props.onChange} 
          type={props.type || 'text'} 
          id={props.id || ''} 
          placeholder={props.placeholder || ''} 
          className={`input_field_style ${props.hig && 'input_field_style_high'}`} 
           
           />
      </div>
    )
}

export default InputField;