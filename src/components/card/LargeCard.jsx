import React from 'react'

const LargeCard = (props) => {
  return (
    <section className="m-auto w-5/12 border-gray-300 p-6 border-2 rounded-lg">
        {props.children}
    </section>
  )
}

export default LargeCard