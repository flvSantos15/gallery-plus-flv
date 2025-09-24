import * as DialogPrimitive from "@radix-ui/react-dialog"
import cn from "classnames"
import XIcon from "../assets/icons/x.svg?react"
import ButtonIcon from "./button-icon"
import Card from "./card"
import Divider from "./divider"
import Text from "./text"

interface IDialogContentProps extends React.ComponentProps<typeof DialogPrimitive.Content> { }
interface IDialogOverlayProps extends React.ComponentProps<typeof DialogPrimitive.Overlay> { }
interface IDialogHeaderProps extends React.ComponentProps<"div"> { }
interface IDialogBodyProps extends React.ComponentProps<"div"> { }
interface IDialogFooterProps extends React.ComponentProps<"div"> { }

export const Dialog = DialogPrimitive.Root

export const DialogTrigger = DialogPrimitive.Trigger

export const DialogClose = DialogPrimitive.Close

export function DialogOverlay({
  className,
  ref,
  ...props
}: IDialogOverlayProps) {
  return (
    <DialogPrimitive.Overlay
      className={cn(`
        fixed inset-0 z-50 bg-background-secondary/60 backdrop-blur-sm
        data-[state=open]:animate-in
        data-[state=closed]:animate-out
        data-[state=open]:fade-in-0
        data-[state=closed]:fade-out-0
      `, className)}
      {...props}
    />
  )
}

export function DialogContent({
  className,
  ref,
  children,
  ...props
}: IDialogContentProps) {
  return (
    <DialogPrimitive.Portal>
      <DialogOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(`
          fixed left-[50%] top-[50%] w-full max-w-[32rem] z-[60] translate-x-[50%] translate-y-[50%]
          data-[state=open]:animate-in
          data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-botton-[48%]
          data-[state=closed]:animate-out
          data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-bottom-[48%]
        `, className)}
        {...props}
      >
        <Card size="lg" variant="primary">
          {children}
        </Card>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  )
}

export function DialogHeader({ children, className, ...props }: IDialogHeaderProps) {
  return (
    <>
      <header
        className={cn(`flex items-center justify-between`, className)}
        {...props}
      >
        <DialogPrimitive.Title>
          <Text variant="heading-medium" className="flex-1">{children}</Text>
        </DialogPrimitive.Title>

        <DialogClose asChild>
          <ButtonIcon icon={XIcon} />
        </DialogClose>
      </header>
    </>
  )
}

export function DialogBody({ children, ...props }: IDialogBodyProps) {
  return (
    <div {...props}>{children}</div>
  )
}

export function DialogFooter({ children, ...props }: IDialogFooterProps) {
  return (
    <div {...props}>
      <Divider className="mt-5 mb-1.5" />

      <footer className="flex items-center justify-end gap-3">
        {children}
      </footer>
    </div>
  )
}
