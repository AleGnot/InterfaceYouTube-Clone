import { useContext, useEffect, useState } from "react";
import { MenuContext } from "../../contexts/menuContext";
import { CategoryContext, } from "../../contexts/categoryContext";
import axios from "axios";

/* Components */
import { Container, DivideLines, EndSec, Feed, ShortsContainer, ShortsIcon, Shortstxt, ShowMore } from "./style";
import CategoriesComponent from "./categories";
import ShortsComponent from "../shortsComponent";
import VideoComponent from "../../components/videoComponent";

/* Images */
import Short from "../../assets/Feed/ShortColorized.png";


/* Just my silly memes XD */
const neco = [
  {
    thumbnail: "https://i.ytimg.com/vi/ekxEmqktenk/hq720.jpg",
    channelName: "DrizzletGaming",
    vTitle: "1 Hour of Silence Occasionally Broken by Neco Arc",
    vizualisations: "1,4 mi",
    vDate: "2 anos"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/Jcv0EbHv6Qc/hq720_2.jpg",
    channelName: "Chimel",
    vTitle: "neco arc (funny cat lady)",
    vizualisations: "23 mil",
    vDate: "2 anos"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/Kf-TIMGhJeY/hq2.jpg",
    channelName: "Ice With Milk",
    vTitle: "BOA TARDE NEYMAR NECO ARC",
    vizualisations: "44 mil",
    vDate: "6 meses"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/15tAOaLi1UU/hq720_2.jpg",
    channelName: "SpiralWind",
    vTitle: "The Cat Speaks The TRUTH",
    vizualisations: "238 mil",
    vDate: "1 ano"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/YLZV1-nxV54/hq720_2.jpg",
    channelName: "レナン FBi",
    vTitle: "dublagem Neco Arc 😼👍",
    vizualisations: "16 mil",
    vDate: "1 ano"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/ATAAbRGfveU/hq720_2.jpg",
    channelName: "ImpyWorm",
    vTitle: "Head Empty (Neco-Arc Edition)",
    vizualisations: "17 mil",
    vDate: "1 ano"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/UwoQHutstDE/hq720_2.jpg",
    channelName: "Lilitzym...",
    vTitle: "Neco arc supremacy",
    vizualisations: "122 mil",
    vDate: "1 ano"
  },
]
const sliceNeco = neco.slice(0, 1);
const spanShort = neco.slice(1);
const times = [0, 0];
/* Quick note: every video of neco array is a real video on youtube if you'd wondered */

