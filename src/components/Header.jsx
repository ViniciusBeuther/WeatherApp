import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoCloudSharp } from 'react-icons/io5';

export default function HeaderComponent({ apiMethod }) {
    const [searchTerm, setSearchTerm] = useState('');
    
    const clearInput = () => {
        return (
            setSearchTerm('')
        )
    }

    return (
        <>
            <header className="px-3 py-3 flex items-center justify-between text-primary-text">
                <span className="flex align-center justify-start">
                    <a href="#">
                        <IoCloudSharp
                            className="text-primary-text"
                            style={{
                                width: '32px',
                                height: '32px',
                            }}
                        />
                    </a>
                    <p
                        className="text-[24px] ml-2 font-semibold"
                        style={{
                            background:
                                'linear-gradient(to right, #303345, #59386c, #9e2474, #de0054, #ff0000)',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent', // Oculta o texto original
                        }}
                    >
                        BWeather
                    </p>
                </span>

                <span className='flex items-center'>
                    <input
                        type="text"
                        placeholder="City name"
                        className="px-6 py-2 rounded-full outline-none w-[100%] ml-5"
                        onChange={(ev) => setSearchTerm(ev.target.value)}
                        value={searchTerm}
                    />
                    
                    <a href="#">
                    <CiSearch onClick={() => apiMethod(searchTerm, clearInput())}
                            style={{
                                width: '24px',
                                height: '24px',
                                position: 'relative',
                                right: '2.5rem',
                                cursor: 'pointer'
                            }}
                        />
                    </a>
                    
                </span>

                <span className="flex items-center justify-center">
                    <a href="#">
                        <CiSearch
                            style={{
                                width: '32px',
                                height: '32px',
                                display: 'none  '
                            }}
                        />
                    </a>
                </span>
            </header>
        </>
    );
}
