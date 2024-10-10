import SearchComp from "@/app/components/Search-Comp";




export default function InstagramProfile() {
  const placeholder = "Enter Instagram Profile";
  return (
    <div className="max-w-[1000px] w-full mx-auto text-left h-screen flex items-center">
        <SearchComp title="Instagram Profile" type="@" />
    </div>
  );
}