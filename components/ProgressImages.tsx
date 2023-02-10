import {
  Image,
  Button,
  Typography,
  Upload,
  UploadProps,
  UploadFile,
} from 'antd'
import { EyeOutlined, PlusCircleFilled } from '@ant-design/icons'
import { UploadChangeParam } from 'antd/es/upload'
const { Text } = Typography
import { ProgressImagesProps, ImageInfo } from '../types/types'
import { useEffect, useState } from 'react'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import { useUser } from '../hooks/useUser'

const ProgressImages = ({ imagesArray }: ProgressImagesProps) => {
  const storage = getStorage()
  const user = useUser()
  const [imagesInfo, setImagesInfo] = useState<ImageInfo[]>(imagesArray)

  const handleUpload: UploadProps['onChange'] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    if (info.file.status === 'done') {
      const date = info.file.lastModifiedDate?.toLocaleDateString('pl')!
      const timeStamp = info.file.lastModified!

      const metadata = {
        customMetadata: {
          lastModified: date,
          timeStamp: timeStamp.toString(),
        },
      }
      const storageRef = ref(storage, `/images/${user?.uid}/${timeStamp}`)
      uploadBytes(storageRef, info.file.originFileObj as Blob, metadata).then(
        snapshot => {
          getDownloadURL(snapshot.ref).then(url => {
            setImagesInfo(prev =>
              prev
                ? [{ url, date, timeStamp }, ...prev]
                : [{ url, date, timeStamp }]
            )
          })
        }
      )
    }
  }

  useEffect(() => setImagesInfo(imagesArray), [imagesArray])

  const images = imagesInfo
    ?.sort((a, b) => b.timeStamp - a.timeStamp)
    .map(image => {
      return (
        <div className="image-container" key={image.timeStamp}>
          <Image
            src={image.url}
            alt="postęp"
            className="progress-images__image"
            preview={{
              mask: (
                <>
                  <EyeOutlined /> Podgląd
                </>
              ),
            }}
          />
          <Text className="progress-images__date">{image.date}</Text>
        </div>
      )
    })

  return (
    <section className="progress-images">
      <Upload
        className="progress-images__upload"
        onChange={handleUpload}
        showUploadList={false}
      >
        <Button className="progress-images__add">
          <PlusCircleFilled />
        </Button>
      </Upload>
      {images}
    </section>
  )
}

export default ProgressImages
