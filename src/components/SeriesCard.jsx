export const SeriesCard = ({data}) => {
  // console.log(props);
  // const {data}=props;
  // const {id,img_url,name,rating,description,cast,genre,watch_url}=props.data;
  // eslint-disable-next-line react/prop-types
  const { id, img_url, name, rating, description, cast, genre, watch_url } = data;

  return (
    <li>
      <div>
        <img width="50%" height="50%" src={img_url} alt={name} />
        <h2>Name:{name}</h2>
        <h3>Rating:{rating}</h3>
        <p>summary:{description}</p>

        <p>Genre:{genre}</p>
        <p>Cast:{cast}</p>
        <a href={watch_url} target="_blank">
          <button>watch now</button>
        </a>
      </div>
    </li>
  );
};
