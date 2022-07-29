import React from 'react'

const LargeCard = (props) => {
  return (
    <section className="m-auto w-7/12 border-[#C2C2C2] p-6 border-[1px]  rounded-[15px]">
        {props.children}
    </section>
  )
}

export default LargeCard