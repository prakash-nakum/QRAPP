


import QRCode from 'qrcode.react';

import React from 'react'

const ComponentA = ({ data }) => {
    return (
        <div>ComponentA


            {
                data
            }
            <QRCode value={data && <>Hello </>} />

        </div>
    )
}

export default ComponentA