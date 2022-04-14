import propTypes from "prop-types";

function Football({name,picture}){
  return (
  <div>
    <h2>I like {name}</h2>
    <img src={picture} alt={name} />
  </div>
  );
}

const footballplayer =[
  {
    id:1,
    name: 'Diego Godin',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.YHlAOPm7LElTS-Luov4OwgHaEK%26pid%3DApi&f=1'
  },
  {
    id: 2,
    name: 'Koke',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.tKe4tBk88YrJWaEM4ixbEAHaEK%26pid%3DApi&f=1'
  },
  {
    id: 3,
    name: 'Diego Forlan',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.bYagDrmApkyFA0hDELwj5wHaFj%26pid%3DApi&f=1',

  },
  {
    id: 4,
    name: 'Jan Oblak',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.csc5JWdrnD3_kY0N-ejNqwHaD4%26pid%3DApi&f=1'
  },
  {
    id:5,
    name: 'Fernando Torres',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.K97PhU2vAnncTQQzg8E2eQHaE8%26pid%3DApi&f=1'
  }
];
function App() {
  return <div>
    {footballplayer.map(player=> (<Football key={player.id} name={player.name} picture={player.image}/>))}
    </div>;
}

Football.propTypes = {
  name: propTypes.string.isRequired,
  picture: propTypes.string.isRequired,
};

export default App;
