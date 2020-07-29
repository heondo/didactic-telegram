import React from 'react'
import renderer from 'react-test-renderer'

import App, { Counter, dataReducer } from './App'

const list = ['a', 'b', 'c']

describe('App', () => {
  describe('Reducer', () => {
    it('should set a list', () => {
      const state = { list: [], error: null }
      const newState = dataReducer(state, {
        type: 'SET_LIST',
        list,
      })

      expect(newState).toEqual({ list, error: null })
    })

    it('should reset the error if list is set', () => {
      const state = { list: [], error: true }
      const newState = dataReducer(state, {
        type: 'SET_LIST',
        list,
      })

      expect(newState).toEqual({ list, error: null })
    })

    it('should set the error', () => {
      const state = { list: [], error: null }
      const newState = dataReducer(state, {
        type: 'SET_ERROR',
      })

      expect(newState.error).toBeTruthy()
    })
  })
})
