import { toast } from 'sonner'
import { DynamicIcon } from 'lucide-react/dynamic'
import { XIcon } from 'lucide-react'

export const CustomToast = ({
    type = 'success',
    position = 'bottom-center',
    icon,
    title,
    description,
    width,
}) => {
    const styles = {
        success: 'text-success bg-success/10 border-success/80',
        error: 'text-destructive bg-destructive/10 border-destructive/20',
        default: 'text-neutral-900 bg-white border-neutral-200',
    }

    // Define width classes
    const widthClasses = {
        xs: '!w-[300px]',
        auth: '!w-[480px] max-sm:!w-full',
        sm: '!w-[400px]',
        md: '!w-[700px]',
        lg: '!w-[900px]',
        full: '!w-[95vw]',
    }

    return toast.custom(
        (t) => (
            <div
                className={`flex w-full items-start gap-2 rounded-lg border p-4 shadow-md ${
                    styles[type] || styles.default
                }`}
            >
                {/* toast
                {t} */}
                {icon && (
                    <div className="shrink-0">
                        <DynamicIcon name={icon} className="h-6 w-6" />
                    </div>
                )}
                <div className="relative w-full">
                    <div className="flex w-full justify-between">
                        <span className="text-base font-medium">{title}</span>
                        <div
                            className="cursor-pointer text-neutral-400 hover:text-neutral-600"
                            onClick={() => toast.dismiss(t.id)}
                        >
                            <XIcon className="h-4 w-4" />
                            <span className="sr-only">Close</span>
                        </div>
                    </div>
                    <p className="text-sm">{description}</p>
                </div>
            </div>
        ),
        {
            position: position,
            classNames: {
                toast: `
                    ${widthClasses[width]}
                    ${position === 'bottom-center' ? '!left-1/2 !-translate-x-1/2' : ''}
                `,
            },
        }
    )
}
