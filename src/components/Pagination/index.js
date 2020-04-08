import React from 'react'

import ids from 'short-id'
import { Container, Button } from './styles'

export default function Pagination({
  handleChangePage,
  currentPage,
  totalPages,
  ...rest
}) {
  function getPages() {
    console.log(currentPage)
    let pagesDisplayed = [] // eslint-disable-line

    if (totalPages < 8) {
      for (let i = 2; i <= totalPages; i += 1) {
        pagesDisplayed.push(i)
      }

      return pagesDisplayed
    }

    if (currentPage > 4) {
      pagesDisplayed.push('...')
    }

    if (currentPage === totalPages) {
      pagesDisplayed.push(currentPage - 4)
    }

    if (currentPage > totalPages - 2) {
      pagesDisplayed.push(currentPage - 3)
    }

    if (currentPage === 4 || currentPage > totalPages - 3) {
      pagesDisplayed.push(currentPage - 2)
    }

    if (currentPage > 4) {
      pagesDisplayed.push(currentPage - 1)
    }

    if (currentPage === 3 || currentPage === 4) {
      pagesDisplayed.push(currentPage - 1)
    }

    if (currentPage !== 1) {
      pagesDisplayed.push(currentPage)
    }

    if (currentPage !== totalPages) {
      pagesDisplayed.push(currentPage + 1)
    }

    if (
      currentPage < 4 ||
      (currentPage > totalPages - 4 && currentPage < totalPages - 1)
    ) {
      pagesDisplayed.push(currentPage + 2)
    }

    if (currentPage < 3 || currentPage === totalPages - 3) {
      pagesDisplayed.push(currentPage + 3)
    }

    if (currentPage === 1) {
      pagesDisplayed.push(currentPage + 4)
    }

    if (currentPage + 3 < totalPages) {
      pagesDisplayed.push('...')
      pagesDisplayed.push(totalPages)
    }

    return pagesDisplayed
  }

  const pagesList = getPages()

  return (
    <Container {...rest}>
      <Button
        type="button"
        disabled={currentPage === 1}
        onClick={() => handleChangePage(currentPage - 1)}
      >
        {'<<'}
      </Button>
      <Button
        current={currentPage === 1}
        type="button"
        onClick={() => handleChangePage(1)}
      >
        1
      </Button>
      {pagesList.map((page, index) => {
        return page === '...' ? (
          <Button key={ids.generate()} disabled>
            ...
          </Button>
        ) : (
          <Button
            current={page === currentPage}
            type="button"
            onClick={() => handleChangePage(page)}
            key={page.toString()}
          >
            {page}
          </Button>
        )
      })}
      <Button
        disabled={currentPage === totalPages}
        type="button"
        onClick={() => handleChangePage(currentPage + 1)}
      >
        >>
      </Button>
    </Container>
  )
}
