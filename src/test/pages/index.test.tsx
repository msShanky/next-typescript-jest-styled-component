import { Home } from '../../pages/index'
import React from 'react'
import { render } from '../testUtilities'

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Home />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('to have left panel', () => {
    const { getByText } = render(<Home />)
    expect(getByText('This is the left panel')).toBeInTheDocument()
  })
  it('to have canvas panel', () => {
    const { getByText } = render(<Home />)
    expect(getByText('This is the canvas')).toBeInTheDocument()
  })
  it('to have properties panel', () => {
    const { getByText } = render(<Home />)
    expect(getByText('This is properties panel')).toBeInTheDocument()
  })
})
