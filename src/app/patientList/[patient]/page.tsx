import React from 'react'


const page = ({params}:{params:{patient:string}}) => {
  return (
    <div>Sample {params.patient}</div>
  )
}

export default page