import { Stack } from '@mui/material'
import React from 'react'
import { categories } from '../../constants'
import { colors } from '../../constants/colors'

const Categories = ({selectedCategoryHandler, selectedCategory}) => {
  return (
    <Stack direction={'row'} sx={{ overflowX: 'scroll' }}>
      { categories.map(category => (
          <button 
            key={category.name}
            className='category-btn'
            style={{
              borderRadius: '0',
              background: category.name === selectedCategory && colors.secondary,
              color: category.name === selectedCategory && '#fff',
            }}
            onClick={() => selectedCategoryHandler(category.name)}
          >
          <span 
            style={{
							color: category.name === selectedCategory ? '#fff' : colors.secondary,
							marginRight: '15px',
						}}>
              { category.icon }
          </span>
          <span>{ category.name }</span>
      </button>
      )) }
    </Stack>
  )
}

export default Categories