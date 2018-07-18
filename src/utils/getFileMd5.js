import '../../public/js/spark-md5.js'
window.getFileMd5 = function(file, callback) {
  return new Promise((resolve, reject) => {
    var fileReader = new FileReader()
    var box = document.getElementById('box')
    var blobSlice = File.prototype.slice
    var chunkSize = 2097152
    // read in chunks of 2MB
    var chunks = Math.ceil(file.size / chunkSize)
    var currentChunk = 0
    var spark = new SparkMD5()

    fileReader.onload = function(e) {
      spark.appendBinary(e.target.result)
      currentChunk++

      if (currentChunk < chunks) {
        loadNext()
      } else {
        resolve(spark.end())
      }
    }

    function loadNext() {
      var start = currentChunk * chunkSize
      var end = start + chunkSize >= file.size ? file.size : start + chunkSize
      fileReader.readAsBinaryString(blobSlice.call(file, start, end))
    }
    loadNext()
  })
}
