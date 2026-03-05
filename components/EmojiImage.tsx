/**
 * EmojiImage — renders an iOS emoji PNG from /public/images/emojis/{name}.png
 *
 * Dimensions: supply PNG files at 160×160px (Apple's native emoji size).
 * They'll be displayed at whatever `size` you pass (default 24px).
 *
 * File naming — drop files in /public/images/emojis/ using these slugs:
 *
 *   palette.png            🎨
 *   sparkles.png           ✨
 *   dress.png              👗
 *   home.png               🏠
 *   link.png               🔗
 *   floppy-disk.png        💾
 *   card-index-dividers.png 🗂️
 *   lightning.png          ⚡
 *   party-popper.png       🎉
 *   clipboard.png          📋
 *   heart.png              ❤️
 *   magnifying-glass.png   🔍
 *   card-file-box.png      🗃️
 *   email.png              📧
 *   briefcase.png          💼
 *   bird.png               🐦
 *   basketball.png         🏀
 *   tshirt.png             👕
 *   high-heel.png          👠
 *   handbag.png            👜
 *   one-piece-swimsuit.png 🩱
 *   speech-bubble.png      💬
 *   joker.png              🃏
 *   person.png             👤
 *   office.png             🏢
 *   bar-chart.png          📊
 *   lightbulb.png          💡
 *   refresh.png            🔄
 *   locked.png             🔐
 *   triangular-ruler.png   📐
 *   mobile-phone.png       📱
 */

interface EmojiImageProps {
  /** Slug matching the PNG filename in /public/images/emojis/ */
  name: string;
  /** Display size in px (width & height). Source files should be 160×160px. */
  size?: number;
  alt?: string;
  className?: string;
}

export default function EmojiImage({ name, size = 24, alt = "", className }: EmojiImageProps) {
  return (
    <img
      src={`/images/emojis/${name}.png`}
      alt={alt}
      width={size}
      height={size}
      className={className}
      style={{ display: "inline-block", objectFit: "contain", flexShrink: 0 }}
    />
  );
}
