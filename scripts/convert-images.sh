#!/bin/bash
set -e
export PATH="/c/Users/vinir/AppData/Local/Microsoft/WinGet/Packages/Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe/ffmpeg-9.0-full_build/bin:$PATH"
cd "/c/Users/vinir/dev/projetos/inovaflooring"

mkdir -p public/media/img
TMP=raw-media/fullres

convert_one () {
  src="$1"
  slug="$2"
  ext="${src##*.}"
  if [ "$ext" = "HEIC" ] || [ "$ext" = "heic" ]; then
    if [ ! -f "$TMP/$(basename "$src" .HEIC).jpg" ]; then
      ffmpeg -y -i "img/$src" -update 1 -frames:v 1 -q:v 2 "$TMP/$(basename "$src" .HEIC).jpg" -loglevel error
    fi
    input="$TMP/$(basename "$src" .HEIC).jpg"
  else
    input="img/$src"
  fi
  ffmpeg -y -i "$input" -vf "scale='min(1920,iw)':-2" -q:v 4 "public/media/img/${slug}.webp" -loglevel error
  ffmpeg -y -i "$input" -vf "scale='min(700,iw)':-2" -q:v 5 "public/media/img/${slug}-thumb.webp" -loglevel error
  echo "done: $slug"
}

convert_one "IMG_5109 - Copy.HEIC" "kitchen-navy-01"
convert_one "VAFL8071.JPG" "kitchen-navy-02"
convert_one "IMG_5572.HEIC" "living-fireplace-01"
convert_one "IMG_5574.HEIC" "living-fireplace-02"
convert_one "IMG_1347.HEIC" "herringbone-dining"
convert_one "IMG_5168.HEIC" "builtin-greatroom-01"
convert_one "IMG_5170.HEIC" "builtin-greatroom-02"
convert_one "IMG_5568.HEIC" "bay-window-room"
convert_one "IMG_0185.HEIC" "venue-hall-01"
convert_one "IMG_0186.HEIC" "venue-hall-02"
convert_one "IMG_0134.HEIC" "floor-detail-mahogany"
convert_one "IMG_4550.HEIC" "stairs-before-wide"
convert_one "IMG_4552.HEIC" "stairs-before-detail"
convert_one "IMG_4573.HEIC" "stairs-after-wide"
convert_one "IMG_4581.HEIC" "stairs-after-detail"
convert_one "IMG_0150.HEIC" "venue-finishing"
convert_one "IMG_0151.HEIC" "sealer-product"

echo "All images converted."
