import { useState, useEffect } from 'react';

export default function FormItem({data, schema}) {
    // const [data, setData] = useState(data)

    return(
    <div className='flex flex-row border-2 rounded-xl p-1 pl-3'>
        {data.label}
    </div>)
}