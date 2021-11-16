import React, { useState } from 'react';
import { AiOutlineTransaction } from "react-icons/ai";
import { Modal, ModalHeader, ModalBody, Input, Spinner } from 'reactstrap';
import Select from 'react-select'


const FundTransfer = () => {
    const [toggel, setToggel] = useState(false);

    const toggelHandler = () => {
        setToggel(!toggel);
        setOTP(false);
        setLoader(false)
    }

    const [isOTP, setOTP] = useState(false);
    const [loader, setLoader] = useState(false);
    const transferHandler = () => {
        setLoader(true)
        setTimeout(() => {
            setOTP(true);
            setLoader(false)
        }, 5000)
    }
    const [select, setSelect] = useState('');
    const [amt, setAmt] = useState('');
    const [otp, setOtp] = useState('');
    const [to, setTo] = useState('Y');
    const [from, setFrom] = useState('X');

    const submitHandler = () => {
        console.log(select, amt, otp, to, from);
        toggelHandler();
    }
    return <>
        <div className='fund-transfer-container' onClick={toggelHandler}>
            <div className='fund-transfer-icon-container'>
                <AiOutlineTransaction />
            </div>
            <div className='fund-transfer-query-container'>
                <div className='f-t-heading'>Transfer funds to Y at zero fee</div>
                <div className='f-t-subheading'>By selecting this option, you can instantly move your funds from your X wallet to your Y wallet. Zero fees(Limited period offer). Please ensure you've complete KYC both X and Y to use this feature.</div>
            </div>
        </div>
        <Modal isOpen={toggel} toggle={toggelHandler}>
            <ModalHeader toggle={toggelHandler}>Transfer to </ModalHeader>
            <ModalBody>
                {
                    isOTP
                        ? <div>
                            <div className='msg-otp'>
                                Enter the code generated in your Authentication App
                            </div>
                            <div className='w-45 center'>
                                <Input type='number' onChange={e => setOtp(e.target.value)} />
                            </div>
                            <div className='transfer-button' onClick={() => submitHandler()}>Submit</div>
                        </div>
                        : <>
                            <div className='d-flex from-to-container'>
                                <div className='w-45'>
                                    <div className='label-f'>FROM</div>
                                    <div className='highliter'>X</div>
                                </div>
                                <div className='w-45'>
                                    <div className='label-f'>TO</div>
                                    <div className='highliter'>Y</div>
                                </div>
                            </div>
                            <Select
                                className='mt-3'
                                options={options}
                                onChange={e => setSelect(e.value)} />
                            <div className='mt-3 label-f'>Amount</div>
                            <Input type='number' onChange={e => setAmt(e.target.value)} />
                            <div className='transfer-button' onClick={() => transferHandler()}>
                                {loader
                                    ? <Spinner style={{ width: '1rem', height: '1rem' }}
                                        children={false} />
                                    : ''}&nbsp;Transfer to Y</div>
                        </>
                }
            </ModalBody>
        </Modal>
    </>
}

const options = [
    { value: 'USDT', label: 'USDT' },
    { value: 'ETH', label: 'ETH' },
    { value: 'BTC', label: 'BTC' },
    { value: 'XLM', label: 'XLM' },
    { value: 'XRP', label: 'XRP' },
    { value: 'BNB', label: 'BNB' },
]


export default FundTransfer