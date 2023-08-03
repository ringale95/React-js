import React from 'react'

export default function Alert(props) {
    //strong will help to make things thicker
    //props.alert = null further line is not evaluated if
    //props.alert !=null then we get evaluated other
    //{`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert"> -> this will be shown in greenline
    //capitalize function will make success 'S' as capital and rest small
    //now there can be a bug wherein once the alert is dismissed it is never loaded on click of any button but it shouldnt
    //so we want the alert to be back and once action is done goe away and dont need dismiss cross button
    const capitalize = (word) =>{

        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1); // except the first letter it will make rest as sall
    }
    return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{capitalize(props.alert.type)}</strong> :{props.alert.msg}
{/*removed closed button */}
  </div>
  )
}
