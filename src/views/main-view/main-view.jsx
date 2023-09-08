import React, { useEffect, useState } from 'react'
import { ApiService } from '../../services/api.service';
import { Box, Container, Stack, Typography } from '@mui/material';

import { Categories, Videos } from '../../components'
import { colors } from '../../constants/colors';

const MainView = () => {

  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])

  const selectedCategoryHandler = category => setSelectedCategory(category)

  useEffect(() => {
		const getData = async () => {
			try {
				const data = await ApiService.fetching(`search?part=snippet&q=${selectedCategory}`)
				setVideos(data.items)
			} catch (error) {
				console.log(error)
			}
		}

		getData()
	}, [selectedCategory])

  return (
    <Stack>
      <Categories 
        selectedCategoryHandler={selectedCategoryHandler}
				selectedCategory={selectedCategory} 
      />
      <Box p={2} sx={{ height: '90vh' }}>
        <Container maxWidth={'90%'}>
          <Typography variant={'h4'} fontWeight={'bold'} mb={2}>
              {selectedCategory} <span style={{ color: colors.secondary }}>videos</span>
          </Typography>
          <Videos videos={videos} />
        </Container>
      </Box>
    </Stack>
  )
}

export default MainView