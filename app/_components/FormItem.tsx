import { useState, useEffect } from 'react';

export default function FormItem({data, schema, form}) {
    // const [data, setData] = useState(data)

    return(
    <div className='flex flex-row border-2 rounded-xl p-1 pl-3 text'>
        <span className='text-xs'>{data.label} ({form})</span>

    </div>)
}