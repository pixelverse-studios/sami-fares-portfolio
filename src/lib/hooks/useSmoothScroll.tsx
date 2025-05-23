import { useCallback } from 'react'

export const useSmoothScroll = () => {
  const scrollToElement = useCallback(
    (
      elementId: string,
      options: ScrollIntoViewOptions = {
        behavior: 'smooth',
        block: 'start'
      }
    ): void => {
      const element = document.getElementById(elementId)
      if (element) {
        element.scrollIntoView(options)
      }
    },
    []
  )

  const handleNavClick = useCallback(
    (
      e: React.MouseEvent<HTMLAnchorElement>,
      elementId: string,
      options?: ScrollIntoViewOptions
    ): void => {
      e.preventDefault()
      scrollToElement(elementId, options)
    },
    [scrollToElement]
  )

  const scrollToPosition = useCallback(
    (y: number, options: ScrollToOptions = { behavior: 'smooth' }): void => {
      window.scrollTo({
        top: y,
        ...options
      })
    },
    []
  )

  return {
    scrollToElement,
    handleNavClick,
    scrollToPosition
  }
}
