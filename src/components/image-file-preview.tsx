import { tv } from "tailwind-variants"

const imageFilePreviewVariants = tv({
  base: `
    rounded-lg overflow-hidden
  `
})

const imageFilePreviewImageVariants = tv({
  base: `
    w-full h-full object-cover
  `
})

interface IImageFilePreviewProps extends React.ComponentProps<"img"> {
  imageClassName?: string
}

export function ImageFilePreview({ className, imageClassName, ...props }: IImageFilePreviewProps) {
  return (
    <div className={imageFilePreviewVariants({ className })}>
      <img className={imageFilePreviewImageVariants({ className: imageClassName })} {...props} />
    </div>
  )
}