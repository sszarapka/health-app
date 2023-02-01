import { Button } from 'antd'
import { DangerButtonProps } from '../types/types'

const DangerButton = ({ children, className, onClick }: DangerButtonProps) => {
  return (
    <Button danger className={className} onClick={onClick}>
      {children}
    </Button>
  )
}

export default DangerButton
