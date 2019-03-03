import apiUrl from '@/api/url'
import fileType from '@/enum/fileType'

const api = {
  uploadImg: `${apiUrl.fs}perp/cms/uploadMedia?fileType=${fileType.pic}`
}
export default api
