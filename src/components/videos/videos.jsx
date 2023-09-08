import React from 'react'
import { ChannelAbout, Loader, VideoItem } from '../'
import { Box, Stack } from '@mui/material'

const Videos = ({ videos }) => {
  if (!videos.length) return <Loader />

  return (
    <Stack 
      width={'100%'}
      direction={'row'}
      flexWrap='wrap'
      justifyContent='start'
      alignItems='start'
      gap={2}
    >
      { videos.map(video => (
        <Box>
          {video.id.videoId && <VideoItem video={video} />}
          {video.id.channelId && <ChannelAbout video={video} />}
        </Box>
      )) }
      
    </Stack>
  )
}

export default Videos