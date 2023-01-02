import { useState, useEffect, useMemo } from "react"

function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}

type WindowSize = {
  width: number | undefined
  height: number | undefined
}

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  })
  const debouncedSize = useDebounce(windowSize)

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return debouncedSize
}

export const useScreenOrientation = () => {
  const [orientation, setOrientation] = useState<OrientationType>()

  useEffect(() => {
    const updateOrientation = () => {
      setOrientation(window.screen.orientation.type)
    }

    window.addEventListener("orientationchange", updateOrientation)
    updateOrientation()
    return () => {
      window.removeEventListener("orientationchange", updateOrientation)
    }
  }, [])

  return orientation
}

type FullSide = "w-full" | "h-full" | ""

export const useContentSize = (): FullSide => {
  const size = useWindowSize()
  const fullSide = useMemo<FullSide>(() => {
    if (size.width && size.height) {
      const w = Math.trunc((size.width / 16) * 9)
      return w < size.height ? "w-full" : "h-full"
    }
    return ""
  }, [size])

  return fullSide
}
