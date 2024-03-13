import { useContext, useState, useEffect } from "react";
import { MenuContext } from "../../contexts/menuContext";
import { SearchContext } from "../../contexts/searchContext";
import axios from "axios";
import { CImageTitle, Description, ImgChannel, Search, TextSpan, Thumbnail, VideoContainer, VideoDescription, VideoTitle } from "./styles";

function Pesquisa() {
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
            description: string;
        };
    }

    const { isMenuOpen } = useContext(MenuContext);
    const { searchQ } = useContext(SearchContext);

    const [video, setVideo] = useState<Videos[]>([]);

    /* Api related */
    const apiKey = import.meta.env.VITE_API_KEY;
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${searchQ}&maxResults=15&key=${apiKey}`;

    useEffect(() => {
        load()
    }, [searchQ])

    async function load() {
        try {
            const resp = await axios.get(url);
            setVideo(resp.data.items);
        } catch (error) {
            console.log(error);
        }
    }

    /* Formatting Dates */
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
        <Search openmenucheck={isMenuOpen}>
            {video.map((video) => (
                <VideoContainer>
                    <Thumbnail src={video.snippet.thumbnails.maxres?.url || video.snippet.thumbnails.high?.url} alt="thumbnail" />
                    <Description>
                        <VideoTitle>{video.snippet.title}</VideoTitle>
                        <TextSpan>
                            Muitas visualizações •
                            há {calcDateDiff(new Date(video.snippet.publishedAt))}
                        </TextSpan>
                        <CImageTitle>
                            <ImgChannel>{video.snippet.channelTitle.charAt(0).toUpperCase()}</ImgChannel>
                            <span>{video.snippet.channelTitle}</span>
                        </CImageTitle>
                        <VideoDescription>
                            <TextSpan>{video.snippet.description}</TextSpan>
                        </VideoDescription>
                    </Description>
                </VideoContainer>
            ))}
        </Search>
    );
}

export default Pesquisa;
