import { MemoryRouter } from 'react-router-dom'
import { Routing } from './routing'
import '../styles/index.scss'
function IndexPopup() {

  return (
    <MemoryRouter initialEntries={['/color']}>
      <Routing />
    </MemoryRouter>
  )
}

export default IndexPopup
