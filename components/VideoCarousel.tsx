import { JSONSchema7 } from "json-schema";
import { signal } from "@preact/signals";

export const schema: JSONSchema7 = {
  title: "Carousel de Vídeos",
  "type": "object",
  required: ["video1"],
  properties: {
    video1: {
      "type": "object",
      properties: {
        mobile: {
          "type": "string",
          title: "Vídeo Mobile",
        },
        desktop: {
          "type": "string",
          title: "Vídeo Desktop",
        },
        alt: {
          type: "string",
          title: "Texto alternativo",
        },
        link: {
          "type": "string",
          title: "Link",
        },
      },
    },
    video2: {
      "type": "object",
      properties: {
        mobile: {
          "type": "string",
          title: "Vídeo Mobile",
        },
        desktop: {
          "type": "string",
          title: "Vídeo Desktop",
        },
        alt: {
          type: "string",
          title: "Texto alternativo",
        },
        link: {
          "type": "string",
          title: "Link",
        },
      },
    },
    video3: {
      "type": "object",
      properties: {
        mobile: {
          "type": "string",
          title: "Vídeo Mobile",
        },
        desktop: {
          "type": "string",
          title: "Vídeo Desktop",
        },
        alt: {
          type: "string",
          title: "Texto alternativo",
        },
        link: {
          "type": "string",
          title: "Link",
        },
      },
    },
  },
};

interface VideoProps {
  mobile: string;
  desktop: string;
  alt?: string;
  link: string;
}

function VideoLink({ desktop, mobile, alt, link }: VideoProps) {
  return (
    <a href={link} class="h-fit">
      <div class="min-h-[465px]">
        <video
          autoPlay
          loop
          muted
          height="465"
          width="310"
          class="object-cover min-h-[465px] w-screen md:hidden"
          alt={alt}
        >
          <source
            src={mobile}
            type="video/mp4"
          />
        </video>
        <video
          autoPlay
          loop
          muted
          height="465"
          width="310"
          class="object-cover min-h-[465px] w-screen hidden md:block"
          alt={alt}
        >
          <source
            src={desktop}
            type="video/mp4"
          />
        </video>
      </div>
    </a>
  );
}

interface Props {
  video1: VideoProps;
  video2: VideoProps;
  video3: VideoProps;
}

const videoDefault = {
  mobile: "/assets/farm-mob.mp4",
  desktop: "/assets/farm-desk.mp4",
  link: "/farm",
  alt: "Até 70% off em FARM",
};

const selectedCarousel = signal(0)

export default function VideoCarousel(
  { video1 = videoDefault, video2, video3 }: Props,
) {
  let width = 0;
  if (video1) width += 100;
  if (video2) width += 100;
  if (video3) width += 100;

  return (
    <div class="relative w-full overflow-hidden">
      <div class={`flex w-[${width}%] translate-x-[${-(selectedCarousel.value * 100)}%]`}>
        <VideoLink {...video1} />
        {video2 && <VideoLink {...video2} />}
        {video3 && <VideoLink {...video3} />}
      </div>

      <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button
          type="button"
          class="w-3 h-3 rounded-full bg-white dark:bg-gray-800"
          aria-current="true"
          aria-label={video1.alt}
          data-carousel-slide-to="0"
        >
        </button>

        {video2 && (
          <a
            type="button"
            class="w-3 h-3 rounded-full bg-white dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-800"
            aria-current="false"
            aria-label={video2.alt}
            data-carousel-slide-to="1"
            href="vd-2"
          >
          </a>
        )}
        {video3 && (
          <button
            type="button"
            class="w-3 h-3 rounded-full bg-white dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-800"
            aria-current="false"
            aria-label={video3.alt}
            data-carousel-slide-to="2"
          >
          </button>
        )}
      </div>
    </div>
  );
}
