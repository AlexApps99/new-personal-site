from PIL import Image, ImageOps
from random import random

COL1 = "#080d1a"
COL2 = "#010205"

# step 1.
# make a greyscale noise image
def make_noise_image(size: int) -> Image.Image:
  img = Image.new('L', (size, size))
  for y in range(size):
    for x in range(size):
      img.putpixel((x, y), int(random() * 256))
  return img

# step 2.
# colorize image
def colorize(img: Image.Image, col1: str | tuple[int, ...], col2: str | tuple[int, ...]) -> Image.Image:
  return ImageOps.colorize(img, col1, col2)

if __name__ == '__main__':
  img = make_noise_image(64)
  img = colorize(img, COL1, COL2)
  img.save('public/noise64.png')
