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
    mkdir -p "$TMP"
    if [ ! -f "$TMP/$(basename "$src" .HEIC).jpg" ]; then
      ffmpeg -y -i "img/$src" -update 1 -frames:v 1 -q:v 2 "$TMP/$(basename "$src" .HEIC).jpg" -loglevel error
    fi
    input="$TMP/$(basename "$src" .HEIC).jpg"
  else
    input="img/$src"
  fi
  # NOTE: ffmpeg's -q:v maps directly to libwebp's 0-100 quality scale (not the
  # 1-31 mjpeg qscale you'd expect) -- keep this high or images come out mush.
  ffmpeg -y -i "$input" -vf "scale='min(1920,iw)':-2" -q:v 85 "public/media/img/${slug}.webp" -loglevel error
  echo "done: $slug"
}

# gallery
convert_one "kitchen-navy-island.jpg" "kitchen-navy"
convert_one "herringbone-dining-a.jpg" "herringbone-dining"
convert_one "venue-hall-wedding-a.jpg" "venue-hall-wedding"
convert_one "venue-hall-wide.jpg" "venue-hall-wide"
convert_one "venue-hall-lighting.jpg" "venue-hall-lighting"
convert_one "floor-install-oak.jpg" "floor-install-oak"
convert_one "floor-detail-macro.jpg" "floor-detail-mahogany"
convert_one "stairs-after-detail-b.jpg" "stairs-after-closeup"
convert_one "sealer-traffichd.jpg" "sealer-product"
convert_one "stairs-hallway-after.jpg" "stairs-hallway-after"
convert_one "full-staircase.jpeg" "full-staircase"

# before / after pairs
# same newel post, same TV/cabinet/coin-jar landmarks visible in both shots
convert_one "stairs-before-a.jpg" "stairs-before-wide"
convert_one "stairs-after-detail-a.jpg" "stairs-after-wide"
convert_one "stairs-before-detail-b.jpg" "stairs-before-detail"
convert_one "stairs-hallway-after.jpg" "stairs-after-detail"

echo "All images converted."
