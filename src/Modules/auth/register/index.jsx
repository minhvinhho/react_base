import React from 'react'
import styled from 'styled-components'

import LOGO_ELEARNING from 'Assets/images/logo-e-learning.png'

const Div = styled.div`
  padding: 20px 0;
`
const RegisterScreen = () => (
  <div>
    <Div className="content">
      <div>
        <img src={LOGO_ELEARNING} alt="" />
      </div>
    </Div>
  </div>
)

export default RegisterScreen
