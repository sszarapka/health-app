import { Image, Button, Typography } from 'antd'
import { PlusCircleFilled } from '@ant-design/icons'
const { Text } = Typography
const ProgressImages = () => {
  return (
    <section className="progress-images">
      <Button className="progress-images__add">
        <PlusCircleFilled />
      </Button>

      <div className="image-container">
        <Image
          src="https://img.freepik.com/free-photo/cropped-close-up-body-fit-woman-wearing-shorts-sport-top-showing-slim-beautiful-stomach-abs_231208-8892.jpg?w=2000"
          alt="postęp"
          className="progress-images__image"
        />
        <Text className="progress-images__date">23 / 12 / 2022</Text>
      </div>

      <div className="image-container">
        <Image
          src="https://www.trener.pl/media/__sized__/artykul_foto/mezomorfik-cechy-i-dieta-auto-FS-crop-c0-5__0-5-652x367-70.jpg"
          alt="postęp"
          className="progress-images__image"
        />
        <Text className="progress-images__date">03 / 12 / 2022</Text>
      </div>
    </section>
  )
}

export default ProgressImages
