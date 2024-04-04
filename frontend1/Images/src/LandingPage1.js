
import React from 'react'
import Header from './Header'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Landingpage from './Landingpage'
const Header1 = () => {
  return (
	  <GoogleOAuthProvider clientId="823185166658-6v66lgg49in63v0q10rtl0rel6ap63l9.apps.googleusercontent.com" scope='profile email'>
		  <Header />
	  <Landingpage />
	  </GoogleOAuthProvider>
  )
}
export default Header1;
