/**
 * Created by jiangyu2016 on 16/10/15.
 */

import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

import * as reducers from '../reducers/'


const allReducers = combineReducers(reducers)

export default function configureStore() {
  return createStore(allReducers, {
    app: {
      name: '小贝壳控制台',
      version: '1.0',
      color: {
        primary: '#7266ba',
        info: '#23b7e5',
        success: '#27c24c',
        warning: '#fad733',
        danger: '#f05050',
        light: '#e8eff0',
        dark: '#3a3f51',
        black: '#1c2b36'
      },
      settings: {
        themeID: 1,
        navbarHeaderColor: 'bg-black',
        navbarCollapseColor: 'bg-white-only',
        asideColor: 'bg-black',
        headerFixed: true,
        asideFixed: true,
        asideFolded: false,
        asideDock: false,
        container: false,
        asideMessage: true
      }
    }
  }, applyMiddleware(thunk))
}
