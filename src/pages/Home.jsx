import { useSelector } from "react-redux"


const Home = () => {
  const { name } = useSelector(state => state.user.user)
  
  return (
    <div>
      <h1 className="text-center my-5"> Welcome,{name} to our auth app</h1>
    </div>
  )
}

export default Home