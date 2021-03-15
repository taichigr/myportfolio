const baseDir = './files';
const imagesjpg = glob.sync(`${baseDir}/**/*.jpg`);
const imagesPng = glob.sync(`${baseDir}/**/*.png`);
const imagesGif = glob.sync(`${baseDir}/**/*.gif`);
const imagesSvg = glob.sync(`${baseDir}/**/*.svg`);

imagesjpg.forEach((files: string): void => {
    const dir = files.split('/');
    dir.pop();
    imagemin([files], dir.join('/'), {
      use: [imageminJpegtran()],
    }).then(() => {
      console.log(`${files} optimized`);
    });
  });
  
  imagesPng.forEach((files: string): void => {
    const dir = files.split('/');
    dir.pop();
    imagemin([files], dir.join('/'), {
      use: [imageminPngquant()],
    }).then(() => {
      console.log(`${files} optimized`);
    });
  });
  
  imagesGif.forEach((files: string): void => {
    const dir = files.split('/');
    dir.pop();
    imagemin([files], dir.join('/'), {
      use: [imageminGifsicle()],
    }).then(() => {
      console.log(`${files} optimized`);
    });
  });
  
  imagesSvg.forEach((files: string): void => {
    const dir = files.split('/');
    dir.pop();
    imagemin([files], dir.join('/'), {
      use: [
        imageminSvgo({
          plugins: [
              { removeViewBox: false },
          ],
        }),
      ],
    }).then(() => {
      console.log(`${files} optimized`);
    });
  });