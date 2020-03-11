import arrow from '../../images/arrow.png';
import blackList from '../../images/black-list.jpg';
import got from '../../images/got.jpg';
import prisonBreak from '../../images/prison-breack.jpg';
import vikings from '../../images/vikings.jpg';
import witcher from '../../images/witcher.jfif';

export default function getGallery() {
  return [
    { id: "arrow", image: arrow, title: "Arrow" },
    { id: "blackList", image: blackList, title: "The Black List" },
    { id: "got", image: got, title: "Game Of Thrones" },
    { id: "prisonBreak", image: prisonBreak, title: "Prison Break" },
    { id: "vikings", image: vikings, title: "The Vikings" },
    { id: "witcher", image: witcher, title: "The Witcher" },
  ]
}