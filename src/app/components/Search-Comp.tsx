import { CiSearch } from "react-icons/ci";

interface search{
    title:string,
    type:"@"|"#"
}

export default function SearchComp(props:search){

    return(
        <div className="h-fit w-full">
        <div className="text-2xl">Enter {props.title}</div>
        <form action="">
          <div className="flex items-center gap-5 border-2 border-white hover:border-borderpurple rounded-xl px-4 mt-5 search-parent">
            <span>{props.type}</span>
            <input
              type="text"
              placeholder={`Enter ${props.title}`}
              className="w-full bg-transparent h-14 focus:outline-none placeholder:text-lg"
            />
            <button className="text-2xl">
              <CiSearch />
            </button>
          </div>
        </form>
      </div>
    )
}