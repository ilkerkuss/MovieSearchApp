import Image from "next/image";
import { Card } from "./components/Card";
import SearchIcon from "../public/search-icon.png";
import { url } from "inspector";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full bg-[#d3f0f4] px-32">
      <div className="search-container flex flex-row justify-start items-center mx-12 h-[80px]">
        <div className="flex items-center">
          <Image
            src={SearchIcon}
            alt="Search Icon"
            width={40}
            height={40}
          ></Image>
          <span className="px-3 font-semibold">Movie</span>
        </div>
        <div className="input-container px-5">
          <input
            style={{
              background:
                "url(https://static.thenounproject.com/png/101791-200.png)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left",
              backgroundSize: 20,
              paddingLeft: "25px",
              backgroundColor: "#ffffff",
            }}
            className="w-[341px] h-[46px] ml-4 mr-2 rounded-lg"
            placeholder="Search for movies and more"
          ></input>
        </div>
        <button className="bg-[#111155] rounded-md text-white px-4 w-[93px] h-[46px]">
          Search
        </button>
      </div>
      <div className="header-container flex h-1/4">
        <div className="flex w-1/2 h-[180px] px-12 my-10">
          <span className="font-bold leading-[60px] text-5xl text-[#111155]">
            Most complete movie information search engine
          </span>
        </div>
        <div className="flex flex-col w-1/2 px-12 m-10">
          <span className="text-base leading-5 text-[#64898e] mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            pulvinar erat in arcu tempor bibendum. Donec molestie quam ligula,
            et blandit diam scelerisque at. Cras quis auctor dui.
          </span>
          <span className="text-base leading-5 text-[#64898e] mt-3">
            Phasellus aliquet dictum nulla ac scelerisque. Quisque convallis
            orci ac convallis venenatis. Nullam volutpat et nisi nec pulvinar.
            Pellentesque nulla tortor, auctor at accumsan ac, blandit ornare
            est. Aliquam eget faucibus tellus.
          </span>
        </div>
      </div>

      <div className="card-container flex flex-wrap items-center justify-between self-center mx-12 my-20 gap-5">
        <Card
          imgUrl="https://m.media-amazon.com/images/M/MV5BMzBmMzZlOTYtZTNlMC00ZWM4LTg2MGItMjE3MmViNjQ4NTk3XkEyXkFqcGdeQXVyMTM1MDExOTE2._V1_FMjpg_UX450_.jpg"
          title="GLASS ONION: KNIVES OUT asdas"
          releaseYear={2022}
          releaseLocation="USA"
          score={7}
          genre="Crime,Commedy,Mystery"
        ></Card>
        <Card
          imgUrl="https://m.media-amazon.com/images/M/MV5BMWNmOWYzMmUtMTUxMi00MGNlLWJiNGMtOTc5MWJhZjk1N2E4XkEyXkFqcGdeQXVyMTYwMDIyNzk1._V1_FMjpg_UY3000_.jpg"
          title="NOPE"
          releaseYear={2022}
          releaseLocation="USA"
          score={6}
          genre="Thriller,Mystery,Science-Fiction"
        ></Card>
        <Card
          imgUrl="https://m.media-amazon.com/images/M/MV5BMWNmOWYzMmUtMTUxMi00MGNlLWJiNGMtOTc5MWJhZjk1N2E4XkEyXkFqcGdeQXVyMTYwMDIyNzk1._V1_FMjpg_UY3000_.jpg"
          title="NOPE"
          releaseYear={2022}
          releaseLocation="USA"
          score={6}
          genre="Thriller,Mystery,Science-Fiction"
        ></Card>
        <Card
          imgUrl="https://m.media-amazon.com/images/M/MV5BMWNmOWYzMmUtMTUxMi00MGNlLWJiNGMtOTc5MWJhZjk1N2E4XkEyXkFqcGdeQXVyMTYwMDIyNzk1._V1_FMjpg_UY3000_.jpg"
          title="NOPE"
          releaseYear={2022}
          releaseLocation="USA"
          score={6}
          genre="Thriller,Mystery,Science-Fiction"
        ></Card>
        <Card
          imgUrl="https://m.media-amazon.com/images/M/MV5BMWNmOWYzMmUtMTUxMi00MGNlLWJiNGMtOTc5MWJhZjk1N2E4XkEyXkFqcGdeQXVyMTYwMDIyNzk1._V1_FMjpg_UY3000_.jpg"
          title="NOPE"
          releaseYear={2022}
          releaseLocation="USA"
          score={6}
          genre="Thriller,Mystery,Science-Fiction"
        ></Card>
      </div>
    </div>
  );
}
