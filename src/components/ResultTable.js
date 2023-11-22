import React, { useEffect, useState } from 'react';
import { getServerData, deleteAllRecords } from '../helper/helper';

export default function ResultTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, (res) => {
      setData(res);
    });
  }, []); // Add an empty dependency array to run the effect only once on mount

  const handleDeleteClick = async () => {
    try {
      const deleteResponse = await deleteAllRecords(); // Assuming you have a function to handle deletion
      console.log(deleteResponse); // Log or handle the deletion result as needed

      // After deletion, you might want to refresh the data
      getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, (res) => {
        setData(res);
      });
    } catch (error) {
      console.error('Error deleting records:', error);
    }
  };

  return (
    <div>
      <button className='abc' onClick={handleDeleteClick}>Delete All Records</button>
      <table>
        {/* ... rest of your table code */}
        <thead>
                <tr className='table-header'>
                    <td colSpan={5}>
                        <h3>Previous Scores(Leaderboard)</h3>
                    </td>
                </tr>
                </thead>  
                <thead className='table-header'>

                <tr className='table-row'>
                    <td>Name</td>
                    <td>Questions Attempted</td>
                    <td>Correct Questions (of 10)</td>
                    <td>Total Score (of 100)</td>
                    <td>Result</td>
                </tr>
            </thead>
        <tbody>
  
          {!data.length ? (
            <tr>
              <td colSpan={5}>No Data Found</td>
            </tr>
          ) : (
            data.map((v, i) => (
              <tr className='table-body' key={i}>
                <td>{v?.username || ''}</td>
                <td>{v?.attempts || 0}</td>
                <td>{(v?.points) / 10 || ''}</td>
                <td>{v?.points || 0}</td>
                <td>{v?.achived || ''}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
