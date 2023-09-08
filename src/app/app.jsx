import { Box } from '@mui/material'
import { Route, Routes } from 'react-router-dom'

import { MainView, ChannelView, VideoView, SearchView } from '../views'
import { Navbar } from '../components'

const App = () => {
  return (
    <Box>
        
        <Navbar />

        <Routes>
            <Route path='/' element={<MainView />} />
            <Route path='channel/:id' element={<ChannelView />} />
            <Route path='video/:id' element={<VideoView />} />
            <Route path='search/:id' element={<SearchView />} />
        </Routes>
    </Box>
  )
}

export default App