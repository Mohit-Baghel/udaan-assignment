import React from 'react'
import { useEffect,useState } from 'react';
import {Row} from './Row';

export const Grid = (props) => {


 
    const [row, setrow] = useState(0);
    const [col, setcol] = useState(0);

    
    
    useEffect(()=>{
        let search=props.location.search;
        let query=new URLSearchParams(search);
        let row=query.get('row');
        let col=query.get('col');
        if(col>=26){
            setcol(26);
        }else{
            setcol(col);
        }
        setrow(row);

    },[row]);
    
    
    
        
        let arr_row=[];
    
        for(var i=0;i<row;i++){
        let row_id=i+1;
        let col_arr=[];
        let col_ids=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
        for(var j=0;j<col;j++){
            col_arr.push(<td className={"col"} id={col_ids[j]}><input id={col_ids[j]+row_id} type="text" onMouseOut={(e)=>enter(e,(col_ids[j]+row_id))}/></td>)
        }
        arr_row.push(<tr id={row_id}>{col_arr}</tr>)
        


    }




    

    function enter(e,id){
        console.log(e);
        if(!isNaN(e.target.value)){
            return;
        }
        // console.log(typeof e.target.value)
       
        let sum=0;
        let value=e.target.value;
        let targetids=value.split(":")[1].split(",");
        for(var i=0;i<targetids.length;i++){
            sum+=Number(document.getElementById(targetids[i]).value);
        }
        e.target.value=sum;


    }
    




    return (
        <div className="main-container">
            <table className="table">
                <tbody>

                {arr_row}
                </tbody>
            </table>
           
        </div>
    )
}
