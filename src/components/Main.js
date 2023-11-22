import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setUserId } from '../redux/result_reducer'
import '../styles/Main.css'

export default function Main() {

    const inputRef = useRef(null)
    const dispatch = useDispatch()


    function startQuiz(){
        if(inputRef.current?.value){
            dispatch(setUserId(inputRef.current?.value))
        }
    }

  return (
    <div className='container'>
        <h1 className='title text-light'>AWS Cloud Practitioner Mock Exam Portal</h1>

        <ol type='a'>
            <li>- Welcome to the AWS Cloud Practitioner Mock Exam Quiz!</li>    
            <li>- Navigate through the quiz using the 'Next' and 'Previous' buttons.</li>
            <li>- All questions are in multiple-choice format. Choose the best answer </li>
            <li>- Points are awarded for correct answers. There is no negative marking</li>
            <li>- There are 10 questions in total. Each question carries 10 points </li>
            <li>- You will require 70/100 points to pass this mock exam. </li>
            <li>- When you're ready to start, enter your name and click the 'Start Quiz' button. </li>
        </ol>

        <form id="form">
            <input ref={inputRef} className="userid" type="text" placeholder='Enter your name' />
        </form>

        <div className='start'>
            <Link className='btn' to={'quiz'} onClick={startQuiz}>Start Quiz</Link>
        </div>

    </div>
  )
}