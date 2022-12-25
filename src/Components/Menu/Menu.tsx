import React from "react";
import c from './Menu.module.css'
import {Link} from "react-router-dom";
type Props={
    header:string,
    items:{
        value:string,
        href:string,
        icon:string | null
    }[],
    active:boolean,
    setActive:(a:boolean)=>void
}

const Menu = ({header,items,active,setActive}:Props) => {
    return <div className={`${c.menu} ${active ? c.active : ''}`} onClick={()=>setActive(false)}>
        <div className={c.blur}/>
            <div className={c.menu__content} onClick={(e)=>{e.stopPropagation()}}>
                <div className={c.menu__header}>{header}</div>
                <ul>
                    {items.map(item=>
                        <Link to={item.href} onClick={()=>{setActive(false)}} >
                        <li>
                            <span>{item.value}</span>
                            <span>{item.icon}</span>
                        </li>
                        </Link>
                    )}
                </ul>
            </div>

    </div>
}
export default React.memo(Menu)