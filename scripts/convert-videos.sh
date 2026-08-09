#!/bin/bash
set -e
export PATH="/c/Users/vinir/AppData/Local/Microsoft/WinGet/Packages/Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe/ffmpeg-9.0-full_build/bin:$PATH"
cd "/c/Users/vinir/dev/projetos/inovaflooring"

mkdir -p public/media/video

# name, source, start, duration, target_width
convert_clip () {
  slug="$1"; src="$2"; start="$3"; dur="$4"; w="$5"
  ffmpeg -y -ss "$start" -i "img/$src" -t "$dur" \
    -vf "scale=${w}:-2,fps=30" -an -c:v libx264 -preset slow -crf 23 -pix_fmt yuv420p \
    -movflags +faststart "public/media/video/${slug}.mp4" -loglevel error
  ffmpeg -y -i "public/media/video/${slug}.mp4" -vf "select=eq(n\,5)" -frames:v 1 -q:v 4 \
    "public/media/img/${slug}-poster.jpg" -loglevel error
  echo "done: $slug"
}

convert_clip "hero-reveal"      "IMG_1342.MOV" 2   10 800
convert_clip "dustfree-sanding" "IMG_0123.MOV" 12  12 800
convert_clip "drum-sanding"     "IMG_5555.MOV" 2   12 800
convert_clip "room-pan-01"      "IMG_5166.MOV" 3   10 640
convert_clip "room-pan-02"      "IMG_5167.MOV" 1   12 640
convert_clip "bedroom-nook"     "IMG_5504.MOV" 5   10 640
convert_clip "amber-room"       "IMG_5575.MOV" 0.5 10 640

echo "All videos converted."
