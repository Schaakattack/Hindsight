import React, { useState, useEffect } from 'react';

const ExplorerNetworkItem = (network)=> {
    return (
        <>
            <div className='bg-dark-grey-4 p-6 flex flex-col rounded-outline text-center h-72 gap-6'>
                <img src={network.icon} className={`${network.enabled? 'border-yellow-2 border-[4px]':''} rounded-full mx-auto `}></img>
                {network.enabled && (
                    <span className='text-xs-large font-brand-regular text-light-grey-1'>{network.title}</span>
                )}
                {!network.enabled && (
                    <span className={`text-xx-medium font-brand-regular text-dark-grey-2`}>Coming Soon!!!</span>
                )}
            </div>
        </>
    )
}

export default ExplorerNetworkItem;