import React, { useContext } from 'react';
import Input from '../InputBar/Input';
import { UserContext } from '../../UserContex';

export default function LoginPage() {
    const { isFocusedlogreg, setIsFocusedlogreg } = useContext(UserContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted');
    };

    return (

        <>
            <div className='flex justify-center items-center'>
                <div className=' bg-slate-400 rounded-2xl w-auto h-auto m-8 p-4'>
                <div>
                    <h1 className='font-bold text-3xl text-center'>Login or Register</h1>
                    <div className='flex flex-wrap text-gray-500 text-center m-4 p-2'>
                        for Better Experience, Order tracking & Regular updates
                    </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='flex flex-wrap justify-center items-center m-8 p-4'>
                            <div className='text-gray-500 bg-white h-14 w-auto text-center flex items-center justify-center'>+91</div>
                            <Input intext="Enter your Phone number" statef={setIsFocusedlogreg} statev={isFocusedlogreg} />

                        </div>
                        {/* //Button to send otp */}
                       
                        <div className=' h-16 w-auto text-white rounded-sm p-4 mt-10 text-2xl bg-red-600 hover:bg-blue-400 transition text-center'>Send OTP</div>
                        
                    </form>
                   
                </div>
                
                
            </div>
        </>
    );
}
