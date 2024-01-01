import React, { useState } from 'react';
import "./AgeCalculator.css";

const AgeCalculator = () => {
    const [birthdate, setBirthdate] = useState('');
    const [age, setAge] = useState({ years: 0, months: 0, days: 0 });

    const calculateAge = () => {
        const today = new Date();
        const birthDate = new Date(birthdate);

        let years = today.getFullYear() - birthDate.getFullYear();
        let months = today.getMonth() - birthDate.getMonth();
        let days = today.getDate() - birthDate.getDate();

        if (days < 0) {
            const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, birthDate.getDate());
            const diff = new Date(today - lastMonth);
            months = diff.getMonth();
            days = diff.getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        setAge({ years, months, days });
    };

    return (

        <div className='container mt-5'>
            <div className='h1 text-center m-5 p-4 fw-bold bg-primary-subtle' style={{ color: "#714423" }}>AGE CALCULATOR</div>
            <div className='row justify-content-around'>
                <div className='col-sm-4 bg-warning p-0 main_div rounded-4'>
                    <div className='bg-black m-0 h-25 rounded-top-4'>
                        <h2 className='main_heading text-center'>Enter Your Age Details</h2>
                    </div>

                    <div className='m-4'>
                        <input
                            className='input border border-2 border-dark w-50 bg-primary-subtle rounded-3 m-auto'
                            type="date"
                            // placeholder='Enter Birth Date'
                            value={birthdate}
                            onChange={(e) => setBirthdate(e.target.value)}
                        />
                    </div>
                    <div className='text-center'>
                        <button type="button"
                            onClick={calculateAge}
                            className="bttn btn btn-primary m-auto p-2 mb-3">Calculate Age {'-->'} </button>
                    </div>
                </div>

                {age.years > 0 && (
                    <div className='col-sm-4 bg-primary p-0 sec_div rounded-4'>
                        <div className='bg-black m-0 h-25 rounded-top-4'>
                            <h2 className='sec_heading text-center p-2 pb-2'>Your Age is:</h2>
                        </div>
                        <div className='d-flex align-item-center justify-content-center'>
                            <div className='w-25 m-2 h-25'>
                                <div className='year bg-danger-subtle border border-4 border-black rounded-3 fw-bold fs-1 text-center'>{age.years}
                                    <div className='ys fw-normal text-black mt-3 fs-4'>years</div>
                                </div>
                            </div>

                            <div className='w-25 m-2 h-25'>
                                <div className='month bg-danger-subtle border border-4 border-black rounded-3 fw-bold fs-1 text-center'>{age.months}
                                    <div className='mo fw-normal text-black mt-3 fs-4'>months</div>
                                </div>
                            </div>

                            <div className='w-25 m-2 h-25'>
                                <div className='days bg-danger-subtle border border-4 border-black rounded-3 fw-bold fs-1 text-center'>{age.days}
                                    <div className='da fw-normal text-black mt-3 fs-4'>days</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className='h1 text-center m-5 p-4 fw-bold bg-primary-subtle' style={{ color: "#714423" }}>Thank's and Reagards<span className='fw-light fs-6 text-body'>{"("}made by muhammad masi{")"}</span></div>
        </div>
    );
};

export default AgeCalculator;
