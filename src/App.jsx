import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Dreambanner from './components/Dreambanner'
import LoanHighlights from './components/LoanHighlights'
import Partners from './components/Partners'
import FastProcess from './components/FastProcess'
import FAQ from './components/FAQ/FAQ'
import { AccordionItemCard } from './components/FAQ/AccordionItemCard'
import Footer from './components/Footer'
import Refer from './components/Refer'

import TabsDisplay from './components/Tabs'
import CustomerSay from './components/CustomerSay'
import Emi from './components/Emi'

import SmallScreenNavbar from './components/SmallScreenNavbar'

function App() {
 

  return (
    <>
   <Navbar />
 
 <SmallScreenNavbar />
   <Dreambanner />
   <LoanHighlights />
   <Partners />
   <FastProcess/>
   <CustomerSay />
   <TabsDisplay />
   <Emi/>
   <Refer />
   <FAQ />
   <Footer />
    </>
  )
}

export default App
