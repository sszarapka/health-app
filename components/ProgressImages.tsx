import { Image, Button } from 'antd'
import { PlusCircleFilled } from '@ant-design/icons'

const ProgressImages = () => {
  return (
    <section className="progress-images">
      <Button className="progress-images__add">
        <PlusCircleFilled />
      </Button>
      <Image
        src="https://s1.1zoom.me/b6163/Sunrises_and_sunsets_Lake_Sergey_Kalabushkin_583396_169x300.jpg"
        alt="postęp"
        className="progress-images__image"
      />
      <Image
        src="https://s1.1zoom.me/b6163/Sunrises_and_sunsets_Lake_Sergey_Kalabushkin_583396_169x300.jpg"
        alt="postęp"
        className="progress-images__image"
      />
      <Image
        src="https://s1.1zoom.me/b6163/Sunrises_and_sunsets_Lake_Sergey_Kalabushkin_583396_169x300.jpg"
        alt="postęp"
        className="progress-images__image"
      />
    </section>
  )
}

export default ProgressImages
