import Head from 'next/head'
import styled from 'styled-components'

const Container = styled.div`
  background: white;
  display: grid;
  grid-template-columns: 20% 1fr 20%;
  grid-template-rows: 1fr;
`
// const ComponentPanel = styled.div``

export const Home = (): JSX.Element => (
  <Container>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div>
      <p>This is the left panel</p>
    </div>
    <div>
      <p>This is the canvas</p>
    </div>
    <div>
      <p>This is properties panel</p>
    </div>
  </Container>
)

export default Home
