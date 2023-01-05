import React from "react";
import dynamic from "next/dynamic";
import Head from 'next/head';


import ExchangeTokens from "../components/exchangetokens";

export default function test(){
    return(
        <div>
        <Head>
        <title>DexBattle-Exchange</title>
        <meta name="Description" content="Dex Battle Game!" />
        <link rel="icon" href="/Dex.png" />
      </Head>
     <ExchangeTokens/> 
    </div>
    )
}