import { PhotoParse } from '@/app/interfaces'

const apiKey = process.env.NEXT_PUBLIC_FLICKR_API_KEY
const userID = process.env.NEXT_PUBLIC_FLICKR_USER_ID
const photoSetID = process.env.NEXT_PUBLIC_FLICKER_BARBERSHOP_ALBUM
const imageSize = 'b'

export const getPhotos = async () => {
  try {
    const albumSettingsUrl = `https://www.flickr.com/services/rest/?method=flickr.photosets.getInfo&api_key=${apiKey}&photoset_id=${photoSetID}&user_id=${userID}&format=json&nojsoncallback=1`
    const photoSettingsUrl = `https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${apiKey}&photoset_id=${photoSetID}&user_id=${userID}&format=json&nojsoncallback=1`

    const albumResponse = await fetch(albumSettingsUrl)
    const albumData = await albumResponse.json()

    const photoResponse = await fetch(photoSettingsUrl)
    const photoData = await photoResponse.json()

    const photosPromises = photoData.photoset.photo.map(
      async (photoParse: PhotoParse) => {
        const farmId = photoParse.farm
        const serverId = photoParse.server
        const id = photoParse.id
        const secret = photoParse.secret
        const title = photoParse.title

        const imageUrl = `https://farm${farmId}.staticflickr.com/${serverId}/${id}_${secret}_${imageSize}.jpg`

        const desiredSizeLabel = 'Medium 800'
        const sizesUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=${apiKey}&photo_id=${id}&format=json&nojsoncallback=1`
        const sizesResponse = await fetch(sizesUrl)
        const sizesData = await sizesResponse.json()

        const selectedSize = sizesData.sizes.size.find(
          (size: {label: string}) => size.label === desiredSizeLabel
        )

        if (!selectedSize) {
          throw new Error(
            `Desired size "${desiredSizeLabel}" not found for photo ${id}`
          )
        }

        return {
          imageUrl,
          title,
          id,
          sizes: {
            width: parseInt(selectedSize.width, 10),
            height: parseInt(selectedSize.height, 10),
          },
        }
      }
    )

    const photos = await Promise.all(photosPromises)

    return {
      albumInfo: albumData.photoset,
      photos,
    }
  } catch (error) {
    console.error('Error fetching photos:', error)
    throw error
  }
}
