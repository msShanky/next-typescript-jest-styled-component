import { render } from '@testing-library/react'
import { ComponentType, FunctionComponent, ReactElement } from 'react'

const Providers: FunctionComponent<{ children: ReactElement }> = ({ children }) => {
  return children
}

const customRender = (ui: ReactElement, options = {}) => render(ui, { wrapper: Providers as ComponentType, ...options })

export * from '@testing-library/react'

export { customRender as render }
