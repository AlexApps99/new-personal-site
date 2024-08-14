#!/bin/bash

AUTHOR="Alex Brown"

# Set the Author field,
# and clear the Creator/Producer field,
# as it's just Chrome junk
exiftool -q "-Author=$AUTHOR" \
  -Creator= \
  -Producer= \
  -XMPToolkit= \
  -overwrite_original \
  "$1"
