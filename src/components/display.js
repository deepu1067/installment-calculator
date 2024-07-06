import { faMoneyBill1 } from '@fortawesome/free-regular-svg-icons';
import { faBangladeshiTakaSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import '../App.css';

function Display({ formdata, isSubmitted }) {
    console.log(formdata)
    const [total, setTotal] = useState(0);
    const [installments, setInstallments] = useState({});

    useEffect(() => {
        calculate();
    }, [formdata])


    const calculate = () => {
        const newCredit = formdata.freshCredit;
        const retakeCredit = formdata.retake;
        const waiver = formdata.waiver;
        const scholarship = formdata.scholarship;
        const fee = formdata.lateFine;

        const discountCredit = (newCredit > 13) ? 13 : newCredit;

        const discount = (discountCredit * 5000) * (Math.max(waiver, scholarship));
        var totalAmount = (newCredit * 5000) - discount + (retakeCredit * 5000) + 5000 + fee;
        setTotal(totalAmount);
        totalAmount = totalAmount - 15000;

        const first = totalAmount * 0.4;
        const second = totalAmount * 0.3;
        const third = totalAmount * 0.3;

        setInstallments({ first, second, third, discount })
    }

    return (
        <div className='view-card my-3 pt-2'>
            <h4 className='d-flex justify-content-center align-items-center gap-sm'><FontAwesomeIcon icon={faBangladeshiTakaSign} /> {total} <span className='gray'>(Discount: {installments.discount})</span></h4>
            <div className='mt-3 p-2 install-card'>
                <h4 className='text-center mb-1'><FontAwesomeIcon icon={faMoneyBill1} /> Installments</h4>
                <p className='text-center mb-3 gray'>After deducting pre-registration fee (150000)</p>

                <div className='row gx-1 p-2'>
                    <h6 className='col-2 text-center fw-bold'>SL</h6>
                    <h6 className='col-4 text-center fw-bold'>Amount</h6>
                    <h6 className='col-6 text-center fw-bold'>Last Date</h6>
                </div>
                <div className='row gx-1 p-2'>
                    <h6 className='col-2 text-center'>1st</h6>
                    <h6 className='col-4 text-center'>{installments.first}</h6>
                    <h6 className='col-6 text-center'>25-06-2024</h6>
                </div>
                <div className='row gx-1 p-2'>
                    <h6 className='col-2 text-center'>2nd</h6>
                    <h6 className='col-4 text-center'>{installments.second}</h6>
                    <h6 className='col-6 text-center'>16-07-2024</h6>
                </div>
                <div className='row gx-1 p-2'>
                    <h6 className='col-2 text-center'>3rd</h6>
                    <h6 className='col-4 text-center'>{installments.third}</h6>
                    <h6 className='col-6 text-center'>14-08-2024</h6>
                </div>
            </div>
        </div>
    )
}

export default Display