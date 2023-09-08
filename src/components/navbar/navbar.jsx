import { Box, Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { SearchBar } from '../'
import { logo } from '../../constants'
import { colors } from '../../constants/colors'


const Navbar = () => {
  return (
    <Stack 
      direction={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
      p={2}
      sx={{ position: 'sticky', top: 0, zIndex: 999, background: colors.primary }}
    >
      <Link to={'/'}>
				<img src="youtube.jpg" alt='logo' height={70} />
			</Link>
      <SearchBar />
      <Box />
    </Stack>
  )
}

export default Navbar