import React, { useEffect } from 'react'
import '../styles/Result.css';
import { Link } from 'react-router-dom';

import ResultTable from './ResultTable';
import { useDispatch, useSelector } from 'react-redux';
import { attempts_Number, earnPoints_Number, flagResult } from '../helper/helper';

/** import actions  */
import { resetAllAction } from '../redux/question_reducer';
import { resetResultAction } from '../redux/result_reducer';
import { usePublishResult } from '../hooks/setResult';


export default function Result() {

    const dispatch = useDispatch()
    const { questions : { queue ,answers}, result : { result, userId}}  = useSelector(state => state)

    const totalPoints = queue.length * 10; 
    const attempts = attempts_Number(result);
    const earnPoints = earnPoints_Number(result, answers, 10)
    const flag = flagResult(totalPoints, earnPoints)


    /** store user result */
    usePublishResult({ 
        result, 
        username : userId,
        attempts,
        points: earnPoints,
        achived : flag ? "Passed" : "Failed" });

    function onRestart(){
        dispatch(resetAllAction())
        dispatch(resetResultAction())
    }

  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz Result</h1>

        <div className='result flex-center'>
            <div className='flex'>
                <span>Name</span>
                <span className='bold'>{userId || ""}</span>
            </div>

            <div className='flex'>
                <span>Total Questions : </span>
                <span className='bold'>{ 10 || 0}</span>
            </div>

            <div className='flex'>
                <span>Questions Answered Correctly : </span>
                <span className='bold'>{earnPoints/10 || 0}/10</span>
            </div>



            <div className='flex'>
                <span>Maximum Marks : </span>
                <span className='bold'>{100 || 0}</span>
            </div>

            <div className='flex'>
                <span>Marks Scored : </span>
                <span className='bold'>{earnPoints || 0}/100</span>
            </div>
            <div className='flex'>
                <span>Final Result</span>
                <span style={{ color : `${flag ? "#0bb807" : "#ff2a66" }` }} className='bold'> {flag ? "Financially Literate" : "Not Financially literate"}</span>
            </div>
        </div>

        <div className="start">
            <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
        </div>

        <div className="container">
            {/* result table */}
            <ResultTable></ResultTable>
        </div>
    </div>
  )
}