import './villa.css'
import villaBannerImg from '../../../assets/villa.jpg'
import VillaContainer from './villa-container'
import { useEffect } from 'react'

const VillaPage = () => {
    const villas = [
        {
            name: 'American Mnc Opportunity',
            address: 'Powai, Mumbai',
            tenant: 'Sitel group',
            resaleAvailable: 0,
            completelyFunded: 100,
            assetValue: 42.61,
            EntryRentalYield: 10,
            ExpectedIRR: '16.4'
        },
        {
            name: 'American Mnc Opportunity',
            address: 'Powai, Mumbai',
            tenant: 'Sitel group',
            resaleAvailable: 0,
            completelyFunded: 100,
            assetValue: 42.61,
            EntryRentalYield: 10,
            ExpectedIRR: '16.4'
        },
        {
            name: 'American Mnc Opportunity',
            address: 'Powai, Mumbai',
            tenant: 'Sitel group',
            resaleAvailable: 0,
            completelyFunded: 100,
            assetValue: 42.61,
            EntryRentalYield: 10,
            ExpectedIRR: '16.4'
        },
        {
            name: 'American Mnc Opportunity',
            address: 'Powai, Mumbai',
            tenant: 'Sitel group',
            resaleAvailable: 0,
            completelyFunded: 100,
            assetValue: 42.61,
            EntryRentalYield: 10,
            ExpectedIRR: '16.4'
        },
        {
            name: 'American Mnc Opportunity',
            address: 'Powai, Mumbai',
            tenant: 'Sitel group',
            resaleAvailable: 0,
            completelyFunded: 100,
            assetValue: 42.61,
            EntryRentalYield: 10,
            ExpectedIRR: '16.4'
        },
        {
            name: 'American Mnc Opportunity',
            address: 'Powai, Mumbai',
            tenant: 'Sitel group',
            resaleAvailable: 0,
            completelyFunded: 100,
            assetValue: 42.61,
            EntryRentalYield: 10,
            ExpectedIRR: '16.4'
        },
        {
            name: 'American Mnc Opportunity',
            address: 'Powai, Mumbai',
            tenant: 'Sitel group',
            resaleAvailable: 0,
            completelyFunded: 100,
            assetValue: 42.61,
            EntryRentalYield: 10,
            ExpectedIRR: '16.4'
        }
    ]

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return(
        <div className='villa-page-container'>
            <div className="bg-image"></div>
            <div>
                <VillaContainer villas={ villas }/>
            </div>
        </div>
    )
}

export default VillaPage