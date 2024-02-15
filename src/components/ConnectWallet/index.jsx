import React, { Fragment, useState, useEffect } from 'react';
import styled from "styled-components"
import { Row, ImgBase } from '../../theme/base';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';  
import UNISAT_LOGO from '../../assets/unisat.svg' 

export default function ConnectWallet() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        console.log(':::::window.unisat', window.unisat)
    }, [])

    return (
        <Fragment>
            <Button onClick={() => setOpen(true)} label="Connect" />
            <Dialog header="Choose Wallet" draggable={false} visible={open} style={{ width: '300px'}} onHide={() => setOpen(false)}>
                <ChooseList>
                    <Row className='row'>
                        <ImgBase width="2.5rem" src={UNISAT_LOGO} alt="unisat" />
                        <p className='name'>Unisat Wallet</p>
                    </Row>
                </ChooseList>
            </Dialog>
        </Fragment>
    )
}

const ChooseList = styled.div`
    .row {
        padding: 0.6rem 0.6rem 0.6rem 2rem;
        cursor: pointer;
        border: 1px solid transparent;
        border-radius: 1rem;
        &:hover {
            border: 1px solid var(--gray-700);
        }
    }
    .name {
        font-size: 1.2rem;
        flex: 1;
        text-align: center;
    }
`