import React from 'react';
import './TopicSelection.css'

const TopicSelection = ({ onSelectTopic }) => {
  return (
    <div className="topic-selection">
      <h1 className="text-2xl font-bold mb-4">Quiz Section</h1>
      <p className="text-lg mb-4">Select a Topic</p> 
      <div className="topic-selection grid grid-cols-3 gap-4">
        <div className="topic-card">
          <h2>Basic Concepts of Finance</h2>
          <p>Core principles in managing money and understanding financial systems.</p>
          <button onClick={() => onSelectTopic('basicfinance')}>Take Quiz</button>
        </div>
        <div className="topic-card">
          <h2>Banking</h2>
          <p>Financial services for managing money, including deposits and loans.</p>
          <button onClick={() => onSelectTopic('banking')}>Take Quiz</button>
        </div>
        <div className="topic-card">
          <h2>Digital Payments</h2>
          <p>Electronic methods for transferring money.</p>
          <button onClick={() => onSelectTopic('digitalpayments')}>Take Quiz</button>
        </div>
        <div className="topic-card">
          <h2>Insurance</h2>
          <p>Protection against potential losses through contracts with insurers.</p>
          <button onClick={() => onSelectTopic('insurance')}>Take Quiz</button>
        </div>
        <div className="topic-card">
          <h2>Investment</h2>
          <p>Allocating money for future income or profit, often through buying assets.</p>
          <button onClick={() => onSelectTopic('investment')}>Take Quiz</button>
        </div>
        <div className="topic-card">
          <h2>Retirement and Pension</h2>
          <p>Planning and saving for financial security in old age.</p>
          <button onClick={() => onSelectTopic('retirementandpension')}>Take Quiz</button>
        </div>
        <div className="topic-card">
          <h2>Fraud Protection</h2>
          <p>Measures to prevent and address fraudulent activities.</p>
          <button onClick={() => onSelectTopic('fraudprotection')}>Take Quiz</button>
        </div>
      </div>
    </div>
  );
};

export default TopicSelection;
