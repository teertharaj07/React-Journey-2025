*****15: React JS Projects: How to Deal with Errors and Warnings - 3 Best Practices🔥****

in the SeriesCard.jsx in file getting error:-
'data.description' is missing in props validationeslintreact/prop-types

=-------file code----------
export const SeriesCard = ({data}) => {
  // console.log(props);
  // const {data}=props;
  // const {id,img_url,name,rating,description,cast,genre,watch_url}=props.data;
  const { id, img_url, name, rating, description, cast, genre, watch_url } = data;
  // getting error

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

=================solution-===============
01:-write this line before geeting this line this is a comment
  // eslint-disable-next-line react/prop-types

02:-go to the eslint.config.js and search rules object and put this line 
  "react/prop-types": "off",

like this
  "rules": {
  "react/prop-types": "off"
}