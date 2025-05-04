import { useState, useEffect } from 'react';

export default function FormItem({data, schema}) {
    // const [data, setData] = useState(data)
    
    useEffect(()=>{
        console.log(schema)
    })

    return(
    <div className='border-2 rounded-xl p-1 pl-3'>
        {data.label}    
    </div>)
}