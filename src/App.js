import React from 'react'
import "./app.scss"
import Introduction from "./components/introduction/Introduction";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
function App()  {
  return (
    <>	
		<Header/>
       	<Banner/>
       	<Introduction/>
       	<Skills/>
      	<Projects/>
       	<Contact/>
		<Footer/>
    </>
  )
}

export default App
