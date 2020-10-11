import React from 'react'
import Hoc from '../../hoc/hoc'
import './index.css'
import Toolbar from '../toolbar/toolbar'

const Index = (props) => {
    return(
        <Hoc>
            
            <Toolbar/>
            <main className='container'>
                {props.children}
            </main>
        </Hoc>
    )
}

export default Index;