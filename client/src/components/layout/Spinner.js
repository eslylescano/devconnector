import React, { Fragment } from 'react'
import spinner from './spinner.gif'

const Spinner = () => {
    return (
        <Fragment>
            <img
                src={spinner}
                style={{ width: '200px', argin: 'auto', display: 'block' }}
                alt='Loading...'
            />
        </Fragment>
    )
}

export default Spinner
