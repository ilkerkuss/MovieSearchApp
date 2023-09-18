export const HeaderContainer = () => {
  return (
    <div className="header-container flex h-1/4">
      <div className="flex w-1/2 h-[180px] px-12 my-10">
        <span className="font-bold leading-[60px] text-5xl text-[#111155]">
          Most complete movie information search engine
        </span>
      </div>
      <div className="flex flex-col w-1/2 px-12 m-10">
        <span className="text-base leading-5 text-[#64898e] mb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar
          erat in arcu tempor bibendum. Donec molestie quam ligula, et blandit
          diam scelerisque at. Cras quis auctor dui.
        </span>
        <span className="text-base leading-5 text-[#64898e] mt-3">
          Phasellus aliquet dictum nulla ac scelerisque. Quisque convallis orci
          ac convallis venenatis. Nullam volutpat et nisi nec pulvinar.
          Pellentesque nulla tortor, auctor at accumsan ac, blandit ornare est.
          Aliquam eget faucibus tellus.
        </span>
      </div>
    </div>
  );
};
