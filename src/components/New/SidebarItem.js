import React from 'react';
import './comp_styles.css';

const SidebarItem = (props) =>{
    
    return(
      <div onClick={props.onClick} className={`side_bar_container ${props.active&&"side_bar_container_active"}`}>
        <div className='sidebaricon'>
            {/* Icon goes here */}
            {props.icon}
        </div>
        {!props.collapsed&&(
          <div className='sidebartitle'>
          {/* Title goes here */}
          {props.title}
      </div>
        )}
      </div>
    )
}

export default SidebarItem;