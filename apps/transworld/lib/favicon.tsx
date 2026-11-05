import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { ImageResponse } from 'next/og';

/**
 * Favicon drawn from the group logo (public/logo-v1.png, 894 × 279).
 * The logo is wide, so the icon shows its left square (the mark) on white.
 * If the mark sits elsewhere in the file, change CROP_LEFT (0 = far left).
 */
const LOGO = { width: 894, height: 279 };
const CROP_LEFT = 0;

export async function renderIcon(size: number) {
  const file = await readFile(path.join(process.cwd(), 'public', 'logo-v1.png'));
  const src = `data:image/png;base64,${file.toString('base64')}`;
  const scale = size / LOGO.height;
  return new ImageResponse(
    (
      <div
        style={{
          width: size,
          height: size,
          display: 'flex',
          overflow: 'hidden',
          background: '#ffffff',
          borderRadius: size > 64 ? size * 0.18 : 0,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt=""
          width={Math.round(LOGO.width * scale)}
          height={size}
          style={{ marginLeft: -Math.round(CROP_LEFT * scale), flexShrink: 0 }}
        />
      </div>
    ),
    { width: size, height: size },
  );
}
