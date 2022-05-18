export default async function handler(req, res) {
   const response = await fetch(
      'https://br.depositphotos.com/stock-photos/pedra.html'
   );

   const data = await response.text();

   let pictureTagFilter = new RegExp('(<picture>)(.+?)(</picture>)', 'gi');
   let imgSrcFilter = new RegExp('(?<=src=")(.+?)(?=")', 'gi');

   let picturesTag = data.match(pictureTagFilter);
   let imgSrcs = picturesTag
      .map(e => {
         return e.match(imgSrcFilter);
      })
      .flat(Infinity);

   res.status(200).json({ imgSrcs });
}
