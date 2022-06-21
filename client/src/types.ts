import {Action} from '@reduxjs/toolkit';
import {ThunkAction} from 'redux-thunk';

export type Thunk = ThunkAction<any, any, any, any> | Action;
