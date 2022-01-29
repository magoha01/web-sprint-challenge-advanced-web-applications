import React from 'react';
import '@testing-library/jest-dom';

import { render, screen, waitFor, within} from '@testing-library/react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';
import View from './View';
import { Component } from 'react/cjs/react.production.min';

const article = {
    image: 'article.jpg',
    headline: 'test headline',
    author: 'test author',
    summary: 'test summary',
    body: 'article body',
}

const noAuthArticle = {
    image: 'article.jpg',
    headline: 'test headline',
    author: '',
    summary: 'test summary',
    body: 'article body', 
}

test('renders component without errors', async ()=> {
    localStorage.setItem("token", "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98")
    render(<Article article={article}/>)
});

test('renders headline, author from the article when passed in through props', ()=> {
    localStorage.setItem("token", "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98")
    render(<Article article={article}/>)
});

test('renders "Associated Press" when no author is given', ()=> {
    render(<Article article={noAuthArticle}/>)
    const author = screen.queryByTestId('author');
    const altAuthor = "Associated Press";


    expect(altAuthor).toBeInTheDocument();
});

test('executes handleDelete when the delete button is pressed', ()=> {
    render(<Article article={article}/>)
    const deleteButton = screen.queryByTestId('deleteButton');
    userEvent.click(deleteButton);


});

//Task List: 
//1. Complete all above tests. Create test article data when needed.