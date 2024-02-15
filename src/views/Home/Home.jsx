import styled from 'styled-components'

const Homewrapper = styled.div`
    min-height: calc(100vh - ${({ theme }) => theme.height});
`

const Home = () => {
    return(
        <Homewrapper>home</Homewrapper>
    )
}

export default Home

