import React, { useState } from 'react';
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from "react-icons/io";

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div>
      <article>
        <header>
          <h4>{title}</h4>
          <button className='btn' onClick={() => setShowInfo(!showInfo)}>
            {showInfo ? <IoIosRemoveCircleOutline /> : <IoIosAddCircleOutline />}
          </button>
        </header>
        {showInfo && <p>{info}</p>}  {/* Show the info if showInfo is true */}
      </article>
    </div>
  );
};

export default Question;
