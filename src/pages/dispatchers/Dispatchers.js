import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { getDispatchers } from '../../reducers/dispatchers'

import SkeletonPulse from '../../components/skeletonLoader/SkeletonPulse'

const DispatchersStyled = styled.div`

`

const SkeletonLine = styled(SkeletonPulse)`
  width: 5.5em;
  height: 20px !important;
  border-radius: 5px;

  &::before {
    content: "\00a0";
  }
`;

const Dispatchers = (props) => {

    useEffect(() => {
        props.getDispatchers()

    }, [])

    return (
        <DispatchersStyled>
            <h1>Диспетчеры</h1>
            <SkeletonLine transcluent={true}/>
            <ul>
                {props.dispatchers ? props.dispatchers.map(dispatcher => (
                    <li key={dispatcher.id}>{dispatcher.surname} {dispatcher.name}</li>
                )) :  <SkeletonLine/>}
            </ul>
        </DispatchersStyled>
    )
}

const mapStateToProps = (state) => {
    return {
        dispatchers: state.dispatchers
    }
}

export default connect(mapStateToProps, {getDispatchers})(Dispatchers)