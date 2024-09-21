

export default function Button({title, loading}:{title:string,loading?:boolean |number | string}){
    return (
       <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
       {loading?"Loading...": (<span>{title}</span>)}
       </button>
    )
}

