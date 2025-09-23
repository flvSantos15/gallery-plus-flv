import { type VariantProps, tv } from "tailwind-variants"
import FileImageIcon from "../assets/icons/image.svg?react"
import UploadFileIcon from "../assets/icons/upload-file.svg?react"
import Icon from "./icon"
import Text, { textVariants } from "./text"

const inputSingleFileVariants = tv({
  base: `
    flex flex-col items-center justify-center w-full
    border border-solid border-border-primary
    group-hover:border-border-active
    rounded-lg gap-1 transition
  `,
  variants: {
    size: {
      md: "px-5 py-6"
    }
  },
  defaultVariants: {
    size: "md"
  }
})

export const inputSingleFileIconVariants = tv({
  base: "fill-placeholder",
  variants: {
    size: {
      md: "w-8 h-8",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface InputSingleFileProps
  extends VariantProps<typeof inputSingleFileVariants>,
  Omit<React.ComponentProps<"input">, "size"> {
  error?: React.ReactNode
}

export function InputSingleFile({ size, error }: InputSingleFileProps) {
  return (
    <div>
      <div className="w-full realtive group cursor-pointer">
        <input
          type="text"
          className="absolute top-0 right-0 w-full h-full opacity-0 cursor-pointer"
        />

        <div className={inputSingleFileVariants({ size })}>
          <Icon svg={UploadFileIcon} className={inputSingleFileIconVariants({ size })} />
          <Text variant="label-medium" className="text-placeholder text-center">
            Arraste o arquivo aqui
            <br />
            ou clique para selecionar
          </Text>
        </div>
      </div>
      {error && (
        <Text variant="label-small" className="text-accent-red">
          Erro no campo
        </Text>
      )}

      <div className="flex gap-3 items-center border border-soldi border-border-primary mt-5 p-3 rounded">
        <Icon svg={FileImageIcon} className="fill-white w-6 h-6" />
        <div className="flex flex-col">
          <div className="truncate max-w-80">
            <Text variant="label-medium" className="text-placeholder">
              Nome do arquivo.png
            </Text>
          </div>
          <div>
            <button type="button"
              className={textVariants({
                variant: "label-small",
                className: "text-accent-red cursor-pointer hover:underline"
              })}
            >
              Remover
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

