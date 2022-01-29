import React from 'react';
import '@testing-library/jest-dom';

import { render, screen, waitFor, within} from '@testing-library/react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';
import View from './View';

test('renders component without errors', async ()=> {
    localStorage.setItem("token", "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98")
    render(<Router><Article/></Router>);
    
    
    //expect(articles).toHaveLength(4);
});

test('renders headline, author from the article when passed in through props', ()=> {
});

test('renders "Associated Press" when no author is given', ()=> {
});

test('executes handleDelete when the delete button is pressed', ()=> {
});

//Task List: 
//1. Complete all above tests. Create test article data when needed.