function FeedComponent() {
  interface Videos {
    id: string;
    snippet: {
      title: string;
      thumbnails: {
        high: {
          url: string
        }
        maxres: {
          url: string
        }
      }
      channelTitle: string;
      publishedAt: string;
    };
    statistics: {
      viewCount: string;
    };
  }

  const { isMenuOpen } = useContext(MenuContext);
  const { categoryId } = useContext(CategoryContext);

  const [bigSize, setBigSize] = useState(true);
  const [video, setVideo] = useState<Videos[]>([]);

  /* Api related */
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&hl=pt_BR&maxResults=47&regionCode=br&videoCategoryId=${categoryId}&key=${apiKey}`;

  useEffect(() => {
    load()
  }, [categoryId])

  async function load() {
    try {
      const resp = await axios.get(url);
      setVideo(resp.data.items);
    } catch (error) {
      console.log(error);
    }
  }

  /* Feed Splits */
  const topVideo = video.slice(0, 6);
  const bottomVideos = video.slice(6);

  /* Formatting Stuff */
  function formatViews(num: number): string {
    const suffixes: string[] = [" ", " mil", " mi de", " bi", " tri"];
    const numbString: string = num.toString();
    const numbLength: number = numbString.length;

    const suffixNum: number = Math.floor((numbLength - 1) / 3);
    let shortNumb: string = (num / Math.pow(1000, suffixNum)).toFixed(1);
    return shortNumb.replace(/\.0$/, '') + suffixes[suffixNum];
  }

  function calcDateDiff(date: Date): string {
    const dateNow = new Date();
    const diffInMiliSeconds = dateNow.getTime() - date.getTime();

    /* Years */
    const diffInYears = Math.floor(diffInMiliSeconds / (1000 * 60 * 60 * 24 * 365));
    if (diffInYears > 0) {
      return `${diffInYears} ${diffInYears === 1 ? 'ano' : 'anos'}`
    }

    /* Months */
    const diffInMonths = Math.floor(diffInMiliSeconds / (1000 * 60 * 60 * 24 * 30));
    if (diffInMonths > 0) {
      return `${diffInMonths} ${diffInMonths === 1 ? 'mês' : 'meses'}`
    }

    /* Weeks */
    const diffInWeek = Math.floor(diffInMiliSeconds / (1000 * 60 * 60 * 24 * 7));
    if (diffInWeek > 0) {
      return `${diffInWeek} ${diffInWeek === 1 ? 'semana' : 'semanas'}`
    }

    /* Days */
    const diffInDays = Math.floor(diffInMiliSeconds / (1000 * 60 * 60 * 24));
    if (diffInDays > 0) {
      return `${diffInDays} ${diffInDays === 1 ? 'dia' : 'dias'}`
    }

    /* Hours */
    const diffInHour = Math.floor(diffInMiliSeconds / (1000 * 60 * 60));
    if (diffInHour > 0) {
      return `${diffInHour} ${diffInHour === 1 ? 'hora' : 'horas'}`
    }

    /* Minutes */
    const diffInMin = Math.floor(diffInMiliSeconds / (1000 * 60));
    if (diffInMin > 0) {
      return `${diffInMin} ${diffInMin === 1 ? 'minuto' : 'minutos'}`
    }

    return 'Agora';
  }

  return (
    <div>
      <CategoriesComponent />

      <Feed openmenucheck={isMenuOpen}>
        <Container>
          {topVideo.map((video, index) => (
            <VideoComponent
              key={index}
              thumb={video.snippet.thumbnails.maxres?.url || video.snippet.thumbnails.high?.url}
              cImg={video.snippet.channelTitle}
              title={video.snippet.title}
              cName={video.snippet.channelTitle}
              views={formatViews(Number(video.statistics.viewCount))}
              date={calcDateDiff(new Date(video.snippet.publishedAt))}
            />
          ))
          }

          <ShortsContainer checkopen={bigSize}>
            <div style={{ width: '100%' }}>
              <ShortsIcon alt='' src={Short} />
              <Shortstxt> Shorts</Shortstxt>
            </div>

            {times.map(() => (
              spanShort.map((video, index) => (
                <ShortsComponent
                  key={index}
                  thumb={video.thumbnail}
                  title={video.vTitle}
                  views={video.vizualisations}
                />
              ))
            ))}
          </ShortsContainer>

          <EndSec>
            <DivideLines />

            <ShowMore onClick={() => { setBigSize(!bigSize) }}>
              {bigSize ?
                <span> Mostrar mais ⮟ </span>
                :
                <span> Mostrar menos ⮝ </span>
              }
            </ShowMore>

            <DivideLines />
          </EndSec>

          {bottomVideos.map((video, index) => (
            <VideoComponent
              key={index}
              thumb={video.snippet.thumbnails.maxres?.url || video.snippet.thumbnails.high?.url}
              cImg={video.snippet.channelTitle}
              title={video.snippet.title}
              cName={video.snippet.channelTitle}
              views={formatViews(Number(video.statistics.viewCount))}
              date={calcDateDiff(new Date(video.snippet.publishedAt))}
            />
          ))}

          {sliceNeco.map((video) => (
            <VideoComponent
              thumb={video.thumbnail}
              cImg={video.channelName}
              title={video.vTitle}
              cName={video.channelName}
              views={video.vizualisations}
              date={video.vDate}
            />
          ))}
        </Container>
      </Feed>
    </div>
  );
}

export default FeedComponent;
