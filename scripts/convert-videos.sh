#!/bin/bash
set -e
export PATH="/c/Users/vinir/AppData/Local/Microsoft/WinGet/Packages/Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe/ffmpeg-9.0-full_build/bin:$PATH"
cd "/c/Users/vinir/dev/projetos/inovaflooring"

mkdir -p public/media/video

# name, source, start, duration, target_width
convert_clip () {
  slug="$1"; src="$2"; start="$3"; dur="$4"; w="$5"
  ffmpeg -y -ss "$start" -i "img/$src" -t "$dur" \
    -vf "scale=${w}:-2,fps=30" -c:v libx264 -preset slow -crf 23 -pix_fmt yuv420p \
    -c:a aac -b:a 128k -ac 2 \
    -movflags +faststart "public/media/video/${slug}.mp4" -loglevel error
  ffmpeg -y -i "public/media/video/${slug}.mp4" -vf "select=eq(n\,5)" -frames:v 1 -q:v 4 \
    "public/media/img/${slug}-poster.jpg" -loglevel error
  echo "done: $slug"
}

convert_clip "dustfree-sanding"    "dustfree-sanding-a.mp4"     1   10 800
convert_clip "drum-sanding"        "drum-sanding-a.mp4"         5   12 800
convert_clip "room-pan-01"         "room-pan-empty.mp4"         0   6  640
convert_clip "room-pan-02"         "room-pan-beachview.mp4"     3   10 640
convert_clip "bedroom-nook"        "bedroom-fan.mp4"            3   10 640
convert_clip "living-fireplace-pan" "living-fireplace-pan-b.mp4" 3   10 640

echo "All videos converted."
