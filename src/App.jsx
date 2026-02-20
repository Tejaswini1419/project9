import React from 'react'
import AddMarks from './AddMarks'
import MarksList from'./MarkList'

export default function App() {
  return (
    <div className='app-container'>
      <h1>  Welcome to KL University Marks Portal</h1>
      <AddMarks/>
      <MarksList/>
    </div>
  )
}
