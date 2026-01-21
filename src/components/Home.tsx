type params = {
    id:number;
    name:string;
}
const Home = (props:params) =>{
    return (
        <>
        <h1>Id:{props.id}</h1>
        <h2>Name:{props.name}</h2>
        </>
    )
}
export default Home;