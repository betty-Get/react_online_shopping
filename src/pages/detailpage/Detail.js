import React from 'react'
import ListingDetail from '../../components/listingDetail/ListingDetail'
import Sidebar from '../../components/sidebar/Sidebar'
import './Detail.css'

function detail() {
  return (
    <div className='detailPage'>
      <ListingDetail/>
      <Sidebar/>
    </div>
  )
}

export default detail
