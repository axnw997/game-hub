const getCroppedImageUrl = (url: string) => {
  const index = url.indexOf("media/") + "media/".length;
  // index return 22
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
  // url.slice will return url from 22
};

export default getCroppedImageUrl;
