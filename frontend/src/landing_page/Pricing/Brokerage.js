import React from 'react';

function Brokerage() {
    return ( 
        <>
            <div className='container mt-5'>
                <div className='row p-5 mt-5  border-top'>
                    <div className='col-8'>
                        <a href = "" style={{textDecoration:"none"}} ><h3 className='fs-5 text-center mb-4'>Brokerage calculator</h3></a>
                        <ul>
                            <li>
                                <p className='text-muted'>Call & Trade and RMS auto-squareoff. Additional charges of $2 + Tax per order</p>
                            </li>
                            <li>
                                <p className='text-muted'>Digital contract notes will be sent via e-mail</p>
                            </li>
                            <li>
                                <p className='text-muted'>Physical copies of contract notes,charges $1 per contract note.Courier charges apply</p>
                            </li>
                            <li>
                                <p className='text-muted'>For NRI account, $5 per executed order of equity</p>
                            </li>
                            <li>
                                <p className='text-muted'>If the account is in debit balance,any order placed willl be charged $1 per executed order instead of $2 per executed order.</p>
                            </li>
                        </ul>
                    </div>
                    <div className='col-4'>
                        <a href = "" style={{textDecoration:"none"}}><h3 className='fs-5'>List of charges</h3></a>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Brokerage;