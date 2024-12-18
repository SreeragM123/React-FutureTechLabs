import React, { useState } from 'react';
import quizData from './data';  
import Question from './Question';
import './Home.css';

const Home = () => {
  const [questions, setQuestions] = useState(quizData);

  return (
    <div>
      <main>
        <div className='container'>
          <h3>Quiz App</h3>
          <section>
            {questions.map((quizQuestion) => {
              return ( 
                <Question
                  key={quizQuestion.id}
                  title={quizQuestion.title}
                  info={quizQuestion.info}
                />
              );
            })}
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
