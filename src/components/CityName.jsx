// CityNameComponent.jsx
import React from 'react';

export default function CityNameComponent({ data }) {
    const today = new Date()
    
    const buildDate = (date) => {
        const monthList = [
            ['Jan', 1],
            ['Feb', 2],
            ['Mar', 3],
            ['Apr', 4],
            ['May', 5],
            ['Jun', 6],
            ['Jul', 7],
            ['Aug', 8],
            ['Sep', 9],
            ['Oct', 10],
            ['Nov', 11],
            ['Dec', 12],
          ];
        
        const day = date.getDate();
        let month = date.getMonth() + 1;
        
        monthList.forEach((obj) => {
            obj[1] == month ? month = obj[0] : ''
        })

        const year = date.getFullYear();
        const dayFormatted = day < 10 ? '0' + day : day
        const fullDate = `${month.toString()} ${dayFormatted}, ${year}`;
    
        return fullDate;
    };
    

    return (
        <div className='px-5'>
            {data && data.list && data.list.length > 0 && (
                <>
                    <h2 className="text-[3.875rem] text-primary-text font-semibold">
                        {data.list[0].name}
                    </h2>
                    <p className='leading-3 px-2 text-primary-text'>{buildDate(today)}</p>
                </>
            )}
        </div> 
    );
}
