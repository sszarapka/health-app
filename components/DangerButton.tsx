import { Button } from 'antd'
import { DangerButtonProps } from '../types/types'

const DangerButton = ({ children, className }: DangerButtonProps) => {
  return (
    <Button danger className={className}>
      {children}
    </Button>
  )
}

export default DangerButton
