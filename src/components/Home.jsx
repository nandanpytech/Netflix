import React from 'react'
import  './assets/css/Home.css';
import { Header,HomeText,HomeEmail } from './export/export';
export default function Home() {
  return (
    <>
    <div className="banner border border-black">
        <div className="main">
            <Header></Header>
            <HomeText></HomeText>
            <HomeEmail></HomeEmail>
        </div>
    </div>
    </>
  )
}
