#!/bin/sh

# Card images

inkscape -d 192 src/app/card_image.svg -o src/app/opengraph-image.png
cp src/app/opengraph-image.png src/app/twitter-image.png

# CV header decoration

inkscape src/app/cv/tile_circuit.svg -o src/app/cv/tile_circuit.png

# Icons

inkscape src/app/icon.svg -o src/app/icon2.png
magick src/app/icon2.png \
  -define icon:auto-resize="256,128,96,64,48,32,16" \
  src/app/favicon.ico

# Background noise

python make_noise64.py

# Clean up PDFs

for f in public/cv/*.pdf; do
  ./clean_pdf_metadata.sh $f
done
