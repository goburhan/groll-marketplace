import React from 'react';
import Term from './Terms';

export default function TermsService({ selected }) {
    return (
        <>
            {selected === '' ? (
                <img src="/images/coinwallet.png" alt="connectwallet" />
            ) : (
                <Term />
            )}
        </>
    );
}
