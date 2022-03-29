type loaderProps = {
  src: string
  width: number
  quality?: number
}

export function GraphCMSImageLoader({ src, width }: loaderProps) {
  const relativeSrc = (src: string) => src.split('/').pop()

  return `https://media.graphassets.com/resize=width:${width}/${relativeSrc(
    src
  )}`
}

export function GraphCMSImageLoaderWithSVG({ src }: loaderProps) {
  const relativeSrc = (src: string) => src.split('/').pop()

  return `https://media.graphassets.com/${relativeSrc(src)}`
}
