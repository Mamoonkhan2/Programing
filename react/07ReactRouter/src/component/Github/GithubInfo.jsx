import { useLoaderData } from 'react-router-dom'
function GithubInfo() {
    const loader = useLoaderData();
    const data = loader;
    return (
        <>
        <div className='flex align-middle w-full bg-amber-100  p-4 m-10 text-2xl text-shadow-black h-80'>
            <div className='order-2 w-90 h-80 flex flex-wrap flex-col justify-center space-y-6'> 
                <h1 className='text-center text-zinc-800'>id: {data.id}</h1>
                <h1 className='text-center'>Name: {data.login}</h1>
                <h1 className='text-center'>Followers: {data.followers}</h1>
            </div>
            <div className='order-1 m-5 w-50 h-50 bg-emerald-300'>
                <img src={data.avatar_url} alt="logo" />
            </div>
        </div>
        </>
  )
}

export default GithubInfo
export async function Githubreturn() {
    const response = await fetch('https://api.github.com/users/Mamoonkhan2')
    const data = await response.json();
    return data;
}