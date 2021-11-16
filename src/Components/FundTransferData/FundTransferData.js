import React from 'react';
import './FundTransferData.css'

const FundTransferData = () => {
    return <>
        <div className='fund-data-container'>
            <div className='f-d-heading'> FUNDS AND TRANSFERS</div>
            <div className='d-flex history-navigator'>
                <div className='f-d-subheading d-flex pt-2'>
                    <div className='active-text'>
                        FUNDS
                    </div>
                    <div className='trans-history'>
                        TRANSFER HISTORY
                    </div>
                </div>
                <div>
                    <div>
                        Estimated Portfolio ~ $34,89,000
                    </div>
                </div>
            </div>
            <div className='table-heading'>
                <TableHeader />
                {
                    data.map(item => {
                        return <TableData item={item} />
                    })
                }
            </div>
        </div>
    </>
}

const TableHeader = () => {
    return <div className='table-row mt-3 bottom-border'>
        <div className='w-17'>ASSETS</div>
        <div className='w-17'>AVAILABLE BALANCE</div>
        <div className='w-16'>LOCKED</div>
        <div className='w-16'>TOTAL</div>
        <div className='w-17'>INR VALUE</div>
        <div className='w-17'>ACTION</div>
    </div>
}

const TableData = (props) => {
    const { item } = props
    return <div className='table-row mt-3 bottom-border'>
        <div className='w-17'>{item.assets}</div>
        <div className='w-17'>{item.a_bal}</div>
        <div className='w-16'>{item.locked}</div>
        <div className='w-16'>{item.total}</div>
        <div className='w-17'>{item.inr_value}</div>
        <div className='w-17'>ACTION</div>
    </div>
}

const data = [
    {
        assets: 'Rupee(INR)',
        a_bal: '7,87,80,878',
        locked: '0',
        total: '0',
        inr_value: '0',
    },
    {
        assets: 'ETHEREUM(ETH)',
        a_bal: '7,87,80,878',
        locked: '0',
        total: '0',
        inr_value: '0',
    },
    {
        assets: 'Y Coin(BNB)',
        a_bal: '7,87,80,878',
        locked: '0',
        total: '0',
        inr_value: '0',
    }
]

export default FundTransferData;
