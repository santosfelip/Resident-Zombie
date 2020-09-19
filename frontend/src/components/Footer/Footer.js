import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
    footer: {
        position: 'fixed',
        color: '#18191A',
        width: '100%',
        textAlign: 'center',
        bottom: '0',
        marginBottom: theme.spacing(2),

    }
}))

const Footer = () => {
    const classses = useStyle();
    return (
        <div className={classses.footer}>
            <p>&copy; Copyright 2020 Felipe Nascimento</p>
        </div>
    )
}

export default Footer;
