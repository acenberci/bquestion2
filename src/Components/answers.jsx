import React from 'react'

function Answers(props) {
    console.log(props.answers)
  return (<>
    <button type='submit' onClick={()=>window.location.reload()} className=' absolute top-[5%] left-[5%] py-5 px-10 border-2 bg-green-400 rounded-2xl text-white disabled:opacity-30 hover:bg-green-600' >Return</button>
    <div className='grid grid-cols-10 text-center absolute w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-lg:gap-1'>
        <div className="grid grid-rows-2 max-lg:col-span-2">
            <div className='border-2 border-slate-300 bg-slate-200'>1</div>
            <div className='border-2 border-slate-300 bg-slate-200'>{props.answers[0] ? props.answers[0] : " "}</div>
        </div>
        <div className="grid grid-rows-2 max-lg:col-span-2 ">
            <div className='border-2 border-slate-300 bg-slate-200'>2</div>
            <div className='border-2 border-slate-300 bg-slate-200'>{props.answers[1] ? props.answers[1] : " "}</div>
        </div><div className="grid grid-rows-2 max-lg:col-span-2 ">
            <div className='border-2 border-slate-300 bg-slate-200'>3</div>
            <div className='border-2 border-slate-300 bg-slate-200'>{props.answers[2] ? props.answers[2] : " "}</div>
        </div><div className="grid grid-rows-2 max-lg:col-span-2 ">
            <div className='border-2 border-slate-300 bg-slate-200'>4</div>
            <div className='border-2 border-slate-300 bg-slate-200'>{props.answers[3] ? props.answers[3] : " "}</div>
        </div><div className="grid grid-rows-2 max-lg:col-span-2 ">
            <div className='border-2 border-slate-300 bg-slate-200'>5</div>
            <div className='border-2 border-slate-300 bg-slate-200'>{props.answers[4] ? props.answers[4] : " "}</div>
        </div><div className="grid grid-rows-2 max-lg:col-span-2 ">
            <div className='border-2 border-slate-300 bg-slate-200'>6</div>
            <div className='border-2 border-slate-300 bg-slate-200'>{props.answers[5] ? props.answers[5] : " "}</div>
        </div><div className="grid grid-rows-2 max-lg:col-span-2 ">
            <div className='border-2 border-slate-300 bg-slate-200'>7</div>
            <div className='border-2 border-slate-300 bg-slate-200'>{props.answers[6] ? props.answers[6] : " "}</div>
        </div><div className="grid grid-rows-2 max-lg:col-span-2 ">
            <div className='border-2 border-slate-300 bg-slate-200'>8</div>
            <div className='border-2 border-slate-300 bg-slate-200'>{props.answers[7] ? props.answers[7] : " "}</div>
        </div><div className="grid grid-rows-2 max-lg:col-span-2 ">
            <div className='border-2 border-slate-300 bg-slate-200'>9</div>
            <div className='border-2 border-slate-300 bg-slate-200'>{props.answers[8] ? props.answers[8] : " "}</div>
        </div>
        <div className="grid grid-rows-2 max-lg:col-span-2 ">
            <div className='border-2 border-slate-300 bg-slate-200'>10</div>
            <div className='border-2 border-slate-300 bg-slate-200'>{props.answers[9] ? props.answers[9] : " "}</div>
        </div>
 
    </div>
    </>
  )
}

export default Answers