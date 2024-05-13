import React, { useEffect, useState } from 'react'

function Quiz(props) {
    const [remainingTime, setRemainingTime] = useState(30)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    useEffect(() => {
        const intervalId = setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime - 1);
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);
    useEffect(() => {
        if (remainingTime < 0) {
                nextQuestion()
        }
    }, [remainingTime])
    function nextQuestion() {
        const radioButtons = document.getElementsByName(`question${currentQuestion}`);
        for (let i = 0; i < radioButtons.length; i++) {
            if (radioButtons[i].checked) {
                let answerObject = props.answers;
                answerObject[currentQuestion] = radioButtons[i].value;
                props.setAnswers(answerObject)
                radioButtons[i].checked = false;
            }
        }
        if (props.questions.length-1 === currentQuestion) {
            props.setFinished(true)
        }else{
            setCurrentQuestion(currentQuestion + 1)
            setRemainingTime(30)
        }
    }
    return (
        <>
            <div className=' absolute right-[5%] top-[5%]'><p className={`font-bold text-4xl rounded-full w-20 h-20 border-2 justify-center flex items-center ${remainingTime > 20 ? "text-green-400 border-green-400" : 10 > remainingTime ? " text-red-400 border-red-400" : "text-yellow-400 border-yellow-400"} `}>{remainingTime}</p></div>
            <form className=' absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
                <div className='grid grid-row grid-rows-4 w-[50vw] p-5 border-neutral-500 border-2 rounded-3xl gap-5 max-lg:gap-1'>
                    <p className=' text-1xl font-bold first-letter:capitalize'>{
                        (currentQuestion + 1) + ". " + props.questions[currentQuestion].question} ?</p>
                    <div className='flex'>
                        <input type="radio" id="optionA" name={`question${currentQuestion}`} value="A" />
                        <p className=' self-center first-letter:capitalize pl-2'>{props.questions[currentQuestion].optionA}</p>
                    </div>
                    <div className='flex'>
                        <input type="radio" id="optionB" name={`question${currentQuestion}`} value="B" />
                        <p className='self-center first-letter:capitalize pl-2'>{props.questions[currentQuestion].optionB}</p>
                    </div>
                    <div className='flex'>
                        <input type="radio" id="optionC" name={`question${currentQuestion}`} value="C" />
                        <p className='self-center first-letter:capitalize pl-2'>{props.questions[currentQuestion].optionC}</p>
                    </div>
                    <div className='flex'>
                        <input type="radio" id="optionD" name={`question${currentQuestion}`} value="D" />
                        <p className='self-center first-letter:capitalize pl-2'>{props.questions[currentQuestion].optionD}</p>
                    </div>
                </div>
            </form>
            <button onClick={() => { nextQuestion() }} type='submit' className=' absolute bottom-[5%] right-[5%] py-5 px-10 border-2 bg-green-400 rounded-2xl text-white disabled:opacity-30 hover:bg-green-600' disabled={remainingTime > 20}>Next</button>
        </>
    )
}

export default Quiz